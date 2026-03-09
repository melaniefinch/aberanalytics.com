---
title: "The devil is in the (delivery) details"
date: 2026-03-09
author: "Aber Analytics"
excerpt: "Understanding physical bottlenecks can yield a pragmatic view where the market lands in 2030"
layout: article.njk
draft: false
tags: ["insights"]
extraScripts:
  - "https://cdn.plot.ly/plotly-basic-latest.min.js"
  - "/assets/js/physical-bottlenecks-charts.js"
---

<div class="article-lede">
<p><strong>Given the public discourse on the transitioning energy system, you'd be forgiven for thinking it's impossible to lock down a pragmatic view of what trajectory of the market is.</strong> There are mixed signals: planning delays and financing gaps on the one hand, giant connection pipelines and an ever-optimistic ISP on the other, and frequent movement in announced completion or retirement dates of critical infrastructure like Snowy 2.0 or Eraring amidst it all.</p>
<p>Despite the genuine uncertainty in all this, it's possible to form an informed and risk-adjusted view of what our energy system looks like in the future.</p>
</div>

In this article we look at three critical system drivers (Snowy 2.0, wind build out, transmission build out) to demonstrate how understanding the practical constraints narrow the field of likely outcomes - and then directly apply these findings to understand likely market outcomes in 2030.

## Snowy 2.0: If it's not 2028, when is it?

Snowy 2.0's 2GW of pumped hydro storage requires approximately 27km of tunnels beneath the Snowy Mountains, and is reported to be more than 70% complete as of early 2026.

The project's timeline is dictated by four tunnel boring machines (TBMs), the most recent of which appears to still be undergoing comissioning at the time of publishing.

We assessed the projected completion dates of each of the TBMs based on the long-run average tunnelling rates (metres/day) implied by press announcements over time and the remaining distance each TBM needs to cover. We then overlaid international benchmarks for time to operations after tunnelling completion (accounting for lining, electromechanical installation, wet commissioining).

{% plotlyChart "snowy-tbm-chart", "Snowy 2.0 TBM tunnelling progress" %}
*Source: Snowy Hydro quarterly progress reports; Aber Analytics estimates*

Our estimate: earliest realistic power delivery is in at least 2029 (not the announced 2028), but we'd be confident it's in the system by 2031.

## Wind: the port-to-paddock problem we'd love to have

The draft 2026 ISP Step Change scenario requires roughly 26 GW of onshore wind by 2030, revised down from 42.6 GW in the 2024 ISP<sup>1</sup> — a significant reduction driven partly by improved capacity factor assumptions. Even so, reaching 26 GW from today's approximately 14 GW installed base implies adding ~3 GW per year.

We build a more realistic case:

<!-- {% plotlyChart "wind-build-chart", "Annual wind capacity additions vs ISP required rate" %}
*Source: Clean Energy Council; AEMO draft 2026 ISP; Aber Analytics estimates* -->

- Over the last five years, the NEM as a whole has averaged 1.3 GW per year of wind commissioning; implying build of **~5 GW** by 2030.
- As of January 2026, there is only **4.4 GW** of new wind projects that have at least three out of five project committment markers (land, contracts, planning, finance, construction)<sup>2</sup>. Given the rate at which wind projects are delivered (e.g., recent project lifecycle in NSW has taken 10y+), we do not believe a significant amount of wind capacity that has not already reached this stage will be delivered by 2030.
- 1GW of wind requires 160+ modern 6GW turbines. The complexities of delivering these from port to paddock (oversize road transports for several large components per day) means a delivery rate of 1-2 per week on a single route. Generously assuming 10 turbines could be delivered per week across the NEM - i.e. to five concurrent projects on diversified routes, we would be looking at an upper limit of **~3 GW annually**. This is unlikely to be the critical constraint pre-2030, but represents a reasonable medium-term upper limit for how quickly we can build wind capacity, even if we get planning and financing right.

We believe it's reasonable to assume a maximum ~5 GW of new wind is built by 2030, less than half of the what the 2026 ISP calls for.


## Transmission: How long is long?

As is well established, every major transmission project currently underway or planned in the NEM has experienced delays. Project EnergyConnect, the 900 km SA–NSW–VIC interconnector, is running approximately 3 years late. HumeLink, critical for connecting the South-West REZ and Snowy 2.0 to Sydney load, is 2 years behind its original timeline. VNI West, the new Victoria–NSW interconnector, has been pushed back 2 years. The Western Renewables Link in Victoria is 4 years delayed.

These delays reflect planning and approvals, workforce shortages, materials supply constraints, access negotiations, and the logistical challenges of building across hundreds of kilometres of varied terrain. There is no evidence that these physical and workforce constraints will be alleviated in the short term.

{% plotlyChart "transmission-chart", "Major transmission projects: planned vs expected delivery" %}
*Source: AEMO ISP; TNSP regulatory submissions; Aber Analytics analysis*

Across the portfolio, our analysis of historical transmission projects shows:

- **Average delay for new interconnectors: ~2.2 years**
- **Average delay for new non-interconnector transmission lines: ~1.4 years**

## A sensible range for 2030

These observed physical deployment limits are included as part of our modelling of a pragmatic outlook on the energy market's trajectory over the next 4-5 years.

Some selected findings on these drivers in particular:
- Wholesale prices could be [XX%] higher compared to a world in which the ISP capacity mix was achieved (and indeed, [XX%] higher than today).
- If the Snowy 2.0 delay extends to when Eraring has exited the system (and this is allowed to happen), this number becomes [XX%].
- Solar and battery deployment must continue to accelerate to fill the gap left by the firmer wind deployment. Our modelling suggests an extra [XXGW] of solar and [YYGW] of batteries will be needed, which is [slightly above] historical deployment rates - though we note given observed acceleration in the market, this looks to be achievable

We believe the highest quality decisions require this kind of pragmatic view on the system outlook across the board, and an understanding of how shifts in major drivers will change it.


<div class="how-we-did-this">
<h3>How we did this analysis</h3>
<!-- TODO: Provide methodology detail — which models/datasets were used, the analytical workflow, and a screenshot of the modelling platform. -->
</div>

<div class="footnotes">
<ol>
<li id="fn1">AEMO, <em>Draft 2026 Integrated System Plan</em>, January 2026. The reduction from 42.6 GW to ~26 GW reflects updated capacity factor assumptions and revised demand forecasts. We used the Step Change scenario as the central reference. <a href="#fnref1">↩</a></li>
<li id="fn1">AEMO, <em>NEM Generation Information</em>, January 2026. We have included projects shown as 'in commissioning' as part of the installed asset base. <a href="#fnref1">↩</a></li>
</ol>
</div>
