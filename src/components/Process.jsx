import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const ProcessSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const processSteps = [
    {
      id: 1,
      number: '01',
      title: 'Research & Discovery',
      description: 'We begin by understanding your brand, audience, and business goals. Through market research, competitor analysis, and customer insights, we uncover opportunities that shape a strong and focused marketing foundation.',
      hasIcon: false
    },
    {
      id: 2,
      number: '02',
      title: 'Strategy & Planning',
      description: 'Next, we build a data-driven marketing roadmap. From positioning and messaging to channel selection and campaign planning, every move is designed to align with your growth objectives.',
      hasIcon: false
    },
    {
      id: 3,
      number: '03',
      title: 'Creative & Campaign Execution',
      description: 'Our team brings ideas to life through compelling content, performance campaigns, and engaging digital experiences. Whether it’s social media, paid ads, SEO, video, or web experiences, we execute with precision and creativity.',
      hasIcon: false
    },
    {
      id: 4,
      number: '04',
      title: 'Optimization & Growth',
      description: 'We continuously track performance, analyze real-time data, and refine campaigns to improve results. Through testing, optimization, and scaling what works, we ensure sustainable growth and long-term success.',
      hasIcon: false
    }
  ];

  return (
    <div className="w-full bg-gray-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 lg:mb-16">
          <p className="text-purple-800 text-sm sm:text-base tracking-wider uppercase mb-4">
            OUR PROCESS
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6">
            Here's how we work
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl mb-8">
            Need more details? We're happy to work through them together.
          </p>
          <button className="bg-purple-500 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors duration-300 text-base sm:text-lg font-medium">
            Let's talk
            <MessageCircle className="w-5 h-5" />
          </button>
        </div>

        {/* Process Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {processSteps.map((step) => (
            <div
              key={step.id}
              onMouseEnter={() => setHoveredCard(step.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`rounded-3xl p-8 sm:p-10 lg:p-12 transition-all duration-500 ease-out transform ${
                hoveredCard === step.id
                  ? 'bg-gradient-to-br from-purple-500 to-purple-600 shadow-2xl scale-105 -translate-y-2'
                  : 'bg-purple-200 shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Card Number Badge */}
              <div
                className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl mb-6 transition-colors duration-500 ${
                  hoveredCard === step.id
                    ? 'bg-white bg-opacity-20'
                    : 'bg-purple-600'
                }`}
              >
                <span
                  className={`text-lg sm:text-xl font-semibold transition-colors duration-500 ${
                    hoveredCard === step.id ? 'text-white' : 'text-white'
                  }`}
                >
                  {step.number}
                </span>
              </div>

              {/* Icon (only for first card) */}
              {step.hasIcon && (
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl mb-6 transition-colors duration-500 ${
                    hoveredCard === step.id
                      ? 'bg-white bg-opacity-20'
                      : 'bg-gray-100'
                  }`}
                />
              )}

              {/* Title */}
              <h3
                className={`text-2xl sm:text-3xl lg:text-4xl font-md mb-4 transition-colors duration-500 ${
                  hoveredCard === step.id ? 'text-white' : 'text-gray-900'
                }`}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                className={`text-base sm:text-lg leading-relaxed transition-colors duration-500 ${
                  hoveredCard === step.id ? 'text-white text-opacity-90' : 'text-gray-700'
                }`}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;