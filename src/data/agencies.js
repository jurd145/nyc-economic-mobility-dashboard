export const agencies = [
  {
    name: "DOE",
    fullName: "Department of Education",
    description: "K-12 outcomes, CTE pathways, dual enrollment, and credential attainment",
    owner: "Portfolio Owner TBD",
    status: "action",
    metrics: [
      { label: "HS Graduation Rate", value: "81.2%", trend: "down", sentiment: "negative", pending: false },
      { label: "CTE Enrollment", value: null, trend: null, sentiment: "neutral", pending: true },
      { label: "Dual Enrollment Participation", value: null, trend: null, sentiment: "neutral", pending: true },
      { label: "Students Earning Industry Credentials", value: null, trend: null, sentiment: "neutral", pending: true }
    ]
  },
  {
    name: "CUNY",
    fullName: "City University of New York",
    description: "Enrollment, completion rates, paid internship placements, and workforce readiness",
    owner: "Portfolio Owner TBD",
    status: "action",
    metrics: [
      { label: "Total Enrollment", value: "~232,000", trend: "down", sentiment: "warning", pending: false },
      { label: "3-Year Associate's Completion", value: "25%", trend: "flat", sentiment: "negative", pending: false },
      { label: "6-Year Bachelor's Completion", value: "53%", trend: "up", sentiment: "warning", pending: false },
      { label: "Paid Internship Completion", value: "12%", trend: "flat", sentiment: "negative", pending: false }
    ]
  },
  {
    name: "SBS",
    fullName: "Small Business Services",
    description: "Workforce program placements, employer partnerships, and small business regulatory relief",
    owner: "Portfolio Owner TBD",
    status: "watch",
    metrics: [
      { label: "Workforce Program Placements", value: null, trend: null, sentiment: "neutral", pending: true },
      { label: "90-Day Retention Rate", value: null, trend: null, sentiment: "neutral", pending: true },
      { label: "Small Business Regulatory Burden Reduction", value: null, trend: null, sentiment: "neutral", pending: true },
      { label: "Active Employer Partnerships", value: null, trend: null, sentiment: "neutral", pending: true }
    ]
  },
  {
    name: "NYCEDC",
    fullName: "NYC Economic Development Corporation",
    description: "Private sector job creation, sector diversification, and MWBE utilization",
    owner: "Portfolio Owner TBD",
    status: "action",
    metrics: [
      { label: "Private Sector Job Creation (Jan–Jul 2025)", value: "+5,100", trend: "down", sentiment: "negative", pending: false },
      { label: "MWBE Contract Utilization", value: null, trend: null, sentiment: "neutral", pending: true },
      { label: "Business Formation Rate", value: null, trend: null, sentiment: "neutral", pending: true },
      { label: "Sector Diversification Index", value: null, trend: null, sentiment: "neutral", pending: true }
    ]
  },
  {
    name: "DYCD",
    fullName: "Youth & Community Development",
    description: "Youth program enrollment, summer employment, and post-program outcomes",
    owner: "Portfolio Owner TBD",
    status: "watch",
    metrics: [
      { label: "Youth Program Enrollment", value: null, trend: null, sentiment: "neutral", pending: true },
      { label: "Summer Youth Employment Slots", value: null, trend: null, sentiment: "neutral", pending: true },
      { label: "Post-Program Employment Rate", value: null, trend: null, sentiment: "neutral", pending: true }
    ]
  },
  {
    name: "HRA",
    fullName: "Human Resources Administration",
    description: "Adult workforce programs, placement rates, and wage trajectories",
    owner: "Portfolio Owner TBD",
    status: "watch",
    metrics: [
      { label: "Adult Workforce Program Enrollment", value: null, trend: null, sentiment: "neutral", pending: true },
      { label: "Placement Rate", value: null, trend: null, sentiment: "neutral", pending: true },
      { label: "Placement Wage at 90 Days", value: null, trend: null, sentiment: "neutral", pending: true },
      { label: "Placement Wage at 1 Year", value: null, trend: null, sentiment: "neutral", pending: true }
    ]
  },
  {
    name: "NYC TALENT",
    fullName: "NYC Talent / Workforce Development",
    description: "Apprenticeships, CareerWise placements, and AI Workforce Fund programs",
    owner: "Portfolio Owner TBD",
    status: "watch",
    metrics: [
      { label: "Apprenticeship Enrollment", value: null, trend: null, sentiment: "neutral", pending: true },
      { label: "CareerWise Placements", value: null, trend: null, sentiment: "neutral", pending: true },
      { label: "AI Workforce Fund Enrollment", value: null, trend: null, sentiment: "neutral", pending: true }
    ]
  }
];
