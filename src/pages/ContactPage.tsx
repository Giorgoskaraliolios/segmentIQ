import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react'

type FormData = {
  name: string
  email: string
  company: string
  interest: string
  message: string
}

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    // Mock form submission
    console.log('Form submitted:', data)
    alert('Thank you for your message! We\'ll get back to you within 24 hours.')
    reset()
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      content: 'hello@segmentiq.com',
      link: 'mailto:hello@segmentiq.com',
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      content: '(555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Office',
      content: '123 Market St, San Francisco, CA 94103',
      link: '#',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Hours',
      content: 'Monday-Friday: 9am-6pm PST',
      link: '#',
    },
  ]

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Let's
              <span className="text-primary"> Talk</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Have questions? We're here to help. Get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    {...register('company')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Acme Inc."
                  />
                </div>

                {/* Interest */}
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                    I'm interested in *
                  </label>
                  <select
                    id="interest"
                    {...register('interest', { required: 'Please select an option' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option value="">Select an option</option>
                    <option value="demo">Scheduling a Demo</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.interest && (
                    <p className="mt-1 text-sm text-red-600">{errors.interest.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message', { required: 'Message is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your needs..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn-primary w-full">
                  <Send className="inline-block mr-2 h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Whether you have questions, need support, or want to explore partnership opportunities, our team is ready to help.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      {info.link.startsWith('#') ? (
                        <p className="text-gray-600">{info.content}</p>
                      ) : (
                        <a
                          href={info.link}
                          className="text-primary hover:text-primary-700 transition-colors"
                        >
                          {info.content}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Live Chat */}
              <div className="mt-10 p-6 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-gray-900">Live Chat</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Need immediate assistance? Chat with our team in real-time.
                </p>
                <button className="btn-primary w-full">
                  Start Live Chat
                </button>
              </div>

              {/* Response Time */}
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-800 flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  We typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gray-200">
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-accent-100">
          <div className="text-center">
            <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
            <p className="text-lg font-semibold text-gray-700">
              123 Market St, San Francisco, CA 94103
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Prefer to See It First?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Schedule a personalized demo and see how SegmentIQ can transform your marketing
            </p>
            <a href="/demo" className="btn-primary text-lg">
              Schedule a Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
