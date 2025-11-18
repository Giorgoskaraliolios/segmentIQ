import { Link } from 'react-router-dom'
import { BarChart3, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { name: 'Features', path: '/features' },
      { name: 'Pricing', path: '/pricing' },
      { name: 'Demo', path: '/demo' },
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-primary rounded-lg p-2">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-heading font-bold text-white">
                Segment<span className="text-accent">IQ</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Smart Segmentation. Smarter Decisions.
            </p>
            <p className="text-sm text-gray-400">
              AI-powered customer segmentation analytics platform helping businesses make data-driven marketing decisions.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <Mail className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                <a href="mailto:hello@segmentiq.com" className="hover:text-accent transition-colors">
                  hello@segmentiq.com
                </a>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <Phone className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                <a href="tel:+15551234567" className="hover:text-accent transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                <span>
                  123 Market St<br />
                  San Francisco, CA 94103
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-gray-400">
              {currentYear} SegmentIQ. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
