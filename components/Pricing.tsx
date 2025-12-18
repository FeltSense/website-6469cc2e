'use client';

import { Check, Camera, Star, Clock, Users } from 'lucide-react';

const Pricing = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pricingPlans = [
    {
      id: 'essential',
      name: 'Essential',
      description: 'Perfect for small residential projects and individual architects',
      price: 1500,
      duration: 'Half Day',
      popular: false,
      features: [
        '4 hours of photography',
        '15-20 high-resolution images',
        'Basic post-processing',
        '2 weeks delivery',
        'Web-ready files',
        'Single location',
        'Natural lighting focus',
      ],
      includes: [
        'Travel within 25 miles',
        'Online gallery delivery',
        'Usage rights included',
      ],
      ideal: 'Small residential projects, apartment interiors, single rooms',
      turnaround: '10-14 days',
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Comprehensive coverage for architectural firms and commercial projects',
      price: 2800,
      duration: 'Full Day',
      popular: true,
      features: [
        '8 hours of photography',
        '30-40 high-resolution images',
        'Advanced post-processing',
        '1 week delivery',
        'Web & print ready files',
        'Multiple locations/angles',
        'Natural & artificial lighting',
        'Twilight/golden hour shots',
      ],
      includes: [
        'Travel within 50 miles',
        'Rush delivery available',
        'Extended usage rights',
        'Client consultation',
      ],
      ideal: 'Commercial buildings, large residential projects, architectural portfolios',
      turnaround: '5-7 days',
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Complete architectural documentation for prestigious projects',
      price: 4500,
      duration: 'Multi-Day',
      popular: false,
      features: [
        '2-3 days of photography',
        '60+ high-resolution images',
        'Premium post-processing',
        '3-5 days delivery',
        'Full commercial license',
        'Multiple buildings/spaces',
        'Comprehensive lighting setup',
        'Drone photography included',
        'Detail & overview shots',
      ],
      includes: [
        'Unlimited travel radius',
        'Priority support',
        'Full commercial rights',
        'Strategy consultation',
        'Publication-ready images',
      ],
      ideal: 'Large commercial projects, mixed-use developments, award submissions',
      turnaround: '3-5 days',
    },
  ];

  const addOns = [
    { name: 'Drone Photography', price: 500, description: 'Aerial perspectives and overview shots' },
    { name: 'Twilight Session', price: 400, description: 'Blue hour exterior photography' },
    { name: 'Rush Delivery', price: 300, description: '24-48 hour turnaround' },
    { name: 'Additional Locations', price: 200, description: 'Per additional location' },
    { name: 'Video Walkthrough', price: 800, description: 'Cinematic architectural tour' },
  ];

  return (
    <section id="pricing" className="section-padding bg-neutral-50">
      <div className="container-fluid">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mb-6">
            Pricing
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Transparent, value-driven pricing for architectural photography that delivers
            exceptional results. All packages include full professional service and support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden relative transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? 'ring-2 ring-primary-500 transform scale-105'
                  : 'hover:scale-105'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </span>
                </div>
              )}

              {/* Header */}
              <div className={`p-8 text-center ${plan.popular ? 'bg-gradient-to-br from-primary-50 to-primary-100' : 'bg-neutral-50'}`}>
                <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-neutral-600 mb-6">
                  {plan.description}
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-neutral-900">
                    ${plan.price.toLocaleString()}
                  </span>
                  <span className="text-neutral-600 ml-2">
                    / {plan.duration}
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-neutral-600">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">Delivered in {plan.turnaround}</span>
                </div>
              </div>

              {/* Features */}
              <div className="p-8">
                <h4 className="font-semibold text-neutral-900 mb-4 flex items-center">
                  <Camera className="h-5 w-5 mr-2 text-primary-500" />
                  What's Included
                </h4>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-semibold text-neutral-900 mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary-500" />
                  Service Includes
                </h4>
                <ul className="space-y-3 mb-6">
                  {plan.includes.map((include, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-600">{include}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-neutral-50 rounded-lg p-4 mb-6">
                  <h5 className="font-medium text-neutral-900 mb-2">Ideal For:</h5>
                  <p className="text-sm text-neutral-600">{plan.ideal}</p>
                </div>

                <button
                  onClick={() => scrollToSection('#contact')}
                  className={`w-full btn ${
                    plan.popular ? 'btn-primary' : 'btn-outline'
                  }`}
                >
                  Start Your Project
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-heading font-bold text-center text-neutral-900 mb-8">
            Additional Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="border border-neutral-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-neutral-900">{addon.name}</h4>
                  <span className="text-lg font-bold text-primary-500">
                    +${addon.price}
                  </span>
                </div>
                <p className="text-neutral-600 text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-heading font-bold text-center text-neutral-900 mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-neutral-900 mb-2">What's included in post-processing?</h4>
              <p className="text-neutral-600 text-sm mb-4">
                All images receive professional color correction, perspective adjustment, and enhancement to showcase the architectural details at their best.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-neutral-900 mb-2">Do you travel for projects?</h4>
              <p className="text-neutral-600 text-sm mb-4">
                Yes, travel is included within specified radius for each package. Extended travel available with additional coordination.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-neutral-900 mb-2">What usage rights are included?</h4>
              <p className="text-neutral-600 text-sm mb-4">
                All packages include usage rights for marketing, portfolios, and publications. Commercial licensing varies by package.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-neutral-900 mb-2">Can I customize a package?</h4>
              <p className="text-neutral-600 text-sm mb-4">
                Absolutely! Every project is unique. Contact us to discuss custom packages tailored to your specific needs.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-neutral-600 mb-8">
            Ready to showcase your architectural project with stunning photography?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn btn-primary"
            >
              Get Custom Quote
            </button>
            <button className="btn btn-outline">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;