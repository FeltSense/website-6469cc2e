'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Michael Chen',
      title: 'Principal Architect',
      company: 'Chen Architecture Studio',
      image: '/images/testimonials/testimonial-testimonials-0-1766099383386.jpg',
      quote: 'Sarah\'s architectural photography is simply extraordinary. Her ability to capture the essence of our designs through her black and white aesthetic has elevated our portfolio to new heights. The images have been instrumental in winning several prestigious awards.',
      rating: 5,
      project: 'Corporate Headquarters',
      featured: true,
    },
    {
      id: 2,
      name: 'Lisa Rodriguez',
      title: 'Creative Director',
      company: 'Dezeen Magazine',
      image: '/images/testimonials/testimonial-testimonials-1-1766099383769.jpg',
      quote: 'We\'ve featured Sarah\'s work multiple times in Dezeen. Her technical excellence combined with artistic vision creates images that perfectly communicate architectural concepts. She understands how to make buildings come alive through photography.',
      rating: 5,
      project: 'Editorial Feature',
      featured: true,
    },
    {
      id: 3,
      name: 'David Kim',
      title: 'Real Estate Developer',
      company: 'Urban Development Group',
      image: '/images/testimonials/testimonial-testimonials-2-1766099384045.jpg',
      quote: 'Working with Sarah transformed how we present our properties. Her photography doesn\'t just show spaces, it sells them. The emotional connection her images create with potential buyers has significantly improved our sales conversion rates.',
      rating: 5,
      project: 'Luxury Residential',
      featured: true,
    },
  ];

  const publications = [
    { name: 'Dezeen', logo: 'D' },
    { name: 'Architectural Digest', logo: 'AD' },
    { name: 'Dwell', logo: 'DW' },
    { name: 'Wallpaper*', logo: 'W*' },
    { name: 'Design Milk', logo: 'DM' },
    { name: 'ArchDaily', logo: 'A' },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-fluid">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mb-6">
            Client Recognition
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Testimonials from architects, designers, and publications who trust us to
            capture their architectural visions with precision and artistry.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl shadow-lg overflow-hidden mb-16">
          <div className="grid lg:grid-cols-2">
            {/* Testimonial Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center justify-between mb-6">
                <Quote className="h-8 w-8 text-primary-300" />
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-secondary-400 fill-current"
                    />
                  ))}
                </div>
              </div>

              <blockquote className="text-xl lg:text-2xl text-neutral-700 leading-relaxed mb-8">
                "{currentTestimonial.quote}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-neutral-900 text-lg">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-neutral-600">
                    {currentTestimonial.title}
                  </div>
                  <div className="text-primary-600 font-medium">
                    {currentTestimonial.company}
                  </div>
                  <div className="text-sm text-neutral-500 mt-1">
                    Project: {currentTestimonial.project}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 bg-neutral-100 hover:bg-primary-100 text-neutral-600 hover:text-primary-600 rounded-lg transition-colors duration-300"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <span className="px-3 py-1 bg-neutral-100 rounded-lg text-sm text-neutral-600">
                    {activeTestimonial + 1} / {testimonials.length}
                  </span>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 bg-neutral-100 hover:bg-primary-100 text-neutral-600 hover:text-primary-600 rounded-lg transition-colors duration-300"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Client Photo */}
            <div className="relative bg-gradient-to-br from-primary-100 to-primary-200">
              <div className="aspect-square lg:aspect-auto lg:h-full relative overflow-hidden">
                <Image
                  src={currentTestimonial.image}
                  alt={`${currentTestimonial.name} - ${currentTestimonial.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`card cursor-pointer transition-all duration-300 ${
                index === activeTestimonial
                  ? 'ring-2 ring-primary-500 shadow-lg'
                  : 'hover:shadow-lg'
              }`}
              onClick={() => setActiveTestimonial(index)}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-neutral-600">
                    {testimonial.company}
                  </div>
                </div>
              </div>

              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-secondary-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-neutral-600 text-sm leading-relaxed line-clamp-4">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>

        {/* Publications */}
        <div className="text-center">
          <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-8">
            Featured Publications
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {publications.map((publication, index) => (
              <div
                key={index}
                className="w-16 h-16 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-600 font-bold text-lg hover:bg-primary-50 hover:text-primary-600 transition-colors duration-300"
              >
                {publication.logo}
              </div>
            ))}
          </div>
          <p className="text-neutral-600 mt-6">
            Work featured in leading architectural and design publications worldwide
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-neutral-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-500 mb-2">98%</div>
            <div className="text-neutral-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-500 mb-2">50+</div>
            <div className="text-neutral-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-500 mb-2">15+</div>
            <div className="text-neutral-600">Publications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-500 mb-2">100%</div>
            <div className="text-neutral-600">On-Time Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;