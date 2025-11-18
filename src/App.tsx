import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/marketing/Navigation'
import Footer from './components/marketing/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import FeaturesPage from './pages/FeaturesPage'
import PricingPage from './pages/PricingPage'
import DemoPage from './pages/DemoPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
