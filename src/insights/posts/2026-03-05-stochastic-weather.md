---
title: "Under the weather: Stochastic variance in VRE returns"
date: 2026-03-05
author: "Aber Analytics"
excerpt: "Traditional reference-year modelling may leave tail risks unquantified. A stochastic approach across 500 synthetic weather scenarios reveals the full distribution of revenue outcomes for wind and solar assets."
layout: article.njk
draft: false
tags: ["insights"]
---

**Wind revenue is significantly more variable than solar — and traditional reference-year modelling leaves much of that tail risk unquantified.** We ran 500 synthetic weather scenarios through our dispatch model and found that two assets with the same median revenue can have very different risk profiles depending on location and resource quality.

Weather variability is the defining driver of returns for any wind or solar asset, generating significant differences in revenue across technologies and across individual assets. This inherent variance is not always fully captured by traditional market modelling approaches.

## What reference years can't capture

AEMO's Integrated System Plan, for example, relies on a set of historical reference years to represent the range of possible conditions. This preserves real-world correlations between demand, wind and solar across regions, but is constrained to combinations of conditions that have actually occurred. Unusual or novel weather combinations that are statistically plausible but have not yet been observed fall outside the modelled range.

## Modelling the full distribution

Our approach generated 500 synthetic but physically realistic scenarios using a Monte Carlo simulation framework, with correlations preserved across asset-level wind output, asset-level solar output, and statewide demand. The result is a distribution of outcomes that includes novel combinations of conditions that are statistically plausible but have never been observed before.
<p class="chart-label">Charts: Generation and price spread (left) | Distribution of revenue (right) &middot; QLD solar and SA wind, 500 simulations, January 2026</p>

<div class="chart-legend">
  <span class="chart-legend-item"><span class="chart-dot" style="background:#e8913a"></span>Solar asset (QLD)</span>
  <span class="chart-legend-item"><span class="chart-dot" style="background:#5a7fa8"></span>Wind asset (SA)</span>
</div>

<div class="chart-pair chart-pair--horizontal">
  <img src="/assets/images/stochastic-weather/Chart1a.png" alt="Generation and price spread by simulation">
  <img src="/assets/images/stochastic-weather/Chart1b.png" alt="Distribution of revenue">
</div>
*Source: BBA Stochastic Probability Model; BBA Power Model*

## Weather risk is not equal across technologies

Each dot represents one of 500 simulated Januaries for a solar farm in Queensland and a wind farm in South Australia. The contrast is immediate:

- **Wind outcomes are far more dispersed.** Revenue varies widely across simulations, reflecting the day-to-day unpredictability of wind resources.
- **Solar outcomes cluster more tightly.** Solar follows a more predictable diurnal pattern, which constrains the range of possible generation and revenue outcomes.

The width of each distribution shows the revenue risk an asset owner faces from weather variability alone, before any consideration of other typical risks like market, network congestion or policy risks.

<p class="chart-label">Chart: Simulated solar and wind revenue for 25 randomly selected assets, January 2026</p>

![Simulated revenue by asset across the NEM](/assets/images/stochastic-weather/Chart2.png)
*Source: BBA Stochastic Probability Model; BBA Power Model*

## What this means for asset owners

Even within each technology, there is substantial variation in both the level and spread of simulated revenue across assets in different weather conditions. Some solar assets show tight distributions well above their break-even revenue threshold, suggesting strong and reliable economics regardless of the weather scenario. The wind assets show an even wider spread in outcomes, with certain assets facing significant downside exposure in low-wind scenarios while others carry large upside potential.

For asset owners and investors who typically work from a single forecast, a point estimate tells the expected outcome but says nothing about the range of outcomes around it. Two assets with the same median revenue can have very different risk profiles depending on how tightly or loosely their outcomes are distributed.

**Understanding that distribution is what allows for more informed decisions on asset selection, project financing, and portfolio construction.** As the renewable fleet grows and weather-driven revenue risk becomes a more significant factor in project economics, the ability to model that risk with greater precision will only become more valuable.

<div class="how-we-did-this">
<h3>How we did this analysis</h3>
<p>We used the BBA Stochastic Probability Model to generate 500 synthetic but physically realistic weather scenarios via Monte Carlo simulation, preserving correlations across asset-level wind output, solar output, and statewide demand. These were dispatched through the BBA Power Model to produce revenue distributions. Break-even revenue assumes a 15% WACC, 20-year economic lifespan and CAPEX estimates from CSIRO GenCost.<sup>1</sup></p>
<!-- TODO: Add a screenshot of the modelling platform. -->
</div>

<div class="footnotes">
<ol>
<li id="fn1">CSIRO, <em>GenCost 2024–25</em>. We used the central estimates for onshore wind and utility-scale solar CAPEX. <a href="#fnref1">↩</a></li>
</ol>
</div>
