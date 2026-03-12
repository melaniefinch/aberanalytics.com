---
title: "Australia's energy cost advantage"
date: 2026-03-05
author: "Aber Analytics"
excerpt: "We modelled how different global energy system archetypes compare as they decarbonise. Australia comes out well — but its advantage depends on getting one critical infrastructure category right."
layout: article.njk
draft: false
plotly: true
tags: ["insights"]
extraScripts:
  - https://cdn.plot.ly/plotly-2.35.2.min.js
---

<div class="article-lede">
<p>We show in this article that at 80% power system decarbonisation, <strong>Australia could have one of the lowest electricity system costs compared to other major economies.</strong> This is good news for doing business in Australia, given the push amongst most advanced economies for high levels of decarbonisation in the 2030s. However, the story is not as clean cut as we push past this point.</p>
</div>

## Five ways to decarbonise a power system

Not all energy transitions look the same. A country blessed with extensive hydroelectric resources faces a fundamentally different challenge compared to a European country that has limited solar potential and a high wind energy density. We have explored five archetypes that stylistically represent this diversity:

- **Australia** — World-class solar and wind resources, natural gas for firming, quickly growing battery storage
- **Nuclear + renewables** — Clean firm baseload complemented by renewables (e.g., France or South Korea)
- **Large Asian players** — Large, diversified system with significant coal backup, rapidly scaling renewables, and limited other sources (e.g., India/Indonesia)
- **Hydro & geothermal** — Dispatchable clean energy as the system backbone (Norway, New Zealand, parts of Latin America)
- **Wind-dominant** — High wind penetration, limited solar resource, constrained land availability (e.g., Western Europe)

FFor each archetype, we started from a current system and modelled the cost-optimal technology mix to reach progressively deeper decarbonisation targets, accounting for varying technology availability and resource quality.<sup>1</sup> We have analysed the relative system cost of supplying an average unit of power in each system.

## At 80% decarbonisation, Australia can be highly competitive

{% plotlyChart "archetype-comparison", "Annualised system cost at 80% decarbonisation by Archetype" %}

Australia enters this analysis from a position of genuine structural advantage due to our abundant solar and wind resources, combined with relatively low-cost firming from gas peakers. In our standard scenario, Australia achieves 80% power system decarbonisation at a system cost roughly in line with the Asian archetype and approximately 7–17% below hydro-dominated, nuclear + renewables, and wind-dominant systems. 

Widely sensitivity testing these results, we gained two surprising insights:

- **Demand shape does not change the answer**: we ran tests using various demand archetypes, with the hypothesis that significantly demand shapes (e.g., larger data centre or industrial share vs. a consumer-driven grid) would be best served by different power system mixes. We found surprisingly limited effects. The most cost effective Australian system consistently converges on a high renewables system with gas peaking and batteries.

- **Transmission cost is the swing factor**: sensitivity analysis showed Australia's annualised system cost varies by approximately 22% between low and high transmission cost assumptions. At the high end, our energy cost advantage narrows or disappears. The high end is unfortunately where recent project cost announcements sit, driven by the elivery delays we've explored in [previous analysis](/insights/posts/2026-03-05-physical-bottlenecks-in-the-energy-transition/)

## The strategy must evolve for the last 15%

The picture shifts significantly when decarbonisation pushes beyond 80%.

{% plotlyChart "decarb-trajectory", "System cost at 80% vs 95% decarbonisation" %}

Moving from 80% to 95% decarbonisation escalates Australia's annualised system cost by **20%, a significant jump.** By contrast, the Asian archetype increases by just 2% and hydro-dominated and nuclear systems see proportionally smaller increases. This is the "last mile" problem of deep decarbonisation in high renewables systems - the marginal unit of clean energy becomes increasingly expensive as the system must handle residual demand that renewables alone cannot reliably serve. Systems that already have dispatchable clean energy (hydro, geothermal, nuclear) face a much smaller incremental cost to reach very deep decarbonisation.

## What this means for Australian industry

Australia's energy resource endowment gives it a genuine structural advantage in the energy transition. Our modelling shows that a well-designed Australian power system could be among the cheapest in the world — competitive with Asian alternatives and significantly cheaper than European pathways. To get there, we need to become more efficient at building transmission and position ourselves for cost effective clean firming in the longer term.

The Australian bet on a high renewables system is a sound one, and the prize for businesses operating here is significant if we can get the rollout right.

<div class="contact-cta">
<p>This analysis was produced using our flexible power system modelling platform, which can be configured for any market or technology mix. <a href="mailto:info@aberanalytics.com">Get in touch</a> to discuss how it applies to your context.</p>
</div>

---

## References and methodology

<div class="how-we-did-this">
<h3>How we did this analysis</h3>
<p>We used the Aber Analytics power modelling platform to set up stylised scenario modelling of the power systems of global economies as they decarbonise. The model solves for the most efficient long-run marginal cost capacity mix to meet the demand of the system. The analysis considered a range of demand archetypes, and varying technology choices and resource quality levels.</p>
<figure class="how-we-did-this__figure">
<figcaption>Aber Analytics Modelling Platform schematic</figcaption>
<img src="/assets/images/methodology/model-schematic.png" alt="Aber Analytics Modelling Platform schematic">
</figure>
</div>

<div class="footnotes">
<ol>
<li id="fn1">The six archetypes are stylised representations, not country-specific models. Each uses consistent cost assumptions for generation, storage, and transmission technologies, with resource quality and availability varied to match the archetype's characteristics. <a href="#fnref1">↩</a></li>
</ol>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {

    var sourceFont = { size: 10, color: '#999', family: 'Inter, sans-serif' };

    // Chart 1: Archetype comparison at 80% decarbonisation
    var compEl = document.getElementById('archetype-comparison');
    if (compEl) {
        var archetypes = [
            'Wind-dominant',
            'Hydro &<br>geothermal',
            'Large Asian<br>players',
            'Nuclear +<br>renewables',
            'Australia'
        ];
        var costs = [1.18, 1.21, 1.19, 1.02, 1.00];
        var colors = ['#B8C0CC', '#B8C0CC', '#B8C0CC', '#B8C0CC', '#52308B'];

        // Break mark annotations on each bar
        var annot1 = [];
        archetypes.forEach(function(name) {
            annot1.push({
                text: '/ /', x: 0.92, y: name,
                xref: 'x', yref: 'y',
                showarrow: false,
                font: { size: 16, color: 'rgba(255,255,255,0.8)', family: 'Inter, sans-serif' }
            });
        });
        annot1.push({
            text: 'Source: Aber Analytics power system archetype model',
            xref: 'paper', yref: 'paper',
            x: 0, y: -0.25, xanchor: 'left',
            showarrow: false, font: sourceFont
        });

        Plotly.newPlot(compEl, [{
            y: archetypes, x: costs,
            type: 'bar', orientation: 'h',
            marker: { color: colors },
            text: costs.map(function(v) { return v.toFixed(2); }),
            textposition: 'outside',
            textfont: { size: 12, family: 'Inter, sans-serif' },
            hovertemplate: '%{y}: %{x:.2f}x Australian cost<extra></extra>'
        }], {
            font: { family: 'Inter, sans-serif' },
            title: {
                text: 'Relative difference in system cost per MWh (normalised to Australian cost)',
                font: { size: 12, color: '#666', family: 'Inter, sans-serif' },
                x: 0, xanchor: 'left', y: 0.98
            },
            paper_bgcolor: 'transparent',
            plot_bgcolor: 'transparent',
            margin: { t: 40, r: 60, b: 60, l: 130 },
            xaxis: {
                showgrid: false, zeroline: false,
                range: [0.9, 1.30], tickformat: '.1f', dtick: 0.1
            },
            yaxis: { showgrid: false, zeroline: false, automargin: true },
            showlegend: false,
            annotations: annot1,
            shapes: [{
                type: 'line', x0: 1, x1: 1, y0: -0.05, y1: 1.05,
                xref: 'x', yref: 'paper',
                line: { color: '#333', width: 1.5, dash: 'dash' }
            }]
        }, { responsive: true, displayModeBar: false });
    }

    // Chart 2: System cost at 80% vs 95% decarbonisation
    var decarbEl = document.getElementById('decarb-trajectory');
    if (decarbEl) {
        var archetypes2 = ['Australia', 'Nuclear +\nrenewables', 'Large Asian\nplayers', 'Hydro &\ngeothermal', 'Wind-\ndominant'];
        var cost80 = [1.00, 1.02, 1.19, 1.21, 1.18];
        var cost95 = [1.22, 1.04, 1.33, 1.30, 1.26];
        var increases = ['+21.6%', '+2.3%', '+11.8%', '+7.7%', '+6.9%'];

        var trace80 = {
            x: archetypes2, y: cost80,
            type: 'bar', name: '80%',
            marker: { color: '#B8C0CC' },
            text: cost80.map(function(v) { return v.toFixed(2); }),
            textposition: 'outside',
            textfont: { size: 10, family: 'Inter, sans-serif' },
            cliponaxis: false
        };
        var trace95 = {
            x: archetypes2, y: cost95,
            type: 'bar', name: '95%',
            marker: { color: '#437F86' },
            text: cost95.map(function(v) { return v.toFixed(2); }),
            textposition: 'outside',
            textfont: { size: 10, family: 'Inter, sans-serif' },
            cliponaxis: false
        };

        var annot2 = archetypes2.map(function(a, i) {
            return {
                x: a, y: cost95[i],
                text: '<b>' + increases[i] + '</b>',
                showarrow: true, arrowhead: 0, arrowwidth: 1,
                arrowcolor: i === 0 ? '#D55268' : '#555',
                ax: 0, ay: -35,
                font: { color: i === 0 ? '#D55268' : '#333', size: 12, family: 'Inter, sans-serif' }
            };
        });
        annot2.push({
            text: 'Source: Aber Analytics power system archetype model',
            xref: 'paper', yref: 'paper',
            x: 0, y: -0.32, xanchor: 'left',
            showarrow: false, font: sourceFont
        });

        Plotly.newPlot(decarbEl, [trace80, trace95], {
            font: { family: 'Inter, sans-serif' },
            title: {
                text: 'Relative increases in system cost per MWh (normalised to Australian cost at 80%)',
                font: { size: 12, color: '#666', family: 'Inter, sans-serif' },
                x: 0, xanchor: 'left', y: 0.98
            },
            paper_bgcolor: 'transparent',
            plot_bgcolor: 'transparent',
            margin: { t: 40, r: 20, b: 95, l: 50 },
            barmode: 'group',
            xaxis: { showgrid: false, zeroline: false, tickangle: 0 },
            yaxis: {
                showgrid: false, zeroline: false,
                range: [0.85, 1.55], tickformat: '.1f', dtick: 0.1
            },
            showlegend: true,
            legend: { orientation: 'h', y: -0.18, x: 0.5, xanchor: 'center' },
            bargap: 0.25, bargroupgap: 0.1,
            annotations: annot2,
            shapes: [
                {type:'line', xref:'paper', yref:'y', x0:-0.015, x1:0.02, y0:0.86, y1:0.90, line:{color:'#999', width:1.5}},
                {type:'line', xref:'paper', yref:'y', x0:0.005, x1:0.04, y0:0.86, y1:0.90, line:{color:'#999', width:1.5}}
            ]
        }, { responsive: true, displayModeBar: false });
    }

});
</script>
