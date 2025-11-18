import { useState } from 'react'
import { Check, X, HelpCircle, Shield, CreditCard, RefreshCw, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')

  const plans = [
    {
      name: 'Starter',
      price: { monthly: 99, annual: 990 },
      description: 'Perfect for small teams getting started with segmentation',
      popular: false,
      features: [
        { name: 'Up to 5,000 customers', included: true },
        { name: '4 segment clusters', included: true },
        { name: 'Basic visualizations', included: true },
        { name: 'CSV export', included: true },
        { name: 'Email support', included: true },
        { name: 'Priority recommendations', included: false },
        { name: 'What-If scenarios', included: false },
        { name: 'Geographic heat maps', included: false },
        { name: 'Advanced exports', included: false },
        { name: 'API access', included: false },
      ],
    },
    {
      name: 'Professional',
      price: { monthly: 299, annual: 2990 },
      description: 'For growing teams that need advanced analytics',
      popular: true,
      features: [
        { name: 'Up to 50,000 customers', included: true },
        { name: 'Unlimited segments', included: true },
        { name: 'All visualizations + geo mapping', included: true },
        { name: 'Priority recommendations', included: true },
        { name: 'What-If scenarios', included: true },
        { name: 'All export formats', included: true },
        { name: 'Priority support', included: true },
        { name: 'Team collaboration', included: true },
        { name: 'Custom dashboards', included: true },
        { name: 'API access', included: false },
      ],
    },
    {
      name: 'Enterprise',
      price: { monthly: null, annual: null },
      description: 'Custom solutions for large organizations',
      popular: false,
      features: [
        { name: 'Unlimited customers', included: true },
        { name: 'Unlimited segments', included: true },
        { name: 'White-label options', included: true },
        { name: 'API access', included: true },
        { name: 'Custom integrations', included: true },
        { name: 'Dedicated account manager', included: true },
        { name: 'On-premise deployment', included: true },
        { name: 'SLA guarantee', included: true },
        { name: 'Custom training', included: true },
        { name: 'Priority phone support', included: true },
      ],
    },
  ]

  const faqs = [
    {
      question: 'Can I change plans later?',
      answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. Enterprise customers can pay via invoice.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! All plans come with a 14-day free trial. No credit card required to start.',
    },
    {
      question: 'Do you offer refunds?',
      answer: "We offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your payment—no questions asked.",
    },
    {
      question: 'What happens if I exceed my customer limit?',
      answer: "We'll notify you when you're approaching your limit. You can upgrade your plan or we'll help you optimize your data.",
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use enterprise-grade encryption, regular security audits, and comply with GDPR and SOC 2 standards.',
    },
  ]

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Simple, Transparent
              <span className="text-primary"> Pricing</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Choose the plan that fits your needs. Always know what you'll pay.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-white rounded-lg p-1 shadow-md">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  billingCycle === 'annual'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Annual
                <span className="ml-2 text-xs bg-accent text-white px-2 py-0.5 rounded-full">
                  Save 17%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl ${
                  plan.popular
                    ? 'border-2 border-primary shadow-2xl scale-105 bg-white'
                    : 'border border-gray-200 shadow-lg bg-white'
                } p-8`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  {plan.price.monthly !== null ? (
                    <>
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-gray-900">
                          ${billingCycle === 'monthly' ? plan.price.monthly : Math.floor(plan.price.annual / 12)}
                        </span>
                        <span className="text-gray-600 ml-2">/month</span>
                      </div>
                      {billingCycle === 'annual' && (
                        <p className="text-sm text-gray-500 mt-1">
                          Billed ${plan.price.annual} annually
                        </p>
                      )}
                    </>
                  ) : (
                    <div className="text-4xl font-bold text-gray-900">Custom</div>
                  )}
                </div>

                <Link
                  to={plan.price.monthly !== null ? "/dashboard" : "/contact"}
                  className={`block w-full text-center py-3 rounded-lg font-semibold mb-6 transition-all ${
                    plan.popular
                      ? 'btn-primary'
                      : 'btn-secondary'
                  }`}
                >
                  {plan.price.monthly !== null ? 'Start Free Trial' : 'Contact Sales'}
                </Link>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5" />
                      )}
                      <span
                        className={`ml-3 text-sm ${
                          feature.included ? 'text-gray-700' : 'text-gray-400'
                        }`}
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-accent" />
              <span className="font-semibold text-gray-700">30-day money-back guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <RefreshCw className="h-6 w-6 text-accent" />
              <span className="font-semibold text-gray-700">Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <CreditCard className="h-6 w-6 text-accent" />
              <span className="font-semibold text-gray-700">Secure payment processing</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <div className="flex items-start space-x-3">
                  <HelpCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Start your free 14-day trial. No credit card required.
            </p>
            <Link to="/dashboard" className="btn-primary bg-white text-primary hover:bg-gray-100 text-lg">
              Start Free Trial
              <ArrowRight className="inline-block ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PricingPage
