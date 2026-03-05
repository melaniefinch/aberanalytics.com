---
title: "Mind the gap"
date: 2026-03-05
author: "Aber Analytics"
category: "Market Analysis"
excerpt: "Load duration curves reveal how firm capacity is being redefined as Australia's energy system transitions from thermal-anchored generation to storage-backed renewables."
layout: article.njk
toc: true
tags: ["insights"]
---

## Redefining firm capacity

Today's system has roughly enough dispatchable thermal capacity to meet demand, providing reassurance that the lights won't go off if the sun stops shining or the wind stops blowing. With coal retirements incoming, firm capacity is being redefined.

An increasing gap between traditional firming technologies and peak demand will change which risks matter most for system reliability. Firm capacity will:

**Depend more on weather variability.** With increasing renewable penetration and higher reliance on storage, understanding weather variability becomes critical for assessing system reliability.

**Rely more on storage market behaviour.** Batteries and pumped hydro will provide a growing share of firm capacity. Whether storage is available when the system needs it depends on efficient market signals, reliable forecasting, and sufficient reserve depth.

**Lean more on interconnectors.** States like SA are projected to require more and more firming across interconnectors, a dependency that carries risk during coincident stress events.

To demonstrate this, we have used load duration curves to interrogate AEMO's 2026 ISP, comparing today's thermal-anchored system with the storage-and-VRE system projected for 2040. [Explore the extended dataset](#dashboard) in the interactive dashboard below.
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
    <div class="legend-text"><strong>Storage</strong> Batteries + CER &mdash; firm credit depends on duration vs. peak demand length <a href="#fn3">[3]</a></div>
  </div>
  <div class="legend-item">
    <div class="legend-swatches">
      <span class="legend-swatch" style="background:#4ADE80"></span>
      <span class="legend-swatch" style="background:#FBBF24"></span>
    </div>
    <div class="legend-text"><strong>Variable renewables</strong> Wind + solar &mdash; low capacity credit at peak; firmness relies on weather diversity <a href="#fn2">[2]</a></div>
  </div>
</div>
</div>

---

## New South Wales

<div class="chart-pair">
  <figure class="chart-frame">
    <figcaption>FY 2025&ndash;26</figcaption>
    <img src="/assets/images/mind-the-gap/fig1_nsw_2025.png" alt="NSW Load Duration Curve FY 2025-26">
  </figure>
  <figure class="chart-frame">
    <figcaption>FY 2040&ndash;41</figcaption>
    <img src="/assets/images/mind-the-gap/fig2_nsw_2040.png" alt="NSW Load Duration Curve FY 2040-41">
  </figure>
</div>

<div class="section-commentary">
<p><strong>Today</strong>, NSW has roughly 26&nbsp;GW of nameplate capacity. After firm contribution adjustments, around 15&nbsp;GW of effective capacity remains to meet a POE10 peak of ~14&nbsp;GW. Black coal provides nearly half of all effective capacity, with gas and hydro covering nearly all demand periods, reflecting today's approach to maintaining firm capacity.</p>
<p><strong>By 2040</strong>, nameplate capacity has grown to ~69&nbsp;GW, but effective firm capacity has grown from just 15&nbsp;GW to 19.5&nbsp;GW. The system has been rebuilt around variable renewables backed by storage, with wind and batteries required to cover 75% of demand periods if imports are excluded <a href="#fn4">[4]</a>. The firm contribution of that wind and storage capacity is weather-dependent and duration-limited, making the gap between the red dashed line and the demand curve the space where market behaviour and weather variability matter most.</p>
</div>

---

## South Australia

<div class="chart-pair">
  <figure class="chart-frame">
    <figcaption>FY 2025&ndash;26</figcaption>
    <img src="/assets/images/mind-the-gap/fig3_sa_2025.png" alt="SA Load Duration Curve FY 2025-26">
  </figure>
  <figure class="chart-frame">
    <figcaption>FY 2040&ndash;41</figcaption>
    <img src="/assets/images/mind-the-gap/fig4_sa_2040.png" alt="SA Load Duration Curve FY 2040-41">
  </figure>
</div>

<div class="section-commentary">
<p><strong>Today</strong>, SA's dispatchable fleet is almost entirely gas, which mostly covers peak demand.</p>
<p><strong>By 2040</strong>, mid-merit gas retires and nameplate capacity doubles to ~15&nbsp;GW, but effective firm capacity actually <em>falls</em> as the additions are overwhelmingly VRE. Peak demand grows to ~4.7&nbsp;GW while local dispatchable capacity shrinks to ~1&nbsp;GW of flexible gas. The gap between peak demand and firm capacity widens to roughly 1&nbsp;GW, meaning SA increasingly depends on flows from neighbouring states via its interconnectors to maintain firm reserves. How neighbouring states manage their own storage reserves during concurrent peak events directly affects whether that firming materialises.</p>
</div>
---

## Explore the data

Use the interactive dashboard to explore load duration curves for any NEM state, scenario, and financial year. Toggle firm contribution adjustments and compare how the capacity stack evolves over time.

<div class="chart-embed" id="dashboard">
  <iframe src="http://ldc.will.bba.internal" style="width:100%;height:880px;border:none;border-radius:4px;"></iframe>
</div>

---

[Get in touch](mailto:info@aberanalytics.com) to learn more about our energy market modelling and analytics capabilities.

---

## References and methodology

**[1] Thermal outage derating.** Coal and gas capacity is derated by a flat 10% forced outage rate, applied uniformly across all thermal technologies.

**[2] VRE firm contribution.** Wind and solar nameplate capacity is multiplied by AEMO's seasonal firm contribution factors, sourced from the 2026 ISP VRE firm contribution dataset. These factors represent the capacity credit each VRE technology receives during peak demand periods. In winter, solar's firm contribution is near zero and wind is typically 5&ndash;10% of nameplate.

**[3] Storage firm contribution.** Battery and coordinated CER storage capacity is adjusted based on average storage duration relative to an assumed peak demand event duration of 8.77 hours (reverse-engineered from AEMO's 2024 ISP). Storage duration is calculated as aggregate energy capacity (GWh) divided by aggregate power capacity (GW), sourced from the Storage Capacity and Storage Energy sheets in AEMO's *Draft 2026 ISP Generation and Storage Outlook*. Duration is a capacity-weighted average across battery classes (deep, medium, and shallow utility-scale storage).

**[4] Imports.** In reality, imports will always supply a portion of these demand periods. This analysis excludes imports for illustrative purposes only.

**Data sources.** Capacity projections from AEMO's 2026 ISP CDP4 (Optimal Development Path), Step Change scenario workbooks. Demand traces are half-hourly load duration curves from AEMO's Draft 2026 ISP demand traces, summed across subregions to state level. Charts in this article use reference year 2015 and POE10 demand.

