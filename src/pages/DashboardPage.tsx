import { useState, useEffect } from 'react'
import { Customer, Segment, ROIMetrics } from '../types'
import { generateMockCustomers } from '../utils/dataGenerator'
import { kMeansClustering, createSegments } from '../utils/clustering'
import { prioritizeSegments } from '../utils/roiScoring'
import PriorityRecommendations from '../components/dashboard/PriorityRecommendations'
import SegmentCard from '../components/dashboard/SegmentCard'
import ScatterPlot from '../components/dashboard/ScatterPlot'
import DemographicCharts from '../components/dashboard/DemographicCharts'
import WhatIfSimulator from '../components/dashboard/WhatIfSimulator'
import ExportPanel from '../components/dashboard/ExportPanel'
import { RefreshCw, BarChart3, Download, Zap } from 'lucide-react'

const DashboardPage = () => {
  const [customers, setCustomers] = useState<Customer[]>([])
  const [segments, setSegments] = useState<Segment[]>([])
  const [metrics, setMetrics] = useState<ROIMetrics[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedTab, setSelectedTab] = useState<'overview' | 'segments' | 'whatif' | 'export'>('overview')
  const [selectedSegmentId, setSelectedSegmentId] = useState<number>(0)

  const initializeData = () => {
    setLoading(true)

    // Generate mock customers
    const mockCustomers = generateMockCustomers(400)

    // Perform clustering
    const clusteredCustomers = kMeansClustering(mockCustomers, 4)

    // Create segments
    const customerSegments = createSegments(clusteredCustomers)

    // Calculate ROI metrics and priorities
    const prioritizedMetrics = prioritizeSegments(customerSegments)

    setCustomers(clusteredCustomers)
    setSegments(customerSegments)
    setMetrics(prioritizedMetrics)
    setSelectedSegmentId(prioritizedMetrics[0]?.segment.id ?? 0)
    setLoading(false)
  }

  useEffect(() => {
    initializeData()
  }, [])

  const selectedSegment = segments.find((s) => s.id === selectedSegmentId)
  const selectedMetric = metrics.find((m) => m.segment.id === selectedSegmentId)

  const segmentColors = segments.reduce(
    (acc, segment) => {
      acc[segment.id] = segment.color
      return acc
    },
    {} as Record<number, string>
  )

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <BarChart3 className="h-4 w-4" /> },
    { id: 'segments', label: 'Segment Details', icon: <BarChart3 className="h-4 w-4" /> },
    { id: 'whatif', label: 'What-If Scenarios', icon: <Zap className="h-4 w-4" /> },
    { id: 'export', label: 'Export', icon: <Download className="h-4 w-4" /> },
  ]

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="h-12 w-12 text-primary animate-spin mx-auto mb-4" />
          <p className="text-lg text-gray-600">Analyzing customer data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 flex items-center">
                <BarChart3 className="h-8 w-8 text-primary mr-3" />
                Customer Segmentation Dashboard
              </h1>
              <p className="text-gray-600 mt-1">
                {customers.length} customers analyzed • {segments.length} segments identified
              </p>
            </div>
            <button
              onClick={initializeData}
              className="btn-secondary flex items-center"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Regenerate Data
            </button>
          </div>

          {/* Tabs */}
          <div className="flex space-x-2 mt-4 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-2 font-medium transition-all border-b-2 ${
                  selectedTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-8">
        {/* Overview Tab */}
        {selectedTab === 'overview' && (
          <>
            <PriorityRecommendations metrics={metrics} />

            <ScatterPlot customers={customers} segmentColors={segmentColors} />

            <div className="mt-8">
              <DemographicCharts segments={segments} />
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">All Segments</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {segments.map((segment) => {
                  const metric = metrics.find((m) => m.segment.id === segment.id)
                  if (!metric) return null
                  return <SegmentCard key={segment.id} segment={segment} metric={metric} />
                })}
              </div>
            </div>
          </>
        )}

        {/* Segment Details Tab */}
        {selectedTab === 'segments' && (
          <>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Segment to Analyze
              </label>
              <select
                value={selectedSegmentId}
                onChange={(e) => setSelectedSegmentId(Number(e.target.value))}
                className="w-full md:w-96 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {metrics.map((metric) => (
                  <option key={metric.segment.id} value={metric.segment.id}>
                    {metric.segment.name} (ROI: {metric.roiScore}/100)
                  </option>
                ))}
              </select>
            </div>

            {selectedSegment && selectedMetric && (
              <div className="grid lg:grid-cols-2 gap-6">
                <SegmentCard segment={selectedSegment} metric={selectedMetric} />

                <div>
                  <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Segment Insights</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <p className="font-semibold text-blue-900 mb-1">Customer Profile</p>
                        <p className="text-sm text-blue-700">
                          Average age {Math.round(selectedSegment.avgAge)} years, income ${(selectedSegment.avgIncome / 1000).toFixed(0)}K
                        </p>
                      </div>

                      <div className="p-4 bg-green-50 rounded-lg">
                        <p className="font-semibold text-green-900 mb-1">Purchase Behavior</p>
                        <p className="text-sm text-green-700">
                          {selectedSegment.avgPurchaseFrequency.toFixed(1)} purchases, ${selectedSegment.avgOrderValue.toFixed(0)} average order
                        </p>
                      </div>

                      <div className="p-4 bg-purple-50 rounded-lg">
                        <p className="font-semibold text-purple-900 mb-1">Engagement Level</p>
                        <p className="text-sm text-purple-700">
                          {Math.round(selectedSegment.avgEngagement)}% engaged, last purchase {Math.round(selectedSegment.avgRecency)} days ago
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Top Customers</h3>
                    <div className="space-y-2">
                      {selectedSegment.customers
                        .sort((a, b) => b.lifetimeValue - a.lifetimeValue)
                        .slice(0, 5)
                        .map((customer) => (
                          <div
                            key={customer.id}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                          >
                            <div>
                              <p className="font-semibold text-gray-900">{customer.name}</p>
                              <p className="text-sm text-gray-600">{customer.location}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-primary">${customer.lifetimeValue.toFixed(0)}</p>
                              <p className="text-xs text-gray-500">LTV</p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* What-If Scenarios Tab */}
        {selectedTab === 'whatif' && (
          <>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Segment for Simulation
              </label>
              <select
                value={selectedSegmentId}
                onChange={(e) => setSelectedSegmentId(Number(e.target.value))}
                className="w-full md:w-96 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {metrics.map((metric) => (
                  <option key={metric.segment.id} value={metric.segment.id}>
                    {metric.segment.name}
                  </option>
                ))}
              </select>
            </div>

            {selectedSegment && <WhatIfSimulator segment={selectedSegment} />}
          </>
        )}

        {/* Export Tab */}
        {selectedTab === 'export' && (
          <>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Segment to Export
              </label>
              <select
                value={selectedSegmentId}
                onChange={(e) => setSelectedSegmentId(Number(e.target.value))}
                className="w-full md:w-96 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {metrics.map((metric) => (
                  <option key={metric.segment.id} value={metric.segment.id}>
                    {metric.segment.name} ({metric.segment.customerCount} customers)
                  </option>
                ))}
              </select>
            </div>

            {selectedSegment && <ExportPanel segment={selectedSegment} />}
          </>
        )}
      </div>
    </div>
  )
}

export default DashboardPage
