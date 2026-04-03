# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Critical: No template literals

Do NOT use JavaScript template literals (backticks) anywhere in this codebase. The browser breaks on nested template literals. Use string concatenation only: `'text ' + variable + ' more text'`.

## Running the dashboard

No build step. Serve via local HTTP server and open in browser:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

All dependencies load from CDN: Chart.js 4.4.4 (jsdelivr), Tailwind CSS (cdn.tailwindcss.com), Inter font (Google Fonts). No npm, no bundler, no React.

## Architecture

Everything lives in `index.html`. The `<script>` block is structured as:

1. **Config variables** -- `LAST_UPDATED`, `DATA_PERIOD` (update these when refreshing data)
2. **Design tokens** -- `var C = {...}` with all hex colors
3. **Chart.js defaults** -- global tooltip/grid/font styling
4. **Data arrays** -- all hardcoded data as plain JS objects/arrays
5. **Helper functions** -- `sentimentColor()`, `trendArrow()`, `metricCardsHTML()`, `sectionHeader()`, `chartBox()`, `buildFunnelHTML()`, `buildAgencyCards()`
6. **Page renderers** -- `renderPeoplePipeline()`, `renderLaborMarket()`, `renderFiscalOutlook()`, `renderMobilitySTAT()` (each sets innerHTML + creates Chart.js instances)
7. **Navigation** -- `renderNav()`, `switchPage()` with fade transition
8. **Init** -- keyboard listener (keys 1-4), dynamic timestamps, initial render

Chart instances are tracked in `activeCharts[]` and destroyed via `destroyCharts()` on every page switch.

## Updating data

Edit the JS variables near the top of the script block. See `DATA_UPDATE_GUIDE.md` for detailed instructions with source URLs.

Key variables: `educationMetrics`, `funnelStages`, `educationTrends`, `employmentMetrics`, `sectorData`, `jobCreation`, `entryLevel`, `fiscalMetrics`, `taxSources`, `revProjections`, `budgetGaps`, `elvSupply`, `pitLost`, `agencies`.

When data arrives for MobilitySTAT "Data pending" metrics, change `pending:true` to `pending:false` and add `value`, `trend`, `sentiment` fields.

## Adding a new chart

Use `chartBox('canvasId', 'Title', 'Source citation.')` to create the container, then `addChart(new Chart(...))` after setting innerHTML. Always use `function(v){return ...;}` syntax for callbacks, never arrow functions with template literals.
