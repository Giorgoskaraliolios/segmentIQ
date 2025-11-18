import { Customer } from '../types'

const firstNames = [
  'James', 'Mary', 'John', 'Patricia', 'Robert', 'Jennifer', 'Michael', 'Linda',
  'William', 'Elizabeth', 'David', 'Barbara', 'Richard', 'Susan', 'Joseph', 'Jessica',
  'Thomas', 'Sarah', 'Charles', 'Karen', 'Christopher', 'Nancy', 'Daniel', 'Lisa',
  'Matthew', 'Betty', 'Anthony', 'Margaret', 'Mark', 'Sandra', 'Donald', 'Ashley',
]

const lastNames = [
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis',
  'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas',
  'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson', 'White',
]

const cities = [
  { name: 'New York', state: 'NY', weight: 0.12 },
  { name: 'Los Angeles', state: 'CA', weight: 0.11 },
  { name: 'Chicago', state: 'IL', weight: 0.08 },
  { name: 'Houston', state: 'TX', weight: 0.07 },
  { name: 'Phoenix', state: 'AZ', weight: 0.05 },
  { name: 'Philadelphia', state: 'PA', weight: 0.05 },
  { name: 'San Antonio', state: 'TX', weight: 0.04 },
  { name: 'San Diego', state: 'CA', weight: 0.04 },
  { name: 'Dallas', state: 'TX', weight: 0.04 },
  { name: 'San Jose', state: 'CA', weight: 0.03 },
  { name: 'Austin', state: 'TX', weight: 0.03 },
  { name: 'Jacksonville', state: 'FL', weight: 0.03 },
  { name: 'Fort Worth', state: 'TX', weight: 0.03 },
  { name: 'Columbus', state: 'OH', weight: 0.03 },
  { name: 'Charlotte', state: 'NC', weight: 0.03 },
  { name: 'San Francisco', state: 'CA', weight: 0.03 },
  { name: 'Indianapolis', state: 'IN', weight: 0.02 },
  { name: 'Seattle', state: 'WA', weight: 0.02 },
  { name: 'Denver', state: 'CO', weight: 0.02 },
  { name: 'Boston', state: 'MA', weight: 0.02 },
]

// Normal distribution using Box-Muller transform
function randomNormal(mean: number, stdDev: number): number {
  const u1 = Math.random()
  const u2 = Math.random()
  const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2)
  return z0 * stdDev + mean
}

// Gamma distribution approximation
function randomGamma(shape: number, scale: number): number {
  if (shape < 1) {
    return randomGamma(shape + 1, scale) * Math.pow(Math.random(), 1 / shape)
  }
  const d = shape - 1 / 3
  const c = 1 / Math.sqrt(9 * d)
  let x, v, u

  do {
    do {
      x = randomNormal(0, 1)
      v = 1 + c * x
    } while (v <= 0)

    v = v * v * v
    u = Math.random()
  } while (u > 1 - 0.331 * x * x * x * x && Math.log(u) > 0.5 * x * x + d * (1 - v + Math.log(v)))

  return d * v * scale
}

// Poisson distribution
function randomPoisson(lambda: number): number {
  const L = Math.exp(-lambda)
  let k = 0
  let p = 1

  do {
    k++
    p *= Math.random()
  } while (p > L)

  return k - 1
}

// Exponential distribution
function randomExponential(lambda: number): number {
  return -Math.log(1 - Math.random()) / lambda
}

// Weighted random selection
function weightedRandom<T extends { weight: number }>(items: T[]): T {
  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0)
  let random = Math.random() * totalWeight

  for (const item of items) {
    random -= item.weight
    if (random <= 0) {
      return item
    }
  }

  return items[items.length - 1]
}

export function generateMockCustomers(count: number = 400): Customer[] {
  const customers: Customer[] = []

  for (let i = 0; i < count; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
    const city = weightedRandom(cities)

    // Age: Normal distribution (mean=35, stdDev=12)
    const age = Math.max(18, Math.min(75, Math.round(randomNormal(35, 12))))

    // Income: Log-normal distribution ($30k-$150k)
    const incomeBase = Math.exp(randomNormal(10.8, 0.6))
    const income = Math.max(30000, Math.min(150000, Math.round(incomeBase)))

    // Purchase Frequency: Poisson distribution (lambda=8)
    const purchaseFrequency = Math.max(1, randomPoisson(8))

    // AOV: Gamma distribution ($50-$500)
    const avgOrderValue = Math.max(50, Math.min(500, Math.round(randomGamma(2, 75))))

    // Recency: Exponential distribution (last 180 days)
    const recency = Math.max(1, Math.min(180, Math.round(randomExponential(1 / 30))))

    // Engagement: Normal distribution (0-100)
    const engagement = Math.max(0, Math.min(100, Math.round(randomNormal(50, 20))))

    // Calculate LTV
    const lifetimeValue = purchaseFrequency * avgOrderValue

    customers.push({
      id: i + 1,
      name: `${firstName} ${lastName}`,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
      age,
      income,
      purchaseFrequency,
      avgOrderValue,
      recency,
      lifetimeValue,
      engagement,
      location: city.name,
      state: city.state,
    })
  }

  return customers
}
