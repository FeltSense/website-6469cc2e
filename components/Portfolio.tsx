'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Filter, Eye, ArrowUpRight } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'interior', label: 'Interior' },
    { id: 'exterior', label: 'Exterior' },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Modern Residential Complex',
      category: 'residential',
      type: 'exterior',
      location: 'San Francisco, CA',
      year: '2023',
      image: '/images/generated/portfolio-feature-1766099391710.png',
      description: 'Contemporary residential architecture featuring clean lines and natural light integration.',
    },
    {
      id: 2,
      title: 'Corporate Headquarters Interior',
      category: 'commercial',
      type: 'interior',
      location: 'New York, NY',
      year: '2023',
      image: '/images/generated/portfolio-feature-1766099391710.png',
      description: 'Minimalist office design with emphasis on spatial flow and geometric patterns.',
    },
    {
      id: 3,
      title: 'Luxury Penthouse Living',
      category: 'residential',
      type: 'interior',
      location: 'Los Angeles, CA',
      year: '2023',
      image: '/images/generated/portfolio-feature-1766099391710.png',
      description: 'High-end residential interior showcasing sophisticated material choices.',
    },
    {
      id: 4,
      title: 'Art Gallery Facade',
      category: 'commercial',
      type: 'exterior',
      location: 'Chicago, IL',
      year: '2022',
      image: '/images/generated/portfolio-feature-1766099391710.png',
      description: 'Contemporary gallery exterior with dramatic shadow play and textural elements.',
    },
    {
      id: 5,
      title: 'Boutique Hotel Lobby',
      category: 'commercial',
      type: 'interior',
      location: 'Miami, FL',
      year: '2022',
      image: '/images/generated/portfolio-feature-1766099391710.png',
      description: 'Elegant hospitality interior featuring custom lighting and bespoke furnishings.',
    },
    {
      id: 6,
      title: 'Private Villa Exterior',
      category: 'residential',
      type: 'exterior',
      location: 'Malibu, CA',
      year: '2022',
      image: '/images/generated/portfolio-feature-1766099391710.png',
      description: 'Coastal residential architecture emphasizing indoor-outdoor living integration.',
    },
  ];

  const filteredItems = portfolioItems.filter(item => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter || item.type === activeFilter;
  });

  return (
    <section id="portfolio" className="section-padding bg-neutral-50">
      <div className="container-fluid">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mb-6">
            Portfolio
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            A curated selection of architectural photography projects showcasing the intersection
            of light, form, and space through timeless black and white imagery.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white text-neutral-600 hover:bg-primary-50 hover:text-primary-600 shadow-sm'
              }`}
            >
              <Filter className="h-4 w-4" />
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="masonry">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`masonry-item group opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-700 ${
                index % 3 === 0 ? '' : index % 3 === 1 ? 'animation-delay-200' : 'animation-delay-400'
              }`}
              style={{ animationFillMode: 'forwards' }}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/90 backdrop-blur-sm text-neutral-900 p-3 rounded-full hover:bg-white transition-colors duration-300 mr-3">
                      <Eye className="h-5 w-5" />
                    </button>
                    <button className="bg-white/90 backdrop-blur-sm text-neutral-900 p-3 rounded-full hover:bg-white transition-colors duration-300">
                      <ArrowUpRight className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-neutral-800 px-3 py-1 rounded-full text-xs font-medium">
                      {item.category === 'residential' ? 'Residential' : 'Commercial'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-neutral-500">
                    <span>{item.location}</span>
                    <span>{item.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="btn btn-primary">
            View Complete Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;