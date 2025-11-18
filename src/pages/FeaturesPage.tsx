import {
  Brain,
  Target,
  TrendingUp,
  AlertCircle,
  BarChart3,
  Map,
  GitCompare,
  Zap,
  Download,
  Database,
  Filter,
  Users,
  DollarSign,
  Clock,
  Shield,
  Sparkles,
  ArrowRight,
} from 'lucide-react'

const FeaturesPage = () => {
  const featureCategories = [
    {
      category: 'Segmentation & Analysis',
      icon: <Brain className="h-8 w-8" />,
      features: [
        {
          title: 'Real-Time K-Means Clustering',
          description: 'Advanced machine learning automatically groups customers into meaningful segments based on behavior, demographics, and purchase patterns.',
          icon: <Users className="h-6 w-6" />,
        },
        {
          title: 'Automatic Segment Naming',
          description: 'AI-powered naming system gives your segments intuitive, descriptive names like "High-Value Loyalists" or "At-Risk Bargain Hunters".',
          icon: <Sparkles className="h-6 w-6" />,
        },
        {
          title: 'Demographic & Behavioral Profiling',
          description: 'Deep dive into age, location, income, purchase frequency, recency, and lifetime value for each segment.',
          icon: <BarChart3 className="h-6 w-6" />,
        },
        {
          title: 'RFM Analysis Integration',
          description: 'Built-in Recency, Frequency, Monetary analysis to identify your best customers at a glance.',
          icon: <Clock className="h-6 w-6" />,
        },
      ],
    },
    {
      category: 'Strategic Decision Support',
      icon: <Target className="h-8 w-8" />,
      features: [
        {
          title: 'ROI Scoring Engine',
          description: 'Proprietary algorithm scores each segment based on lifetime value, effort required, growth potential, and churn risk.',
          icon: <DollarSign className="h-6 w-6" />,
        },
        {
          title: 'Priority Recommendation System',
          description: 'Get ranked, actionable recommendations on which segments to focus on first, second, and third.',
          icon: <TrendingUp className="h-6 w-6" />,
        },
        {
          title: 'Effort vs. Impact Matrix',
          description: 'Visualize which segments offer quick wins vs. long-term strategic opportunities.',
          icon: <GitCompare className="h-6 w-6" />,
        },
        {
          title: 'Growth Potential Assessment',
          description: 'Identify segments with untapped revenue opportunities based on engagement patterns.',
          icon: <Sparkles className="h-6 w-6" />,
        },
        {
          title: 'Churn Risk Detection',
          description: 'Early warning system flags segments showing signs of disengagement before they leave.',
          icon: <AlertCircle className="h-6 w-6" />,
        },
      ],
    },
    {
      category: 'Visualization & Insights',
      icon: <BarChart3 className="h-8 w-8" />,
      features: [
        {
          title: 'Interactive Scatter Plots',
          description: 'Explore customer distribution across multiple dimensions with zoom, pan, and drill-down capabilities.',
          icon: <GitCompare className="h-6 w-6" />,
        },
        {
          title: 'Geographic Heat Maps',
          description: 'See where your best customers are located and identify regional growth opportunities.',
          icon: <Map className="h-6 w-6" />,
        },
        {
          title: 'Demographic Charts',
          description: 'Age, income, and behavioral breakdowns with beautiful, interactive visualizations.',
          icon: <Users className="h-6 w-6" />,
        },
        {
          title: 'Behavioral Trend Analysis',
          description: 'Track how segments evolve over time and identify emerging patterns.',
          icon: <TrendingUp className="h-6 w-6" />,
        },
        {
          title: 'Comparison Tools',
          description: 'Side-by-side segment comparison to understand what makes each group unique.',
          icon: <GitCompare className="h-6 w-6" />,
        },
      ],
    },
    {
      category: 'Action & Export',
      icon: <Zap className="h-8 w-8" />,
      features: [
        {
          title: 'Campaign Suggestion Engine',
          description: 'AI recommends specific campaign types, messaging angles, and channels for each segment.',
          icon: <Sparkles className="h-6 w-6" />,
        },
        {
          title: 'What-If Scenario Simulator',
          description: 'Model the impact of different strategies before execution. See projected revenue changes in real-time.',
          icon: <Zap className="h-6 w-6" />,
        },
        {
          title: 'Multi-Format Exports',
          description: 'One-click export to CSV, Facebook Custom Audiences, email lists, and more.',
          icon: <Download className="h-6 w-6" />,
        },
        {
          title: 'CRM Integration Ready',
          description: 'Seamlessly connect with Salesforce, HubSpot, and other CRM platforms.',
          icon: <Database className="h-6 w-6" />,
        },
      ],
    },
  ]

  const additionalFeatures = [
    { title: 'Real-Time Updates', icon: <Clock className="h-6 w-6" /> },
    { title: 'Advanced Filtering', icon: <Filter className="h-6 w-6" /> },
    { title: 'Team Collaboration', icon: <Users className="h-6 w-6" /> },
    { title: 'Enterprise Security', icon: <Shield className="h-6 w-6" /> },
    { title: 'Custom Dashboards', icon: <BarChart3 className="h-6 w-6" /> },
    { title: 'API Access', icon: <Database className="h-6 w-6" /> },
  ]

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Powerful Features for
              <span className="text-primary"> Smarter Segmentation</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Everything you need to turn customer data into revenue-driving decisions
            </p>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      {featureCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`section-padding ${
            categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'
          }`}
        >
          <div className="container-custom">
            <div className="flex items-center justify-center mb-12">
              <div className="text-primary mr-4">{category.icon}</div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                {category.category}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {category.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="card group hover:shadow-xl">
                  <div className="flex items-start space-x-4">
                    <div className="text-primary mt-1 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Additional Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-12 text-center">
            And Much More
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-xl mb-3 text-primary">
                  {feature.icon}
                </div>
                <p className="font-semibold text-gray-900 text-sm">{feature.title}</p>
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
              Ready to See It in Action?
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Start your free 14-day trial and experience all features risk-free
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/dashboard" className="btn-primary bg-white text-primary hover:bg-gray-100">
                Start Free Trial
                <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </a>
              <a href="/pricing" className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeaturesPage
