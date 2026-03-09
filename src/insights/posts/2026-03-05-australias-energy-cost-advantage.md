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

Energy costs relative to the rest of the globe is a critical part of keeping it competitive to do business in Australia. At 80% power system decarbonisation — roughly where most advanced economies are targeting by the 2030s — **Australia could have one of the lowest electricity system costs compared to other major economies.** However, this is a more difficult position to defend as we get into the later stages of the transition.

## Six ways to decarbonise a power system

Not all energy transitions look the same. A country blessed with extensive hydroelectric resources faces a fundamentally different optimisation problem from one building out solar and wind at scale. Our six archetypes capture this diversity:

- **Australia** — World-class solar and wind resources, gas peakers for firming, growing battery storage
- **Nuclear + renewables** — Clean firm baseload complemented by variable renewables (think France or South Korea)
- **Asian competition (e.g. China)** — Large, diversified system with significant hydro, rapidly scaling RE, and coal being displaced
- **Hydro & geothermal** — Dispatchable clean energy as the system backbone (Norway, New Zealand, parts of Latin America)
- **Wind-dominant (Western Europe)** — High wind penetration, limited solar resource, constrained land availability
- **Limited RE supply** — Resource-constrained systems reliant on a narrower set of clean technologies

For each archetype, we modelled the cost-optimal technology mix to reach progressively deeper decarbonisation targets, using consistent cost assumptions for generation, storage, and transmission but varying technology availability and resource quality.<sup>1</sup>

## At 80% decarbonisation, Australia is surprisingly competitive

{% plotlyChart "archetype-comparison", "Annualised system cost at 80% decarbonisation by archetype" %}
*Source: Aber Analytics power system archetype model*

In our standard scenario, Australia achieves 80% power system decarbonisation at an annualised system cost of **US$17.1 billion** — competitive with the Asian archetype (US$17.3bn) and well ahead of hydro-dominated systems (US$18.3bn), nuclear + RE (US$19.1bn), and wind-dominant systems (US$20.0bn).

This result may surprise anyone accustomed to hearing about Australia's energy challenges. But it reflects a straightforward reality: Australia has among the world's best combined solar and wind resources. When these are paired with efficient firming — gas peakers providing roughly 14 GW of capacity, batteries contributing around 24 GW — the resulting system is hard to beat on cost. The model builds approximately 50 GW of solar and wind for Australia at this decarbonisation level, leveraging a resource advantage that is genuinely world-class.

Across different demand shapes — industrial-led, consumer-driven, data centre-heavy — the optimal Australian system consistently converges on the same architecture: high renewables penetration with gas peaking. The demand mix matters less than the supply fundamentals.

## Transmission is the swing factor

Australia's competitive position comes with an important caveat: it is highly sensitive to the cost of connecting remote renewable generation to demand centres.

{% plotlyChart "transmission-sensitivity", "Australia's system cost as a function of transmission cost" %}
*Source: Aber Analytics power system archetype model*

Our sensitivity analysis shows that Australia's annualised system cost ranges from **US$15.6 billion** at low transmission costs to **US$19.1 billion** at high transmission costs — a 22% variation driven entirely by this single factor.

The mechanism is intuitive. Australia's best renewable resources — the Pilbara, Central West NSW, North Queensland, the Western Victorian plains — are hundreds of kilometres from major load centres. As transmission costs increase, the model progressively curtails solar build-out. The share of solar and wind in the generation mix drops from 74% at low transmission costs to effectively zero at the highest cost assumptions.

This has a direct read-through to current infrastructure decisions. Australia's actual transmission costs sit in the upper portion of the range we modelled, reflecting the well-documented challenges of building new high-voltage lines across vast distances. If transmission costs settle at the higher end — driven by the delays and cost overruns we've documented in [previous analysis](/insights/posts/2026-03-05-physical-bottlenecks-in-the-energy-transition/) — Australia's system cost advantage narrows from best-in-class to merely average.

The implication is clear: **transmission infrastructure is the single most important lever for Australia's long-run energy competitiveness.**

## The last 15% changes everything

The picture shifts significantly when decarbonisation pushes beyond 80%.

{% plotlyChart "decarb-trajectory", "System cost at 80% vs 95% decarbonisation" %}
*Source: Aber Analytics power system archetype model*

Moving from 80% to 95% decarbonisation increases Australia's annualised system cost by **US$3.5 billion — a 20% jump.** By contrast, the Asian archetype increases by just US$0.3 billion (2%). Even hydro-dominated and nuclear systems see proportionally smaller increases.

The reason is structural. Eliminating the last 15–20% of carbon emissions from a renewables-dominated system means displacing the gas peakers that provide the final layer of reliability. Replacing them with zero-emissions alternatives — longer-duration storage, clean firm generation, or demand flexibility — is expensive. Systems that already have dispatchable clean energy (hydro, geothermal, nuclear) face a much smaller incremental cost to reach very deep decarbonisation.

Our modelling confirms what first-principles analysis would suggest: clean firm generation (nuclear, geothermal, or equivalent) only becomes cost-effective in the Australian system at capital costs of around **US$3–4 per watt**. Below that threshold, gas peakers remain the cheapest firming option. This implies that Australia's path to very deep decarbonisation depends either on bringing clean firm costs down to that level, or on accepting a longer timeline for the final tranche of power system emissions.

## What this means for industry and investment

The system cost findings translate directly into industrial competitiveness — with implications that extend well beyond the energy sector.

### A structural cost advantage in the mid-transition

At 80% decarbonisation with well-managed transmission costs, Australia's power system costs are among the lowest globally. For energy-intensive industries — aluminium smelting, green hydrogen production, steel, data centres — this represents a genuine, durable cost advantage over competitors in Europe, Japan, or other high-cost energy jurisdictions.

This is not an incremental difference. At standard transmission assumptions, Australia's system cost is **15% lower than the wind-dominant (European) archetype** and **11% lower than nuclear + RE systems.** For industries where energy is a significant share of operating costs, this gap is material.

### The window for industrial attraction is now

Australia's cost advantage is most pronounced in the 70–85% decarbonisation range — roughly the period from the late 2020s through the mid-2030s. This is the window in which Australia should be actively positioning to attract energy-intensive investment. Industries that establish operations during this period benefit from structurally low energy costs for decades, even as the system continues to evolve.

### Deep decarbonisation requires a different strategy

For industries that require or commit to 100% clean energy — whether for regulatory, customer, or ESG reasons — Australia's advantage fades unless clean firm power costs fall significantly. This creates an important strategic nuance: **near-term industrial attraction should be anchored to the 80% system, while longer-term competitiveness depends on Australia's progress with emerging technologies** like advanced geothermal, small modular reactors, or very long-duration storage.

## The advantage is real — but conditional

Australia's energy resource endowment gives it a genuine structural advantage in the energy transition. Our modelling shows that a well-designed Australian power system at 80% decarbonisation is among the cheapest in the world — competitive with Asian alternatives and significantly cheaper than European pathways.

But this advantage is conditional, not automatic. It requires:

1. **Managing transmission costs** — the single most important lever for Australia's system cost competitiveness
2. **Building renewable infrastructure at pace** — which depends on solving the [physical delivery constraints](/insights/posts/2026-03-05-physical-bottlenecks-in-the-energy-transition/) that currently limit build rates
3. **Being realistic about the last 15%** — deep decarbonisation beyond ~85% requires clean firm power that Australia doesn't yet have at competitive costs
4. **Moving quickly** — the cost advantage window is open now, but it won't stay open indefinitely as other economies scale their own clean energy systems

The question is not whether Australia *can* have competitive energy costs. The modelling is clear: it can. The question is whether the infrastructure and policy decisions being made today will allow that potential to be realised.

<div class="footnotes">
<ol>
<li id="fn1">The six archetypes are stylised representations, not country-specific models. Each uses consistent cost assumptions for generation, storage, and transmission technologies, with resource quality and availability varied to match the archetype's characteristics. <a href="#fnref1">↩</a></li>
</ol>
</div>

<div class="how-we-did-this">
<h3>How we did this analysis</h3>
<p>We used the Aber Analytics power modelling platform to set up stylised scenario modelling of the power systems of global economies as they decarbonise. The model solves for the most efficient long-run marginal cost capacity mix to meet the demand of the system. The analysis took a range of demand archetypes, and varying technology choices and resource quality for each archetype.</p>
<figure class="how-we-did-this__figure">
<figcaption>Aber Analytics Modelling Platform schematic</figcaption>
<img src="/assets/images/methodology/model-schematic.png" alt="Aber Analytics Modelling Platform schematic">
</figure>
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
