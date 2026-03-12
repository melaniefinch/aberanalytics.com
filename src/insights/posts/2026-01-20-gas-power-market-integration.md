---
title: "Why gas and power markets can't be modelled in isolation"
date: 2026-01-20
author: "Aber Analytics"
excerpt: "The interdependence between Australian gas and electricity markets means that modelling them separately leads to systematically wrong conclusions."
layout: article.njk
draft: true
tags: ["insights"]
---

It's common practice in the Australian energy sector to model gas and power markets separately. Gas consultants build gas models. Power consultants build power models. The outputs of one feed into the other as fixed assumptions — if they connect at all.

This approach made sense when gas generation was a small part of the NEM and gas prices were relatively stable. Neither of those things is true anymore.

Gas-fired generation now sets the marginal price in the NEM for a significant number of settlement periods. At the same time, east coast gas prices have become volatile and structurally linked to international LNG markets. The result is a tight feedback loop: gas prices drive power prices, but power sector gas demand also influences gas market dynamics.

Modelling these markets in isolation means you miss the most important dynamics.

## The feedback loop

Consider a scenario where a major gas supply disruption occurs — say, an unplanned outage at a processing facility in the Cooper Basin. In an isolated gas model, this drives up spot gas prices. In an isolated power model, gas prices are a fixed input — so the power model doesn't see the disruption at all (or sees it only if you manually update the assumption).

In an integrated model, the disruption plays out across both markets simultaneously. Higher gas costs raise power prices, which changes the economics of every generator in the NEM. But higher power prices also change gas demand — some gas generators become uneconomic and reduce output, partially offsetting the gas supply shock. Battery storage arbitrage shifts to capture the new price spread. Demand response activates.

None of these second-order effects appear in a siloed model.

## Implications for investment analysis

For anyone evaluating gas-exposed assets — gas generation, gas storage, or even renewables competing against gas-fired marginal pricing — the modelling approach matters enormously.

A gas peaker's value depends on the spread between gas costs and power prices during scarcity events. If you model gas and power separately, you'll typically overestimate this spread because the models don't capture the dampening feedback loops that operate in the real market.

Conversely, a renewable project competing against gas-fired generation needs to understand how gas price shocks transmit into wholesale prices. A separate model will give you a single fixed relationship; an integrated model captures the full range of transmission effects under different supply conditions.

## How we approach it

Our platform models gas and power markets simultaneously within each simulation run. Gas supply, demand, and pricing interact with power market dispatch in every time step. When we run 500 simulations, each one tells an internally consistent story about how both markets evolve together.

This doesn't just produce more accurate price forecasts — it reveals the **correlation structure** between gas and power outcomes that matters for risk management. A portfolio with gas generation and renewable assets has a very different risk profile when you model the markets together versus apart.

---

## References and methodology

<div class="contact-cta">
<p>Our integrated gas and power market model is built on the feedback loops described in this analysis. If you're building a view on prices, dispatch, or fuel costs, an integrated approach changes the picture. <a href="mailto:info@aberanalytics.com">Get in touch</a> to see how it applies to your portfolio.</p>
</div>
