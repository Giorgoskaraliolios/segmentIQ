import { Segment, ROIMetrics } from '../types'

export function calculateROIScore(segment: Segment, allSegments: Segment[]): ROIMetrics {
  // Normalize LTV (0-1)
  const maxLTV = Math.max(...allSegments.map((s) => s.avgLifetimeValue))
  const minLTV = Math.min(...allSegments.map((s) => s.avgLifetimeValue))
  const ltvNormalized = (segment.avgLifetimeValue - minLTV) / (maxLTV - minLTV)

  // Calculate effort score (based on engagement and recency)
  // Higher engagement + lower recency = lower effort
  const engagementScore = segment.avgEngagement / 100
  const recencyScore = 1 - Math.min(segment.avgRecency / 180, 1)
  const effortScore = 1 - (engagementScore * 0.6 + recencyScore * 0.4)

  // Calculate growth potential (based on purchase frequency and AOV)
  const maxFreq = Math.max(...allSegments.map((s) => s.avgPurchaseFrequency))
  const freqNormalized = segment.avgPurchaseFrequency / maxFreq
  const growthPotential = freqNormalized * 0.5 + (segment.avgEngagement / 100) * 0.5

  // Calculate churn risk (based on recency and engagement)
  const churnRisk = (segment.avgRecency / 180) * 0.6 + (1 - segment.avgEngagement / 100) * 0.4

  // Calculate overall ROI score
  // Higher LTV, lower effort, higher growth potential, lower churn = higher ROI
  const roiScore =
    ltvNormalized * 0.3 +
    (1 - effortScore) * 0.25 +
    growthPotential * 0.25 +
    (1 - churnRisk) * 0.2

  // Determine recommended action
  let recommendedAction = ''
  if (roiScore > 0.7) {
    recommendedAction = 'Maximize: Launch premium upsell campaigns'
  } else if (roiScore > 0.5) {
    recommendedAction = 'Nurture: Increase engagement with personalized content'
  } else if (roiScore > 0.3) {
    recommendedAction = 'Reactivate: Win-back campaign with special offers'
  } else {
    recommendedAction = 'Monitor: Maintain baseline communication'
  }

  return {
    segment,
    roiScore: Math.round(roiScore * 100),
    ltv: segment.avgLifetimeValue,
    effort: Math.round(effortScore * 100),
    growthPotential: Math.round(growthPotential * 100),
    churnRisk: Math.round(churnRisk * 100),
    recommendedAction,
    priority: 0,
  }
}

export function prioritizeSegments(segments: Segment[]): ROIMetrics[] {
  const metrics = segments.map((segment) => calculateROIScore(segment, segments))

  // Sort by ROI score descending
  metrics.sort((a, b) => b.roiScore - a.roiScore)

  // Assign priority
  return metrics.map((metric, index) => ({
    ...metric,
    priority: index + 1,
  }))
}

export function getCampaignSuggestions(segment: Segment, roiScore: number): string[] {
  const suggestions: string[] = []

  if (segment.avgLifetimeValue > 2000) {
    suggestions.push('VIP loyalty program with exclusive perks')
    suggestions.push('Premium product recommendations')
  }

  if (segment.avgEngagement < 40) {
    suggestions.push('Re-engagement email series')
    suggestions.push('Limited-time discount offer')
  }

  if (segment.avgRecency > 60) {
    suggestions.push('Win-back campaign with personalized message')
    suggestions.push('Survey to understand why they stopped buying')
  }

  if (segment.avgPurchaseFrequency > 10) {
    suggestions.push('Referral program invitation')
    suggestions.push('Early access to new products')
  }

  if (segment.avgOrderValue < 100) {
    suggestions.push('Bundle deals to increase AOV')
    suggestions.push('Free shipping threshold campaigns')
  }

  if (segment.avgAge < 35) {
    suggestions.push('Social media influencer partnerships')
    suggestions.push('Mobile-first campaign experiences')
  } else {
    suggestions.push('Email marketing with detailed product information')
    suggestions.push('Customer appreciation events')
  }

  return suggestions.slice(0, 4)
}
