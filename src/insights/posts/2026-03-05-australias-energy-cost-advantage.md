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
*Source: Aber Analytics power system archetype model*

Australia enters this analysis from a position of genuine structural advantage due to our abundant solar and wind resources, combined with relatively low-cost firming from gas peakers. In our standard scenario, Australia achieves 80% power system decarbonisation at a system cost roughly in line with the Asian archetype and approximately 7–17% below hydro-dominated, nuclear + renewables, and wind-dominant systems. 

Widely sensitivity testing these results, we gained two surprising insights:

- **Demand shape does not change the answer**: we ran tests using various demand archetypes, with the hypothesis that significantly demand shapes (e.g., larger data centre or industrial share vs. a consumer-driven grid) would be best served by different power system mixes. We found surprisingly limited effects. The most cost effective Australian system consistently converges on a high renewables system with gas peaking and batteries.

- **Transmission cost is the swing factor**: sensitivity analysis showed Australia's annualised system cost varies by approximately 22% between low and high transmission cost assumptions. At the high end, our energy cost advantage narrows or disappears. The high end is unfortunately where recent project cost announcements sit, driven by the elivery delays we've explored in [previous analysis](/insights/posts/2026-03-05-physical-bottlenecks-in-the-energy-transition/)

## The strategy must evolve for the last 15%

The picture shifts significantly when decarbonisation pushes beyond 80%.

{% plotlyChart "decarb-trajectory", "System cost at 80% vs 95% decarbonisation" %}
*Source: Aber Analytics power system archetype model*

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

    // Chart 1: Archetype comparison at 80% decarbonisation
    // Relative cost per MWh normalised to Australian cost = 1.00
    const compEl = document.getElementById('archetype-comparison');
    if (compEl) {
        // Plotly renders first array element at bottom, so reverse display order
        const archetypes = [
            'Wind-dominant<br>(W. Europe)',
            'Hydro +<br>Geothermal',
            'Coal based<br>systems',
            'Nuclear +<br>Renewables',
            'Australia'
        ];
        const costs = [1.18, 1.21, 1.19, 1.02, 1.00];
        const colors = ['#B8C0CC', '#B8C0CC', '#B8C0CC', '#B8C0CC', '#52308B'];

        const trace = {
            y: archetypes,
            x: costs,
            type: 'bar',
            orientation: 'h',
            marker: { color: colors },
            text: costs.map(v => v.toFixed(2)),
            textposition: 'outside',
            textfont: { size: 12, family: 'Inter, sans-serif' },
            hovertemplate: '%{y}: %{x:.2f}x Australian cost<extra></extra>'
        };

        const layout = {
            font: { family: 'Inter, sans-serif' },
            paper_bgcolor: 'transparent',
            plot_bgcolor: 'transparent',
            margin: { t: 30, r: 60, b: 50, l: 150 },
            xaxis: {
                gridcolor: 'rgba(82, 48, 139, 0.08)',
                zeroline: false,
                range: [0, 1.4],
                tickformat: '.2f'
            },
            yaxis: {
                gridcolor: 'rgba(82, 48, 139, 0.08)',
                zeroline: false,
                automargin: true
            },
            showlegend: false,
            annotations: [{
                text: 'Relative difference in system cost per MWh (normalised to Australian cost)',
                xref: 'paper', yref: 'paper',
                x: 0, y: 1.06,
                showarrow: false,
                font: { size: 11, color: '#666', family: 'Inter, sans-serif' }
            }],
            shapes: [{
                type: 'line',
                x0: 1, x1: 1,
                y0: -0.5, y1: 4.5,
                yref: 'y',
                line: { color: '#333', width: 1.5, dash: 'dash' }
            }]
        };

        Plotly.newPlot(compEl, [trace], layout, { responsive: true, displayModeBar: false });
    }

    // Chart 2: System cost at 80% vs 95% decarbonisation
    // Relative cost per MWh normalised to Australian cost at 80%
    const decarbEl = document.getElementById('decarb-trajectory');
    if (decarbEl) {
        const archetypes = ['Australia', 'Nuclear +\nRenewables', 'Coal based\nsystems', 'Hydro +\nGeothermal', 'Wind-dominant\n(W. Europe)'];
        const cost80 = [1.00, 1.02, 1.19, 1.21, 1.18];
        const cost95 = [1.22, 1.04, 1.33, 1.30, 1.26];
        const increases = ['+21.6%', '+2.3%', '+11.8%', '+7.7%', '+6.9%'];

        const trace80 = {
            x: archetypes,
            y: cost80,
            type: 'bar',
            name: '80%',
            marker: { color: '#B8C0CC' },
            text: cost80.map(v => v.toFixed(2)),
            textposition: 'outside',
            textfont: { size: 11, family: 'Inter, sans-serif' }
        };

        const trace95 = {
            x: archetypes,
            y: cost95,
            type: 'bar',
            name: '95%',
            marker: { color: '#437F86' },
            text: cost95.map(v => v.toFixed(2)),
            textposition: 'outside',
            textfont: { size: 11, family: 'Inter, sans-serif' }
        };

        const annotations = archetypes.map((a, i) => ({
            x: a,
            y: Math.max(cost80[i], cost95[i]) + 0.09,
            text: '<b>' + increases[i] + '</b>',
            showarrow: false,
            font: {
                color: parseFloat(increases[i]) > 10 ? '#D55268' : '#437F86',
                size: 12,
                family: 'Inter, sans-serif'
            }
        }));

        annotations.push({
            text: 'Relative increases in system cost per MWh (normalised to Australian cost at 80%)',
            xref: 'paper', yref: 'paper',
            x: 0, y: 1.06,
            showarrow: false,
            font: { size: 11, color: '#666', family: 'Inter, sans-serif' }
        });

        const layout = {
            font: { family: 'Inter, sans-serif' },
            paper_bgcolor: 'transparent',
            plot_bgcolor: 'transparent',
            margin: { t: 40, r: 20, b: 80, l: 50 },
            barmode: 'group',
            xaxis: {
                gridcolor: 'rgba(82, 48, 139, 0.08)',
                zeroline: false,
                tickangle: 0
            },
            yaxis: {
                gridcolor: 'rgba(82, 48, 139, 0.08)',
                zeroline: false,
                range: [0, 1.55],
                tickformat: '.2f'
            },
            showlegend: true,
            legend: { orientation: 'h', y: -0.2, x: 0.5, xanchor: 'center' },
            bargap: 0.25,
            bargroupgap: 0.1,
            annotations: annotations
        };

        Plotly.newPlot(decarbEl, [trace80, trace95], layout, { responsive: true, displayModeBar: false });
    }

});
</script>
