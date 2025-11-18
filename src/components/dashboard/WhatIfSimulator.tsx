import { useState } from 'react'
import { Segment } from '../../types'
import { Zap, TrendingUp, DollarSign } from 'lucide-react'

interface Props {
  segment: Segment
}

const WhatIfSimulator = ({ segment }: Props) => {
  const [engagementIncrease, setEngagementIncrease] = useState(0)
  const [churnReduction, setChurnReduction] = useState(0)
  const [aovIncrease, setAOVIncrease] = useState(0)

  // Calculate projected impact
  const currentRevenue = segment.totalRevenue
  const newEngagement = segment.avgEngagement * (1 + engagementIncrease / 100)
  const newChurnRate = Math.max(0, (segment.avgRecency / 180) * (1 - churnReduction / 100))
  const newAOV = segment.avgOrderValue * (1 + aovIncrease / 100)

  // Simple revenue projection model
  const engagementImpact = (newEngagement / segment.avgEngagement - 1) * 0.5
  const churnImpact = (1 - newChurnRate / (segment.avgRecency / 180)) * 0.3
  const aovImpact = (newAOV / segment.avgOrderValue - 1) * 1.0

  const totalImpact = engagementImpact + churnImpact + aovImpact
  const projectedRevenue = currentRevenue * (1 + totalImpact)
  const revenueDelta = projectedRevenue - currentRevenue

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-4">
        <Zap className="h-6 w-6 text-primary mr-2" />
        <h3 className="text-xl font-bold text-gray-900">What-If Scenario Simulator</h3>
      </div>
      <p className="text-gray-600 mb-6">
        Model the impact of different strategies on <span className="font-semibold">{segment.name}</span>
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {/* Engagement Increase */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Engagement Increase: {engagementIncrease}%
          </label>
          <input
            type="range"
            min="0"
            max="50"
            value={engagementIncrease}
            onChange={(e) => setEngagementIncrease(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-xs text-gray-500 mt-1">
            {segment.avgEngagement.toFixed(0)}% → {newEngagement.toFixed(0)}%
          </div>
        </div>

        {/* Churn Reduction */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Churn Reduction: {churnReduction}%
          </label>
          <input
            type="range"
            min="0"
            max="50"
            value={churnReduction}
            onChange={(e) => setChurnReduction(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-xs text-gray-500 mt-1">
            {((segment.avgRecency / 180) * 100).toFixed(0)}% → {(newChurnRate * 100).toFixed(0)}%
          </div>
        </div>

        {/* AOV Increase */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            AOV Increase: {aovIncrease}%
          </label>
          <input
            type="range"
            min="0"
            max="50"
            value={aovIncrease}
            onChange={(e) => setAOVIncrease(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-xs text-gray-500 mt-1">
            ${segment.avgOrderValue.toFixed(0)} → ${newAOV.toFixed(0)}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <TrendingUp className="h-5 w-5 mr-2 text-primary" />
          Projected Impact
        </h4>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-gray-600 mb-1">Current Revenue</div>
            <div className="text-2xl font-bold text-gray-900">
              ${(currentRevenue / 1000).toFixed(1)}K
            </div>
          </div>

          <div>
            <div className="text-sm text-gray-600 mb-1">Projected Revenue</div>
            <div className="text-2xl font-bold text-primary">
              ${(projectedRevenue / 1000).toFixed(1)}K
            </div>
          </div>

          <div className="col-span-2">
            <div className="text-sm text-gray-600 mb-1">Revenue Change</div>
            <div className={`text-3xl font-bold ${revenueDelta >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {revenueDelta >= 0 ? '+' : ''}${(revenueDelta / 1000).toFixed(1)}K
              <span className="text-lg ml-2">
                ({(totalImpact * 100) >= 0 ? '+' : ''}{(totalImpact * 100).toFixed(1)}%)
              </span>
            </div>
          </div>
        </div>

        {revenueDelta > 0 && (
          <div className="mt-4 p-3 bg-white rounded-lg border-l-4 border-green-500">
            <div className="flex items-start">
              <DollarSign className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-gray-900">Potential Opportunity</p>
                <p className="text-sm text-gray-600">
                  By implementing these improvements, this segment could generate an additional ${(revenueDelta / 1000).toFixed(1)}K in revenue.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={() => {
            setEngagementIncrease(0)
            setChurnReduction(0)
            setAOVIncrease(0)
          }}
          className="text-sm text-gray-600 hover:text-gray-900"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default WhatIfSimulator
