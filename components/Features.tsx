'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Clock, MapPin, User, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Features = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: 'Minimalist Corporate Headquarters',
      client: 'TechFlow Industries',
      location: 'San Francisco, CA',
      duration: '3 Days',
      year: '2023',
      category: 'Commercial',
      description: 'A comprehensive architectural photography project capturing the essence of modern corporate design through dramatic lighting and geometric compositions.',
      challenge: 'The challenge was to showcase the building\'s minimalist design while highlighting the interplay between natural and artificial lighting throughout different times of day.',
      solution: 'We employed a combination of natural light photography during golden hour and carefully staged artificial lighting to emphasize the architectural details and spatial flow.',
      result: 'The images were featured in Architectural Digest and helped the client win a prestigious design award. The photography contributed to a 40% increase in client inquiries.',
      image: '/images/generated/case-studies-feature-1766099393705.png',
      testimonial: '"Sarah\'s attention to detail and artistic vision transformed our space into a visual story. The photographs exceeded our expectations and have become integral to our brand identity."',
      testimonialAuthor: 'Michael Chen, CEO TechFlow Industries',
      beforeImage: '/images/generated/case-studies-feature-1766099393705.png',
      afterImage: '/images/generated/portfolio-feature-1766099391710.png',
    },
    {
      id: 2,
      title: 'Luxury Residential Villa',
      client: 'Private Residence',
      location: 'Malibu, CA',
      duration: '2 Days',
      year: '2023',
      category: 'Residential',
      description: 'An intimate architectural photography session focusing on the seamless integration of indoor and outdoor living spaces in a coastal setting.',
      challenge: 'Capturing the essence of luxury living while maintaining the natural beauty of the coastal environment and dealing with challenging lighting conditions.',
      solution: 'Strategic timing of shoots during optimal lighting conditions, combined with careful composition to frame the ocean views and architectural elements harmoniously.',
      result: 'The project was published in multiple design magazines and helped establish the architect\'s reputation in luxury residential design.',
      image: '/images/generated/portfolio-feature-1766099391710.png',
      testimonial: '"The photographs perfectly captured the spirit of our design. Sarah\'s black and white aesthetic added a timeless quality that our clients absolutely love."',
      testimonialAuthor: 'Lisa Rodriguez, Principal Architect',
      beforeImage: '/images/generated/portfolio-feature-1766099391710.png',
      afterImage: '/images/generated/case-studies-feature-1766099393705.png',
    },
    {
      id: 3,
      title: 'Contemporary Art Gallery',
      client: 'Meridian Gallery',
      location: 'New York, NY',
      duration: '4 Days',
      year: '2022',
      category: 'Cultural',
      description: 'A detailed documentation of a gallery renovation project, showcasing how architectural photography can capture the transformation of cultural spaces.',
      challenge: 'Photographing artworks alongside architectural elements while maintaining focus on the spatial design and avoiding copyright issues with displayed art.',
      solution: 'Coordinated with curators to photograph during installation periods and focused on architectural details, lighting systems, and spatial relationships.',
      result: 'The documentation served as a portfolio piece for the architecture firm and was featured in several design publications, leading to new gallery commissions.',
      image: '/images/generated/case-studies-feature-1766099393705.png',
      testimonial: '"Sarah understood the unique requirements of photographing gallery spaces. Her work has become an essential part of our architectural documentation."',
      testimonialAuthor: 'David Kim, Gallery Director',
      beforeImage: '/images/generated/case-studies-feature-1766099393705.png',
      afterImage: '/images/generated/portfolio-feature-1766099391710.png',
    },
  ];

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentCase = caseStudies[activeCase];

  return (
    <section id="case-studies" className="section-padding bg-neutral-50">
      <div className="container-fluid">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mb-6">
            Project Case Studies
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Detailed breakdowns of architectural photography projects, showcasing the process,
            challenges, and results that drive successful collaborations.
          </p>
        </div>

        {/* Case Study Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-2 shadow-md">
            {caseStudies.map((study, index) => (
              <button
                key={study.id}
                onClick={() => setActiveCase(index)}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                  activeCase === index
                    ? 'bg-primary-500 text-white'
                    : 'text-neutral-600 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                Case {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Main Case Study Content */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
          {/* Header */}
          <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 text-white p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="text-3xl font-heading font-bold mb-2">
                  {currentCase.title}
                </h3>
                <p className="text-xl text-neutral-300 mb-4">
                  {currentCase.description}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevCase}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-300"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <span className="px-4 py-2 bg-white/10 rounded-lg text-sm">
                  {activeCase + 1} of {caseStudies.length}
                </span>
                <button
                  onClick={nextCase}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-300"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-secondary-400" />
                <div>
                  <div className="text-sm text-neutral-300">Client</div>
                  <div className="font-medium">{currentCase.client}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-secondary-400" />
                <div>
                  <div className="text-sm text-neutral-300">Location</div>
                  <div className="font-medium">{currentCase.location}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-secondary-400" />
                <div>
                  <div className="text-sm text-neutral-300">Duration</div>
                  <div className="font-medium">{currentCase.duration}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-secondary-400" />
                <div>
                  <div className="text-sm text-neutral-300">Category</div>
                  <div className="font-medium">{currentCase.category}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Before/After Comparison */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-heading font-semibold text-neutral-900 mb-4">
                  Project Overview
                </h4>
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md mb-4">
                  <Image
                    src={currentCase.image}
                    alt={`${currentCase.title} - Main Image`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-heading font-semibold text-neutral-900 mb-4">
                  Featured Work
                </h4>
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md mb-4">
                  <Image
                    src={currentCase.afterImage}
                    alt={`${currentCase.title} - Featured Work`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Process Breakdown */}
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-heading font-semibold text-neutral-900 mb-4">
                  Challenge
                </h4>
                <p className="text-neutral-600 leading-relaxed">
                  {currentCase.challenge}
                </p>
              </div>
              <div>
                <h4 className="text-xl font-heading font-semibold text-neutral-900 mb-4">
                  Solution
                </h4>
                <p className="text-neutral-600 leading-relaxed">
                  {currentCase.solution}
                </p>
              </div>
              <div>
                <h4 className="text-xl font-heading font-semibold text-neutral-900 mb-4">
                  Result
                </h4>
                <p className="text-neutral-600 leading-relaxed">
                  {currentCase.result}
                </p>
              </div>
            </div>

            {/* Client Testimonial */}
            <div className="bg-primary-50 rounded-lg p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <blockquote className="text-lg text-neutral-700 italic mb-4 leading-relaxed">
                    "{currentCase.testimonial}"
                  </blockquote>
                  <cite className="text-neutral-600 font-medium">
                    — {currentCase.testimonialAuthor}
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-xl text-neutral-600 mb-8">
            Ready to create compelling architectural photography for your project?
          </p>
          <button className="btn btn-primary">
            <span>Discuss Your Project</span>
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;