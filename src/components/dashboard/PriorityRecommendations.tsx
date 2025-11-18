import { ROIMetrics } from '../../types'
import { Target, TrendingUp, Zap } from 'lucide-react'

interface Props {
  metrics: ROIMetrics[]
}

const PriorityRecommendations = ({ metrics }: Props) => {
  const top3 = metrics.slice(0, 3)

  const icons = [
    <Target className="h-6 w-6" />,
    <TrendingUp className="h-6 w-6" />,
    <Zap className="h-6 w-6" />,
  ]

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
        <Target className="h-6 w-6 text-primary mr-2" />
        Strategic Focus: Top Priority Segments
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {top3.map((metric, index) => (
          <div
            key={metric.segment.id}
            className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100 hover:border-primary transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: metric.segment.color }}
                >
                  {icons[index]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-500">
                    PRIORITY #{metric.priority}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {metric.segment.name}
                  </h3>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">ROI Score</span>
                <span className="text-2xl font-bold text-primary">{metric.roiScore}/100</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all"
                  style={{ width: `${metric.roiScore}%` }}
                ></div>
              </div>
            </div>

            <div className="space-y-2 mb-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Customers:</span>
                <span className="font-semibold">{metric.segment.customerCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Avg LTV:</span>
                <span className="font-semibold">${metric.ltv.toFixed(0)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Growth Potential:</span>
                <span className="font-semibold">{metric.growthPotential}%</span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <p className="text-sm font-semibold text-gray-900 mb-1">Recommended Action:</p>
              <p className="text-sm text-gray-600">{metric.recommendedAction}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PriorityRecommendations
