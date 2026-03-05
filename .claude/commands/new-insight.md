---
description: Create a new Aber Analytics insight article
---

Create a new insight article for the Aber Analytics website.

## Gather Information

Ask the user for the following:

1. **Title** — The article title
2. **Category** — One of: Market Analysis, Methodology, Commentary, Research (or suggest a new one)
3. **Author** — Author name (default: "Aber Analytics")
4. **Excerpt** — 1-2 sentence summary that appears on the insights landing page card
5. **Content** — The article body text. The user may provide this as rough notes, a draft, or ask you to write it based on a topic.
6. **Charts** — Does the article include interactive Plotly charts? If yes, get the data or a description of what to visualise.
7. **Table of Contents** — Should the article have a sidebar TOC? Default yes for articles with 3+ headings.

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
category: "[CATEGORY]"
excerpt: "[EXCERPT]"
layout: article.njk
toc: true/false
tags: ["insights"]
---
```

If the article includes Plotly charts, also add:
```yaml
plotly: true
extraScripts:
  - https://cdn.plot.ly/plotly-2.35.2.min.js
```

## Content Guidelines

- Start with an opening paragraph (no heading — the title in frontmatter is the h1)
- Use `## Heading` for main sections and `### Subheading` for subsections
- Keep the tone professional but accessible — like a senior analyst writing for a sophisticated audience
- End with a call to action linking to `mailto:info@aberanalytics.com`
- For links to other insights, use relative paths: `/insights/posts/slug/`

## Plotly Charts

For articles with interactive charts, use the shortcode in the markdown:

```
{% plotlyChart "chart-id", "Chart Title" %}
```

Then add a `<script>` block at the end of the article with the chart data:

```html
<script>
document.addEventListener('DOMContentLoaded', function() {
    const el = document.getElementById('chart-id');
    if (!el) return;

    const data = [/* trace data */];
    const layout = {
        font: { family: 'Inter, sans-serif' },
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent',
        margin: { t: 30, r: 20, b: 50, l: 50 },
        xaxis: { gridcolor: 'rgba(82, 48, 139, 0.08)', zeroline: false },
        yaxis: { gridcolor: 'rgba(82, 48, 139, 0.08)', zeroline: false },
        showlegend: false
    };

    Plotly.newPlot(el, data, layout, { responsive: true, displayModeBar: false });
});
</script>
```

### Aber Analytics colour palette for charts:
- Primary: `#52308B` (purple)
- Secondary: `#437F86` (teal), `#75CAAE` (mint)
- Accent: `#F6C958` (gold), `#D55268` (coral)
- Light: `#B299DB` (light purple)

## After Creation

1. Run `npm run build` to verify the article compiles
2. Run `npm run dev` and check:
   - The insights landing page shows the new card
   - The article page renders correctly
   - Any charts are interactive
3. Remind the user they can deploy to staging with `./scripts/deploy-staging.sh <username>`
