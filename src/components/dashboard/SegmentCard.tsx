import { Segment, ROIMetrics } from '../../types'
import { Users, DollarSign, ShoppingCart, Clock, TrendingUp, AlertCircle } from 'lucide-react'
import { getCampaignSuggestions } from '../../utils/roiScoring'

interface Props {
  segment: Segment
  metric: ROIMetrics
}

const SegmentCard = ({ segment, metric }: Props) => {
  const suggestions = getCampaignSuggestions(segment, metric.roiScore)

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div
        className="p-6 text-white"
        style={{ backgroundColor: segment.color }}
      >
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-bold">{segment.name}</h3>
          <div className="text-right">
            <div className="text-sm opacity-90">ROI Score</div>
            <div className="text-3xl font-bold">{metric.roiScore}</div>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-sm opacity-90">
          <Users className="h-4 w-4" />
          <span>{segment.customerCount} customers</span>
          <span>•</span>
          <DollarSign className="h-4 w-4" />
          <span>${(segment.totalRevenue / 1000).toFixed(1)}K revenue</span>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-1">
              <DollarSign className="h-4 w-4 text-gray-500" />
              <span className="text-xs text-gray-600">Avg Lifetime Value</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">
              ${segment.avgLifetimeValue.toFixed(0)}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-1">
              <ShoppingCart className="h-4 w-4 text-gray-500" />
              <span className="text-xs text-gray-600">Purchase Frequency</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {segment.avgPurchaseFrequency.toFixed(1)}x
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-1">
              <Clock className="h-4 w-4 text-gray-500" />
              <span className="text-xs text-gray-600">Avg Recency</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {Math.round(segment.avgRecency)}d
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-1">
              <TrendingUp className="h-4 w-4 text-gray-500" />
              <span className="text-xs text-gray-600">Engagement</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {Math.round(segment.avgEngagement)}%
            </div>
          </div>
        </div>

        {/* ROI Breakdown */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">ROI Breakdown</h4>
          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Growth Potential</span>
                <span className="font-semibold">{metric.growthPotential}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${metric.growthPotential}%` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Effort Required</span>
                <span className="font-semibold">{metric.effort}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-yellow-500 h-2 rounded-full"
                  style={{ width: `${metric.effort}%` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Churn Risk</span>
                <span className="font-semibold">{metric.churnRisk}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-red-500 h-2 rounded-full"
                  style={{ width: `${metric.churnRisk}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Campaign Suggestions */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
            <AlertCircle className="h-4 w-4 mr-1" />
            Suggested Campaigns
          </h4>
          <ul className="space-y-1">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{suggestion}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SegmentCard
