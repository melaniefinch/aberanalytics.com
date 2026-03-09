---
description: Create a new Aber Analytics insight article
---

Create a new insight article for the Aber Analytics website.

## Gather Information

Ask the user for the following:

1. **Title** — The article title
2. **Format** — One of:
   - **Commentary** (~500–800 words) — Punchy, single-idea pieces. A clear finding, the evidence, and why it matters.
   - **Research** (~1,200–1,800 words) — Deeper analysis with multiple sections. Still leads with the headline, but develops the argument more fully.
3. **Author** — Author name (default: "Aber Analytics")
4. **Excerpt** — 1–2 sentence summary for the insights landing page card. Should convey the key finding, not just the topic.
5. **Draft status** — Is this ready for publication, or a draft? (Default: draft)
6. **Content** — The article body. The user may provide rough notes, a draft, source data, or ask you to write it based on a topic.
7. **Charts** — Does the article include interactive Plotly charts? If yes, get the data or a description of what to visualise.
8. **"How we did this" box** — Every article ends with a methodology box. Ask the user for:
   - Which models or datasets were used
   - A brief description of the analytical workflow
   - A screenshot of the modelling platform (file path or description of what to show)

## File Creation

Create the article at:
```
src/insights/posts/YYYY-MM-DD-slug.md
```

Where:
- `YYYY-MM-DD` is today's date
- `slug` is derived from the title (lowercase, hyphens, no special characters)

## Frontmatter

```yaml
---
title: "[TITLE]"
date: YYYY-MM-DD
author: "[AUTHOR]"
excerpt: "[EXCERPT]"
layout: article.njk
draft: true/false
tags: ["insights"]
---
```

If the article includes Plotly charts, also add:
```yaml
extraScripts:
  - "https://cdn.plot.ly/plotly-basic-latest.min.js"
  - "/assets/js/YYYY-MM-DD-slug-charts.js"
```

Note: No `toc` or `category` fields. These have been removed.

## Tone & Voice

The voice is **Aber Analytics as a trusted industry peer** — pragmatic, informative, commercial, and conversational while remaining professional. Think: talking to a smart friend who works in the industry.

### Do:
- Use "we" when referring to Aber Analytics ("We modelled six archetypes...")
- Write in plain language — if a simpler word works, use it
- Be direct and specific — prefer numbers and evidence over generalities
- Let the data build the narrative
- Use short sentences and short paragraphs
- Be confident in findings without being arrogant

### Don't:
- Address the reader as "you" — keep it editorial, not salesy
- Use jargon, acronyms without expansion, or insider shorthand
- Hedge excessively ("it could perhaps be argued that...")
- Use empty intensifiers ("very significant", "extremely important")
- Write in an academic or bureaucratic register

## Article Structure

### Opening paragraph (lede tile)
**Lead with the headline finding.** The first paragraph should state the key insight clearly. Don't build to a punchline — respect the reader's time. The rest of the article supports and develops the opening claim.

Wrap the opening paragraph in an `article-lede` tile for visual differentiation:

```html
<div class="article-lede">
<p><strong>The headline finding in bold.</strong> One or two sentences of supporting context that frames the rest of the article.</p>
</div>
```

Note: content inside the div must be written as HTML (not markdown) since markdown-it does not process markdown inside block-level HTML elements.

### Body
- Use `## Heading` for main sections and `### Subheading` for subsections
- Start with an opening paragraph (no heading — the title in frontmatter is the h1)
- Each section should advance the argument or add a new dimension
- For links to other insights, use relative paths: `/insights/posts/slug/`

### Footnotes
Use Substack-style numbered footnotes for sourcing and attribution:
- Reference public data sources with moderate specificity (e.g. "AEMO's draft 2026 Integrated System Plan" not just "AEMO")
- For Aber's own work, name the model or dataset where relevant
- Footnotes can include brief explainer notes on how a source was used — keep it conversational, not academic
- Place footnote markers in the text as superscript numbers: `<sup>1</sup>`
- Collect footnotes at the end of the article body (before the "How we did this" box) in a `<div class="footnotes">` block:

```html
<div class="footnotes">
<ol>
<li id="fn1">AEMO, <em>Draft 2026 Integrated System Plan</em>, January 2026. We used the Step Change scenario as our central case. <a href="#fnref1">↩</a></li>
</ol>
</div>
```

### Charts
For each chart, include a source line immediately below the `plotlyChart` shortcode:

```markdown
{% plotlyChart "chart-id", "Chart Title" %}
*Source: Aber Analytics modelling; AEMO ISP 2026 draft*
```

### "How we did this" box (replaces CTA)
Every article ends with a methodology box after the footnotes. Use this template:

```html
<div class="how-we-did-this">
<h3>How we did this analysis</h3>
<p>[Description of models used, analytical workflow, and key assumptions. 2-4 sentences, conversational tone.]</p>
<img src="/assets/images/insights/[screenshot-filename]" alt="[Description of platform screenshot]" />
</div>
```

If the user hasn't provided the methodology detail or screenshot, **prompt them for it** — don't skip this section or fill it with placeholder text.

## Plotly Charts

Create a **standalone JS file** at `src/assets/js/YYYY-MM-DD-slug-charts.js` for the chart data and rendering logic. This keeps the markdown clean and the chart code reusable.

### Chart containers in markdown

For side-by-side chart pairs, use `chart-pair` with `chart-frame` figures:

```html
<div class="chart-pair">
  <figure class="chart-frame">
    <figcaption>Label A</figcaption>
    <div id="chart-a" class="ldc-chart"></div>
  </figure>
  <figure class="chart-frame">
    <figcaption>Label B</figcaption>
    <div id="chart-b" class="ldc-chart"></div>
  </figure>
</div>
```

For single charts, use the shortcode:
```
{% plotlyChart "chart-id", "Chart Title" %}
*Source: [source attribution]*
```

### Chart JS file structure

Wrap everything in an IIFE. Define chart data, a render function, and an init block:

```javascript
(function () {
  'use strict';
  var CHARTS = { 'chart-id': { /* data */ } };

  function render(id, cfg) {
    var el = document.getElementById(id);
    if (!el) return;
    // Build Plotly traces, shapes, annotations from cfg
    Plotly.newPlot(id, traces, layout, {
      displayModeBar: false, responsive: true, scrollZoom: false,
    });
  }

  function init() {
    Object.keys(CHARTS).forEach(function (id) { render(id, CHARTS[id]); });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();
```

### Layout conventions

The article container is 1200px wide. Prose text is constrained to 740px (centred). Chart pairs, embeds, and iframes go full-width. This creates a visual breakout effect for data-heavy sections.

Labels should be positioned **inside** chart areas where possible (e.g. inside stacked area bands, beside data points), not in external legends.

### Aber Analytics colour palette for charts:
- Primary: `#52308B` (purple)
- Secondary: `#437F86` (teal), `#75CAAE` (mint)
- Accent: `#F6C958` (gold), `#D55268` (coral)
- Light: `#B299DB` (light purple)

## After Creation

1. Run `npm run build` to verify the article compiles
2. Run `npm run dev` and check:
   - The insights landing page shows the new card (if `draft: false`)
   - The article page renders correctly
   - Any charts are interactive
   - Footnotes link correctly
   - The "How we did this" box renders with the screenshot
3. Remind the user they can deploy to staging with `./scripts/deploy-staging.sh <username>`
