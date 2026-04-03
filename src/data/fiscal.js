export const fiscalMetrics = [
  { label: "FY2026 TOTAL TAX REVENUE", value: "$84.2B", context: "OMB forecast", trend: "up", sentiment: "positive" },
  { label: "PIT + PTET", value: "$18.0B", context: "22.1% of total tax revenue", trend: "flat", sentiment: "neutral" },
  { label: "PROPERTY TAX", value: "$35.3B", context: "43.4% of total tax revenue", trend: "flat", sentiment: "neutral" },
  { label: "BUDGET GAP (FY2026)", value: "$5.4B", context: "Down from $12B inherited", trend: "up", sentiment: "positive" },
  { label: "FY2027 PROJECTED GAP", value: "$10.4B", context: "CBC/Comptroller estimate", trend: "down", sentiment: "negative" },
  { label: "MANHATTAN OFFICE VACANCY", value: "~22%", context: "Down from 23.6%; pre-COVID was ~10%", trend: "up", sentiment: "warning" },
  { label: "FY2028 GAP (COMPTROLLER)", value: "$10.1B", context: "7.9% of total revenues", trend: "down", sentiment: "negative" }
];

export const taxRevenueSources = [
  { source: "Property Tax", amount: 35.3, share: 43.4 },
  { source: "PIT + PTET", amount: 18.0, share: 22.1 },
  { source: "Business Income", amount: 10.0, share: 12.3 },
  { source: "Sales Tax", amount: 9.5, share: 11.7 },
  { source: "Other Tax", amount: 11.5, share: 10.5 }
];

export const revenueProjections = [
  { year: "FY2025", omb: 80.5, comptroller: 80.5, stagnation: 80.5 },
  { year: "FY2026", omb: 84.3, comptroller: 83.7, stagnation: 82.0 },
  { year: "FY2027", omb: 91.5, comptroller: 89.8, stagnation: 83.5 },
  { year: "FY2028", omb: 93.8, comptroller: 93.1, stagnation: 84.8 },
  { year: "FY2029", omb: 95.5, comptroller: 97.2, stagnation: 86.2 },
  { year: "FY2030", omb: 97.4, comptroller: 99.8, stagnation: 87.5 }
];

export const budgetGaps = [
  { year: "FY2026", withIncrease: 0.8, without: 0.8 },
  { year: "FY2027", withIncrease: 2.85, without: 6.53 },
  { year: "FY2028", withIncrease: 10.06, without: 13.87 },
  { year: "FY2029", withIncrease: 8.58, without: 12.53 },
  { year: "FY2030", withIncrease: 6.96, without: 11.09 }
];

export const entryLevelVsSupply = [
  { year: 2022, baseline: 72.5, moderate: 72.5, accelerated: 72.5, supply: 93 },
  { year: 2023, baseline: 58.0, moderate: 58.0, accelerated: 58.0, supply: 93 },
  { year: 2024, baseline: 45.4, moderate: 45.4, accelerated: 45.4, supply: 93 },
  { year: 2025, baseline: 43.0, moderate: 43.0, accelerated: 43.0, supply: 93 },
  { year: 2026, baseline: 43.5, moderate: 40.9, accelerated: 39.6, supply: 93 },
  { year: 2027, baseline: 44.5, moderate: 38.8, accelerated: 36.4, supply: 93 },
  { year: 2028, baseline: 46.0, moderate: 36.9, accelerated: 33.5, supply: 93 },
  { year: 2029, baseline: 47.5, moderate: 35.0, accelerated: 30.8, supply: 93 },
  { year: 2030, baseline: 49.0, moderate: 33.3, accelerated: 28.3, supply: 93 },
  { year: 2031, baseline: 51.0, moderate: 31.6, accelerated: 26.1, supply: 93 }
];

export const pitRevenueLost = [
  { year: "2022", moderate: 29, accelerated: 29 },
  { year: "2023", moderate: 77, accelerated: 77 },
  { year: "2024", moderate: 143, accelerated: 143 },
  { year: "2025", moderate: 213, accelerated: 213 },
  { year: "2026", moderate: 286, accelerated: 288 },
  { year: "2027", moderate: 362, accelerated: 367 },
  { year: "2028", moderate: 440, accelerated: 450 },
  { year: "2029", moderate: 521, accelerated: 537 },
  { year: "2030", moderate: 604, accelerated: 627 },
  { year: "2031", moderate: 690, accelerated: 720 }
];
