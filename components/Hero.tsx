import Image from 'next/image';
import { ArrowRight, Award, Camera } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/generated/hero-hero-1766099390475.png"
          alt="Architectural photography showcasing modern building with dramatic lighting"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-fluid text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Awards Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6">
            <Award className="h-4 w-4 text-secondary-400" />
            <span className="text-sm font-medium">Published in Dezeen & Architectural Digest</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight">
            Award-Winning
            <br />
            <span className="text-gradient bg-gradient-to-r from-white to-white/80 bg-clip-text">
              Architectural Photography
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Capturing the essence of space through timeless black and white imagery.
            Specialized expertise in both interior and exterior architectural photography.
          </p>

          {/* Key Points */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base">
            <div className="flex items-center space-x-2">
              <Camera className="h-5 w-5 text-secondary-400" />
              <span>Black & White Aesthetic</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-secondary-400" />
              <span>International Recognition</span>
            </div>
            <div className="flex items-center space-x-2">
              <Camera className="h-5 w-5 text-secondary-400" />
              <span>Professional Service</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('#contact')}
              className="inline-flex items-center space-x-2 bg-secondary-500 text-neutral-900 hover:bg-secondary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <span>Start Your Project</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollToSection('#portfolio')}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              <span>View Portfolio</span>
              <Camera className="h-5 w-5" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary-400 mb-2">50+</div>
              <div className="text-sm text-white/80">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary-400 mb-2">15+</div>
              <div className="text-sm text-white/80">Publications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary-400 mb-2">5</div>
              <div className="text-sm text-white/80">Awards Won</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary-400 mb-2">8+</div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;