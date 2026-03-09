/**
 * Mind the Gap — Interactive Load Duration Curve Charts
 * Plotly.js visualisations for the "Mind the gap" insight article.
 */
(function () {
  'use strict';

  /* ── Colour palette ── */
  var C = {
    coal:        '#44403C',
    midGas:      '#78716C',
    flexGas:     '#A8A29E',
    hydro:       '#3B82F6',
    pumpedHydro: '#60A5FA',
    batteries:   '#14B8A6',
    cer:         '#5EEAD4',
    wind:        '#4ADE80',
    dsp:         '#FDA4AF',
    demand:      '#1C1917',
    firm:        '#DC2626',
  };

  /* ── Chart data ── */
  var CHARTS = {

    /* ─── NSW FY 2025-26 ─── */
    'chart-nsw-2025': {
      stack: [
        { name: 'Black coal',    mw: 7474, color: C.coal,      light: true  },
        { name: 'Mid-merit gas', mw: 360,  color: C.midGas,    light: true  },
        { name: 'Flexible gas',  mw: 2369, color: C.flexGas,   light: false },
        { name: 'Hydro',         mw: 2285, color: C.hydro,     light: true  },
        { name: 'Batteries',     mw: 2057, color: C.batteries, light: true  },
        { name: 'DSP',           mw: 350,  color: C.dsp,       light: false },
      ],
      demand: [
        [0,14000],[0.5,13800],[1,13600],[2,13300],[3,13100],[5,12800],
        [7,12500],[10,12100],[13,11800],[15,11600],[20,11200],
        [25,10800],[30,10400],[35,10100],[40,9800],[45,9500],
        [50,9200],[55,8900],[60,8700],[65,8400],[70,8200],
        [75,7900],[80,7700],[85,7500],[90,7300],[95,7100],[100,6800]
      ],
      firm: 12489,
      total: 14929,
      note: 'Coal provides ~50% of effective capacity',
    },

    /* ─── NSW FY 2040-41 ─── */
    'chart-nsw-2040': {
      stack: [
        { name: 'Mid-merit gas',    mw: 360,  color: C.midGas,      light: true  },
        { name: 'Flexible gas',     mw: 3477, color: C.flexGas,     light: false },
        { name: 'Pumped hydro',     mw: 2200, color: C.pumpedHydro, light: true  },
        { name: 'Hydro',            mw: 2285, color: C.hydro,       light: true  },
        { name: 'Wind (firm adj.)', mw: 1353, color: C.wind,        light: false },
        { name: 'Batteries',        mw: 8057, color: C.batteries,   light: true  },
        { name: 'CER storage',      mw: 1129, color: C.cer,         light: false },
        { name: 'DSP',              mw: 651,  color: C.dsp,         light: false },
      ],
      demand: [
        [0,20000],[0.5,19000],[1,18000],[2,17000],[3,16500],[5,15500],
        [7,14700],[10,13700],[13,13000],[15,12700],[20,12000],
        [25,11500],[30,11000],[35,10600],[40,10200],[45,9900],
        [50,9600],[55,9300],[60,9100],[65,8800],[70,8600],
        [75,8300],[80,8100],[85,7900],[90,7700],[95,7500],[100,7200]
      ],
      firm: 8322,
      total: 19520,
      note: '69 GW nameplate \u2192 19.5 GW effective',
    },

    /* ─── SA FY 2025-26 ─── */
    'chart-sa-2025': {
      stack: [
        { name: 'Mid-merit gas', mw: 1178, color: C.midGas,    light: true  },
        { name: 'Flexible gas',  mw: 1430, color: C.flexGas,   light: false },
        { name: 'Batteries',     mw: 198,  color: C.batteries, light: true  },
        { name: 'DSP',           mw: 46,   color: C.dsp,       light: false },
      ],
      demand: [
        [0,3500],[0.5,3300],[1,3100],[2,2900],[3,2800],[5,2700],
        [7,2550],[10,2400],[13,2350],[15,2300],[20,2200],
        [25,2100],[30,2000],[35,1900],[40,1800],[45,1700],
        [50,1600],[55,1500],[60,1400],[65,1300],[70,1200],
        [75,1100],[80,1000],[85,850],[90,650],[95,400],[100,100]
      ],
      firm: 2608,
      total: 2876,
      note: 'Gas provides most firm capacity',
    },

    /* ─── SA FY 2040-41 ─── */
    'chart-sa-2040': {
      stack: [
        { name: 'Flexible gas',     mw: 1032, color: C.flexGas, light: false },
        { name: 'Wind (firm adj.)', mw: 570,  color: C.wind,    light: false },
        { name: 'Batteries',        mw: 1238, color: C.batteries, light: true },
        { name: 'CER storage',      mw: 313,  color: C.cer,     light: false },
        { name: 'DSP',              mw: 147,  color: C.dsp,     light: false },
      ],
      demand: [
        [0,4700],[0.5,4200],[1,3800],[2,3500],[3,3300],[5,3100],
        [7,2900],[10,2650],[13,2500],[15,2450],[20,2300],
        [25,2150],[30,2050],[35,1950],[40,1850],[45,1750],
        [50,1650],[55,1550],[60,1450],[65,1350],[70,1250],
        [75,1100],[80,1000],[85,850],[90,650],[95,400],[100,80]
      ],
      firm: 1032,
      total: 3301,
      note: 'Firm reserves depend on interstate flows',
    },
  };

  /* ── Format number with locale thousands separator ── */
  function fmt(n) { return n.toLocaleString(); }

  /* ── Render a single LDC chart ── */
  function render(id, cfg) {
    var el = document.getElementById(id);
    if (!el) return;

    var stack = cfg.stack;
    var peak  = Math.max.apply(null, cfg.demand.map(function (p) { return p[1]; }));
    var top   = stack.reduce(function (s, t) { return s + t.mw; }, 0);
    var yMax  = Math.max(peak, top) * 1.08;

    /* ── Shapes: capacity bands ── */
    var shapes = [];
    var cum = 0;
    stack.forEach(function (t) {
      shapes.push({
        type: 'rect', layer: 'below',
        x0: -2, x1: 102, y0: cum, y1: cum + t.mw,
        fillcolor: t.color,
        line: { width: 0.5, color: 'rgba(255,255,255,0.5)' },
      });
      cum += t.mw;
    });

    /* Firm dashed line */
    shapes.push({
      type: 'line',
      x0: -2, x1: 102, y0: cfg.firm, y1: cfg.firm,
      line: { color: C.firm, width: 1.5, dash: 'dot' },
    });

    /* ── Annotations ── */
    var ann = [];
    cum = 0;

    /* Band labels */
    stack.forEach(function (t) {
      var mid  = cum + t.mw / 2;
      var frac = t.mw / yMax;
      cum += t.mw;

      if (frac >= 0.07) {
        ann.push({
          x: 0.97, y: mid, xref: 'paper', yref: 'y',
          text: '<b>' + t.name + '</b>  ' + fmt(t.mw) + ' MW',
          showarrow: false, xanchor: 'end', yanchor: 'middle',
          font: {
            size: frac >= 0.15 ? 11 : 9.5,
            color: t.light ? 'rgba(255,255,255,0.92)' : 'rgba(55,65,81,0.85)',
          },
        });
      } else if (frac >= 0.035) {
        ann.push({
          x: 0.97, y: mid, xref: 'paper', yref: 'y',
          text: t.name + '  ' + fmt(t.mw),
          showarrow: false, xanchor: 'end', yanchor: 'middle',
          font: { size: 8, color: t.light ? 'rgba(255,255,255,0.8)' : 'rgba(55,65,81,0.7)' },
        });
      }
    });

    /* Demand label */
    ann.push({
      x: cfg.demand[1][0], y: cfg.demand[0][1],
      text: '<b>Demand</b>',
      showarrow: false,
      font: { size: 10.5, color: C.demand },
      xanchor: 'left', yanchor: 'bottom', yshift: 5, xshift: 3,
    });

    /* Traditional firm label */
    ann.push({
      x: 0.03, y: cfg.firm, xref: 'paper', yref: 'y',
      text: '<b>Traditional firm: ' + fmt(cfg.firm) + ' MW</b>',
      showarrow: false,
      font: { size: 8.5, color: C.firm },
      xanchor: 'left', yanchor: 'bottom', yshift: 3,
    });

    /* Total effective label */
    ann.push({
      x: 0.97, y: top, xref: 'paper', yref: 'y',
      text: '<b>Total effective: ' + fmt(cfg.total) + ' MW</b>',
      showarrow: false,
      font: { size: 9, color: '#6B7280' },
      xanchor: 'end', yanchor: 'bottom', yshift: 5,
    });

    /* Subtitle note */
    if (cfg.note) {
      ann.push({
        x: 0.5, y: 0, xref: 'paper', yref: 'paper',
        text: '<i>' + cfg.note + '</i>',
        showarrow: false,
        font: { size: 8.5, color: '#9CA3AF' },
        xanchor: 'center', yanchor: 'top', yshift: -42,
      });
    }

    /* ── Traces ── */
    var traces = [{
      x: cfg.demand.map(function (p) { return p[0]; }),
      y: cfg.demand.map(function (p) { return p[1]; }),
      mode: 'lines',
      line: { color: C.demand, width: 2.5, shape: 'spline', smoothing: 1.3 },
      hovertemplate: '%{y:,.0f} MW at %{x:.0f}% exceeded<extra>Demand</extra>',
      showlegend: false,
    }];

    /* ── Layout ── */
    var layout = {
      height: 380,
      margin: { l: 52, r: 10, t: 8, b: 52 },
      xaxis: {
        title: { text: 'Duration exceeded (%)', font: { size: 10, color: '#9CA3AF' }, standoff: 8 },
        tickvals: [0, 20, 40, 60, 80, 100],
        ticktext: ['0%', '20%', '40%', '60%', '80%', '100%'],
        tickfont: { size: 9, color: '#C0C0C0' },
        gridcolor: 'rgba(0,0,0,0.04)',
        zeroline: false, showline: false,
        range: [-1, 101], fixedrange: true,
      },
      yaxis: {
        title: { text: 'MW', font: { size: 10, color: '#9CA3AF' }, standoff: 4 },
        tickfont: { size: 9, color: '#C0C0C0' },
        gridcolor: 'rgba(0,0,0,0.04)',
        zeroline: false, showline: false,
        separatethousands: true,
        range: [0, yMax], fixedrange: true,
      },
      showlegend: false,
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: '#FAFAFA',
      font: { family: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif' },
      annotations: ann,
      shapes: shapes,
      hovermode: 'closest',
      dragmode: false,
    };

    Plotly.newPlot(id, traces, layout, {
      displayModeBar: false,
      responsive: true,
      scrollZoom: false,
    });
  }

  /* ── Initialise ── */
  function init() {
    Object.keys(CHARTS).forEach(function (id) {
      render(id, CHARTS[id]);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
