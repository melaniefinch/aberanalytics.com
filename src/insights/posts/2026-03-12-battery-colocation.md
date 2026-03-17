---
title: "Sharing the load: How a BTM battery can create extra value for a developer and offtaker"
date: 2026-03-12
author: "Aber Analytics"
excerpt: "Most battery projects are competing for the same returns. Co-locating behind an industrial load is one of the clearest ways to access value that a standalone project won't see."
layout: article.njk
draft: false
permalink: /insights/posts/sharing-the-load/
tags: ["insights"]
---

<div class="article-lede">
<p><strong>A battery co-located behind an industrial load can access value pools that a standalone grid-scale project cannot.</strong> For the industrial consumer, that means lower energy costs and reduced wholesale exposure. For the battery developer, it means a higher margin ceiling than the merchant market alone provides. The same physical fact drives both: energy discharged on-site never touches the shared transmission network.</p>
</div>

A standard front-of-meter battery project makes money in the wholesale energy market: charging when prices are low, discharging when they are high, and capturing ancillary services revenue along the way. Those returns are available to any grid-scale project, and are likely to compress as more batteries chase them.

The value of a ready-to-build project to a developer is set by buyers' confidence in those returns: a function of the price outlook, cost of capital, and the revenue model underpinning the forecast.

Behind-the-meter (BTM) batteries are located on the customer side of the network connection, sharing a grid connection with an industrial load. On top of the wholesale market revenue available to any grid-scale project, a BTM battery can access additional value pools. Who captures them depends on how the battery is operated and contracted.

## Value pools available to a BTM battery

<div class="value-bar-chart">

<div class="value-bar">
<div class="value-bar__seg value-bar__seg--cong" data-key="cong">Avoided congestion</div>
<div class="value-bar__seg value-bar__seg--loss" data-key="loss">Avoided transmission losses</div>
<div class="value-bar__seg value-bar__seg--tariff" data-key="tariff">Network tariff management</div>
<div class="value-bar__seg value-bar__seg--alpha" data-key="alpha">Energy market alpha</div>
<div class="value-bar__seg value-bar__seg--dev value-bar__seg--ftm-line" data-key="dev">Developer margin</div>
<div class="value-bar__seg value-bar__seg--land" data-key="land">Land</div>
</div>

<div class="value-bar-annot">
<div class="vba-group vba-group--btm">Additional value from BTM offtake</div>
<div class="vba-group vba-group--ftm">Available to FTM project</div>
</div>

<div class="value-bar-legend">

<div class="value-bar-legend__group">
<div class="value-bar-legend__group-header vblg--btm">Additional value from BTM offtake</div>
<div class="value-bar-legend__row" data-key="cong">
<span class="vb-dot vb-dot--cong"></span>
<div><strong>Avoided congestion</strong><p>A battery dispatching to on-site load is not constrained by upstream network limits, capturing value in hours when grid-scale assets may be prevented from exporting. For an industrial offtaker contracting supply from a standalone battery, congestion at the project's node is a delivery risk. A co-located battery eliminates it.</p></div>
</div>
<div class="value-bar-legend__row" data-key="loss">
<span class="vb-dot vb-dot--loss"></span>
<div><strong>Avoided transmission losses</strong><p>Energy discharged to the site bypasses the transmission network, avoiding the loss factor (MLF) deductions that reduce the effective revenue of grid-scale assets, increasing the value of each MWh discharged from the battery.</p></div>
</div>
<div class="value-bar-legend__row" data-key="tariff">
<span class="vb-dot vb-dot--tariff"></span>
<div><strong>Network tariff savings</strong><p>Large industrial sites often pay demand charges based on their peak consumption (TUOS). A co-located battery can reduce measured peak demand, reducing network tariffs or enabling additional loads.</p></div>
</div>
<div class="value-bar-legend__row" data-key="alpha">
<span class="vb-dot vb-dot--alpha"></span>
<div><strong>Energy market alpha</strong><p>A contracted battery gives an industrial offtaker a hedge against wholesale price exposure. The value depends on the offtaker's view of future prices and their risk appetite, both of which can differ from the market consensus. An offtaker who expects high prices, or who places a premium on cost certainty, will value this hedge more than the spot market implies. The reverse is also true.</p></div>
</div>
</div>

<div class="value-bar-legend__group">
<div class="value-bar-legend__group-header vblg--base">Available to FTM project</div>
<div class="value-bar-legend__row" data-key="dev">
<span class="vb-dot vb-dot--dev"></span>
<div><strong>Developer margin</strong><p>Market value of a ready-to-build project, influenced by expected future energy prices, the supply and demand for battery projects, and the cost of debt and equity at time of sale or financial close.</p></div>
</div>
<div class="value-bar-legend__row" data-key="land">
<span class="vb-dot vb-dot--land"></span>
<div><strong>Land</strong><p>Best next alternative for the site. For an industrial host, the relevant comparison is existing site access against the cost and lead time of securing a new grid connection from scratch.</p></div>
</div>
</div>

</div>

</div>

<script>
(function() {
  var segs = document.querySelectorAll('.value-bar__seg[data-key]');
  var rows = document.querySelectorAll('.value-bar-legend__row[data-key]');
  function activate(key) {
    segs.forEach(function(s) { s.classList.toggle('vb-active', s.dataset.key === key); });
    rows.forEach(function(r) { r.classList.toggle('vb-active', r.dataset.key === key); });
  }
  function clear() {
    segs.forEach(function(s) { s.classList.remove('vb-active'); });
    rows.forEach(function(r) { r.classList.remove('vb-active'); });
  }
  segs.forEach(function(seg) {
    seg.addEventListener('click', function() {
      seg.classList.contains('vb-active') ? clear() : activate(seg.dataset.key);
    });
  });
  rows.forEach(function(row) {
    row.addEventListener('click', function() {
      row.classList.contains('vb-active') ? clear() : activate(row.dataset.key);
    });
  });
})();
</script>

The size of each pool varies by site. Loss factors differ by connection point and shift as the network evolves with new connections. Tariff structures vary across network businesses and tariff classes. How much peak shaving is achievable depends on the load profile, and the same battery capacity cannot always serve multiple value pools simultaneously: a battery committed to peak shaving may not be available for energy market dispatch in the same interval. Quantifying the stack for a specific site, and understanding how those pools interact, requires modelling it.

## If you're an industrial consumer

Your load, connection, and land are assets in the battery development market. A developer co-locating a battery with your site gets access to value that a standalone project cannot replicate, which can give you negotiating leverage.

A well-structured BTM arrangement could reduce your energy costs in two ways: lower demand charges from peak shaving, and a hedge against wholesale price volatility if you have spot exposure. The size of those savings depends on your network tariff structure, your load profile, your view of future energy price distributions and how the contract is written.

Your involvement can range from passive to active. At one end, you lease the land and connection to a developer and take a fixed payment or a share of savings. At the other, you develop the battery directly, taking on the capital and the upside. Most arrangements sit somewhere in between, with the industrial host contributing site access and the developer contributing capital, connection work, and operational expertise. What share of the value you capture is a function of what you bring and how you negotiate.

## If you're a battery developer

Developer margin, the premium a ready-to-build project commands over development costs, is determined by the accepted market value of the project over its operational lifetime. For a merchant project, that expectation tracks the wholesale market outlook. As the BESS fleet grows and spreads compress, expected battery returns (and associated margins) are likely to soften.

If a partnership with a large industrial load is possible, a BTM project accesses value pools that sit outside the traditional merchant stack. Congestion avoidance, network tariff savings, and avoided transmission losses do not compress as the BESS fleet grows because they are driven by network conditions and site-specific factors, not by how many batteries are chasing the same wholesale spread. How that additional value is split between developer and offtaker is a contract question, but the existence of it raises the margin ceiling on both sides of the deal.

<div class="contact-cta">
<p>Aber Analytics models the BTM value stack for industrial consumers and battery developers, combining power market price modelling with site-level dispatch optimisation to quantify each value pool. <a href="mailto:info@aberanalytics.com">Get in touch</a> for more information.</p>
</div>
