import { Link } from 'react-router-dom'
import {
  Brain,
  Target,
  Zap,
  Download,
  GitCompare,
  Map,
  ArrowRight,
  CheckCircle2,
  Upload,
  Sparkles,
  TrendingUp,
  Users,
  DollarSign,
  Star,
} from 'lucide-react'

const HomePage = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Real-Time Clustering & AI Insights',
      description: 'Advanced K-means clustering with automated segment naming and instant insights.',
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'ROI-Based Priority Recommendations',
      description: 'Know exactly which segments deserve your attention with data-driven ROI scoring.',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'What-If Scenario Planning',
      description: 'Simulate different strategies and see potential revenue impact before executing.',
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: 'One-Click Campaign Export',
      description: 'Export to Facebook Ads, email platforms, and CRM systems in seconds.',
    },
    {
      icon: <GitCompare className="h-8 w-8" />,
      title: 'Interactive Segment Comparison',
      description: 'Side-by-side analysis of segments with demographic and behavioral breakdowns.',
    },
    {
      icon: <Map className="h-8 w-8" />,
      title: 'Geographic Heat Mapping',
      description: 'Visualize where your best customers are and optimize your targeting.',
    },
  ]

  const steps = [
    {
      number: '01',
      title: 'Upload Your Data',
      description: 'CSV upload or connect your CRM, email platform, or e-commerce system.',
      icon: <Upload className="h-6 w-6" />,
    },
    {
      number: '02',
      title: 'AI Analyzes & Segments',
      description: 'Our AI automatically clusters customers and identifies high-value segments.',
      icon: <Sparkles className="h-6 w-6" />,
    },
    {
      number: '03',
      title: 'Get Actionable Priorities',
      description: 'Receive ranked recommendations and ready-to-execute campaign plans.',
      icon: <TrendingUp className="h-6 w-6" />,
    },
  ]

  const testimonials = [
    {
      quote: 'SegmentIQ helped us increase customer lifetime value by 42% in just 3 months.',
      author: 'Sarah Chen',
      role: 'VP of Marketing, TechCorp',
      rating: 5,
    },
    {
      quote: 'Finally, a tool that tells me exactly who to target and why. Game changer.',
      author: 'Michael Rodriguez',
      role: 'Head of Growth, StartupX',
      rating: 5,
    },
    {
      quote: 'The What-If scenarios saved us from a $50k marketing mistake. Worth every penny.',
      author: 'Emily Watson',
      role: 'CMO, E-commerce Plus',
      rating: 5,
    },
  ]

  const stats = [
    { value: '500+', label: 'Marketing Teams', icon: <Users className="h-6 w-6" /> },
    { value: '$2.5M+', label: 'Revenue Generated', icon: <DollarSign className="h-6 w-6" /> },
    { value: '1M+', label: 'Segments Analyzed', icon: <Target className="h-6 w-6" /> },
    { value: '4.9/5', label: 'Customer Rating', icon: <Star className="h-6 w-6" /> },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
              Trusted by 500+ Marketing Teams
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6 leading-tight">
              Turn Customer Data Into
              <span className="text-primary"> Revenue-Driving </span>
              Decisions
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              AI-powered segmentation that tells you exactly which customers to target—and why. Stop guessing. Start growing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/trial" className="btn-primary text-lg w-full sm:w-auto">
                Start Free Trial
                <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </Link>
              <Link to="/demo" className="btn-secondary text-lg w-full sm:w-auto">
                Try Interactive Demo
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Free 14-day trial • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2 text-primary">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Everything You Need to Segment Smarter
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful features that transform raw customer data into actionable marketing strategies
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card group hover:border-primary hover:border transition-all"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From data to decisions in three simple steps
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mb-4 text-2xl font-bold">
                      {step.icon}
                    </div>
                    <div className="text-sm font-semibold text-primary mb-2">
                      STEP {step.number}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-accent -ml-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Loved by Marketing Teams Worldwide
            </h2>
            <p className="text-lg text-gray-600">
              See what our customers are saying
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="section-padding bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Plans starting at $99/month
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>Cancel anytime</span>
              </div>
            </div>
            <Link
              to="/pricing"
              className="inline-block bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Ready to Understand Your Customers?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join 500+ marketing teams making smarter decisions with SegmentIQ
            </p>
            <Link to="/dashboard" className="btn-primary text-lg">
              Start Your Free Trial
              <ArrowRight className="inline-block ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
