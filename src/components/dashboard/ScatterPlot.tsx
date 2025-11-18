import { Customer } from '../../types'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'

interface Props {
  customers: Customer[]
  segmentColors: Record<number, string>
}

const ScatterPlot = ({ customers, segmentColors }: Props) => {
  const data = customers.map((c) => ({
    x: c.purchaseFrequency,
    y: c.avgOrderValue,
    segment: c.segment ?? 0,
    name: c.name,
    ltv: c.lifetimeValue,
  }))

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900">{data.name}</p>
          <p className="text-sm text-gray-600">Purchase Frequency: {data.x}</p>
          <p className="text-sm text-gray-600">Avg Order Value: ${data.y.toFixed(0)}</p>
          <p className="text-sm text-gray-600">LTV: ${data.ltv.toFixed(0)}</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Customer Distribution: Purchase Frequency vs. Order Value
      </h3>
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
            dataKey="x"
            name="Purchase Frequency"
            label={{ value: 'Purchase Frequency', position: 'insideBottom', offset: -10 }}
          />
          <YAxis
            type="number"
            dataKey="y"
            name="Avg Order Value"
            label={{ value: 'Avg Order Value ($)', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Scatter name="Customers" data={data}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={segmentColors[entry.segment]} />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ScatterPlot
