# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Critical: No template literals

Do NOT use JavaScript template literals (backticks) anywhere in this codebase. The browser breaks on nested template literals. Use string concatenation only: `'text ' + variable + ' more text'`.

## Critical: Chart.js bar chart bug

Never overwrite `Chart.defaults.scale.grid` with a new object. This wipes internal properties Chart.js needs for bar chart rendering. Only set individual properties: `Chart.defaults.scale.grid.color = '...'`.

## Critical: API key security

The Anthropic API key is stored in `config.js` (gitignored, never committed). The main script loads it via `window.ANTHROPIC_KEY`. Never hardcode API keys in `index.html` — GitHub push protection will block it.

## Running the dashboard

No build step. Serve via local HTTP server and open in browser:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

For the AI chat widget to work locally, `config.js` must exist with the API key. On the live site (GitHub Pages), the chat widget gracefully shows an error if no key is present.

All dependencies load from CDN: Chart.js 4.4.4 (jsdelivr), Tailwind CSS (cdn.tailwindcss.com), Inter font (Google Fonts). No npm, no bundler, no React.

## Architecture

Everything lives in `index.html`. Light editorial theme with accent color #1470ad. SquareOne brand.

### Layout

- **Hero image bands**: every page has a full-width hero with background image, dark overlay (rgba(0,0,0,0.7)), and white nav + title text inside. Nav is NOT sticky — it scrolls away with the hero.
- **Nav inside hero**: white SquareOne logo (CSS invert filter) + dashboard title (left), 4 tab links (right). Active tab has #1470ad bottom border.
- **Content area**: max-width 1200px, centered, 48px padding below each hero
- **Footer**: "Powered by SquareOne" (left), "Data & Sources" link (right)
- **Chat widget**: floating button (bottom-right), opens panel with AI Q&A powered by Anthropic API
- No sidebar. No sticky header.

### Script block structure

1. **`config.js` loaded first** -- sets `window.ANTHROPIC_KEY` (gitignored)
2. **`isMobile`** -- `window.innerWidth < 768` for responsive JS logic
3. **Config variables** -- `LAST_UPDATED`, `DATA_PERIOD`
4. **Design tokens** -- `var C = {...}` with accent #1470ad
5. **Chart.js defaults** -- dark tooltips, light grids, Inter font
6. **Data arrays** -- all hardcoded data as plain JS objects/arrays
7. **Helper functions** -- `sentimentColor()`, `trendArrow()`, `buildSparkline()`, `cardTargetStatus()`, `metricCardsHTML()`, `sectionHeader()`, `guidingQuestions()`, `chartBox()`, `buildPathwayTree()`, `buildAgencyCards()`
8. **Findings engine** -- `findingsPanel()`, `generateFindings(layer)` -- data-driven narrative panels
9. **Hero component** -- `buildHero(opts)` builds per-page hero with nav, `contentWrap()` for body
10. **Page renderers** -- `renderHome()`, `renderPeoplePipeline()`, `renderLaborMarket()`, `renderFiscalOutlook()`, `renderMobilitySTAT()`, `renderSources()`
11. **Headline findings** -- `getHeadlineFinding(layer)` for landing page cards
12. **Scenario toggle** -- `selectScenario(idx)` for revenue projection chart
13. **Chat widget** -- `initChatWidget()`, `buildDataContext()`, `submitChatQuestion()`, `toggleChat()`, `resetChat()`
14. **Navigation** -- `switchPage(id)` with fade transition + scroll-to-top
15. **Init** -- keyboard listener (0=home, 1-4=layers), `renderHome()`, `initChatWidget()`

Chart instances tracked in `activeCharts[]`, destroyed via `destroyCharts()` on every page switch.

### Navigation flow

- Dashboard loads to landing page (`renderHome()`). No tab active.
- Each page calls `buildHero()` with its own image, title, guiding questions, and active tab.
- Clicking a tab or card calls `switchPage(id)` which scrolls to top, destroys charts, and renders the new page (including its hero).
- Clicking the logo or dashboard title returns to the landing page.

### AI Chat widget

- Floating button fixed bottom-right, toggles a 380px panel
- `buildDataContext()` serializes ALL dashboard data variables into a text context
- Questions sent to Anthropic API (Claude claude-sonnet-4-20250514) with policy analyst system prompt
- Stateless: each question is independent, no conversation history
- 6 suggested questions shown on open
- API key loaded from `config.js` via `window.ANTHROPIC_KEY`

## Updating data

Edit the JS variables near the top of the script block. See `DATA_UPDATE_GUIDE.md` for detailed instructions with source URLs.

Key variables: `educationMetrics`, `pathwayData`, `funnelStages`, `educationTrends`, `employmentMetrics`, `sectorData`, `jobCreation`, `entryLevel`, `fiscalMetrics`, `taxSources`, `revProjections`, `budgetGaps`, `elvSupply`, `pitLost`, `agencies`.

When data arrives for MobilitySTAT "Data pending" metrics, change `pending:true` to `pending:false` and add `value`, `numVal`, `trend`, `sentiment` fields.

Findings narratives in `generateFindings()` and `getHeadlineFinding()` auto-update when data changes. The chat widget's `buildDataContext()` also reads live data.

## Adding a new chart

Use `chartBox('canvasId', 'Title', 'Source citation.')` to create the container, then `addChart(new Chart(...))` after setting innerHTML. Always use `function(v){return ...;}` syntax for callbacks, never arrow functions with template literals.
