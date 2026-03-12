---
title: "The hidden value in your industrial load"
date: 2026-03-12
author: "Aber Analytics"
excerpt: "A battery development creates value across six distinct pools. Three are available to any project. Three more only appear when the battery sits behind the meter of a large industrial load — and how they are shared between developer and host is a commercial negotiation."
layout: article.njk
draft: true
tags: ["insights"]
---

<div class="article-lede">
<p><strong>A battery development creates value across six distinct pools.</strong> Land and developer margin are available to any front-of-meter project. Energy market alpha and three BTM-specific layers — network tariff management, avoided transmission losses, and avoided congestion — require an industrial host or a contracted offtake arrangement to access. How those pools are distributed between developer and host is a commercial negotiation, not a fixed outcome.</p>
</div>

## Battery project value

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
<div><strong>Avoided congestion</strong><p>Local and upstream network constraints. A co-located battery serving on-site load dispatches regardless of upstream conditions — capturing value in the hours when standalone assets may be curtailed.</p></div>
</div>
<div class="value-bar-legend__row" data-key="loss">
<span class="vb-dot vb-dot--loss"></span>
<div><strong>Avoided transmission losses</strong><p>Marginal loss factor (MLF), driven by site location and correlation of load to grid. Energy discharged to on-site load bypasses the transmission network and avoids MLF-based deductions on both sides of the transaction.</p></div>
</div>
<div class="value-bar-legend__row" data-key="tariff">
<span class="vb-dot vb-dot--tariff"></span>
<div><strong>Network tariff management</strong><p>Network tariff structures — specifically TUOS demand charges levied on peak consumption windows. A co-located battery can reduce the site's measured peak demand and lower the TUOS bill directly.</p></div>
</div>
<div class="value-bar-legend__row" data-key="alpha">
<span class="vb-dot vb-dot--alpha"></span>
<div><strong>Energy market alpha</strong><p>The operator's view of expected future prices. Any battery can charge low and discharge high — what varies is how much of the available volatility is captured. More sophisticated dispatch and forecasting extracts more from the same market opportunity.</p></div>
</div>
</div>

<div class="value-bar-legend__group">
<div class="value-bar-legend__group-header vblg--base">Available to FTM project</div>
<div class="value-bar-legend__row" data-key="dev">
<span class="vb-dot vb-dot--dev"></span>
<div><strong>Developer margin</strong><p>Market value of a ready-to-build project — influenced by expected future energy prices, supply and demand for battery projects, and cost of debt and equity at time of sale or financial close.</p></div>
</div>
<div class="value-bar-legend__row" data-key="land">
<span class="vb-dot vb-dot--land"></span>
<div><strong>Land</strong><p>Best next alternative for land use. For an industrial host, the relevant comparison is the value of existing site access relative to securing a new connection from scratch.</p></div>
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

Every battery project starts from the same three foundations. **Land** is the opportunity cost of the site — what else could be built or leased there. **Developer margin** is the value created by the development process itself: securing approvals, a grid connection agreement, EPC contracts, and financing. A ready-to-build project commands a premium over raw development costs, driven by expected energy prices, the supply and demand for battery projects, and the cost of capital at the time of sale. **Energy market alpha** is available to any grid-connected battery — the core arbitrage between low and high wholesale prices is accessible in principle to everyone, but the amount captured depends on commercial capability and market view. An operator with a differentiated view of short-run price formation will extract more from the same market than one running a simple rule-based strategy.

## What a large industrial load adds

Co-locate that battery with a large industrial consumer and three additional value pools appear. Each one stems from the same physical fact: the battery and the load share a grid connection, so energy discharged on-site never enters the shared transmission network.

**Network tariff management.** Transmission use-of-system (TUOS) charges are levied on a consumer's peak demand during specific windows, often 4pm to 8pm on weekdays. For a large industrial load drawing hundreds of megawatts, these demand charges represent a substantial share of total energy costs. A co-located battery can discharge during those windows to reduce the site's measured demand and lower the bill directly. A standalone front-of-meter battery has no load to shave and captures none of this value.

**Avoided transmission losses.** Every megawatt-hour moving through the transmission network loses a fraction to resistive losses, quantified through marginal loss factors (MLFs). At some NEM nodes, losses exceed 5% of delivered energy. When a co-located battery discharges to on-site load, that energy bypasses the transmission network entirely. The avoided losses accrue as a cost saving to the site. A standalone battery incurs losses on both the charge and discharge sides of the transaction.

**Avoided congestion.** A standalone battery may be curtailed precisely when prices are highest if it sits behind a congested part of the network. A co-located battery serving on-site load doesn't face that constraint — the energy never enters the shared network, and it dispatches regardless of upstream conditions.

## Splitting the value

These additional pools don't automatically accrue to the developer. Each needs to be contracted for.

Network tariff savings flow through the industrial host's energy bill; capturing them requires an agreed mechanism for measuring and sharing those savings. Avoided losses depend on the host's MLF — the host needs to pass that benefit through to the battery operator. Congestion avoidance accrues to whoever controls dispatch: a host who allows the developer to operate the battery freely will capture more than one who retains operational control.

The commercial arrangement determines who captures each pool. A developer who negotiates shared savings mechanisms across all three layers captures more than one who leaves them on the table. An industrial host who understands the value stack can negotiate for a share of each layer, or develop the battery itself and capture the full stack.

## A different risk shape

The value uplift from co-location doesn't come free. Behind-the-meter arrangements add commercial complexity: offtake agreements with the industrial host, shared savings mechanisms, decisions about whether the battery can export to the grid. But the risk profile shifts in ways that matter.

<div class="risk-accordion">

<details class="risk-item">
<summary>Revenue resilience</summary>
<div class="risk-compare">
<div class="risk-compare__col">
<div class="risk-compare__label">Standalone</div>
<p>Entirely dependent on wholesale spreads and volatility. If battery supply overshoots and spreads compress, there is no floor.</p>
</div>
<div class="risk-compare__col">
<div class="risk-compare__label">Co-located</div>
<p>BTM value pools (tariff management, avoided losses, avoided congestion) persist regardless of what happens to wholesale spreads. The floor is structural, not market-dependent.</p>
</div>
</div>
</details>

<details class="risk-item">
<summary>Grid connection</summary>
<div class="risk-compare">
<div class="risk-compare__col">
<div class="risk-compare__label">Standalone</div>
<p>New connection required from scratch. Lead times of 12 to 24 months, uncertain costs, and no guarantee of the capacity or timing you need.</p>
</div>
<div class="risk-compare__col">
<div class="risk-compare__label">Co-located</div>
<p>Industrial sites often have existing high-voltage connections with spare capacity or a clear upgrade pathway. The connection infrastructure is already there.</p>
</div>
</div>
</details>

<details class="risk-item">
<summary>Offtake certainty</summary>
<div class="risk-compare">
<div class="risk-compare__col">
<div class="risk-compare__label">Standalone</div>
<p>No natural offtaker. Revenue depends on merchant exposure or negotiating contracts with third parties.</p>
</div>
<div class="risk-compare__col">
<div class="risk-compare__label">Co-located</div>
<p>The industrial host is a built-in offtaker for peak shaving and load firming services. The commercial relationship is anchored in a shared interest in reducing the site's energy costs.</p>
</div>
</div>
</details>

<details class="risk-item">
<summary>Development timeline</summary>
<div class="risk-compare">
<div class="risk-compare__col">
<div class="risk-compare__label">Standalone</div>
<p>Site acquisition, development approval, connection agreement — all from a standing start.</p>
</div>
<div class="risk-compare__col">
<div class="risk-compare__label">Co-located</div>
<p>Industrial sites often have existing approvals infrastructure, environmental baselines, and community relationships that accelerate the process.</p>
</div>
</div>
</details>

<details class="risk-item">
<summary>Commercial complexity</summary>
<div class="risk-compare">
<div class="risk-compare__col">
<div class="risk-compare__label">Standalone</div>
<p>Simpler deal structure. One asset, standard merchant or offtake arrangements.</p>
</div>
<div class="risk-compare__col">
<div class="risk-compare__label">Co-located</div>
<p>More moving parts: BTM agreements, shared savings mechanisms, export rights. Requires commercial capability to structure and manage.</p>
</div>
</div>
</details>

</div>

The most important difference shows up in a downside scenario. A standalone battery earning all its revenue from wholesale spreads is fully exposed to a world where battery capacity overshoots and spreads compress. A co-located battery still earns from network tariff reduction and loss avoidance even if market spreads fall to zero. The BTM pools provide a floor that standalone batteries don't have.

## For developers

Pipeline strategy should account for the quality of co-location opportunities, not just grid connection availability and land cost. A site adjacent to a large, stable industrial load is a different kind of project to a greenfield paddock, even if the connection capacity looks identical on paper. The development effort may be comparable, but the project economics are structurally higher and more resilient to market downside.

The commercial structuring is harder. The counterparty relationship is ongoing. And the industrial host's own constraints (existing retail contracts, export limitations, future load uncertainty) shape what is actually achievable. The BTM value pools are available to developers who can structure the commercial arrangements to access them.

## For industrial consumers

If you operate a large industrial site with a substantial grid connection, you have something battery developers want access to: your load, your connection, your land. The question is not whether a battery could improve your energy costs — in most configurations, it can. The question is what role you want to play and what share of the value you negotiate for.

The range of options runs from passive (lease the land, let someone else develop) to active (develop the battery yourself). Each point on that spectrum involves a different capital commitment, risk profile, and capability requirement. Your industrial load creates battery project value that the wholesale market alone cannot provide.

<div class="contact-cta">
<p>Aber Analytics models battery co-location economics across the NEM, including BTM value pool quantification and commercial structuring analysis. <a href="mailto:info@aberanalytics.com">Get in touch</a> to discuss how co-location economics apply to your site or portfolio.</p>
</div>

---

## References and methodology

<div class="how-we-did-this">
<h3>How we did this analysis</h3>
<p>This article describes structural principles of battery co-location economics in the Australian National Electricity Market. Value pool descriptions are based on NEM market rules, TUOS charging frameworks, and marginal loss factor methodology as applied by AEMO. The bar chart shows illustrative relative proportions only — actual value pool sizes depend on site-specific conditions including transmission capacity, load profile, network tariff structures, and energy market outcomes. No specific project or site is referenced.</p>
</div>
