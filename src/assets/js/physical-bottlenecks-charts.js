/**
 * Physical Bottlenecks — Interactive Charts
 * Plotly.js visualisations for the "Hard ceiling" insight article.
 */
(function () {
  'use strict';

  var TEAL  = '#437F86';
  var PURPLE = '#52308B';
  var ORANGE = '#F97316';
  var GREEN  = '#166534';
  var CORAL  = '#D55268';

  /* ══════════════════════════════════════════════════
     Chart 1 — Snowy 2.0 TBM Gantt timeline
     ══════════════════════════════════════════════════ */
  function renderSnowy(id) {
    var el = document.getElementById(id);
    if (!el) return;

    /* TBM data: [name, start, end] (years as decimals) */
    var tbms = [
      ['Monica (TBM4 \u2013 recently added)', 2026.0, 2028.28],
      ['Florence (TBM3)',                      2026.0, 2028.24],
      ['Lady Eileen Hudson (TBM2)',            2026.0, 2026.05],
      ['Kirsten (TBM1)',                       2026.0, 2026.17],
    ];

    var names = tbms.map(function (t) { return t[0]; });
    var durations = tbms.map(function (t) { return t[2] - t[1]; });
    var bases = tbms.map(function (t) { return t[1]; });

    var barTrace = {
      y: names,
      x: durations,
      base: bases,
      type: 'bar',
      orientation: 'h',
      marker: { color: TEAL, line: { width: 0 } },
      hovertemplate: '%{y}<br>Est. completion: %{base:.1f}<extra></extra>',
      showlegend: false,
      width: 0.55,
    };

    /* Milestone vertical lines */
    var milestones = [
      { x: 2028.3,  color: GREEN,  dash: 'solid' },   /* tunnelling complete */
      { x: 2029.0,  color: ORANGE, dash: 'solid' },   /* bull case */
      { x: 2030.0,  color: GREEN,  dash: 'solid' },   /* bear case */
    ];

    var shapes = milestones.map(function (m) {
      return {
        type: 'line', layer: 'above',
        x0: m.x, x1: m.x, y0: -0.5, y1: 3.5,
        line: { color: m.color, width: 1.5, dash: m.dash },
      };
    });

    /* Annotations */
    var annotations = [];

    /* "Announced first power" callout */
    annotations.push({
      x: 2028, y: 1.05, xref: 'x', yref: 'paper',
      text: '<b>Announced<br>first power</b>',
      showarrow: true, arrowhead: 2, arrowcolor: ORANGE, arrowwidth: 2,
      ax: 0, ay: 40,
      font: { size: 12, color: '#fff' },
      bgcolor: ORANGE, borderpad: 8, bordercolor: ORANGE,
    });

    /* Milestone badges below chart */
    var badges = [
      { x: 2028.3,  text: 'Tunnelling<br>complete',          color: GREEN  },
      { x: 2029.0,  text: 'First power<br>(bull case)',       color: GREEN  },
      { x: 2030.0,  text: 'First power<br>(bear case)',       color: GREEN  },
    ];
    badges.forEach(function (b) {
      annotations.push({
        x: b.x, y: -0.22, xref: 'x', yref: 'paper',
        text: '<b>' + b.text + '</b>',
        showarrow: true, arrowhead: 2, arrowcolor: b.color, arrowwidth: 1.5,
        ax: 0, ay: 30,
        font: { size: 9.5, color: '#fff' },
        bgcolor: b.color, borderpad: 6, bordercolor: b.color,
      });
    });

    var layout = {
      height: 380,
      margin: { l: 10, r: 20, t: 50, b: 90 },
      xaxis: {
        range: [2025.8, 2030.4],
        tickvals: [2026, 2027, 2028, 2029, 2030],
        ticktext: ['2026', '2027', '2028', '2029', '2030'],
        tickfont: { size: 12, color: '#374151' },
        gridcolor: 'rgba(0,0,0,0.08)',
        zeroline: false, showline: false,
        fixedrange: true,
      },
      yaxis: {
        tickfont: { size: 11, color: '#374151' },
        gridcolor: 'rgba(0,0,0,0.04)',
        zeroline: false, showline: false,
        automargin: true,
        fixedrange: true,
      },
      shapes: shapes,
      annotations: annotations,
      showlegend: false,
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: '#FAFAFA',
      font: { family: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif' },
      bargap: 0.3,
      dragmode: false,
    };

    Plotly.newPlot(id, [barTrace], layout, {
      displayModeBar: false, responsive: true, scrollZoom: false,
    });
  }

  /* ══════════════════════════════════════════════════
     Chart 2 — Transmission delay ranges
     ══════════════════════════════════════════════════ */
  function renderTransmission(id) {
    var el = document.getElementById(id);
    if (!el) return;

    /* Summary data from analysis */
    var categories = ['Non-interconnector<br>transmission', 'Interconnectors'];
    var avgs = [1.43, 2.22];
    var mins = [0, 0.5];
    var maxs = [4, 5];

    /* Individual project delays */
    var icProjects = [
      { name: 'Directlink',      delay: 0.5 },
      { name: 'Murraylink',      delay: 0.8 },
      { name: 'Basslink',        delay: 2 },
      { name: 'VNI West',        delay: 2 },
      { name: 'EnergyConnect',   delay: 3 },
      { name: 'Marinus Link S1', delay: 5 },
    ];
    var txProjects = [
      { name: 'CopperString',    delay: 0 },
      { name: 'Eyre Peninsula',  delay: 0.25 },
      { name: 'PSF',             delay: 0.5 },
      { name: 'QNI Upgrade',     delay: 1 },
      { name: 'HumeLink',       delay: 2 },
      { name: 'CWO REZ',        delay: 3 },
      { name: 'WRL',            delay: 4 },
    ];

    /* Range bars as shapes */
    var shapes = [
      {
        type: 'rect', layer: 'below',
        x0: mins[0], x1: maxs[0], y0: -0.35, y1: 0.35,
        fillcolor: 'rgba(82, 48, 139, 0.1)',
        line: { width: 1, color: 'rgba(82, 48, 139, 0.25)' },
      },
      {
        type: 'rect', layer: 'below',
        x0: mins[1], x1: maxs[1], y0: 0.65, y1: 1.35,
        fillcolor: 'rgba(67, 127, 134, 0.1)',
        line: { width: 1, color: 'rgba(67, 127, 134, 0.25)' },
      },
    ];

    /* Individual project dots */
    var icDots = {
      x: icProjects.map(function (p) { return p.delay; }),
      y: icProjects.map(function () { return 1; }),
      mode: 'markers',
      marker: { size: 8, color: TEAL, opacity: 0.5 },
      text: icProjects.map(function (p) { return p.name + ': ' + p.delay + ' yr'; }),
      hovertemplate: '%{text}<extra></extra>',
      showlegend: false,
    };

    var txDots = {
      x: txProjects.map(function (p) { return p.delay; }),
      y: txProjects.map(function () { return 0; }),
      mode: 'markers',
      marker: { size: 8, color: PURPLE, opacity: 0.5 },
      text: txProjects.map(function (p) { return p.name + ': ' + p.delay + ' yr'; }),
      hovertemplate: '%{text}<extra></extra>',
      showlegend: false,
    };

    /* Average markers */
    var avgMarkers = {
      x: avgs,
      y: [0, 1],
      mode: 'markers',
      marker: { size: 16, color: [PURPLE, TEAL], symbol: 'diamond', line: { width: 2, color: '#fff' } },
      hovertemplate: 'Average: %{x:.1f} years<extra></extra>',
      showlegend: false,
    };

    /* Average labels */
    var annotations = [
      {
        x: avgs[0], y: 0,
        text: '<b>' + avgs[0].toFixed(1) + ' yr avg</b>',
        showarrow: false,
        font: { size: 11, color: PURPLE },
        yshift: 24,
      },
      {
        x: avgs[1], y: 1,
        text: '<b>' + avgs[1].toFixed(1) + ' yr avg</b>',
        showarrow: false,
        font: { size: 11, color: TEAL },
        yshift: 24,
      },
      /* Range labels */
      {
        x: mins[0], y: 0,
        text: mins[0] + ' yr',
        showarrow: false,
        font: { size: 9, color: '#9CA3AF' },
        yshift: -20, xshift: -5, xanchor: 'right',
      },
      {
        x: maxs[0], y: 0,
        text: maxs[0] + ' yr',
        showarrow: false,
        font: { size: 9, color: '#9CA3AF' },
        yshift: -20, xshift: 5, xanchor: 'left',
      },
      {
        x: mins[1], y: 1,
        text: mins[1] + ' yr',
        showarrow: false,
        font: { size: 9, color: '#9CA3AF' },
        yshift: -20, xshift: -5, xanchor: 'right',
      },
      {
        x: maxs[1], y: 1,
        text: maxs[1] + ' yr',
        showarrow: false,
        font: { size: 9, color: '#9CA3AF' },
        yshift: -20, xshift: 5, xanchor: 'left',
      },
    ];

    var layout = {
      height: 280,
      margin: { l: 10, r: 30, t: 10, b: 40 },
      xaxis: {
        title: { text: 'Delay (years)', font: { size: 10, color: '#9CA3AF' }, standoff: 8 },
        range: [-0.5, 6],
        tickvals: [0, 1, 2, 3, 4, 5],
        tickfont: { size: 10, color: '#C0C0C0' },
        gridcolor: 'rgba(0,0,0,0.04)',
        zeroline: false, showline: false,
        fixedrange: true,
      },
      yaxis: {
        tickvals: [0, 1],
        ticktext: categories,
        tickfont: { size: 11, color: '#374151' },
        zeroline: false, showline: false,
        automargin: true,
        fixedrange: true,
      },
      shapes: shapes,
      annotations: annotations,
      showlegend: false,
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: '#FAFAFA',
      font: { family: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif' },
      hovermode: 'closest',
      dragmode: false,
    };

    Plotly.newPlot(id, [txDots, icDots, avgMarkers], layout, {
      displayModeBar: false, responsive: true, scrollZoom: false,
    });
  }

  /* ── Init ── */
  function init() {
    renderSnowy('snowy-tbm-chart');
    renderTransmission('transmission-chart');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
