import Image from 'next/image';
import { Camera, Mail, Phone, MapPin, Instagram, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    'Architectural Photography',
    'Interior Photography',
    'Exterior Photography',
    'Commercial Photography',
    'Residential Photography',
    'Real Estate Photography',
  ];

  const publications = [
    'Dezeen',
    'Architectural Digest',
    'Dwell Magazine',
    'Wallpaper*',
    'Design Milk',
    'ArchDaily',
  ];

  return (
    <footer className="relative bg-neutral-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/generated/footer-background-1766099400303.png"
          alt="Architectural pattern background"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-fluid py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-secondary-500 rounded-lg flex items-center justify-center">
                  <Camera className="h-6 w-6 text-neutral-900" />
                </div>
                <span className="text-2xl font-heading font-bold">Sarah Chen</span>
              </div>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                Award-winning architectural photographer capturing the essence of space
                through timeless black and white imagery.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-neutral-300">
                  <Mail className="h-4 w-4 text-secondary-400" />
                  <span className="text-sm">hello@sarahchenphoto.com</span>
                </div>
                <div className="flex items-center space-x-3 text-neutral-300">
                  <Phone className="h-4 w-4 text-secondary-400" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-neutral-300">
                  <MapPin className="h-4 w-4 text-secondary-400" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 bg-neutral-800 hover:bg-secondary-500 text-neutral-300 hover:text-neutral-900 rounded-lg flex items-center justify-center transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-neutral-800 hover:bg-secondary-500 text-neutral-300 hover:text-neutral-900 rounded-lg flex items-center justify-center transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-neutral-800 hover:bg-secondary-500 text-neutral-300 hover:text-neutral-900 rounded-lg flex items-center justify-center transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Navigation Column */}
            <div>
              <h3 className="text-lg font-heading font-semibold mb-6">Navigation</h3>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-neutral-300 hover:text-secondary-400 transition-colors duration-300"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-lg font-heading font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-neutral-300 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Publications Column */}
            <div>
              <h3 className="text-lg font-heading font-semibold mb-6">Featured In</h3>
              <ul className="space-y-3">
                {publications.map((publication) => (
                  <li key={publication}>
                    <span className="text-neutral-300 text-sm">{publication}</span>
                  </li>
                ))}
              </ul>

              {/* Awards */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-neutral-400 mb-3">Awards & Recognition</h4>
                <div className="space-y-2">
                  <div className="text-secondary-400 text-sm">
                    • APA Photography Award 2023
                  </div>
                  <div className="text-secondary-400 text-sm">
                    • PDN 30 Rising Stars 2022
                  </div>
                  <div className="text-secondary-400 text-sm">
                    • International Photography Awards
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-neutral-800">
          <div className="container-fluid py-8">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-xl font-heading font-semibold mb-3">
                Stay Updated
              </h3>
              <p className="text-neutral-300 mb-6">
                Get notified about new projects, exhibitions, and architectural photography insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                />
                <button className="bg-secondary-500 hover:bg-secondary-600 text-neutral-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800">
          <div className="container-fluid py-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-neutral-400 text-sm mb-4 md:mb-0">
                © {currentYear} Sarah Chen Photography. All rights reserved.
              </div>

              {/* Legal Links */}
              <div className="flex items-center space-x-6 text-sm mb-4 md:mb-0">
                <a href="#" className="text-neutral-400 hover:text-secondary-400 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-neutral-400 hover:text-secondary-400 transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-neutral-400 hover:text-secondary-400 transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-neutral-400 hover:text-secondary-400 transition-colors duration-300"
              >
                <span className="text-sm">Back to Top</span>
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Professional Affiliations */}
        <div className="border-t border-neutral-800">
          <div className="container-fluid py-4">
            <div className="text-center">
              <p className="text-neutral-500 text-xs">
                Professional Member of American Society of Media Photographers (ASMP) |
                Architectural Photography Association | International Association of Photography & Digital Imaging
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;