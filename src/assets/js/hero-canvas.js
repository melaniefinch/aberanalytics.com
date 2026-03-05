// ===== Scenario Fan Animation =====
(function() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const N_LINES = 180;
    const DRAW_DURATION = 2800;   // ms for full fan to draw in
    const DRAW_WINDOW   = 0.72;   // fraction of total time each line takes to draw

    // Brand accent colours — a small fraction of lines use these
    const ACCENTS = [
        { color: '#75CAAE', opacity: 0.60, width: 1.5 }, // mint
        { color: '#F6C958', opacity: 0.55, width: 1.5 }, // gold
        { color: '#D55268', opacity: 0.45, width: 1.3 }, // coral
        { color: '#B299DB', opacity: 0.50, width: 1.2 }, // light purple
    ];

    let lines = [];
    let startTime = null;
    let rafId = null;

    function buildLine(ox, oy, availableWidth) {
        const steps = 55 + Math.floor(Math.random() * 20);
        const totalX = availableWidth * (0.55 + Math.random() * 0.42);
        const stepX  = totalX / steps;

        // Initial vertical kick within a ±50° cone
        const angle = (Math.random() - 0.5) * Math.PI * 0.56;
        let vy = Math.sin(angle) * stepX * 1.4;

        const points = [{ x: ox, y: oy }];
        let x = ox, y = oy;

        for (let i = 0; i < steps; i++) {
            x += stepX;
            vy += (Math.random() - 0.5) * stepX * 0.38;
            vy *= 0.91;                          // gentle damping
            vy += (oy - y) * 0.004;              // soft pull toward origin height
            y  += vy;
            points.push({ x, y });
        }
        return points;
    }

    function generateLines() {
        const w  = canvas.width;
        const h  = canvas.height;
        const ox = w * 0.20;
        const oy = h * 0.52;

        lines = [];
        for (let i = 0; i < N_LINES; i++) {
            const points = buildLine(ox, oy, w * 0.78);
            const delay  = (i / N_LINES);   // 0 → 1, staggered start

            let style;
            const r = Math.random();
            if      (r < 0.035) style = ACCENTS[0]; // mint
            else if (r < 0.065) style = ACCENTS[1]; // gold
            else if (r < 0.085) style = ACCENTS[2]; // coral
            else if (r < 0.125) style = ACCENTS[3]; // light purple
            else style = {
                color:   '#ffffff',
                opacity: 0.04 + Math.random() * 0.07,
                width:   0.4  + Math.random() * 0.35,
            };

            lines.push({ points, delay, ...style });
        }
    }

    function resize() {
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        generateLines();
    }

    function drawFrame(ts) {
        if (!startTime) startTime = ts;
        const elapsed  = ts - startTime;
        const overall  = Math.min(elapsed / DRAW_DURATION, 1);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Origin glow
        const ox   = canvas.width  * 0.20;
        const oy   = canvas.height * 0.52;
        const glow = Math.min(overall * 4, 1);
        const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, 50);
        grad.addColorStop(0, `rgba(178,153,219,${0.28 * glow})`);
        grad.addColorStop(1, 'rgba(178,153,219,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(ox, oy, 50, 0, Math.PI * 2);
        ctx.fill();

        // Origin dot
        ctx.beginPath();
        ctx.arc(ox, oy, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(178,153,219,${0.9 * glow})`;
        ctx.fill();

        // Lines
        for (const line of lines) {
            const lineStart = line.delay * (1 - DRAW_WINDOW);
            const t = Math.max(0, Math.min(1, (overall - lineStart) / DRAW_WINDOW));
            if (t <= 0) continue;

            const pts = line.points;
            const end = Math.max(2, Math.floor(pts.length * t));

            ctx.beginPath();
            ctx.moveTo(pts[0].x, pts[0].y);
            for (let i = 1; i < end; i++) ctx.lineTo(pts[i].x, pts[i].y);

            ctx.strokeStyle  = line.color;
            ctx.globalAlpha  = line.opacity;
            ctx.lineWidth    = line.width;
            ctx.stroke();
        }

        ctx.globalAlpha = 1;
        if (overall < 1) rafId = requestAnimationFrame(drawFrame);
    }

    function start() {
        if (rafId) cancelAnimationFrame(rafId);
        startTime = null;
        rafId = requestAnimationFrame(drawFrame);
    }

    window.addEventListener('resize', () => { resize(); start(); });
    resize();
    start();
})();
