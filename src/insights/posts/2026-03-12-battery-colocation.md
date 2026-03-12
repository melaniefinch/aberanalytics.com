---
title: "Sharing the load: How a BTM battery can create extra value for a developer and offtaker"
date: 2026-03-12
author: "Aber Analytics"
excerpt: "A typical battery development turns on land and reaching shovel-ready. Co-locating with an industrial load unlocks additional value pools that a front-of-meter project cannot access, and how those pools are shared is a commercial negotiation."
layout: article.njk
draft: true
tags: ["insights"]
---

<div class="article-lede">
<p><strong>Battery development starts with land and the work to reach shovel-ready.</strong> A developer willing to structure a behind-the-meter arrangement with an industrial offtaker can access additional value pools beyond what a front-of-meter project provides. Those additional pools open up when battery and load share a grid connection.</p>
</div>

Across the NEM, battery development has typically been a front-of-meter exercise: a site, a grid connection, and a merchant or contracted revenue stream. Industrial consumers are increasingly contracting battery offtake as part of their energy strategy. Projects co-located with those loads carry a larger value stack, and access to each layer depends on how the commercial arrangements are structured.

## Traditional value

Battery development economics start from two foundations.

**Land** is the opportunity cost of the site. For a greenfield project that means acquiring a suitable location and securing access to a grid connection point. An industrial host's comparison is the value of existing site access against the cost and lead time of starting a new connection from scratch.

**Developer margin** is the value created through the development process: securing a grid connection agreement, obtaining development approvals, negotiating EPC arrangements, and arranging financing. A project at shovel-ready status commands a premium over raw development costs. The size of that premium depends on expected energy prices, the supply and demand for battery projects, and the cost of capital at the time of sale or financial close.

<div class="value-bar-chart">

<div class="value-bar value-bar--mini">
<div class="value-bar__seg value-bar__seg--dev">Developer margin</div>
<div class="value-bar__seg value-bar__seg--land">Land</div>
</div>

<div class="value-bar-legend">
<div class="value-bar-legend__group">
<div class="value-bar-legend__row">
<span class="vb-dot vb-dot--dev"></span>
<div><strong>Developer margin</strong><p>Market value of a ready-to-build project, influenced by expected future energy prices, the supply and demand for battery projects, and the cost of debt and equity at time of sale or financial close.</p></div>
</div>
<div class="value-bar-legend__row">
<span class="vb-dot vb-dot--land"></span>
<div><strong>Land</strong><p>Best next alternative for the site. For an industrial host, the relevant comparison is existing site access against the cost and lead time of securing a new grid connection from scratch.</p></div>
</div>
</div>
</div>

</div>

## Co-locating with an industrial load

When there is a willing offtaker with a large industrial load, additional value pools appear. Each one traces back to the same physical fact: the battery and the load share a grid connection, so energy discharged on-site never enters the shared transmission network.

<div class="value-bar-chart">

<div class="value-bar">
<div class="value-bar__seg value-bar__seg--cong" data-key="cong">Avoided congestion</div>
<div class="value-bar__seg value-bar__seg--loss" data-key="loss">Avoided tx losses</div>
<div class="value-bar__seg value-bar__seg--tariff" data-key="tariff">Network tariff mgmt</div>
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
<div><strong>Avoided congestion</strong><p>A co-located battery serving on-site load dispatches regardless of upstream network conditions, capturing value in hours when standalone assets behind constrained transmission may be curtailed.</p></div>
</div>
<div class="value-bar-legend__row" data-key="loss">
<span class="vb-dot vb-dot--loss"></span>
<div><strong>Avoided transmission losses</strong><p>Marginal loss factors (MLFs) quantify the resistive losses incurred moving energy through the transmission network. Energy discharged to on-site load bypasses that network entirely, avoiding MLF-based deductions on both sides of the transaction.</p></div>
</div>
<div class="value-bar-legend__row" data-key="tariff">
<span class="vb-dot vb-dot--tariff"></span>
<div><strong>Network tariff management</strong><p>TUOS demand charges are levied on peak consumption, and for a large industrial site they represent a material share of total energy costs. A co-located battery can discharge during demand peaks to reduce the site's measured demand and lower the bill directly.</p></div>
</div>
<div class="value-bar-legend__row" data-key="alpha">
<span class="vb-dot vb-dot--alpha"></span>
<div><strong>Energy market alpha</strong><p>For an industrial offtaker, a contracted battery can serve as a hedge against wholesale price exposure, converting spot risk into a more predictable energy cost. The value captured depends on the offtaker's view of the market and their tolerance for price risk.</p></div>
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

## Splitting the value

The exact realisation of each pool depends on site and offtake-specific conditions. Network tariff savings flow through the industrial host's energy bill, so accessing them requires an agreed mechanism for measuring and sharing those savings. Avoided losses depend on the host's MLF, which varies by node. Congestion avoidance accrues to whoever controls dispatch. Each pool requires a contractual structure to capture.

What the numbers look like for a specific site is a modelling question. Transmission loss factors differ by node, TUOS structures vary by network and tariff class, and load profiles determine how much peak shaving is achievable. The general principle holds across configurations, but the size of each pool and the appropriate sharing mechanism are site-specific.

## For industrial consumers

If you operate a large industrial site with a substantial grid connection, you have something battery developers want: your load, your connection, your land. A co-located battery will, in most configurations, reduce your energy costs. What matters is what role you want to play and what share of the value you negotiate for.

The options run from passive (lease the land, let someone else develop) to active (develop the battery directly). Each point on that spectrum involves a different capital commitment, risk profile, and capability requirement. Your industrial load creates battery project value that the wholesale market alone cannot provide.

<div class="contact-cta">
<p>Aber Analytics has modelled the value of BTM battery projects for a range of large industrial loads, combining our power market price universes with BTM dispatch optimisation to quantify each value pool at the site level. <a href="mailto:info@aberanalytics.com">Get in touch</a> to discuss how co-location economics apply to your site or portfolio.</p>
</div>

---

## References and methodology

<div class="how-we-did-this">
<h3>How we did this analysis</h3>
<p>This article describes structural principles of battery co-location economics in the Australian National Electricity Market. Value pool descriptions are based on NEM market rules, TUOS charging frameworks, and marginal loss factor methodology as applied by AEMO. The bar charts show illustrative relative proportions only; actual value pool sizes depend on site-specific conditions including transmission capacity, load profile, network tariff structures, and energy market outcomes. No specific project or site is referenced.</p>
</div>
