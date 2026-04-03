# NYC Economic Mobility Dashboard - Changelog

## v1.1 - 2026-04-03
- Fixed: Sector bar chart now sorted by job change (largest gain to largest loss)
- Added: Metric card hover effects (blue border highlight)
- Added: Agency card hover effects
- Added: Print stylesheet for clean Cmd+P output (hides sidebar, white background)
- Added: Keyboard navigation (press 1-4 to switch layers)
- Added: Smooth fade transition when switching layers
- Added: "Data pending" pulse animation on MobilitySTAT cards
- Added: Dynamic LAST_UPDATED and DATA_PERIOD variables (single point of update)
- Added: DATA_UPDATE_GUIDE.md with full source URLs and update schedule
- Added: IMPROVEMENTS.md with prioritized enhancement roadmap

## v1.0 - 2026-04-03
- Initial dashboard build
- Four layers: People & Pipeline, Labor Market & Sectors, Fiscal & Economic Outlook, MobilitySTAT
- All data hardcoded from sources current as of March 2026
- Single-file architecture (index.html) with Chart.js, Tailwind CSS, Inter font via CDN
