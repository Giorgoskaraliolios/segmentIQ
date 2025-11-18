export interface Customer {
  id: number
  name: string
  email: string
  age: number
  income: number
  purchaseFrequency: number
  avgOrderValue: number
  recency: number
  lifetimeValue: number
  engagement: number
  location: string
  state: string
  segment?: number
  segmentName?: string
}

export interface Segment {
  id: number
  name: string
  color: string
  customers: Customer[]
  avgAge: number
  avgIncome: number
  avgPurchaseFrequency: number
  avgOrderValue: number
  avgLifetimeValue: number
  avgRecency: number
  avgEngagement: number
  totalRevenue: number
  customerCount: number
  roiScore: number
  effort: number
  growthPotential: number
  churnRisk: number
  priority: number
}

export interface ROIMetrics {
  segment: Segment
  roiScore: number
  ltv: number
  effort: number
  growthPotential: number
  churnRisk: number
  recommendedAction: string
  priority: number
}
