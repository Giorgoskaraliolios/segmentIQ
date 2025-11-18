import { Segment } from '../../types'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

interface Props {
  segments: Segment[]
}

const DemographicCharts = ({ segments }: Props) => {
  // Prepare age distribution data
  const ageData = segments.map((segment) => ({
    name: segment.name,
    avgAge: Math.round(segment.avgAge),
    fill: segment.color,
  }))

  // Prepare revenue distribution data
  const revenueData = segments.map((segment) => ({
    name: segment.name,
    value: segment.totalRevenue,
    fill: segment.color,
  }))

  // Prepare LTV comparison data
  const ltvData = segments.map((segment) => ({
    name: segment.name,
    ltv: Math.round(segment.avgLifetimeValue),
    fill: segment.color,
  }))

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900">{payload[0].name}</p>
          <p className="text-sm text-gray-600">
            {payload[0].dataKey === 'avgAge' && `Avg Age: ${payload[0].value}`}
            {payload[0].dataKey === 'value' && `Revenue: $${(payload[0].value / 1000).toFixed(1)}K`}
            {payload[0].dataKey === 'ltv' && `Avg LTV: $${payload[0].value}`}
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      {/* Age Distribution */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Average Age by Segment</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={ageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-15} textAnchor="end" height={80} />
            <YAxis label={{ value: 'Age', angle: -90, position: 'insideLeft' }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="avgAge" fill="#3B82F6">
              {ageData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Revenue Distribution */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Revenue Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={revenueData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {revenueData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* LTV Comparison */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:col-span-2">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Lifetime Value Comparison</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={ltvData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Lifetime Value ($)', angle: -90, position: 'insideLeft' }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="ltv" fill="#10B981">
              {ltvData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default DemographicCharts
