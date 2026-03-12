/**
 * LDC Explorer — Interactive Load Duration Curve Dashboard
 * Replaces the internal-server iframe in the "Mind the gap" article.
 * Requires plotly-basic to be loaded before this script.
 */
(function () {
  'use strict';

  var BASE = '/assets/data/ldc/';

  var STATES    = ['NSW', 'QLD', 'SA', 'TAS', 'VIC'];
  var SCENARIOS = ['Step Change', 'Slower Growth', 'Accelerated Transition'];
  var SCENARIO_SLUGS = {
    'Step Change':             'Step_Change',
    'Slower Growth':           'Slower_Growth',
    'Accelerated Transition':  'Accelerated_Transition',
  };

  var FYS = [];
  for (var _y = 2025; _y < 2050; _y++) {
    FYS.push(_y + '-' + String(_y + 1).slice(-2));
  }
  var REF_YEARS = [];
  for (var _ry = 2011; _ry <= 2025; _ry++) REF_YEARS.push(_ry);
  var POES    = ['POE10', 'POE50', 'POE90'];
  var SEASONS = ['Summer', 'Winter'];

  var DEFAULT_PEAK_DURATION = 8.77;
  var DEFAULT_OUTAGE_RATE   = 10;

  var MERIT_ORDER = [
    'Black coal', 'Brown coal', 'Mid-merit gas', 'Flexible gas',
    'Flexible gas with CCS', 'Pumped Hydro Storage', 'Hydro',
    'Wind', 'Offshore wind', 'Utility-scale solar', 'Other renewable fuels',
    'Batteries', 'Coordinated CER storage', 'DSP',
  ];

  var TECH_COLORS = {
    'Black coal':              '#44403C',
    'Brown coal':              '#78716C',
    'Mid-merit gas':           '#A8A29E',
    'Flexible gas':            '#C4B5A2',
    'Flexible gas with CCS':   '#D6CFC5',
    'Hydro':                   '#60A5FA',
    'Pumped Hydro Storage':    '#3B82F6',
    'Wind':                    '#4ADE80',
    'Offshore wind':           '#22C55E',
    'Utility-scale solar':     '#FBBF24',
    'Other renewable fuels':   '#A78BFA',
    'Batteries':               '#14B8A6',
    'Coordinated CER storage': '#5EEAD4',
    'DSP':                     '#F87171',
  };

  var THERMAL_TECHS = {
    'Black coal': 1, 'Brown coal': 1, 'Mid-merit gas': 1,
    'Flexible gas': 1, 'Flexible gas with CCS': 1,
  };
  var FIRM_TECHS = {
    'Black coal': 1, 'Brown coal': 1, 'Mid-merit gas': 1,
    'Flexible gas': 1, 'Flexible gas with CCS': 1,
    'Pumped Hydro Storage': 1, 'Hydro': 1,
  };
  var VRE_FIRM_MAP = {
    'Wind':                'Onshore Wind',
    'Offshore wind':       'Offshore Wind',
    'Utility-scale solar': 'Utility-scale Solar PV',
  };
  var STORAGE_FIRM_MAP = {
    'Batteries':               'batteries',
    'Coordinated CER storage': 'coordinated_cer',
  };

  /* ── Module state ── */
  var ldcData          = null;
  var capacityData     = null;
  var firmContribData  = null;
  var storageDurData   = null;
  var loadedSlug       = null;
  var staticDataReady  = 0;

  /* ── Helpers ── */
  function fetchJSON(url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload  = function () { cb(null, JSON.parse(xhr.responseText)); };
    xhr.onerror = function () { cb('Error: ' + url); };
    xhr.send();
  }

  function hexToRgba(hex, a) {
    var h = hex.slice(1);
    return 'rgba(' + parseInt(h.slice(0,2),16) + ',' +
                     parseInt(h.slice(2,4),16) + ',' +
                     parseInt(h.slice(4,6),16) + ',' + a + ')';
  }

  function val(id)     { return document.getElementById(id).value; }
  function checked(id) { return document.getElementById(id).checked; }

  /* ── Capacity stack (mirrors app.py) ── */
  function buildStack(scenario, state, fy, season, storageFirmOn, peakDur, outageRate) {
    var stateCap = ((capacityData[scenario] || {})[state] || {});
    var stack = [];
    MERIT_ORDER.forEach(function (tech) {
      var cap = ((stateCap[tech] || {})[fy] || 0);
      if (cap <= 0) return;

      if (THERMAL_TECHS[tech] && outageRate > 0) {
        cap *= (1 - outageRate / 100);
      }

      if (VRE_FIRM_MAP[tech]) {
        var fcTech = VRE_FIRM_MAP[tech];
        var factor = (((((firmContribData[fcTech] || {})[season] || {})[scenario] || {})[state] || {})[fy] || 0);
        cap *= factor;
      } else if (storageFirmOn && STORAGE_FIRM_MAP[tech]) {
        var sKey = STORAGE_FIRM_MAP[tech];
        var dur  = (((((storageDurData[scenario] || {})[state] || {})[sKey] || {})[fy] || {}).duration_hrs || 0);
        cap = (peakDur > 0 && dur > 0) ? cap * Math.min(dur / peakDur, 1) : 0;
      }

      if (cap > 0) stack.push({ tech: tech, mw: cap });
    });
    return stack;
  }

  /* ── Render ── */
  function render() {
    var chartEl = document.getElementById('ldc-chart');
    if (!chartEl || !ldcData || !capacityData) return;

    var state       = val('ldc-state');
    var scenario    = val('ldc-scenario');
    var fy          = val('ldc-fy');
    var refYear     = val('ldc-refyear');
    var poe         = val('ldc-poe');
    var season      = val('ldc-season');
    var firmOn      = checked('ldc-storage-firm');
    var peakDur     = parseFloat(val('ldc-peak-duration')) || DEFAULT_PEAK_DURATION;
    var outageRate  = parseFloat(val('ldc-outage-rate'))   || DEFAULT_OUTAGE_RATE;

    var ldcKey = fy + '_' + refYear + '_' + poe;
    var ldc    = ldcData[ldcKey];
    if (!ldc) {
      chartEl.innerHTML = '<p style="color:#9CA3AF;padding:2rem;text-align:center">No data for this combination.</p>';
      return;
    }

    var n = ldc.length;
    var xArr = [];
    for (var i = 0; i < n; i++) xArr.push(i / (n - 1) * 100);

    var stack = buildStack(scenario, state, fy, season, firmOn, peakDur, outageRate);

    /* ── Capacity bands as shapes ── */
    var shapes = [], ann = [], cum = 0;
    var bandInfo = [];
    stack.forEach(function (item) {
      var a   = FIRM_TECHS[item.tech] ? 0.85 : 0.4;
      var col = hexToRgba(TECH_COLORS[item.tech], a);
      shapes.push({
        type: 'rect', layer: 'below',
        x0: -1, x1: 101,
        y0: cum, y1: cum + item.mw,
        fillcolor: col,
        line: { width: 0.5, color: 'rgba(255,255,255,0.3)' },
      });
      bandInfo.push({ tech: item.tech, mw: item.mw, y0: cum, y1: cum + item.mw });
      cum += item.mw;
    });

    var peak = ldc[0];
    var yMin = ldc[ldc.length - 1];
    var yMax = Math.max(cum, peak) * 1.08;

    /* ── Firm line ── */
    var firmTotal = 0;
    stack.forEach(function (b) { if (FIRM_TECHS[b.tech]) firmTotal += b.mw; });
    if (firmTotal > 0) {
      shapes.push({
        type: 'line', x0: -1, x1: 101, y0: firmTotal, y1: firmTotal,
        line: { color: '#DC2626', width: 1.5, dash: 'dot' },
      });
      ann.push({
        x: 0.03, y: firmTotal, xref: 'paper', yref: 'y',
        text: '<b>Traditional firm: ' + Math.round(firmTotal).toLocaleString() + ' MW</b>',
        showarrow: false, font: { size: 8.5, color: '#DC2626' },
        xanchor: 'left', yanchor: 'bottom', yshift: 3,
      });
    }

    /* ── Labels ── */
    ann.push({
      x: 0.97, y: cum, xref: 'paper', yref: 'y',
      text: '<b>Total effective: ' + Math.round(cum).toLocaleString() + ' MW</b>',
      showarrow: false, font: { size: 9, color: '#6B7280' },
      xanchor: 'end', yanchor: 'bottom', yshift: 5,
    });
    ann.push({
      x: 2, y: peak,
      text: '<b>Demand</b>', showarrow: false,
      font: { size: 10.5, color: '#1C1917' },
      xanchor: 'left', yanchor: 'bottom', yshift: 6,
    });

    bandInfo.forEach(function (b) {
      var frac = b.mw / yMax;
      if (frac < 0.03) return;
      var mid = (b.y0 + b.y1) / 2;
      ann.push({
        x: 0.97, y: mid, xref: 'paper', yref: 'y',
        text: (frac >= 0.07 ? '<b>' + b.tech + '</b>  ' : b.tech + '  ') +
              Math.round(b.mw).toLocaleString() + ' MW',
        showarrow: false, xanchor: 'end', yanchor: 'middle',
        font: {
          size: frac >= 0.1 ? 10.5 : (frac >= 0.05 ? 9 : 8),
          color: FIRM_TECHS[b.tech] ? 'rgba(255,255,255,0.9)' : 'rgba(55,65,81,0.85)',
        },
      });
    });

    /* ── Traces ── */
    var traces = [{
      x: xArr, y: ldc,
      mode: 'lines',
      line: { color: '#1C1917', width: 2.5, shape: 'spline', smoothing: 0.5 },
      showlegend: false,
      hovertemplate: '%{y:,.0f} MW<extra>Demand</extra>',
    }];

    chartEl.innerHTML = '';
    Plotly.newPlot('ldc-chart', traces, {
      height: 540,
      margin: { l: 58, r: 12, t: 8, b: 52 },
      xaxis: {
        title: { text: 'Duration exceeded (%)', font: { size: 11, color: '#9CA3AF' }, standoff: 8 },
        tickvals: [0, 20, 40, 60, 80, 100],
        ticktext: ['0%', '20%', '40%', '60%', '80%', '100%'],
        tickfont: { size: 9, color: '#C0C0C0' },
        gridcolor: 'rgba(0,0,0,0.05)', zeroline: false,
        range: [-1, 101], fixedrange: true,
      },
      yaxis: {
        title: { text: 'MW', font: { size: 11, color: '#9CA3AF' }, standoff: 4 },
        tickfont: { size: 9, color: '#C0C0C0' },
        gridcolor: 'rgba(0,0,0,0.05)', zeroline: false,
        separatethousands: true, range: [yMin < 0 ? Math.floor(yMin * 1.1 / 100) * 100 : 0, yMax], fixedrange: true,
      },
      showlegend: false,
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: '#FAFAFA',
      font: { family: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif' },
      shapes: shapes, annotations: ann,
      hovermode: 'x', dragmode: false,
    }, { displayModeBar: false, responsive: true, scrollZoom: false });
  }

  /* ── Load LDC file for current state+scenario, then render ── */
  function loadAndRender() {
    var state    = val('ldc-state');
    var scenario = val('ldc-scenario');
    var slug = state + '_' + SCENARIO_SLUGS[scenario];
    if (slug === loadedSlug) { render(); return; }

    document.getElementById('ldc-chart').innerHTML =
      '<p style="color:#9CA3AF;padding:2rem;text-align:center">Loading…</p>';

    fetchJSON(BASE + slug + '.json', function (err, data) {
      if (err) { console.error(err); return; }
      ldcData    = data;
      loadedSlug = slug;
      render();
    });
  }

  /* ── Controls HTML ── */
  function select(id, label, opts, def) {
    var optsHtml = opts.map(function (o) {
      var v = typeof o === 'object' ? o.v : o;
      var l = typeof o === 'object' ? o.l : o;
      return '<option value="' + v + '"' + (v == def ? ' selected' : '') + '>' + l + '</option>';
    }).join('');
    return '<div class="ldc-ctrl"><label>' + label +
           '<select id="' + id + '">' + optsHtml + '</select></label></div>';
  }
  function numInput(id, label, val, min, max, step) {
    return '<div class="ldc-ctrl"><label>' + label +
           '<input type="number" id="' + id + '" value="' + val +
           '" min="' + min + '" max="' + max + '" step="' + step + '"></label></div>';
  }

  /* ── Init ── */
  function init() {
    var container = document.getElementById('dashboard');
    if (!container) return;
    if (typeof Plotly === 'undefined') { setTimeout(init, 100); return; }

    var fyOpts  = FYS.map(function (f) { return { v: f, l: f }; });
    var ryOpts  = REF_YEARS.map(function (r) { return { v: r, l: String(r) }; });

    container.innerHTML =
      '<div class="ldc-explorer">' +
        '<div class="ldc-controls">' +
          select('ldc-state',    'State',           STATES,    'NSW') +
          select('ldc-scenario', 'Scenario',        SCENARIOS, 'Step Change') +
          select('ldc-fy',       'Financial year',  fyOpts,    '2040-41') +
          select('ldc-refyear',  'Reference year',  ryOpts,    2015) +
          select('ldc-poe',      'POE',             POES,      'POE10') +
          select('ldc-season',   'Capacity rating', SEASONS,   'Winter') +
          '<div class="ldc-ctrl ldc-ctrl--check">' +
            '<label><input type="checkbox" id="ldc-storage-firm" checked>' +
            ' Storage firm contribution</label></div>' +
          numInput('ldc-peak-duration', 'Peak duration (hrs)', DEFAULT_PEAK_DURATION, 1, 24, 0.1) +
          numInput('ldc-outage-rate',   'Outage rate (%)',     DEFAULT_OUTAGE_RATE,   0, 100, 1) +
        '</div>' +
        '<div id="ldc-chart" class="ldc-chart"></div>' +
      '</div>';

    /* Load the three static data files */
    function onStaticLoad() {
      staticDataReady++;
      if (staticDataReady === 3) loadAndRender();
    }
    fetchJSON(BASE + 'capacity.json',          function (e, d) { if (!e) { capacityData    = d; onStaticLoad(); } });
    fetchJSON(BASE + 'firm_contribution.json', function (e, d) { if (!e) { firmContribData  = d; onStaticLoad(); } });
    fetchJSON(BASE + 'storage_duration.json',  function (e, d) { if (!e) { storageDurData   = d; onStaticLoad(); } });

    /* Wire up controls */
    ['ldc-state', 'ldc-scenario'].forEach(function (id) {
      document.getElementById(id).addEventListener('change', loadAndRender);
    });
    ['ldc-fy', 'ldc-refyear', 'ldc-poe', 'ldc-season',
     'ldc-storage-firm', 'ldc-peak-duration', 'ldc-outage-rate'].forEach(function (id) {
      document.getElementById(id).addEventListener('change', render);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
