// ===== Fan Chart (Outcomes Section) =====
(function () {
    const canvas = document.getElementById('fanChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const N        = 100;
    const STEPS    = 60;
    const DURATION = 2200;
    const ML = 14, MR = 48, MT = 16, MB = 44;

    let lines = [], startTime = null, rafId = null, hasAnimated = false;

    function chartArea() {
        const cw = canvas.width, ch = canvas.height;
        return { w: cw - ML - MR, h: ch - MT - MB, ox: ML, oy: MT + (ch - MT - MB) / 2 };
    }

    function buildLines() {
        const { w, h, ox, oy } = chartArea();
        lines = [];
        for (let i = 0; i < N; i++) {
            const level = (i / (N - 1)) * 2 - 1;
            const pct   = Math.round((i / (N - 1)) * 100);
            const pts   = [{ x: ox, y: oy }];
            let noise = 0, y = oy;

            for (let s = 1; s <= STEPS; s++) {
                const t      = s / STEPS;
                const spread = h * 0.43 * Math.pow(t, 0.60);
                noise += (Math.random() - 0.5) * spread * 0.052;
                noise *= 0.89;
                y = oy + level * spread + noise;
                pts.push({ x: ox + w * t, y });
            }

            let color, opacity, lw;
            const al = Math.abs(level);
            if      (al < 0.04) { color = '#FFFFFF';  opacity = 0.95; lw = 2.2; }
            else if (al < 0.14) { color = '#B299DB';  opacity = 0.60; lw = 1.2; }
            else if (al < 0.30) { color = '#52308B';  opacity = 0.42; lw = 0.85; }
            else if (al < 0.52) { color = '#437F86';  opacity = 0.30; lw = 0.65; }
            else if (al < 0.74) { color = '#75CAAE';  opacity = 0.18; lw = 0.50; }
            else                { color = '#B299DB';  opacity = 0.09; lw = 0.38; }

            if (pct === 10 || pct === 90) { color = '#F6C958'; opacity = 0.80; lw = 1.8; }
            if (pct === 25 || pct === 75) { color = '#75CAAE'; opacity = 0.62; lw = 1.3; }

            lines.push({ pts, color, opacity, lw, level, pct,
                         delay: (Math.abs(level)) * 0.40 });
        }
        // Draw outer (faint) lines first so P50 renders on top
        lines.sort((a, b) => Math.abs(b.level) - Math.abs(a.level));
    }

    function drawAxes() {
        const { w, h, ox, oy } = chartArea();
        const bottom = MT + h, right = ox + w;

        ctx.globalAlpha  = 1;
        ctx.beginPath();
        ctx.moveTo(ox, bottom); ctx.lineTo(right, bottom);
        ctx.strokeStyle = 'rgba(255,255,255,0.18)';
        ctx.lineWidth   = 1;
        ctx.stroke();

        // Horizontal centre guide
        ctx.beginPath();
        ctx.setLineDash([4, 6]);
        ctx.moveTo(ox, oy); ctx.lineTo(right, oy);
        ctx.strokeStyle = 'rgba(255,255,255,0.10)';
        ctx.lineWidth   = 1;
        ctx.stroke();
        ctx.setLineDash([]);

        // Year labels
        ctx.fillStyle  = 'rgba(255,255,255,0.40)';
        ctx.font       = '11px Inter, sans-serif';
        ctx.textAlign  = 'center';
        const years = [2025, 2027, 2029, 2031, 2033];
        years.forEach((yr, i) => {
            ctx.fillText(yr, ox + w * i / (years.length - 1), bottom + 16);
        });

        // Y-axis label
        ctx.save();
        ctx.translate(4, MT + h / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.textAlign  = 'center';
        ctx.fillStyle  = 'rgba(255,255,255,0.28)';
        ctx.font       = '10px Inter, sans-serif';
        ctx.fillText('$/MWh', 0, 0);
        ctx.restore();
    }

    function drawPercentileLabels() {
        const { w, ox } = chartArea();
        const right = ox + w;
        ctx.font      = '700 11px Inter, sans-serif';
        ctx.textAlign = 'left';
        ctx.globalAlpha = 1;
        [10, 50, 90].forEach(pct => {
            const line = lines.find(l => l.pct === pct);
            if (!line) return;
            const last = line.pts[line.pts.length - 1];
            ctx.fillStyle = pct === 50  ? 'rgba(255,255,255,0.90)' :
                            pct === 10  ? 'rgba(246,201,88,0.85)'  :
                                          'rgba(246,201,88,0.85)';
            ctx.fillText(`P${pct}`, right + 6, last.y + 4);
        });
    }

    function drawFrame(ts) {
        if (!startTime) startTime = ts;
        const overall = Math.min((ts - startTime) / DURATION, 1);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawAxes();

        for (const line of lines) {
            const t   = Math.max(0, Math.min(1, (overall - line.delay) / (1 - line.delay)));
            if (t <= 0) continue;
            const end = Math.max(2, Math.floor(line.pts.length * t));

            ctx.beginPath();
            ctx.moveTo(line.pts[0].x, line.pts[0].y);
            for (let i = 1; i < end; i++) ctx.lineTo(line.pts[i].x, line.pts[i].y);
            ctx.strokeStyle = line.color;
            ctx.globalAlpha = line.opacity;
            ctx.lineWidth   = line.lw;
            ctx.stroke();
        }

        if (overall >= 1) drawPercentileLabels();
        ctx.globalAlpha = 1;
        if (overall < 1) rafId = requestAnimationFrame(drawFrame);
    }

    function resize() {
        canvas.width  = canvas.offsetWidth  * (window.devicePixelRatio || 1);
        canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1);
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
        canvas.style.width  = canvas.offsetWidth  + 'px';
        canvas.style.height = canvas.offsetHeight + 'px';
        buildLines();
        if (hasAnimated) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawAxes();
            for (const l of lines) {
                ctx.beginPath();
                ctx.moveTo(l.pts[0].x, l.pts[0].y);
                for (let i = 1; i < l.pts.length; i++) ctx.lineTo(l.pts[i].x, l.pts[i].y);
                ctx.strokeStyle = l.color; ctx.globalAlpha = l.opacity; ctx.lineWidth = l.lw;
                ctx.stroke();
            }
            drawPercentileLabels();
            ctx.globalAlpha = 1;
        }
    }

    // Trigger on scroll into view
    const io = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !hasAnimated) {
            hasAnimated = true;
            startTime   = null;
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(drawFrame);
            io.disconnect();
        }
    }, { threshold: 0.25 });
    io.observe(canvas);

    window.addEventListener('resize', () => { resize(); });
    setTimeout(resize, 0);
})();
