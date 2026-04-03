# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Critical: No template literals

Do NOT use JavaScript template literals (backticks) anywhere in this codebase. The browser breaks on nested template literals. Use string concatenation only: `'text ' + variable + ' more text'`.

## Critical: Chart.js bar chart bug

Never overwrite `Chart.defaults.scale.grid` with a new object. This wipes internal properties Chart.js needs for bar chart rendering. Only set individual properties: `Chart.defaults.scale.grid.color = '...'`.

## Running the dashboard

No build step. Serve via local HTTP server and open in browser:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

All dependencies load from CDN: Chart.js 4.4.4 (jsdelivr), Tailwind CSS (cdn.tailwindcss.com), Inter font (Google Fonts). No npm, no bundler, no React.

## Architecture

Everything lives in `index.html`. Light theme matching SquareOne brand (white backgrounds, dark text, subtle borders).

### Layout

- **Sticky single-line header**: dashboard title (left, clickable to return home) + horizontal nav tabs (right)
- **Content area**: max-width 1280px, centered, with 32px padding
- **Footer**: "Powered by SquareOne" + last updated (left), version + data period (right)
- No sidebar. Navigation is entirely horizontal tabs in the header.

### Script block structure

1. **Config variables** -- `LAST_UPDATED`, `DATA_PERIOD` (update these when refreshing data)
2. **Design tokens** -- `var C = {...}` with all hex colors (light theme: SquareOne palette)
3. **Chart.js defaults** -- global tooltip/grid/font styling (dark tooltips on light background)
4. **Data arrays** -- all hardcoded data as plain JS objects/arrays
5. **Helper functions** -- `sentimentColor()`, `trendArrow()`, `buildSparkline()`, `metricCardsHTML()`, `sectionHeader()`, `guidingQuestions()`, `chartBox()`, `buildFunnelHTML()`, `buildAgencyCards()`
6. **Findings engine** -- `findingsPanel()`, `generateFindings(layer)` -- reads data and generates narrative "So What" panels dynamically
7. **Page renderers** -- `renderHome()` (landing page), `renderPeoplePipeline()`, `renderLaborMarket()`, `renderFiscalOutlook()`, `renderMobilitySTAT()`
8. **Landing page** -- `getHeadlineFinding(layer)` returns `{text, sentiment}` for each layer card
9. **Navigation** -- `updateTabs()`, `switchPage(id)` with fade transition + scroll-to-top
10. **Init** -- keyboard listener (0=home, 1-4=layers), footer timestamps, initial render of home page

Chart instances are tracked in `activeCharts[]` and destroyed via `destroyCharts()` on every page switch.

### Navigation flow

- Dashboard loads to the landing page (`renderHome()`). No tab is active.
- Clicking a layer card or tab calls `switchPage(id)` which activates that tab and renders the layer.
- Clicking the header title returns to the landing page and deactivates all tabs.

## Updating data

Edit the JS variables near the top of the script block. See `DATA_UPDATE_GUIDE.md` for detailed instructions with source URLs.

Key variables: `educationMetrics`, `funnelStages`, `educationTrends`, `employmentMetrics`, `sectorData`, `jobCreation`, `entryLevel`, `fiscalMetrics`, `taxSources`, `revProjections`, `budgetGaps`, `elvSupply`, `pitLost`, `agencies`.

When data arrives for MobilitySTAT "Data pending" metrics, change `pending:true` to `pending:false` and add `value`, `numVal`, `trend`, `sentiment` fields.

Findings narratives in `generateFindings()` and `getHeadlineFinding()` auto-update when data changes.

## Adding a new chart

Use `chartBox('canvasId', 'Title', 'Source citation.')` to create the container, then `addChart(new Chart(...))` after setting innerHTML. Always use `function(v){return ...;}` syntax for callbacks, never arrow functions with template literals.
