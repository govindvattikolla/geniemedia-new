import React, { useState, useEffect, useRef } from 'react';
import { Frown, UserX, FileText, PenTool, Smile, Users, TrendingUp, Video, Sparkles } from 'lucide-react';

const ContentMarketing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const oldWayItems = [
    { icon: Frown, text: 'Brands spoke. Audiences listened.' },
    { icon: UserX, text: 'Channels existed to push traffic to a single “big” asset' },
    { icon: FileText, text: 'SEO meant keyword stuffing and rankings' },
    { icon: FileText, text: 'Content = Blog and landing pages' },
    { icon: PenTool, text: 'Manual, slow, intuition-driven' }
  ];

  const newWayItems = [
    { icon: Smile, text: 'People and creators build trust, not logos' },
    { icon: Users, text: 'Channels are destinations-optimized for zero-click discovery' },
    { icon: TrendingUp, text: 'SEO 🤝 AEO 🤝 GEO (Search, Answer & Generative Engines)' },
    { icon: Video, text: 'Content = video, audio, social, search, and AI surfaces' },
    { icon: Sparkles, text: 'AI-assisted, data-driven, always-on' }
  ];

  return (
    <div
  ref={sectionRef}
  className="relative overflow-x-hidden min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-8 px-4 sm:p-6 lg:p-8"
>

      <div className="max-w-7xl w-full">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center mb-8 sm:mb-16 lg:mb-20 text-gray-800">
          Content marketing is <span className="italic">evolving</span>
        </h1>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-center">
          {/* Old Way Card */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-24 opacity-0'
            }`}
          >
            <div className="bg-purple-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl sm:text-3xl font-medium mb-8 text-gray-700">
                The old way
              </h2>
              <div className="space-y-4">
                {oldWayItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 transform transition-all duration-500"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-400 bg-opacity-30 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-gray-800" />
                    </div>
                    <p className="text-gray-800 text-base sm:text-lg leading-relaxed pt-1.5">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* VS Divider */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
            <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-2xl border-4 border-gray-100">
              <span className="text-2xl font-light text-gray-900 italic">vs.</span>
            </div>
          </div>

          {/* Mobile VS Divider */}
          <div className="flex lg:hidden items-center justify-center -my-4">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-xl border-4 border-gray-100">
              <span className="text-xl font-light text-gray-900 italic">vs.</span>
            </div>
          </div>

          {/* The Animalz Way Card */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-24 opacity-0'
            }`}
          >
            <div className="bg-purple-600 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl sm:text-3xl font-medium mb-8 text-white">
                The Genie Way
              </h2>
              <div className="space-y-4">
                {newWayItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 transform transition-all duration-500"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 bg-opacity-20 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-200 text-base sm:text-lg leading-relaxed pt-1.5">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentMarketing;