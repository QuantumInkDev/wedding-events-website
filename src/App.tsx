import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { SuspenseLoader } from './components/SuspenseLoader';
import { ErrorBoundary } from './components/ErrorBoundary';
import './App.css'

// Lazy load all pages
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Services = lazy(() => import('./pages/Services').then(module => ({ default: module.Services })));
const Packages = lazy(() => import('./pages/Packages').then(module => ({ default: module.Packages })));
const PackageDetail = lazy(() => import('./pages/PackageDetail').then(module => ({ default: module.PackageDetail })));
const Testimonials = lazy(() => import('./pages/Testimonials').then(module => ({ default: module.Testimonials })));
const FAQs = lazy(() => import('./pages/FAQs').then(module => ({ default: module.FAQs })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const Consultation = lazy(() => import('./pages/Consultation').then(module => ({ default: module.Consultation })));
const WeddingCoordination = lazy(() => import('./pages/WeddingCoordination').then(module => ({ default: module.WeddingCoordination })));
const Gallery = lazy(() => import('./pages/Gallery').then(module => ({ default: module.Gallery })));

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <ErrorBoundary>
            <Suspense fallback={<SuspenseLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/wedding-coordination" element={<WeddingCoordination />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/packages/:packageType" element={<PackageDetail />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/consultation" element={<Consultation />} />
                <Route path="/gallery" element={<Gallery />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
