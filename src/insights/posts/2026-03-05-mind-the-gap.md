---
title: "Mind the gap: redefining firm capacity"
date: 2026-03-05
author: "Aber Analytics"
excerpt: "Load duration curves reveal how firm capacity is being redefined as Australia's energy system transitions from thermal-anchored generation to storage-backed renewables."
layout: article.njk
draft: false
tags: ["insights"]
extraScripts:
  - "https://cdn.plot.ly/plotly-basic-latest.min.js"
  - "/assets/js/mind-the-gap-charts.js"
  - "/assets/js/ldc-explorer.js"
---

<div class="article-lede">
<p><strong>As coal retires, firm capacity in the NEM is being redefined, with the gap between traditional firming and peak demand widening.</strong> We used load duration curves to interrogate AEMO's Draft 2026 ISP and found that by 2040, the risks that matter most for system reliability will look fundamentally different from today's.</p>
</div>

An increasing gap between traditional firming technologies and peak demand will change which risks matter most. Firm capacity will:

**Depend more on weather variability.** With increasing renewable penetration and higher reliance on storage, understanding weather variability becomes critical for assessing system reliability.

**Rely more on storage market behaviour.** Batteries and pumped hydro will provide a growing share of firm capacity. Whether storage is available when the system needs it depends on efficient market signals, reliable forecasting, and sufficient reserve depth.

**Lean more on interconnectors.** SA is projected to require more and more firming across interconnectors, a dependency that carries risk during coincident stress events.

We compared today's thermal-anchored system with the storage-and-VRE system projected for 2040. [Explore the extended dataset](#dashboard) in the interactive dashboard below.

## Two pictures from two states

The charts below compare New South Wales and South Australia, two states with contrasting but related transition challenges. NSW is adding renewable capacity backed by storage at scale, while SA is already deep into a transition that has made it structurally dependent on its interconnectors. Reading both together shows how the definition of firm capacity is changing, and where the new risks sit.

<div class="callout">
<h4>How to read these charts</h4>
<p>A load duration curve (LDC) ranks every half-hour demand period in a year from highest to lowest. The coloured bands represent the ISP's projected capacity stack, adjusted for each technology's firm contribution. Typically, the NEM has had enough traditional firming to cover demand.</p>
<p>The red dashed line marks traditional firm capacity: coal, gas, pumped hydro and hydro. Where demand exceeds this line, the system relies on storage and VRE to fill the gap. In practice, total available capacity will exceed what is shown in peak demand periods.</p>
<div class="legend">
  <div class="legend-item">
    <div class="legend-swatches">
      <span class="legend-swatch" style="background:#44403C"></span>
      <span class="legend-swatch" style="background:#78716C"></span>
      <span class="legend-swatch" style="background:#A8A29E"></span>
      <span class="legend-swatch" style="background:#3B82F6"></span>
    </div>
    <div class="legend-text"><strong>Dispatchable</strong> Thermal + hydro &mdash; firm capacity derated for outages only <a href="#fn1">[1]</a></div>
  </div>
  <div class="legend-item">
    <div class="legend-swatches">
      <span class="legend-swatch" style="background:#14B8A6"></span>
      <span class="legend-swatch" style="background:#5EEAD4"></span>
    </div>
    <div class="legend-text"><strong>Storage</strong> Batteries + CER &mdash; firm credit depends on duration vs. peak demand length <a href="#fn2">[2]</a></div>
  </div>
  <div class="legend-item">
    <div class="legend-swatches">
      <span class="legend-swatch" style="background:#4ADE80"></span>
      <span class="legend-swatch" style="background:#FBBF24"></span>
    </div>
    <div class="legend-text"><strong>Variable renewables</strong> Wind + solar &mdash; low capacity credit at peak; firmness relies on weather diversity <a href="#fn3">[3]</a></div>
  </div>
</div>
</div>

---

## New South Wales: The storage state
*Source: AEMO Draft 2026 ISP CDP4, Step Change scenario; Aber Analytics analysis*

<div class="chart-pair">
  <figure class="chart-frame">
    <figcaption>FY 2025&ndash;26</figcaption>
    <div id="chart-nsw-2025" class="ldc-chart"></div>
  </figure>
  <figure class="chart-frame">
    <figcaption>FY 2040&ndash;41</figcaption>
    <div id="chart-nsw-2040" class="ldc-chart"></div>
  </figure>
</div>

<p class="chart-note"><em>To replicate in the interactive dashboard: NSW &middot; Step Change &middot; reference year 2015 &middot; POE10 &middot; Winter capacity rating.</em></p>

**Today**, NSW has roughly 26&nbsp;GW of nameplate capacity. After firm contribution adjustments, around 15&nbsp;GW of effective capacity remains to meet a POE10 peak of ~14&nbsp;GW. Black coal provides nearly half of all effective capacity, with gas and hydro covering nearly all demand periods, reflecting today's approach to maintaining firm capacity.

**By 2040**, nameplate capacity has grown to ~69&nbsp;GW, but effective firm capacity has only grown from 15&nbsp;GW to 19.5&nbsp;GW. The system has been rebuilt around variable renewables backed by storage, with wind and batteries required to cover 75% of demand periods if imports are excluded <a href="#fn4">[4]</a>. The gap between the firm line and the demand curve is where market behaviour and weather variability now matter most.

---

## South Australia: The firming gap
*Source: AEMO Draft 2026 ISP CDP4, Step Change scenario; Aber Analytics analysis*

<div class="chart-pair">
  <figure class="chart-frame">
    <figcaption>FY 2025&ndash;26</figcaption>
    <div id="chart-sa-2025" class="ldc-chart"></div>
  </figure>
  <figure class="chart-frame">
    <figcaption>FY 2040&ndash;41</figcaption>
    <div id="chart-sa-2040" class="ldc-chart"></div>
  </figure>
</div>

<p class="chart-note"><em>To replicate in the interactive dashboard: SA &middot; Step Change &middot; reference year 2015 &middot; POE10 &middot; Winter capacity rating.</em></p>

**Today**, SA's dispatchable fleet is almost entirely gas, which mostly covers peak demand.

**By 2040**, mid-merit gas retires and nameplate capacity doubles to ~15&nbsp;GW, but effective firm capacity actually *falls* as the additions are overwhelmingly VRE. Peak demand grows to ~4.7&nbsp;GW while local dispatchable capacity shrinks to ~1&nbsp;GW of flexible gas. The gap between peak demand and firm capacity widens to roughly 1&nbsp;GW, meaning SA increasingly depends on flows from neighbouring states via its interconnectors to maintain firm reserves. How neighbouring states manage their own storage reserves during concurrent peak events directly affects whether that firming materialises.

---

## Explore the data

Use the interactive dashboard to explore load duration curves for any NEM state, scenario, and financial year. Toggle firm contribution adjustments and compare how the capacity stack evolves over time.

<div class="chart-embed" id="dashboard">
  <p class="chart-embed__title">Interactive LDC Explorer &mdash; NEM Draft 2026 ISP</p>
</div>

<div class="contact-cta">
<p>This analysis interrogates AEMO's capacity expansion planning for the NEM. We also build our own capacity expansion models. <a href="mailto:info@aberanalytics.com">Get in touch</a> to learn more about our independent view of where the NEM is heading and what it means for your portfolio.</p>
</div>

---

## References and methodology

<div class="how-we-did-this">
<h3>How we did this analysis</h3>
<p>Capacity outputs sourced from AEMO's <em>Draft 2026 ISP Generation and Storage Outlook</em> workbook, CDP4 (Optimal Development Path). Demand traces are drawn from AEMO's Draft 2026 ISP half-hourly demand datasets. For each state, 30-minute interval values were aggregated across subregions to produce a state-level total for each half-hour of the year. These 17,520 values were then ranked from highest to lowest to form the load duration curve, and resampled at uniform percentage intervals for display. Charts use reference year 2015 and POE10 demand. The interactive dashboard is built on the same dataset.</p>
<!-- TODO: Add a screenshot of the modelling platform. -->
</div>

<div class="footnotes">
<ol>
<li id="fn1"><strong>Thermal outage derating.</strong> Coal and gas capacity is derated by a flat 10% forced outage rate, applied uniformly across all thermal technologies. <a href="#fnref1">↩</a></li>
<li id="fn2"><strong>Storage firm contribution.</strong> Battery and coordinated CER storage capacity is adjusted based on average storage duration relative to an assumed peak demand event duration of 8.77 hours (reverse-engineered from AEMO's 2024 ISP). Storage duration is calculated as aggregate energy capacity (GWh) divided by aggregate power capacity (GW), sourced from the Storage Capacity and Storage Energy sheets in AEMO's <em>Draft 2026 ISP Generation and Storage Outlook</em>. Duration is a capacity-weighted average across battery classes (deep, medium, and shallow utility-scale storage). <a href="#fnref2">↩</a></li>
<li id="fn3"><strong>VRE firm contribution.</strong> Wind and solar nameplate capacity is multiplied by AEMO's seasonal firm contribution factors, sourced from the Draft 2026 ISP VRE firm contribution dataset. These factors represent the capacity credit each VRE technology receives during peak demand periods. In winter, solar's firm contribution is near zero and wind is typically 5&ndash;10% of nameplate. <a href="#fnref3">↩</a></li>
<li id="fn4"><strong>Imports.</strong> In reality, imports will always supply a portion of these demand periods. This analysis excludes imports for illustrative purposes only. <a href="#fnref4">↩</a></li>
</ol>
</div>
