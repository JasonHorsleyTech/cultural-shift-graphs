export type TimeCategory = 'low' | 'medium' | 'high'
export type EvidenceTier = 1 | 2 | 3
export type ActivationEnergy = 'low' | 'medium' | 'high'
export type InterventionCategory =
  | 'physical-activity'
  | 'mental-health'
  | 'medical'
  | 'surgical'
  | 'lifestyle'

export interface Intervention {
  id: string
  name: string
  category: InterventionCategory
  annualCostLow: number
  annualCostMid: number
  annualCostHigh: number
  qalyLow: number
  qalyMid: number
  qalyHigh: number
  evidenceTier: EvidenceTier
  weeklyHours: number
  timeCategory: TimeCategory
  activationEnergy: ActivationEnergy
  adherenceRate: number
  description: string
}

export const interventions: Intervention[] = [
  {
    id: 'walking',
    name: 'Walking (30 min/day)',
    category: 'physical-activity',
    annualCostLow: 0, annualCostMid: 0, annualCostHigh: 235,
    qalyLow: 0.04, qalyMid: 0.08, qalyHigh: 0.15,
    evidenceTier: 1,
    weeklyHours: 3.5,
    timeCategory: 'high',
    activationEnergy: 'low',
    adherenceRate: 0.50,
    description: '150 min/week reduces all-cause mortality by 11%. Free, accessible, zero equipment needed.',
  },
  {
    id: 'strength-training',
    name: 'Strength Training',
    category: 'physical-activity',
    annualCostLow: 0, annualCostMid: 250, annualCostHigh: 400,
    qalyLow: 0.03, qalyMid: 0.07, qalyHigh: 0.11,
    evidenceTier: 2,
    weeklyHours: 2.5,
    timeCategory: 'medium',
    activationEnergy: 'medium',
    adherenceRate: 0.35,
    description: 'Resistance training 2–3x/week reduces mortality by 15% and significantly improves depression.',
  },
  {
    id: 'yoga',
    name: 'Yoga',
    category: 'physical-activity',
    annualCostLow: 5, annualCostMid: 60, annualCostHigh: 300,
    qalyLow: 0.01, qalyMid: 0.03, qalyHigh: 0.05,
    evidenceTier: 2,
    weeklyHours: 2.0,
    timeCategory: 'medium',
    activationEnergy: 'low',
    adherenceRate: 0.25,
    description: 'Modest quality-of-life gains for pain and mood, but no mortality evidence after adjustment.',
  },
  {
    id: 'cycling',
    name: 'Cycling (recreational)',
    category: 'physical-activity',
    annualCostLow: 75, annualCostMid: 120, annualCostHigh: 250,
    qalyLow: 0.03, qalyMid: 0.07, qalyHigh: 0.13,
    evidenceTier: 2,
    weeklyHours: 2.5,
    timeCategory: 'medium',
    activationEnergy: 'medium',
    adherenceRate: 0.40,
    description: 'Similar mortality benefit to walking but carries higher injury risk and startup cost.',
  },
  {
    id: 'generic-ssris',
    name: 'Generic SSRIs',
    category: 'mental-health',
    annualCostLow: 150, annualCostMid: 455, annualCostHigh: 1200,
    qalyLow: 0.03, qalyMid: 0.05, qalyHigh: 0.08,
    evidenceTier: 1,
    weeklyHours: 0.3,
    timeCategory: 'low',
    activationEnergy: 'medium',
    adherenceRate: 0.28,
    description: 'Effective for depression but 28% real-world adherence and 30–50% sexual dysfunction rates.',
  },
  {
    id: 'cbt-depression',
    name: 'CBT (Depression)',
    category: 'mental-health',
    annualCostLow: 60, annualCostMid: 330, annualCostHigh: 1333,
    qalyLow: 0.03, qalyMid: 0.06, qalyHigh: 0.10,
    evidenceTier: 1,
    weeklyHours: 1.5,
    timeCategory: 'medium',
    activationEnergy: 'high',
    adherenceRate: 0.65,
    description: '16-session course with durable benefits persisting after treatment ends.',
  },
  {
    id: 'bariatric-surgery',
    name: 'Bariatric Surgery',
    category: 'surgical',
    annualCostLow: 900, annualCostMid: 8700, annualCostHigh: 10500,
    qalyLow: 0.05, qalyMid: 0.08, qalyHigh: 0.12,
    evidenceTier: 1,
    weeklyHours: 2.0,
    timeCategory: 'medium',
    activationEnergy: 'high',
    adherenceRate: 0.62,
    description: 'Dramatic long-term health gains but costs $8,700/yr amortized. Same QALY as free walking.',
  },
  {
    id: 'statin-therapy',
    name: 'Statin Therapy',
    category: 'medical',
    annualCostLow: 100, annualCostMid: 150, annualCostHigh: 250,
    qalyLow: 0.01, qalyMid: 0.02, qalyHigh: 0.04,
    evidenceTier: 1,
    weeklyHours: 0.1,
    timeCategory: 'low',
    activationEnergy: 'medium',
    adherenceRate: 0.48,
    description: 'Generic atorvastatin at $4/month reduces cardiovascular events by 21%.',
  },
  {
    id: 'diet-overhaul',
    name: 'Diet Overhaul (Home Cooking)',
    category: 'lifestyle',
    annualCostLow: 0, annualCostMid: 250, annualCostHigh: 700,
    qalyLow: 0.03, qalyMid: 0.05, qalyHigh: 0.08,
    evidenceTier: 2,
    weeklyHours: 5.0,
    timeCategory: 'high',
    activationEnergy: 'high',
    adherenceRate: 0.30,
    description: 'Mediterranean-style home cooking reduces mortality 15–26% but demands 5 hrs/week.',
  },
  {
    id: 'sleep-hygiene',
    name: 'Sleep Hygiene / CBT-I',
    category: 'lifestyle',
    annualCostLow: 15, annualCostMid: 50, annualCostHigh: 200,
    qalyLow: 0.02, qalyMid: 0.03, qalyHigh: 0.05,
    evidenceTier: 2,
    weeklyHours: 0.8,
    timeCategory: 'low',
    activationEnergy: 'medium',
    adherenceRate: 0.47,
    description: 'CBT for insomnia generates modest gains with minimal cost and no medication side effects.',
  },
  {
    id: 'smoking-cessation',
    name: 'Smoking Cessation',
    category: 'lifestyle',
    annualCostLow: 0, annualCostMid: 150, annualCostHigh: 500,
    qalyLow: 0.10, qalyMid: 0.20, qalyHigh: 0.30,
    evidenceTier: 1,
    weeklyHours: 0.3,
    timeCategory: 'low',
    activationEnergy: 'high',
    adherenceRate: 0.20,
    description: 'Highest QALY on the chart. Free state quitlines available but only 20% success per attempt.',
  },
  {
    id: 'alcohol-reduction',
    name: 'Alcohol Reduction (Brief Intervention)',
    category: 'lifestyle',
    annualCostLow: 0, annualCostMid: 30, annualCostHigh: 150,
    qalyLow: 0.01, qalyMid: 0.03, qalyHigh: 0.07,
    evidenceTier: 1,
    weeklyHours: 0.1,
    timeCategory: 'low',
    activationEnergy: 'medium',
    adherenceRate: 0.35,
    description: 'A brief 5–15 minute primary care screening yields outsized health benefits per dollar.',
  },
  {
    id: 'meditation',
    name: 'Meditation / Mindfulness',
    category: 'mental-health',
    annualCostLow: 0, annualCostMid: 50, annualCostHigh: 200,
    qalyLow: 0.01, qalyMid: 0.02, qalyHigh: 0.04,
    evidenceTier: 2,
    weeklyHours: 2.0,
    timeCategory: 'medium',
    activationEnergy: 'medium',
    adherenceRate: 0.30,
    description: 'Small quality-of-life improvements but adherence drops to 30% without structured support.',
  },
  {
    id: 'community-groups',
    name: 'Community Group Participation',
    category: 'lifestyle',
    annualCostLow: 100, annualCostMid: 350, annualCostHigh: 800,
    qalyLow: 0.01, qalyMid: 0.03, qalyHigh: 0.06,
    evidenceTier: 3,
    weeklyHours: 2.5,
    timeCategory: 'medium',
    activationEnergy: 'high',
    adherenceRate: 0.50,
    description: 'Modest health benefits but weak evidence (Tier 3) with substantial access barriers.',
  },
]
