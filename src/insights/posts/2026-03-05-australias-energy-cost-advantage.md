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
<p>We show in this article that at 80% power system decarbonisation, <strong>Australia could have one of the lowest electricity system costs compared to other major economies.</strong> This is good news for doing business in Australia, given the push amongst most advanced economies for high levels of decarbonisation in the 2030s. However, there are some flags to solve as we push past this point.</p>
</div>

## Five ways to decarbonise a power system

Not all energy transitions look the same. A country blessed with extensive hydroelectric resources faces a fundamentally different challenge compared to a European country that has limited solar potential and a high wind energy density. We have explored five archetypes that stylistically represent this diversity: :

- **Australia** — World-class solar and wind resources, natural gas for firming, quickly growing battery storage
- **Nuclear + renewables** — Clean firm baseload complemented by variable renewables (e.g., France or South Korea)
- **Large Asian players** — Large, diversified system with significant hydro, rapidly scaling RE, and coal backup (e.g., China)
- **Hydro & geothermal** — Dispatchable clean energy as the system backbone (Norway, New Zealand, parts of Latin America)
- **Wind-dominant** — High wind penetration, limited solar resource, constrained land availability (e.g., Western Europe)

For each archetype, we modelled the cost-optimal technology mix to reach progressively deeper decarbonisation targets, using consistent cost assumptions for generation, storage, and transmission but varying technology availability and resource quality.<sup>1</sup> We have analysed the relative system cost of supplying an average unit of power in each system.

## At 80% decarbonisation, Australia can be highly competitive

{% plotlyChart "archetype-comparison", "Annualised system cost at 80% decarbonisation by archetype" %}
*Source: Aber Analytics power system archetype model*

Australia enters this analysis from a position of genuine structural advantage. Abundant solar and wind resources, combined with relatively low-cost firming from gas peakers, place it among the most cost-competitive power systems in the world across every demand scemario we modelled. That advantage is durable under moderate decarbonisation ambition — the analysis suggests Australia can push to roughly 80% clean energy without materially impairing its competitive position relative to peer economies.

In our standard scenario, Australia achieves 80% power system decarbonisation at a system cost roughly in line with the Asian archetype and approximately 7–17% below hydro-dominated, nuclear + RE, and wind-dominant systems. 

## Demand shape does not change the answer

Alongside supply archetypes, we investigated various demand archetypes, with the hypothesis that significantly different demand shapes (e.g., larger data centre or industrial share vs. a consumer-driven grid) would be best served by different power system mixes. We found surprisingly limited effects. The most cost effective Australian system consistently converges on a high renewables system with gas peaking and batteries. The demand mix matters less than the supply fundamentals. 

## Transmission is the swing factor

Australia's competitive position comes with an important caveat: it is highly sensitive to the cost of connecting remote renewable generation to demand centres.

{% plotlyChart "transmission-sensitivity", "Australia's system cost as a function of transmission cost" %}
*Source: Aber Analytics power system archetype model*

Our sensitivity analysis shows that Australia's annualised system cost varies by approximately 22% between low and high transmission cost assumptions. At the high end, Australia's cost advantage over other archetypes narrows significantly, while at the low end it widens to become one of the most competitive systems modelled. 

This has a direct read-through to current infrastructure decisions. Australia's actual transmission costs sit in the upper portion of the range we modelled, reflecting the well-documented challenges of building new high-voltage lines across vast distances. If transmission costs settle at the higher end — driven by the delivery delays we've explored in [previous analysis](/insights/posts/2026-03-05-physical-bottlenecks-in-the-energy-transition/) — Australia's system cost advantage materially narrows.

## The last 15% requires an evolving strategy

The picture shifts significantly when decarbonisation pushes beyond 80%.

{% plotlyChart "decarb-trajectory", "System cost at 80% vs 95% decarbonisation" %}
*Source: Aber Analytics power system archetype model*

Moving from 80% to 95% decarbonisation escalates Australia's annualised system cost by **20%, a significant jump.** By contrast, the Asian archetype increases by just 2% and hydro-dominated and nuclear systems see proportionally smaller increases. This is the classic "last mile" problem of deep decarbonisation in high renewables systems: the marginal unit of clean energy becomes increasingly expensive as the system must handle residual demand that renewables alone cannot reliably serve. Systems that already have dispatchable clean energy (hydro, geothermal, nuclear) face a much smaller incremental cost to reach very deep decarbonisation.

## What this means for Australian industry

Australia's energy resource endowment gives it a genuine structural advantage in the energy transition. Our modelling shows that a well-designed Australian power system could be among the cheapest in the world — competitive with Asian alternatives and significantly cheaper than European pathways.

But this advantage is conditional. It requires:

1. **Managing transmission costs** — the single most important lever for Australia's system cost competitiveness
2. **Building renewable infrastructure at pace** — which depends on solving the [physical delivery constraints](/insights/posts/2026-03-05-physical-bottlenecks-in-the-energy-transition/) that currently limit build rates
3. **Being realistic about the last 15-20%** — deep decarbonisation beyond ~80% requires clean firm power that Australia doesn't yet have

The Australian bet on a high renewables system is a sound one, and the prize for businesses operating here is significant if we can get the rollout right.

---

## References and methodology

<div class="contact-cta">
<p>Our power system archetype model underpins this analysis. <a href="mailto:info@aberanalytics.com">Get in touch</a> to explore how Australia's cost structure compares to peer economies, or to assess transmission sensitivity for a specific project.</p>
</div>

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
    const compEl = document.getElementById('archetype-comparison');
    if (compEl) {
        // Ordered cheapest (top) to most expensive (bottom) for horizontal bars
        // Plotly renders first array element at bottom, so reverse order
        const archetypes = [
            'Wind-dominant<br>(Western Europe)',
            'Nuclear +<br>renewables',
            'Hydro &<br>geothermal',
            'Asian competition<br>(e.g. China)',
            'Australia',
            'Limited RE<br>supply'
        ];
        const costs = [20.0, 19.1, 18.3, 17.3, 17.1, 16.2];
        const colors = ['#B8C0CC', '#B8C0CC', '#B8C0CC', '#B8C0CC', '#52308B', '#B8C0CC'];

        const trace = {
            y: archetypes,
            x: costs,
            type: 'bar',
            orientation: 'h',
            marker: { color: colors },
            text: costs.map(v => 'US$' + v.toFixed(1) + 'bn'),
            textposition: 'outside',
            textfont: { size: 12, family: 'Inter, sans-serif' },
            hovertemplate: '%{y}: US$%{x:.1f}bn<extra></extra>'
        };

        const layout = {
            font: { family: 'Inter, sans-serif' },
            paper_bgcolor: 'transparent',
            plot_bgcolor: 'transparent',
            margin: { t: 10, r: 80, b: 50, l: 140 },
            xaxis: {
                title: { text: 'Annualised system cost (US$ bn)', font: { size: 12 } },
                gridcolor: 'rgba(82, 48, 139, 0.08)',
                zeroline: false,
                range: [0, 22.5]
            },
            yaxis: {
                gridcolor: 'rgba(82, 48, 139, 0.08)',
                zeroline: false,
                automargin: true
            },
            showlegend: false,
            annotations: [{
                x: 17.1,
                y: 'Australia',
                text: '',
                showarrow: false
            }]
        };

        Plotly.newPlot(compEl, [trace], layout, { responsive: true, displayModeBar: false });
    }

    // Chart 2: Transmission cost sensitivity
    const txEl = document.getElementById('transmission-sensitivity');
    if (txEl) {
        const txCosts = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
        const systemCosts = [15.6, 16.3, 17.0, 17.7, 18.3, 18.6, 18.9, 19.1, 19.1, 19.1];
        const solarShare = [74, 72, 70, 69, 60, 37, 30, 20, 5, 1];

        const traceCost = {
            x: txCosts,
            y: systemCosts,
            type: 'scatter',
            mode: 'lines+markers',
            name: 'System cost (US$ bn)',
            line: { color: '#52308B', width: 3 },
            marker: { color: '#52308B', size: 8 },
            yaxis: 'y',
            hovertemplate: 'Transmission: US$%{x}M/GW<br>System cost: US$%{y:.1f}bn<extra></extra>'
        };

        const traceSolar = {
            x: txCosts,
            y: solarShare,
            type: 'bar',
            name: 'Solar & wind share (%)',
            marker: { color: 'rgba(82, 48, 139, 0.15)' },
            yaxis: 'y2',
            hovertemplate: 'Transmission: US$%{x}M/GW<br>RE share: %{y}%<extra></extra>'
        };

        const layout = {
            font: { family: 'Inter, sans-serif' },
            paper_bgcolor: 'transparent',
            plot_bgcolor: 'transparent',
            margin: { t: 20, r: 60, b: 60, l: 60 },
            xaxis: {
                title: { text: 'RE transmission cost (US$ M/GW)', font: { size: 12 } },
                gridcolor: 'rgba(82, 48, 139, 0.08)',
                zeroline: false
            },
            yaxis: {
                title: { text: 'Annualised system cost (US$ bn)', font: { size: 12 } },
                gridcolor: 'rgba(82, 48, 139, 0.08)',
                zeroline: false,
                range: [14, 21]
            },
            yaxis2: {
                title: { text: 'Solar & wind share (%)', font: { size: 12, color: 'rgba(82, 48, 139, 0.4)' } },
                overlaying: 'y',
                side: 'right',
                range: [0, 100],
                showgrid: false,
                zeroline: false
            },
            showlegend: true,
            legend: { orientation: 'h', y: -0.25, x: 0.5, xanchor: 'center' },
            bargap: 0.3,
            annotations: [{
                x: 700,
                y: 19.1,
                yref: 'y',
                text: 'Cost plateaus as<br>solar drops out',
                showarrow: true,
                arrowhead: 2,
                ax: 40,
                ay: -30,
                font: { color: '#D55268', size: 11 }
            }]
        };

        Plotly.newPlot(txEl, [traceSolar, traceCost], layout, { responsive: true, displayModeBar: false });
    }

    // Chart 3: Decarbonisation trajectory — 80% vs 95%
    const decarbEl = document.getElementById('decarb-trajectory');
    if (decarbEl) {
        const archetypes = ['Australia', 'Nuclear +\nrenewables', 'Asian\ncompetition', 'Hydro &\ngeothermal', 'Wind-dominant\n(W. Europe)', 'Limited RE\nsupply'];
        const cost80 = [17.1, 19.1, 17.3, 18.3, 20.0, 16.2];
        const cost95 = [20.6, 21.3, 17.6, 21.1, 21.6, 17.5];
        const increase = cost80.map((c, i) => ((cost95[i] - c) / c * 100).toFixed(0));

        const trace80 = {
            x: archetypes,
            y: cost80,
            type: 'bar',
            name: '80% decarbonisation',
            marker: { color: '#437F86' },
            text: cost80.map(v => '$' + v.toFixed(1)),
            textposition: 'outside',
            textfont: { size: 11 }
        };

        const trace95 = {
            x: archetypes,
            y: cost95,
            type: 'bar',
            name: '95% decarbonisation',
            marker: { color: '#D55268' },
            text: cost95.map(v => '$' + v.toFixed(1)),
            textposition: 'outside',
            textfont: { size: 11 }
        };

        const annotations = archetypes.map((a, i) => ({
            x: a,
            y: Math.max(cost80[i], cost95[i]) + 1.0,
            text: '<b>+' + increase[i] + '%</b>',
            showarrow: false,
            font: {
                color: parseInt(increase[i]) > 10 ? '#D55268' : '#437F86',
                size: 12,
                family: 'Inter, sans-serif'
            }
        }));

        const layout = {
            font: { family: 'Inter, sans-serif' },
            paper_bgcolor: 'transparent',
            plot_bgcolor: 'transparent',
            margin: { t: 30, r: 20, b: 80, l: 50 },
            barmode: 'group',
            xaxis: {
                gridcolor: 'rgba(82, 48, 139, 0.08)',
                zeroline: false,
                tickangle: 0
            },
            yaxis: {
                title: { text: 'Annualised system cost (US$ bn)', font: { size: 12 } },
                gridcolor: 'rgba(82, 48, 139, 0.08)',
                zeroline: false,
                range: [0, 24]
            },
            showlegend: true,
            legend: { orientation: 'h', y: -0.25, x: 0.5, xanchor: 'center' },
            bargap: 0.25,
            bargroupgap: 0.1,
            annotations: annotations
        };

        Plotly.newPlot(decarbEl, [trace80, trace95], layout, { responsive: true, displayModeBar: false });
    }

});
</script>
