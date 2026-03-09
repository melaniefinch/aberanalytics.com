---
title: "Who pays for the poles and wires? Winners and losers from network tariff reform"
date: 2026-03-06
author: "Aber Analytics"
excerpt: "The AEMC's proposed shift to fixed-dominant network tariffs would cut bills for grid-dependent households but raise costs for most solar and battery owners — the households driving Australia's energy transition."
layout: article.njk
draft: true
tags: ["insights"]
plotly: true
extraScripts:
  - https://cdn.plot.ly/plotly-2.35.2.min.js
---

**The AEMC's proposed shift to fixed-dominant network tariffs creates clear winners and losers — and the losers are mostly households that have already invested in rooftop solar and batteries.** We modelled the bill impact across a range of household configurations and found that the reform improves short-term equity for grid-dependent consumers but directly erodes the economics of the distributed energy resources Australia is counting on to decarbonise.

The Australian Energy Market Commission has signalled that network tariffs should shift from a predominantly variable (usage-based) structure to one where fixed charges make up the majority of the bill. The logic is straightforward: the cost of maintaining poles and wires doesn't change much with how much electricity flows through them, so a fixed charge is a fairer way to recover those costs. But the distributional consequences are significant.

We tested two reform scenarios — fixed charges rising from today's ~35% of total network tariffs to 60% and 80% — keeping the total network revenue the same. The question was simple: who pays more, and who pays less?

## The headline: solar and battery owners pay more, everyone else pays less

{% plotlyChart "bill-change-chart", "Annual bill change by household type under tariff reform" %}
*Source: Aber Analytics BTM optimisation model*

The pattern is stark. Households that depend most on the grid — base households and EV owners without solar or batteries — see meaningful bill reductions. Households that have invested in behind-the-meter generation and storage see increases, in some cases substantial ones.

Under the 80% fixed scenario, a solar-only household faces a bill increase of around **$148 per year**. A household with solar and a 10 kWh battery — the most common residential DER configuration in Australia — faces an increase of up to **$368 per year**. Meanwhile, an EV owner with no DER saves **$293 per year**.

The mechanism is simple. Solar and battery owners have already reduced their grid consumption through self-consumption and load-shifting. Under the current tariff, that behaviour reduces their network charges proportionally. When the fixed component rises, those volume-charge savings shrink — but the fixed increase applies equally to everyone.

## What this means for households with existing BTM systems

For the roughly 3.7 million Australian households that have already installed rooftop solar<sup>1</sup>, this reform changes the deal retrospectively. These households made investment decisions based on a tariff structure where every kilowatt-hour of self-consumption avoided a network charge. Under a fixed-dominant tariff, that avoided cost is worth less.

{% plotlyChart "btm-impact-chart", "Bill impact on behind-the-meter households (80% fixed scenario)" %}
*Source: Aber Analytics BTM optimisation model*

The impact scales with how much a household has invested. Solar-only households see a moderate hit. Add a small battery and the impact roughly doubles, because the battery was optimised to shift consumption away from peak network charges — charges that are now lower under the reformed tariff. Solar-plus-battery households that had previously achieved near-zero or negative net bills (effectively earning money from the grid) are pushed back into positive bill territory.

Large batteries (50 kWh) on wholesale tariffs are the exception — they can capture enough export arbitrage under the reformed structure to more than offset the higher fixed charges. But this is a niche outcome. Most Australian household batteries are in the 5–15 kWh range, and many are on time-of-use rather than wholesale pricing.

## What this means for new BTM investment decisions

The reform doesn't just affect existing owners — it changes the investment case for future purchases. Under a fixed-dominant tariff:

- **Solar payback periods lengthen.** The bill savings from self-consumption are smaller, which means longer payback on the upfront investment.
- **Small battery economics weaken.** The arbitrage spread between peak and off-peak network charges narrows, reducing the value of load-shifting.
- **Large batteries on wholesale tariffs improve.** For households that can access wholesale pricing and have enough storage to trade actively, the reformed tariff creates new export opportunities.

This creates an awkward incentive structure. The DER configurations that most Australian households are likely to adopt — a 6–10 kW solar system with a 10–15 kWh battery — become less attractive. The configurations that benefit — large batteries on wholesale tariffs — are available only to a small subset of households with the capital, roof space, and tariff access to take advantage.

## What this means for households without BTM

For the roughly 60% of Australian households that don't have rooftop solar, the reform delivers modest but real savings. A base household consuming 10 kWh per day saves approximately **$82 per year** — about a 4% bill reduction. EV owners save more: **$228–$293 per year**, because their higher consumption means they were paying proportionally more in variable network charges.

These savings reflect the core equity argument for the reform. Under the current tariff structure, households that can afford solar and batteries reduce their network charges while still relying on the network for backup and export. The remaining costs are recovered from households that can't — disproportionately renters, apartment dwellers, and lower-income households. A higher fixed charge spreads those costs more evenly.

The tension is real. There are legitimate equity concerns with the current tariff structure. But solving them by penalising the most common forms of household renewable investment creates a different problem — one that runs directly counter to Australia's decarbonisation objectives.

## The policy dilemma

The reform exposes a fundamental tension in energy policy. Network cost recovery needs to be fair. But the price signals that drive household DER investment also need to be preserved. A fixed-dominant tariff does the first at the expense of the second.

More sophisticated tariff designs — locational pricing, dynamic export tariffs, or capacity-based charges that reward demand flexibility — could potentially achieve both objectives. But those designs are more complex to implement and harder to explain to consumers.

If a fixed-dominant tariff is pursued, it should be treated as a transitional measure with a clear timeline and accompanied by mechanisms to preserve the investment case for household DER. Without that, the reform risks slowing the very transition it sits within.

<div class="footnotes">
<ol>
<li id="fn1">Clean Energy Regulator, <em>Postcode data for small-scale installations</em>, February 2026. Solar installation count reflects cumulative small-scale technology certificates (STCs) for solar PV systems. <a href="#fnref1">↩</a></li>
</ol>
</div>

<div class="how-we-did-this">
<h3>How we did this analysis</h3>
<p>We used the Aber Analytics BTM optimisation model to simulate household energy costs under current and reformed network tariff structures. The model optimises battery charging, discharging, and export behaviour for each tariff scenario, using a typical household load of 10 kWh/day. We tested fixed-charge proportions of 60% and 80% (up from ~35% today), with reformed tariffs calculated to maintain the same total network revenue for a 10 kWh/day household. Scenarios include combinations of solar (9.975 kW), battery (10 kWh and 50 kWh), EV ownership, and both time-of-use and wholesale volume tariffs.</p>
<figure class="how-we-did-this__figure">
<figcaption>Aber Analytics Modelling Platform schematic</figcaption>
<img src="/assets/images/methodology/model-schematic.png" alt="Aber Analytics Modelling Platform schematic">
</figure>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {

    // Chart 1: Bill change by household type (80% fixed, averaged across TOU/Wholesale)
    const billEl = document.getElementById('bill-change-chart');
    if (billEl) {
        const types = [
            'Solar + 10 kWh<br>battery',
            'Solar + 50 kWh<br>battery',
            '10 kWh battery',
            'Solar only',
            'EV + solar',
            'Base household',
            'EV owner<br>(no DER)',
            '50 kWh battery'
        ];
        const change60 = [236, 137, 106, 78, -8, -82, -228, -90];
        const change80 = [368, 213, 180, 148, 24, -82, -293, -109];

        const trace60 = {
            y: types,
            x: change60,
            type: 'bar',
            orientation: 'h',
            name: '60% fixed',
            marker: {
                color: change60.map(v => v >= 0 ? 'rgba(213, 82, 104, 0.45)' : 'rgba(67, 127, 134, 0.45)')
            },
            text: change60.map(v => (v >= 0 ? '+$' : '-$') + Math.abs(v)),
            textposition: 'outside',
            textfont: { size: 11, family: 'Inter, sans-serif' }
        };

        const trace80 = {
            y: types,
            x: change80,
            type: 'bar',
            orientation: 'h',
            name: '80% fixed',
            marker: {
                color: change80.map(v => v >= 0 ? '#D55268' : '#437F86')
            },
            text: change80.map(v => (v >= 0 ? '+$' : '-$') + Math.abs(v)),
            textposition: 'outside',
            textfont: { size: 11, family: 'Inter, sans-serif' }
        };

        const layout = {
            font: { family: 'Inter, sans-serif' },
            paper_bgcolor: 'transparent',
            plot_bgcolor: 'transparent',
            margin: { t: 10, r: 80, b: 50, l: 150 },
            barmode: 'group',
            xaxis: {
                title: { text: 'Annual bill change ($/year)', font: { size: 12 } },
                gridcolor: 'rgba(82, 48, 139, 0.08)',
                zeroline: true,
                zerolinecolor: 'rgba(82, 48, 139, 0.2)',
                zerolinewidth: 1.5,
                range: [-380, 450]
            },
            yaxis: {
                gridcolor: 'rgba(82, 48, 139, 0.08)',
                zeroline: false,
                automargin: true
            },
            showlegend: true,
            legend: { orientation: 'h', y: -0.15, x: 0.5, xanchor: 'center' },
            shapes: [{
                type: 'line',
                x0: 0, x1: 0,
                y0: -0.5, y1: types.length - 0.5,
                line: { color: 'rgba(82, 48, 139, 0.15)', width: 1 }
            }],
            annotations: [{
                x: 200, y: types.length - 0.5,
                yref: 'y',
                text: '<b>Bills increase →</b>',
                showarrow: false,
                font: { color: '#D55268', size: 10 },
                yshift: 15
            }, {
                x: -200, y: types.length - 0.5,
                yref: 'y',
                text: '<b>← Bills decrease</b>',
                showarrow: false,
                font: { color: '#437F86', size: 10 },
                yshift: 15
            }]
        };

        Plotly.newPlot(billEl, [trace60, trace80], layout, { responsive: true, displayModeBar: false });
    }

    // Chart 2: BTM household impact breakdown (80% fixed, TOU vs Wholesale)
    const btmEl = document.getElementById('btm-impact-chart');
    if (btmEl) {
        const types = [
            'Solar +<br>50 kWh battery',
            'Solar +<br>10 kWh battery',
            'Solar only',
            '50 kWh<br>battery',
            '10 kWh<br>battery'
        ];

        const touChange = [404, 404, 152, 234, 234];
        const wholeChange = [22, 333, 145, -453, 125];

        const traceTOU = {
            y: types,
            x: touChange,
            type: 'bar',
            orientation: 'h',
            name: 'Time-of-use tariff',
            marker: { color: '#D55268' },
            text: touChange.map(v => (v >= 0 ? '+$' : '-$') + Math.abs(v)),
            textposition: 'outside',
            textfont: { size: 11 }
        };

        const traceWholesale = {
            y: types,
            x: wholeChange,
            type: 'bar',
            orientation: 'h',
            name: 'Wholesale tariff',
            marker: { color: '#52308B' },
            text: wholeChange.map(v => (v >= 0 ? '+$' : '-$') + Math.abs(v)),
            textposition: 'outside',
            textfont: { size: 11 }
        };

        const layout = {
            font: { family: 'Inter, sans-serif' },
            paper_bgcolor: 'transparent',
            plot_bgcolor: 'transparent',
            margin: { t: 10, r: 80, b: 50, l: 140 },
            barmode: 'group',
            xaxis: {
                title: { text: 'Annual bill change ($/year)', font: { size: 12 } },
                gridcolor: 'rgba(82, 48, 139, 0.08)',
                zeroline: true,
                zerolinecolor: 'rgba(82, 48, 139, 0.2)',
                zerolinewidth: 1.5,
                range: [-530, 480]
            },
            yaxis: {
                gridcolor: 'rgba(82, 48, 139, 0.08)',
                zeroline: false,
                automargin: true
            },
            showlegend: true,
            legend: { orientation: 'h', y: -0.15, x: 0.5, xanchor: 'center' },
            annotations: [{
                x: -453, y: '50 kWh<br>battery',
                text: 'Large batteries on<br>wholesale can export<br>enough to offset',
                showarrow: true,
                arrowhead: 2,
                ax: -60,
                ay: -40,
                font: { color: '#52308B', size: 10 }
            }]
        };

        Plotly.newPlot(btmEl, [traceTOU, traceWholesale], layout, { responsive: true, displayModeBar: false });
    }

});
</script>
