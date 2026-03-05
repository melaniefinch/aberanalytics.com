import markdownItAnchor from "markdown-it-anchor";

export default function(eleventyConfig) {
    // Passthrough copy for static assets
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/CNAME");
    eleventyConfig.addPassthroughCopy("src/favicon.svg");
    eleventyConfig.addPassthroughCopy({ "src/logo-icon-purple.svg": "logo-icon-purple.svg" });
    eleventyConfig.addPassthroughCopy({ "src/logo-icon-white.svg": "logo-icon-white.svg" });

    // Markdown: add heading IDs for table of contents
    eleventyConfig.amendLibrary("md", (mdLib) => {
        mdLib.use(markdownItAnchor, {
            permalink: false,
            slugify: s => s.toLowerCase().replace(/[^\w]+/g, '-').replace(/(^-|-$)/g, '')
        });
    });

    // Collection: insights articles sorted newest first
    eleventyConfig.addCollection("insights", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/insights/posts/*.md")
            .sort((a, b) => b.date - a.date);
    });

    // Filter: readable date
    eleventyConfig.addFilter("readableDate", function(date) {
        return new Date(date).toLocaleDateString('en-AU', {
            year: 'numeric', month: 'long', day: 'numeric'
        });
    });

    // Filter: extract unique values from array of objects
    eleventyConfig.addFilter("unique", function(arr) {
        return [...new Set(arr)];
    });

    // Filter: map array of objects to a property
    eleventyConfig.addFilter("mapProp", function(arr, prop) {
        return arr.map(item => item.data ? item.data[prop] : item[prop]).filter(Boolean);
    });

    // Shortcode: Plotly chart container
    eleventyConfig.addShortcode("plotlyChart", function(id, title = "") {
        return `<div class="chart-embed">
            ${title ? `<p class="chart-embed__title">${title}</p>` : ''}
            <div id="${id}" class="chart-embed__plot"></div>
        </div>`;
    });

    // Paired shortcode: chart with inline content
    eleventyConfig.addPairedShortcode("chart", function(content, title = "") {
        return `<div class="chart-embed">
            ${title ? `<p class="chart-embed__title">${title}</p>` : ''}
            <div class="chart-embed__plot">${content}</div>
        </div>`;
    });

    // Filter: generate table of contents from HTML content
    eleventyConfig.addFilter("toc", function(content) {
        const regex = /<h([23])[^>]*id="([^"]*)"[^>]*>(.*?)<\/h[23]>/gi;
        const headings = [];
        let match;
        while ((match = regex.exec(content)) !== null) {
            headings.push({ level: match[1], id: match[2], text: match[3].replace(/<[^>]+>/g, '') });
        }
        if (headings.length === 0) return '';
        let html = '<nav class="toc-nav"><ul>';
        for (const h of headings) {
            const indent = h.level === '3' ? ' class="toc-nav__sub"' : '';
            html += `<li${indent}><a href="#${h.id}">${h.text}</a></li>`;
        }
        html += '</ul></nav>';
        return html;
    });

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            layouts: "_layouts",
            data: "_data"
        },
        templateFormats: ["njk", "md", "html"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    };
}
