import { Link } from 'react-router-dom'
import {
  Play,
  CheckCircle2,
  ShoppingCart,
  TrendingDown,
  MapPin,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

const DemoPage = () => {
  const useCases = [
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: 'E-Commerce',
      metric: 'Increase AOV by 35%',
      description:
        'Identify high-value shoppers and create targeted upsell campaigns based on purchase behavior and preferences.',
      results: [
        '35% higher average order value',
        '22% increase in repeat purchases',
        '18% boost in customer lifetime value',
      ],
    },
    {
      icon: <TrendingDown className="h-8 w-8" />,
      title: 'SaaS',
      metric: 'Reduce churn by 22%',
      description:
        'Detect at-risk customers early and implement targeted retention strategies before they cancel.',
      results: [
        '22% reduction in customer churn',
        '40% improvement in retention rate',
        '3x ROI on retention campaigns',
      ],
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Retail',
      metric: 'Optimize store locations',
      description:
        'Use geographic clustering to identify the best markets for expansion and optimize inventory distribution.',
      results: [
        '15% increase in foot traffic',
        '28% better inventory turnover',
        '12% higher regional sales',
      ],
    },
  ]

  const demoFeatures = [
    'Live interactive dashboard',
    'Real customer data simulation',
    'All segmentation features',
    'Export functionality',
    'What-If scenario testing',
    'Geographic visualizations',
  ]

  const tourSteps = [
    {
      step: 1,
      title: 'Upload Your Data',
      description: 'Start by uploading a CSV or connecting your CRM. Watch as the system instantly processes thousands of customer records.',
    },
    {
      step: 2,
      title: 'Automatic Segmentation',
      description: 'Our AI analyzes your customers and creates meaningful segments with intuitive names like "High-Value Loyalists".',
    },
    {
      step: 3,
      title: 'Priority Recommendations',
      description: 'Get instant ROI-based recommendations showing exactly which segments to target first.',
    },
    {
      step: 4,
      title: 'Visual Analytics',
      description: 'Explore interactive charts, geographic maps, and demographic breakdowns to understand each segment.',
    },
    {
      step: 5,
      title: 'What-If Planning',
      description: 'Simulate different strategies and see projected revenue impact before executing campaigns.',
    },
    {
      step: 6,
      title: 'Export & Execute',
      description: 'Export segments to Facebook Ads, email platforms, or CRM with one click and launch campaigns.',
    },
  ]

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              See SegmentIQ
              <span className="text-primary"> in Action</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Experience the power of AI-driven customer segmentation with our interactive demo
            </p>
            <Link to="/contact" className="btn-primary text-lg">
              <Play className="inline-block mr-2 h-5 w-5" />
              Watch Video Demo (2:30)
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Try the Interactive Demo
              </h2>
              <p className="text-lg text-gray-600">
                Explore a live dashboard with real data
              </p>
            </div>

            {/* Demo Preview */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-2xl p-8 mb-8">
              <div className="aspect-video bg-white rounded-lg shadow-inner flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-50"></div>
                <div className="relative z-10 text-center">
                  <Sparkles className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Interactive Dashboard Preview
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Full demo dashboard with all features enabled
                  </p>
                  <Link
                    to="/dashboard"
                    className="btn-primary inline-flex items-center"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Launch Interactive Demo
                  </Link>
                </div>
              </div>
            </div>

            {/* Demo Features */}
            <div className="grid md:grid-cols-3 gap-6">
              {demoFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guided Tour */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-12 text-center">
            Product Walkthrough
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {tourSteps.map((step, index) => (
              <div
                key={index}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1 card">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 text-center">
            Real-World Use Cases
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            See how businesses like yours are winning with SegmentIQ
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="card hover:shadow-xl transition-shadow">
                <div className="text-primary mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {useCase.title}
                </h3>
                <div className="text-2xl font-bold text-accent mb-4">
                  {useCase.metric}
                </div>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="border-t pt-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Results:</p>
                  <ul className="space-y-1">
                    {useCase.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-start text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Try It Yourself?
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Start your free 14-day trial and see the difference SegmentIQ can make
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-white text-primary hover:bg-gray-100">
                Start Free Trial
                <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </Link>
              <Link to="/pricing" className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DemoPage
