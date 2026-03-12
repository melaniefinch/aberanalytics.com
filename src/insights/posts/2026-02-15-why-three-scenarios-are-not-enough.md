---
title: "Why three scenarios are not enough"
date: 2026-02-15
author: "Aber Analytics"
excerpt: "The standard approach to energy market analysis relies on a handful of deterministic scenarios. Here's why that misses the point — and what to do instead."
layout: article.njk
draft: true
plotly: true
tags: ["insights"]
extraScripts:
  - https://cdn.plot.ly/plotly-2.35.2.min.js
---

Every major energy market forecast in Australia follows the same playbook: define three to five scenarios (typically a base case, a high case, and a low case), run each through a dispatch model, and present the results. AEMO's Integrated System Plan uses this approach. So do the major consultancies.

The problem isn't that scenarios are wrong — it's that they're **radically incomplete**.

## The illusion of coverage

Three scenarios feel like they cover the range of possibilities. You have an optimistic case, a pessimistic case, and something in the middle. But consider what's actually being modelled:

- **Gas prices** might take any of dozens of trajectories depending on LNG export dynamics, domestic reservation policy, and global supply shocks
- **Renewable build rates** depend on supply chain constraints, planning approvals, community opposition, and the pace of transmission investment
- **Demand growth** is increasingly uncertain thanks to electrification, behind-the-meter solar, and data centre load

Each of these variables interacts with the others. Three scenarios cannot possibly capture the combinatorial space of outcomes.

## A concrete example

Consider a simple case: you're evaluating a 200 MW wind farm in NSW. The two variables that matter most for your revenue are:

1. **Wholesale electricity price** — driven by supply/demand balance across the NEM
2. **Wind generation profile** — driven by weather patterns specific to your site

In a three-scenario world, you might model:

| Scenario | Wholesale Price | Wind Output |
|----------|----------------|-------------|
| High     | $85/MWh        | P75 year    |
| Base     | $65/MWh        | P50 year    |
| Low      | $45/MWh        | P25 year    |

This gives you three revenue estimates. But reality doesn't work this way — you could easily have a high-price year *with* low wind (drought conditions pushing up gas demand while anticyclonic patterns suppress wind). That scenario might be worse than any of your three cases.

{% plotlyChart "scenario-comparison", "Revenue distribution: 3 scenarios vs 500 simulations" %}

## The probabilistic alternative

Instead of choosing a handful of scenarios, probabilistic modelling generates hundreds or thousands of internally consistent simulations. Each simulation represents a plausible future where:

- Gas prices follow a stochastic process calibrated to historical volatility and forward curves
- Renewable build follows a range of plausible trajectories
- Weather patterns are drawn from historical analogues
- Demand evolves based on electrification and efficiency trends
- Policy settings vary across a defined range

The result isn't three numbers — it's a **distribution**. You can see the P10, P50, and P90 outcomes. You can measure the probability of your project being cash-flow negative in any given year. You can identify the specific combinations of inputs that lead to the worst outcomes.

## Why this matters for decisions

The difference between deterministic and probabilistic analysis shows up most clearly in decision-making:

### Investment screening
With three scenarios, every project looks either "good" (positive NPV in all three) or "bad" (negative in all three) or "uncertain" (mixed results). The uncertain category is where most real projects live — and three scenarios give you no tools to differentiate within it.

With 500 simulations, you can say: "This project has a 73% probability of achieving a 10% IRR or better, and a 12% probability of being cash-flow negative in the first five years." That's a decision you can actually make.

### Portfolio construction
A portfolio of assets has correlation structures that three scenarios cannot capture. How does your wind farm perform in the same years that your gas peaker is profitable? What happens to your solar + storage project when both wholesale prices and firming spreads compress?

Probabilistic modelling captures these correlations because the simulations are internally consistent — every asset in your portfolio sees the same market conditions in each simulation.

### Risk management
Tail risks are, by definition, underrepresented in a three-scenario framework. But they're often the risks that matter most. A 1-in-20 year price crash might not show up in your base case, but it could determine whether your project survives its debt covenants.

## Getting started

Moving from deterministic to probabilistic analysis doesn't require throwing out everything you know. The same fundamental market dynamics apply — probabilistic modelling just explores them more thoroughly.

<div class="contact-cta">
<p>Our probabilistic modelling platform runs hundreds of market simulations to quantify the full distribution of outcomes, not just the centre. <a href="mailto:info@aberanalytics.com">Get in touch</a> to see what it reveals for your portfolio or project.</p>
</div>

---

## References and methodology

<script>
// Revenue distribution comparison chart
document.addEventListener('DOMContentLoaded', function() {
    const chartEl = document.getElementById('scenario-comparison');
    if (!chartEl) return;

    // Simulated revenue distribution (500 sims)
    const revenues = [];
    for (let i = 0; i < 500; i++) {
        revenues.push(35 + Math.random() * 80 + (Math.random() - 0.5) * 30);
    }

    const trace1 = {
        x: revenues,
        type: 'histogram',
        nbinsx: 40,
        marker: {
            color: 'rgba(82, 48, 139, 0.35)',
            line: { color: '#52308B', width: 1 }
        },
        name: '500 simulations'
    };

    // Three scenario lines
    const scenarios = [
        { x: 45, label: 'Low', color: '#D55268' },
        { x: 65, label: 'Base', color: '#437F86' },
        { x: 85, label: 'High', color: '#75CAAE' }
    ];

    const shapes = scenarios.map(s => ({
        type: 'line',
        x0: s.x, x1: s.x,
        y0: 0, y1: 1,
        yref: 'paper',
        line: { color: s.color, width: 2.5, dash: 'dash' }
    }));

    const annotations = scenarios.map(s => ({
        x: s.x,
        y: 1.02,
        yref: 'paper',
        text: s.label,
        showarrow: false,
        font: { size: 12, color: s.color, family: 'Inter, sans-serif', weight: 600 }
    }));

    const layout = {
        font: { family: 'Inter, sans-serif' },
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent',
        margin: { t: 30, r: 20, b: 50, l: 50 },
        xaxis: {
            title: { text: 'Annual Revenue ($M)', font: { size: 12 } },
            gridcolor: 'rgba(82, 48, 139, 0.08)',
            zeroline: false
        },
        yaxis: {
            title: { text: 'Frequency', font: { size: 12 } },
            gridcolor: 'rgba(82, 48, 139, 0.08)',
            zeroline: false
        },
        shapes: shapes,
        annotations: annotations,
        showlegend: false
    };

    Plotly.newPlot(chartEl, [trace1], layout, {
        responsive: true,
        displayModeBar: false
    });
});
</script>
