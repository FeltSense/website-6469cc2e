import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation - Fixed header */}
      <Navigation />

      {/* Hero Section - Full screen with background image */}
      <Hero />

      {/* Portfolio Section - Masonry gallery with filtering */}
      <Portfolio />

      {/* About Section - Sarah's story and achievements */}
      <About />

      {/* Features/Case Studies - Detailed project breakdowns */}
      <Features />

      {/* Testimonials - Client recognition and publications */}
      <Testimonials />

      {/* Pricing Section - Service packages and pricing */}
      <Pricing />

      {/* Contact Section - Project inquiry form */}
      <Contact />

      {/* Footer - Links, contact info, and social media */}
      <Footer />
    </main>
  );
}