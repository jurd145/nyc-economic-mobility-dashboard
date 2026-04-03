# NYC Economic Mobility Dashboard -- Improvement Roadmap

Organized by effort level. Each suggestion includes a rationale tied to the primary use case: senior NYC city officials tracking economic mobility outcomes across agencies.

---

## Quick Wins (under 1 hour each, no architectural changes)

1. **Metric card hover effects** -- Add a subtle border highlight (e.g., `border-color` transition) on hover for each KPI card. Officials scanning a dense grid of numbers benefit from clear visual feedback confirming which card they are focused on.

2. **Print stylesheet** -- Add `@media print` rules that hide the sidebar, switch to a white background with dark text, and size charts to fit standard letter/A4 pages. Officials frequently print dashboards for in-person briefings and committee hearings where screens are unavailable.

3. **Keyboard navigation for layers** -- Bind number keys 1-4 to switch between dashboard layers instantly. During live presentations to the Mayor's office or City Council, fumbling with mouse clicks loses the room's attention.

4. **"Data pending" pulse animation** -- Add a CSS pulse (`@keyframes`) on MobilitySTAT items that are still awaiting data submission. Agency leads need an unmistakable visual signal that a metric is incomplete so they do not cite stale or missing numbers in policy decisions.

5. **Smooth page transitions** -- Wrap layer switches in a CSS opacity/fade transition (150-250ms) instead of an instant swap. Abrupt content changes during presentations can disorient an audience unfamiliar with the dashboard layout.

6. **Dynamic "Last updated" timestamp** -- Store the last-updated date in a single JS variable and render it in the header automatically. When data is refreshed monthly, updating one variable is far less error-prone than hunting through HTML for hardcoded dates.

7. **Better tooltip formatting** -- Configure Chart.js tooltip callbacks to display full context such as "$18.0 billion" or "12,400 placements" instead of raw numbers like "18" or "12.4". Officials should never have to guess units or scale when hovering over a data point.

8. **Responsive grid for side-by-side charts** -- Use a Tailwind `md:` breakpoint so the two-column chart grid stacks to a single column on narrow screens. Tablets and smaller laptops are common in field offices and conference rooms.

9. **Accessible color contrast** -- Audit chart colors and text against WCAG AA contrast ratios. City government tools must be accessible to all staff, including those with low vision.

10. **Sticky header with current layer name** -- Keep the layer title visible when scrolling long pages. Officials jumping into the middle of a scrolled view need immediate context about which layer they are reading.

11. **Loading skeleton screens** -- Replace blank space while Chart.js renders with simple gray placeholder rectangles. Even a sub-second flash of empty space can make the tool feel broken on slower government laptops.

---

## Medium Effort (2-4 hours each)

1. **Sparkline mini-charts in metric cards** -- Embed tiny 3-5 point trend lines (using Chart.js or a lightweight canvas helper) inside each KPI card. A single number tells officials where things stand today; a sparkline tells them whether the trajectory is improving or deteriorating.

2. **Comparison toggle -- "Show vs. pre-pandemic"** -- Add a toggle that overlays 2019 baseline data on trend charts. Nearly every policy conversation in NYC still benchmarks recovery against pre-COVID levels, and switching between separate views is slow.

3. **Auto-generated "Key Findings" text block** -- At the top of each layer, programmatically surface 2-3 sentences highlighting the most notable changes (largest month-over-month move, metrics that crossed a threshold). Senior officials often skim the summary rather than interpreting every chart, so surfacing insights in plain language saves time.

4. **Export current view as PNG** -- Use Chart.js `toBase64Image()` for individual charts and html2canvas for full-page screenshots, bundled into a one-click download. Briefing decks for the Deputy Mayor's office are assembled in PowerPoint, and a clean screenshot eliminates manual cropping.

5. **Dark/light mode toggle** -- Add a toggle (persisted in `localStorage`) that switches between the current Bloomberg-terminal dark theme and a light theme. Printed handouts and projectors in bright rooms render poorly with dark backgrounds.

6. **Borough-level drill-down view** -- Allow clicking a citywide metric to see a five-borough breakdown. Policy interventions are often borough-specific (e.g., Bronx workforce hubs), so officials need to know whether citywide gains mask borough-level disparities.

7. **Annotation layer for charts** -- Let users click a data point to attach a short note (stored in `localStorage`). Officials often need to mark external events -- "minimum wage increase took effect here" -- so the chart tells a complete story in future meetings.

8. **CSV/Excel export of underlying data** -- Add a download button that exports the current layer's data as a .csv file. Budget analysts downstream need raw numbers for their own models, and copy-pasting from tooltips is error-prone.

9. **Guided onboarding overlay** -- A first-visit walkthrough (small tooltip sequence) explaining the four layers and key interactions. New staff joining mid-administration should be productive on their first session without a training session.

---

## Bigger Features (1+ days)

1. **Migration to Vite + React** -- Move from a single index.html to a Vite-bundled React app with component-based architecture (requires ~400MB disk; `src/data/*.js` files are already structured for import). As the dashboard grows beyond four layers, a component model prevents the single file from becoming unmaintainable and enables code splitting for faster loads.

2. **Live data API connections** -- Integrate NYC Open Data (Socrata SODA API) and Bureau of Labor Statistics (BLS API) to pull employment, wage, and program data automatically. Manual data entry is the single largest source of delay and error in the current workflow.

3. **User authentication for internal deployment** -- Add login via NYC government SSO (SAML/Azure AD) so the dashboard can be hosted on a city domain with role-based access. Sensitive pre-release data (e.g., upcoming budget numbers) must not be publicly accessible.

4. **Alert/threshold system for MobilitySTAT** -- Auto-flag metrics when actuals miss targets by a configurable percentage, with email or Slack notifications. Agency commissioners should not have to manually check the dashboard to discover that a program is off-track.

5. **Cohort tracking view** -- Follow a defined cohort (e.g., class of 2022) from 9th grade through post-secondary enrollment and into employment, visualized as a Sankey or funnel chart. Economic mobility is inherently longitudinal, and cross-sectional snapshots miss whether the same individuals are progressing.

6. **Scenario builder** -- Let users adjust assumptions (AI displacement rate, wage growth, housing cost inflation) via sliders and see projection charts update in real time. Policy planning requires evaluating "what if" scenarios, and static charts cannot answer forward-looking questions.

7. **Government intranet embedding / password-protected URL deployment** -- Package the dashboard as an embeddable iframe or deploy behind a reverse proxy with basic auth for placement on NYC.gov internal pages. Officials access dozens of tools daily through the city intranet, and a standalone URL adds friction.

8. **Automated PDF report generation** -- Schedule a weekly or monthly PDF export (via Puppeteer or a serverless function) that captures all four layers with a cover page and is emailed to a distribution list. Many senior officials prefer a document they can read on a phone or tablet without opening a browser.

9. **Multi-year goal-tracking timeline** -- Visualize long-range targets (e.g., "reduce poverty by 20% by 2030") as a timeline with current progress markers. Administrations set multi-year goals, and the dashboard should show whether the city is on pace without requiring mental math.

10. **Accessibility audit and ARIA compliance** -- Conduct a full WCAG 2.1 AA audit, add ARIA labels to all interactive elements, and ensure full keyboard operability. City government digital tools are legally required to be accessible, and an inaccessible internal tool sets a poor precedent.
