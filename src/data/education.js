export const educationMetrics = [
  { label: "HS GRADUATION RATE", value: "81.2%", context: "-2.0pp YoY — largest drop in 20 years", trend: "down", sentiment: "negative" },
  { label: "COLLEGE ENROLLMENT RATE", value: "71%", context: "Down from 81% in 2019", trend: "down", sentiment: "negative" },
  { label: "CUNY 3-YR ASSOCIATE'S COMPLETION", value: "25%", context: "ASAP students: 53%", trend: "flat", sentiment: "negative" },
  { label: "CUNY 6-YR BACHELOR'S COMPLETION", value: "53%", context: "Varies widely by campus", trend: "up", sentiment: "warning" },
  { label: "CUNY PAID INTERNSHIP RATE", value: "12%", context: "National average: 57%", trend: "flat", sentiment: "negative" },
  { label: "YOUTH UNEMPLOYMENT (UNDER 24)", value: "7.6%", context: "Non-college youth, Dec 2025", trend: "flat", sentiment: "negative" },
  { label: "NYC UNEMPLOYMENT RATE", value: "5.6%", context: "Dec 2025 (NYS: 4.6%)", trend: "flat", sentiment: "negative" },
  { label: "ENTRY-LEVEL POSTINGS", value: "45,354", context: "-37.4% since 2022", trend: "down", sentiment: "negative" },
  { label: "UNDEREMPLOYED WORKING-AGE NYers", value: "1.1M", context: "Unemployed + underemployed + min wage", trend: "flat", sentiment: "negative" },
  { label: "BLACK UNEMPLOYMENT", value: "9.6%", context: "Dec 2025", trend: "flat", sentiment: "negative" }
];

export const funnelStages = [
  { stage: "Enter 9th Grade", count: "72,000", pct: 100, fill: "#10b981" },
  { stage: "HS Graduation (4yr)", count: "58,500", pct: 81.2, fill: "#10b981" },
  { stage: "College Enrollment", count: "41,500", pct: 71.0, fill: "#f59e0b" },
  { stage: "CUNY Bachelor's Completion (6yr)", count: "22,000", pct: 53.0, fill: "#f59e0b" },
  { stage: "Completes Paid Internship", count: "2,640", pct: 12.0, fill: "#ef4444" },
  { stage: "Career-Track Employment (1yr)", count: "???", pct: null, fill: "#475569" }
];

export const educationTrends = [
  { year: 2016, hsGradRate: 76.0, collegeEnrollment: 73, cuny6yr: 42 },
  { year: 2017, hsGradRate: 77.3, collegeEnrollment: 75, cuny6yr: 44 },
  { year: 2018, hsGradRate: 78.3, collegeEnrollment: 77, cuny6yr: 46 },
  { year: 2019, hsGradRate: 80.4, collegeEnrollment: 81, cuny6yr: 48 },
  { year: 2020, hsGradRate: 81.0, collegeEnrollment: 76, cuny6yr: 49 },
  { year: 2021, hsGradRate: 82.6, collegeEnrollment: 71, cuny6yr: 50 },
  { year: 2022, hsGradRate: 83.4, collegeEnrollment: 70, cuny6yr: 51 },
  { year: 2023, hsGradRate: 83.3, collegeEnrollment: 69, cuny6yr: 52 },
  { year: 2024, hsGradRate: 83.3, collegeEnrollment: 69, cuny6yr: 53 },
  { year: 2025, hsGradRate: 81.2, collegeEnrollment: null, cuny6yr: 53 }
];
