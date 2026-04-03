# NYC Economic Mobility Dashboard -- Data Update Guide

This guide is for non-developers who need to update the data in the NYC Economic Mobility Dashboard. All data lives in a single file (`index.html`) as JavaScript variables near the top of a `<script>` block. You will find each variable, change the numbers, save the file, and hand it off to someone technical to verify.

---

## Table of Contents

1. [How to Update Data (Step by Step)](#how-to-update-data-step-by-step)
2. [Variable Reference](#variable-reference)
3. [Update Schedule and Sources](#update-schedule-and-sources)
4. [Validation Rules](#validation-rules)
5. [Common Mistakes to Avoid](#common-mistakes-to-avoid)

---

## How to Update Data (Step by Step)

### Opening the File

1. Navigate to the project folder on your computer.
2. Right-click on `index.html` and choose "Open With" and then select a plain-text editor (TextEdit in plain-text mode, VS Code, Sublime Text, or Notepad on Windows). Do NOT open it in a web browser for editing.
3. The file will look like code. Do not be alarmed. You only need to change numbers.

### Finding a Variable

1. Press **Cmd+F** (Mac) or **Ctrl+F** (Windows) to open the search bar.
2. Type the exact variable name (for example: `educationMetrics`) and press Enter.
3. The editor will jump to that section of the file.

### Changing a Number

1. Locate the specific number you need to update. Each variable has comments or labels next to the values to help you identify what each number represents.
2. Carefully select the old number and type the new number in its place.
3. Do NOT delete commas, brackets, quotation marks, or other punctuation around the number. Only change the number itself.

### Saving and Verifying

1. Press **Cmd+S** (Mac) or **Ctrl+S** (Windows) to save the file.
2. Open `index.html` in a web browser (double-click it, or drag it into Chrome/Firefox/Safari).
3. Check that the dashboard loads without errors. If you see a blank page or broken charts, you may have accidentally deleted a comma or bracket -- see "Common Mistakes to Avoid" below.
4. Visually confirm the updated numbers appear on the dashboard where expected.
5. Hand the updated file to a technical team member for final verification before publishing.

---

## Variable Reference

Below is every data variable in the dashboard, what it contains, and where to find its source data.

---

### 1. educationMetrics

**What it is:** An array of 10 metric cards displayed in the Education section of the dashboard.

**Metrics included:**

| Position | Metric | Example Value |
|----------|--------|---------------|
| 1 | High school graduation rate | 84.3% |
| 2 | College enrollment rate | 62.8% |
| 3 | CUNY 4-year completion rate | 32.1% |
| 4 | CUNY 6-year completion rate | 54.7% |
| 5 | CUNY internship participation rate | 18.5% |
| 6 | Youth unemployment rate (16-24) | 14.2% |
| 7 | NYC overall unemployment rate | 5.8% |
| 8 | Black unemployment rate | 9.1% |
| 9 | Entry-level job postings | various |
| 10 | Underemployed New Yorkers | various |

**How to update:** Search for `educationMetrics`. Each card is an object in the array. Change the `value` field for the metric you need to update.

---

### 2. funnelStages

**What it is:** A 6-stage pipeline showing the education-to-employment funnel. This powers the funnel visualization on the dashboard.

**Stages (in order):**

1. 9th grade entry
2. High school graduation
3. College enrollment
4. College completion
5. Career-relevant employment
6. Career-track employment

**How to update:** Search for `funnelStages`. Each stage has a numeric value representing the count or percentage at that stage. Update the number for whichever stage has new data.

---

### 3. educationTrends

**What it is:** Yearly trend data from 2016 through 2025 used to render line charts. Contains three arrays of numbers, one per trend line.

**Arrays:**

- `hsGrad` -- High school graduation rate by year (percentage)
- `collegeEnroll` -- College enrollment rate by year (percentage)
- `cuny6yr` -- CUNY 6-year completion rate by year (percentage)

**How to update:** Search for `educationTrends`. Find the array you need (e.g., `hsGrad`). The values are listed in chronological order from 2016 to 2025. To add a new year, append a value at the end of the array and add the corresponding year label. To update an existing year, count from the left (first value = 2016, second = 2017, and so on).

---

### 4. employmentMetrics

**What it is:** An array of 6 metric cards displayed in the Employment section.

**Metrics included:**

| Position | Metric | Description |
|----------|--------|-------------|
| 1 | Private sector jobs | Total count |
| 2 | Job change | Net change in jobs |
| 3 | Job creation | Recent job creation figure |
| 4 | Job openings | Current openings |
| 5 | Unemployed per opening | Ratio |
| 6 | Entry-level posting decline | Percentage decline |

**How to update:** Search for `employmentMetrics`. Update the `value` field for the relevant card.

---

### 5. sectorData

**What it is:** Three parallel arrays that power the sector-level employment chart. Covers 9 industry sectors.

**Arrays:**

- `sectors` -- Sector names (text labels, 9 items)
- `changes` -- Job change numbers for each sector (positive or negative)
- `wages` -- Median hourly wage for each sector (in dollars)

**How to update:** Search for `sectorData`. The three arrays are aligned by position: the first item in `sectors` corresponds to the first item in `changes` and the first item in `wages`. Update the number at the matching position.

---

### 6. jobCreation

**What it is:** Monthly job creation data (January through July) by year, from 2022 through 2025. Values are in thousands (so 45.4 means 45,400 jobs).

**How to update:** Search for `jobCreation`. Each year has an array of values for Jan-Jul. Update individual monthly values or add a new year.

---

### 7. entryLevel

**What it is:** Entry-level job postings from 2019 through 2024. Values are in thousands.

**How to update:** Search for `entryLevel`. Update the value for the relevant year. To add 2025 data, append a new value at the end and ensure a year label is added in the corresponding labels array.

---

### 8. fiscalMetrics

**What it is:** An array of 7 metric cards for the Fiscal Health section of the dashboard.

**Metrics included:**

| Position | Metric |
|----------|--------|
| 1 | Total tax revenue |
| 2 | Personal income tax (PIT) revenue |
| 3 | Property tax revenue |
| 4 | Budget gap (current year) |
| 5 | Budget gap (out-year) |
| 6 | Office vacancy rate |
| 7 | Additional fiscal metric |

**How to update:** Search for `fiscalMetrics`. Update the `value` field for the relevant card.

---

### 9. taxSources

**What it is:** FY2026 tax revenue breakdown across 5 categories. Each entry has an amount in billions of dollars and a percentage share.

**Fields per category:**

- Amount (in billions, e.g., 15.2 means $15.2 billion)
- Share (percentage of total, e.g., 28.5 means 28.5%)

**How to update:** Search for `taxSources`. Update the amount and/or share for the relevant tax category. The shares should add up to approximately 100%.

---

### 10. revProjections

**What it is:** Revenue projection scenarios from FY2025 through FY2030. Three forecast tracks:

- `omb` -- Office of Management and Budget projections (in billions)
- `comptroller` -- NYC Comptroller projections (in billions)
- `stagnation` -- Stagnation scenario projections (in billions)

**How to update:** Search for `revProjections`. Each scenario is an array of values, one per fiscal year from FY2025 to FY2030. Update the number at the position matching the fiscal year you need to change.

---

### 11. budgetGaps

**What it is:** Projected budget gaps from FY2026 through FY2030 under two scenarios. Values are in billions of dollars.

- `withIncrease` -- Budget gap assuming a property tax increase
- `without` -- Budget gap without a property tax increase

**How to update:** Search for `budgetGaps`. Update the value at the position corresponding to the fiscal year.

---

### 12. elvSupply

**What it is:** Entry-level vacancy and supply data from 2022 through 2031. Contains four arrays:

- `baseline` -- Baseline displacement scenario (in thousands)
- `moderate` -- Moderate displacement scenario (in thousands)
- `accelerated` -- Accelerated displacement scenario (in thousands)
- `supply` -- Projected supply of entry-level workers (in thousands)

**How to update:** Search for `elvSupply`. Update the number at the position matching the year (first position = 2022, last position = 2031).

---

### 13. pitLost

**What it is:** Cumulative personal income tax (PIT) revenue lost under two displacement scenarios, from 2022 through 2031. Values are in millions of dollars, cumulative.

- `moderate` -- PIT revenue lost under moderate displacement (in millions, cumulative)
- `accelerated` -- PIT revenue lost under accelerated displacement (in millions, cumulative)

**How to update:** Search for `pitLost`. Update the value at the year position you need to change. Remember values are cumulative, so each year should be equal to or greater than the previous year.

---

### 14. agencies

**What it is:** An array of 7 agency objects, each containing descriptive text and performance metrics. The agencies are:

1. **DOE** -- NYC Department of Education
2. **CUNY** -- City University of New York
3. **SBS** -- Small Business Services
4. **NYCEDC** -- NYC Economic Development Corporation
5. **DYCD** -- Department of Youth and Community Development
6. **HRA** -- Human Resources Administration
7. **NYC TALENT** -- NYC Talent initiative

Each agency object includes metrics such as budget, participants served, and program outcomes.

**How to update:** Search for `agencies`. Find the agency by name, then update the numeric values within its metrics fields.

---

## Update Schedule and Sources

### Monthly Updates

| Variable(s) | What to Update | Source | URL |
|-------------|---------------|--------|-----|
| educationMetrics (youth, NYC, Black unemployment) | Unemployment rates | NY State Dept. of Labor, NYC Region | https://dol.ny.gov/labor-statistics-new-york-city-region |
| employmentMetrics (job openings, unemployed per opening) | Job openings data | BLS JOLTS, New York | https://www.bls.gov/regions/northeast/news-release/jobopeningslaborturnover_newyork.htm |

### Quarterly Updates

| Variable(s) | What to Update | Source | URL |
|-------------|---------------|--------|-----|
| fiscalMetrics, taxSources | Tax revenue figures | NYC Comptroller Quarterly Cash Report | https://comptroller.nyc.gov/reports/new-york-city-quarterly-cash-report/ |
| fiscalMetrics (office vacancy) | Office vacancy rate | CBRE or Cushman & Wakefield quarterly reports | Check CBRE and Cushman & Wakefield websites for latest NYC office market reports |

### Annual Updates

| Variable(s) | What to Update | Source | URL |
|-------------|---------------|--------|-----|
| educationMetrics (HS grad rate), educationTrends (hsGrad) | High school graduation rate | NYC DOE InfoHub | https://infohub.nyced.org/reports/academics/graduation-results |
| educationMetrics (CUNY rates), educationTrends (cuny6yr) | CUNY completion and internship rates | CUNY Office of Institutional Research Data Book | https://www.cuny.edu/about/administration/offices/oira/institutional/data/ |
| budgetGaps, revProjections | Budget gaps and revenue projections | NYC Comptroller Comments on the Budget | Check comptroller.nyc.gov for latest budget analysis |
| entryLevel | Entry-level job postings | Center for an Urban Future | https://nycfuture.org/research |

### As Published (No Fixed Schedule)

| Variable(s) | What to Update | Source | URL |
|-------------|---------------|--------|-----|
| sectorData, employmentMetrics | Employment projections and sector data | BLS Employment Projections | https://www.bls.gov/emp/ |
| Various | NYC workforce and education research | Center for an Urban Future reports | https://nycfuture.org/research |

---

## Validation Rules

After updating any number, check that your new value falls within the expected range. Out-of-range values usually indicate a typo or a units mismatch.

| Data Type | Valid Range | Units | Example |
|-----------|------------|-------|---------|
| Percentages | 0 to 100 | Percent | 84.3 means 84.3% |
| Job counts | Positive numbers | Thousands | 45.4 means 45,400 jobs |
| Fiscal values | 0 to 200 | Billions of dollars | 15.2 means $15.2 billion |
| PIT lost values | Positive, cumulative | Millions of dollars | 340 means $340 million cumulative |
| Year labels | Sequential, no gaps | Calendar or fiscal year | 2016, 2017, 2018... |
| Unavailable data | Use `null` | -- | null (no quotes around it) |

**About null values:** When data is not yet available for a year, use the word `null` (lowercase, no quotation marks). Chart.js will skip that data point gracefully and the chart will still render correctly.

---

## Common Mistakes to Avoid

### Deleting a Comma

Every value in an array is separated by a comma. If you accidentally delete a comma, the dashboard will break.

- Wrong: `[84.3 85.1, 86.0]` (missing comma between 84.3 and 85.1)
- Right: `[84.3, 85.1, 86.0]`

### Deleting a Bracket

Arrays are wrapped in square brackets `[ ]`. Deleting one will break the dashboard.

- Wrong: `84.3, 85.1, 86.0]` (missing opening bracket)
- Right: `[84.3, 85.1, 86.0]`

### Adding Quotes Around Numbers

Numbers should NOT have quotation marks around them (unless they are text labels like sector names).

- Wrong: `"84.3"` (this is text, not a number)
- Right: `84.3`

### Adding Quotes Around null

The word `null` must NOT have quotation marks.

- Wrong: `"null"` (this is the text string "null", not an empty value)
- Right: `null`

### Using Dollar Signs or Percent Signs in Numbers

Do not include `$`, `%`, `B`, or `M` in the numeric values. The dashboard adds formatting automatically.

- Wrong: `$15.2B`
- Right: `15.2`

### Mismatched Array Lengths

When a chart uses year labels and data arrays together, they must have the same number of items. If you add a new year to the labels, you must also add a corresponding value to each data array (or `null` if unavailable).

### Forgetting to Save

Always press **Cmd+S** (Mac) or **Ctrl+S** (Windows) after making changes. Refreshing the browser without saving will show the old data.

---

## Quick Reference Checklist

Use this checklist each time you update data:

- [ ] Opened `index.html` in a text editor (not a browser)
- [ ] Used Cmd+F / Ctrl+F to find the correct variable
- [ ] Changed only the number, not surrounding punctuation
- [ ] New value is within the expected range (see Validation Rules)
- [ ] Saved the file (Cmd+S / Ctrl+S)
- [ ] Opened the file in a browser to verify it loads
- [ ] Charts and cards display the updated values correctly
- [ ] Handed the file to a technical team member for review
