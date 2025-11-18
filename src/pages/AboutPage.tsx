import {
  Target,
  Heart,
  Lightbulb,
  Shield,
  Users,
  Linkedin,
} from 'lucide-react'

const AboutPage = () => {
  const team = [
    {
      name: 'Alex Thompson',
      role: 'CEO & Co-Founder',
      bio: 'Former VP of Analytics at Fortune 500. 15+ years in data science and customer insights.',
      linkedin: '#',
    },
    {
      name: 'Sarah Martinez',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Google engineer specializing in ML and scalable systems. PhD in Computer Science.',
      linkedin: '#',
    },
    {
      name: 'David Chen',
      role: 'Head of Product',
      bio: 'Product leader with background at Salesforce and HubSpot. Customer obsession expert.',
      linkedin: '#',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Customer Success',
      bio: '10+ years helping marketing teams achieve their goals through data-driven strategies.',
      linkedin: '#',
    },
    {
      name: 'Michael Park',
      role: 'Lead Data Scientist',
      bio: 'PhD in Statistics. Published researcher in clustering algorithms and predictive analytics.',
      linkedin: '#',
    },
    {
      name: 'Jessica Williams',
      role: 'Head of Marketing',
      bio: 'Growth marketing specialist who scaled 3 SaaS companies from seed to Series B.',
      linkedin: '#',
    },
  ]

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Data-Driven',
      description: 'Every decision backed by data, every insight validated by results.',
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Customer-First',
      description: 'Your success is our success. We build tools that solve real problems.',
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation',
      description: 'Constantly pushing boundaries to deliver cutting-edge analytics solutions.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Trust & Security',
      description: 'Your data is sacred. Enterprise-grade security and privacy protection.',
    },
  ]

  const milestones = [
    {
      year: '2023',
      title: 'Founded',
      description: 'SegmentIQ launched with a mission to democratize customer analytics.',
    },
    {
      year: '2023',
      title: '100 Customers',
      description: 'Reached our first 100 paying customers in just 6 months.',
    },
    {
      year: '2024',
      title: '500+ Teams',
      description: 'Trusted by over 500 marketing teams across 25 countries.',
    },
    {
      year: '2024',
      title: '1M+ Segments',
      description: 'Analyzed over 1 million customer segments, driving millions in revenue.',
    },
    {
      year: '2025',
      title: 'Industry Recognition',
      description: 'Named Best Marketing Analytics Platform by TechCrunch and G2.',
    },
  ]

  const press = [
    'TechCrunch',
    'Forbes',
    'VentureBeat',
    'Marketing Week',
    'Business Insider',
    'The Next Web',
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              We're on a Mission to Make
              <span className="text-primary"> Customer Analytics </span>
              Accessible to Everyone
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              We built SegmentIQ because marketers deserve better than spreadsheets and gut feelings. Our mission is to empower every growth team with enterprise-grade customer analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6 text-center">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                In 2023, our founders Alex and Sarah were frustrated with the state of customer analytics tools. They were either too complex, requiring data science PhDs to operate, or too simple, offering nothing more than basic reports that didn't drive action.
              </p>
              <p>
                They envisioned a platform that combined the power of advanced machine learning with the simplicity of a well-designed product. A tool that doesn't just show you data, but tells you exactly what to do with it.
              </p>
              <p>
                Today, SegmentIQ serves over 500 marketing teams worldwide, from scrappy startups to Fortune 500 companies. We've helped our customers generate millions in additional revenue by making smarter, data-driven marketing decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center">
                <div className="inline-flex items-center justify-center mb-4 text-primary">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 text-center">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            We're a diverse group of data scientists, engineers, and marketers united by a passion for helping businesses grow.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card group">
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg mb-4 flex items-center justify-center">
                  <Users className="h-24 w-24 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <a
                  href={member.linkedin}
                  className="inline-flex items-center text-primary hover:text-primary-700 transition-colors"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-12 text-center">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-8">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-primary-200 my-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press & Recognition */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 text-center">
            Press & Recognition
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            Featured in leading publications
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {press.map((publication, index) => (
              <div
                key={index}
                className="text-center text-gray-400 font-semibold text-lg hover:text-gray-600 transition-colors"
              >
                {publication}
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
              Join Us on Our Mission
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Whether you're a customer, partner, or future team member, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all"
              >
                Get in Touch
              </a>
              <a
                href="/demo"
                className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-primary font-semibold py-3 px-8 rounded-lg transition-all"
              >
                Try SegmentIQ
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
