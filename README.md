# NYC Economic Mobility Dashboard

A data dashboard tracking education, workforce, and economic development outcomes for New York City. Built for the Office of the Deputy Mayor for Economic Justice.

**Live site:** [mobility.squareoneed.com](https://mobility.squareoneed.com)

---

## What it does

The dashboard connects three systems that drive economic mobility in NYC: education, workforce development, and economic development. It tracks whether the city is making progress, who is being left behind, and what happens if current trends continue.

**Four layers of analysis:**

- **People & Pipeline** — Education outcomes from 9th grade through employment, including a pathway tree showing where 72,000 students go at each stage
- **Labor Market & Sectors** — Sector-level job creation, entry-level posting trends, and the mismatch between graduate supply and available positions
- **Fiscal & Economic Outlook** — Tax revenue projections, budget gap scenarios, and the fiscal cost of youth underemployment
- **MobilitySTAT** — Agency-level accountability with targets, status indicators, and data collection tracking

Each layer includes auto-generated "So What" narrative panels that read the data and produce key findings. When the data changes, the narratives update automatically.

**AI chat widget** — Ask questions about the data and get answers grounded in the dashboard's actual numbers, powered by Claude via the Anthropic API.

## Architecture

A single `index.html` file (~1,300 lines) with no build step, no npm, no React. Vanilla JavaScript with string concatenation for all DOM rendering.

| Dependency | Source | Purpose |
|-----------|--------|---------|
| Chart.js 4.4.4 | jsdelivr CDN | Line, bar, and doughnut charts |
| Tailwind CSS | cdn.tailwindcss.com | Utility styling |
| Inter | Google Fonts | Typography |
| Anthropic API | Cloudflare Worker proxy | AI chat responses |

All data is hardcoded as JavaScript variables near the top of the script block. No database, no API calls for data (only for the chat widget). Designed to be updated monthly/quarterly by editing the variables directly.

## Design

Light editorial theme inspired by NYT interactive graphics, NYCEDC, and the [SquareOne](https://www.squareoneed.com/) brand. Hero image bands with integrated navigation on every page. Accent color #1470ad. Mobile-responsive with stacked layouts, short nav labels, and table-to-card transforms.

## Key features

- **Pathway tree diagram** — HTML/CSS visualization of student flow from 9th grade through CUNY to workforce entry
- **Auto-generated narratives** — Data-driven "So What" panels that update when numbers change
- **Scenario selector** — Toggle between OMB, Comptroller, and Stagnation revenue projections
- **Education targets** — Metric cards show progress toward proposed benchmarks with status dots
- **MobilitySTAT targets** — Agency metrics auto-evaluated against targets (On Track / Watch / Action Required)
- **Equity disaggregation** — Breakdowns by disability status, ELL status, and race on select metrics
- **CSS sparklines** — Inline trend bars showing recent trajectory on metric cards
- **AI chat** — Ask questions about the data via a floating widget; answers grounded in actual dashboard numbers
- **Entrance animations** — Staggered fadeInUp animations on page load
- **Mobile optimization** — Responsive heroes, scrollable nav, sources table-to-cards, stacked grids

## Running locally

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

No install, no build, no dependencies to manage. The chat widget works on the live site via a Cloudflare Worker proxy that holds the API key.

## Updating data

All data lives in clearly labeled JavaScript variables at the top of the `<script>` block in `index.html`. See [DATA_UPDATE_GUIDE.md](DATA_UPDATE_GUIDE.md) for step-by-step instructions with source URLs and validation rules.

Key variables: `educationMetrics`, `pathwayData`, `educationTrends`, `employmentMetrics`, `sectorData`, `jobCreation`, `entryLevel`, `fiscalMetrics`, `taxSources`, `revProjections`, `budgetGaps`, `elvSupply`, `pitLost`, `agencies`.

## Data sources

- NYC Public Schools (InfoHub graduation data)
- CUNY Office of Institutional Research
- NY State Department of Labor
- U.S. Bureau of Labor Statistics (JOLTS, Employment Projections)
- NYC Comptroller's Office
- NYC Office of Management and Budget
- Center for an Urban Future
- NYCEDC
- Citizens Budget Commission, Brookings Institution, TNTP

Full source table with URLs and methodology at [mobility.squareoneed.com](https://mobility.squareoneed.com) under "Data & Sources."

## How it was built

Built entirely with [Claude Code](https://claude.ai/code) (Anthropic's CLI for Claude) across multiple sessions. The full build story — including constraints, iterations, and technical decisions — is in [how-it-was-built.txt](how-it-was-built.txt).

Powered by [SquareOne](https://www.squareoneed.com/).

## License

This project is provided as-is for informational and demonstration purposes. Data is sourced from public agencies and independent research organizations. Projection models are described in the Methodology section of the Data & Sources page.
