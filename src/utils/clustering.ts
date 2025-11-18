import { Customer, Segment } from '../types'

interface Point {
  features: number[]
  customer: Customer
}

// Normalize features to 0-1 range
function normalize(customers: Customer[]): Point[] {
  const features = ['purchaseFrequency', 'avgOrderValue', 'recency', 'lifetimeValue', 'engagement'] as const

  const mins: Record<string, number> = {}
  const maxs: Record<string, number> = {}

  // Find min and max for each feature
  features.forEach((feature) => {
    mins[feature] = Math.min(...customers.map((c) => c[feature]))
    maxs[feature] = Math.max(...customers.map((c) => c[feature]))
  })

  // Normalize
  return customers.map((customer) => ({
    features: features.map((feature) => {
      const val = customer[feature]
      const min = mins[feature]
      const max = maxs[feature]
      return max === min ? 0 : (val - min) / (max - min)
    }),
    customer,
  }))
}

// Calculate Euclidean distance
function distance(a: number[], b: number[]): number {
  return Math.sqrt(a.reduce((sum, val, i) => sum + Math.pow(val - b[i], 2), 0))
}

// K-means++ initialization
function initializeCentroids(points: Point[], k: number): number[][] {
  const centroids: number[][] = []

  // Choose first centroid randomly
  centroids.push([...points[Math.floor(Math.random() * points.length)].features])

  // Choose remaining centroids using k-means++
  for (let i = 1; i < k; i++) {
    const distances = points.map((point) => {
      const minDist = Math.min(...centroids.map((c) => distance(point.features, c)))
      return minDist * minDist
    })

    const totalDist = distances.reduce((sum, d) => sum + d, 0)
    let random = Math.random() * totalDist

    for (let j = 0; j < distances.length; j++) {
      random -= distances[j]
      if (random <= 0) {
        centroids.push([...points[j].features])
        break
      }
    }
  }

  return centroids
}

// Assign points to nearest centroid
function assignClusters(points: Point[], centroids: number[][]): number[] {
  return points.map((point) => {
    let minDist = Infinity
    let cluster = 0

    centroids.forEach((centroid, i) => {
      const dist = distance(point.features, centroid)
      if (dist < minDist) {
        minDist = dist
        cluster = i
      }
    })

    return cluster
  })
}

// Update centroids based on cluster assignments
function updateCentroids(points: Point[], assignments: number[], k: number): number[][] {
  const centroids: number[][] = Array(k)
    .fill(null)
    .map(() => Array(points[0].features.length).fill(0))
  const counts = Array(k).fill(0)

  points.forEach((point, i) => {
    const cluster = assignments[i]
    counts[cluster]++
    point.features.forEach((val, j) => {
      centroids[cluster][j] += val
    })
  })

  return centroids.map((centroid, i) => (counts[i] > 0 ? centroid.map((val) => val / counts[i]) : centroid))
}

export function kMeansClustering(customers: Customer[], k: number = 4, maxIterations: number = 100): Customer[] {
  if (customers.length === 0) return []

  const points = normalize(customers)
  let centroids = initializeCentroids(points, k)
  let assignments = assignClusters(points, centroids)
  let iterations = 0

  while (iterations < maxIterations) {
    const newCentroids = updateCentroids(points, assignments, k)
    const newAssignments = assignClusters(points, newCentroids)

    // Check for convergence
    const converged = assignments.every((val, i) => val === newAssignments[i])

    centroids = newCentroids
    assignments = newAssignments
    iterations++

    if (converged) break
  }

  // Assign segments to customers
  return customers.map((customer, i) => ({
    ...customer,
    segment: assignments[i],
  }))
}

const segmentNames = [
  { keywords: ['high', 'value'], names: ['VIP Champions', 'High-Value Loyalists', 'Premium Elite'] },
  { keywords: ['frequent', 'engaged'], names: ['Frequent Buyers', 'Active Enthusiasts', 'Regular Shoppers'] },
  { keywords: ['new', 'potential'], names: ['Rising Stars', 'New Opportunities', 'Growth Prospects'] },
  { keywords: ['at-risk', 'low'], names: ['At-Risk Customers', 'Needs Attention', 'Re-engagement Targets'] },
]

function generateSegmentName(segment: Segment, index: number): string {
  const { avgLifetimeValue, avgPurchaseFrequency, avgEngagement, avgRecency } = segment

  // High LTV, high frequency
  if (avgLifetimeValue > 2000 && avgPurchaseFrequency > 10) {
    return segmentNames[0].names[index % segmentNames[0].names.length]
  }

  // High frequency, good engagement
  if (avgPurchaseFrequency > 8 && avgEngagement > 60) {
    return segmentNames[1].names[index % segmentNames[1].names.length]
  }

  // Low recency (recent buyers), potential
  if (avgRecency < 30 && avgEngagement > 50) {
    return segmentNames[2].names[index % segmentNames[2].names.length]
  }

  // High recency (inactive), needs attention
  return segmentNames[3].names[index % segmentNames[3].names.length]
}

export function createSegments(customers: Customer[]): Segment[] {
  const segmentMap = new Map<number, Customer[]>()

  customers.forEach((customer) => {
    const segmentId = customer.segment ?? 0
    if (!segmentMap.has(segmentId)) {
      segmentMap.set(segmentId, [])
    }
    segmentMap.get(segmentId)!.push(customer)
  })

  const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EC4899']

  return Array.from(segmentMap.entries()).map(([id, segmentCustomers], index) => {
    const avgAge = segmentCustomers.reduce((sum, c) => sum + c.age, 0) / segmentCustomers.length
    const avgIncome = segmentCustomers.reduce((sum, c) => sum + c.income, 0) / segmentCustomers.length
    const avgPurchaseFrequency = segmentCustomers.reduce((sum, c) => sum + c.purchaseFrequency, 0) / segmentCustomers.length
    const avgOrderValue = segmentCustomers.reduce((sum, c) => sum + c.avgOrderValue, 0) / segmentCustomers.length
    const avgLifetimeValue = segmentCustomers.reduce((sum, c) => sum + c.lifetimeValue, 0) / segmentCustomers.length
    const avgRecency = segmentCustomers.reduce((sum, c) => sum + c.recency, 0) / segmentCustomers.length
    const avgEngagement = segmentCustomers.reduce((sum, c) => sum + c.engagement, 0) / segmentCustomers.length
    const totalRevenue = segmentCustomers.reduce((sum, c) => sum + c.lifetimeValue, 0)

    const segment: Segment = {
      id,
      name: '',
      color: colors[index % colors.length],
      customers: segmentCustomers,
      avgAge,
      avgIncome,
      avgPurchaseFrequency,
      avgOrderValue,
      avgLifetimeValue,
      avgRecency,
      avgEngagement,
      totalRevenue,
      customerCount: segmentCustomers.length,
      roiScore: 0,
      effort: 0,
      growthPotential: 0,
      churnRisk: 0,
      priority: 0,
    }

    segment.name = generateSegmentName(segment, index)

    return segment
  })
}
