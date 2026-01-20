import React from 'react';
import { Smile, Star, Users, RefreshCw, Send } from 'lucide-react';

export default function NumbersStatsSection() {
  return (
    <>
      <style>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-float-gentle {
          animation: float-gentle 4s ease-in-out infinite;
        }

        .card-tilt {
          perspective: 1000px;
        }

        .card-inner {
          transform-style: preserve-3d;
          transition: transform 0.3s ease;
        }

        .card-tilt:hover .card-inner {
          transform: rotateY(5deg) rotateX(-5deg);
        }

        .stat-card {
          background: linear-gradient(145deg, #ffffff, #f8f9ff);
          border: 3px solid #000;
          border-radius: 2rem;
          box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 12px 12px 0px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        <div className="max-w-7xl mx-auto">
          
         
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
            
          
            <div className="flex items-center gap-6">
              <div className="relative animate-float-gentle">
              
                <div className="absolute -inset-4 bg-lime-300 rounded-3xl opacity-80"></div>
                
             
                <div className="relative">
                  <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
                  
                    <ellipse cx="100" cy="155" rx="50" ry="8" fill="#000" opacity="0.1"/>
                    
                    {/* Left Pencil */}
                    <g transform="translate(60, 20)">
                      {/* Pencil Body */}
                      <rect x="8" y="0" width="20" height="100" fill="#F4E4C1" stroke="#000" strokeWidth="2" rx="2"/>
                      <rect x="8" y="20" width="20" height="15" fill="#E8D4A8" stroke="#000" strokeWidth="2"/>
                      
                      {/* Metal Band */}
                      <rect x="5" y="100" width="26" height="12" fill="#C0C0C0" stroke="#000" strokeWidth="2" rx="2"/>
                      
                      {/* Eraser */}
                      <rect x="8" y="112" width="20" height="25" fill="#9B7EDE" stroke="#000" strokeWidth="2" rx="3"/>
                      
                      {/* Pencil Tip */}
                      <path d="M 18 0 L 8 -20 L 18 -25 L 28 -20 Z" fill="#F4E4C1" stroke="#000" strokeWidth="2"/>
                      <path d="M 18 -20 L 18 -30" stroke="#000" strokeWidth="4" strokeLinecap="round"/>
                    </g>

                    {/* Right Pencil (Taller) */}
                    <g transform="translate(95, 5)">
                      {/* Pencil Body */}
                      <rect x="8" y="0" width="20" height="120" fill="#F4E4C1" stroke="#000" strokeWidth="2" rx="2"/>
                      <rect x="8" y="25" width="20" height="18" fill="#E8D4A8" stroke="#000" strokeWidth="2"/>
                      
                      {/* Metal Band */}
                      <rect x="5" y="120" width="26" height="12" fill="#C0C0C0" stroke="#000" strokeWidth="2" rx="2"/>
                      
                      {/* Eraser */}
                      <rect x="8" y="132" width="20" height="25" fill="#9B7EDE" stroke="#000" strokeWidth="2" rx="3"/>
                      
                      {/* Pencil Tip */}
                      <path d="M 18 0 L 8 -20 L 18 -25 L 28 -20 Z" fill="#F4E4C1" stroke="#000" strokeWidth="2"/>
                      <path d="M 18 -20 L 18 -30" stroke="#000" strokeWidth="4" strokeLinecap="round"/>
                    </g>
                  </svg>
                </div>
              </div>

              {/* Title */}
              <div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
                  And let the<br />
                  numbers talk
                </h2>
              </div>
            </div>

            {/* Right - Main Retention Rate Card */}
            <div className="bg-black rounded-3xl px-12 py-10 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <div className="text-7xl sm:text-8xl font-bold text-white mb-2">
                  93%
                </div>
                <div className="text-xl text-white font-medium mb-1">
                  Average Client Retention Rate
                </div>
                <div className="text-sm text-purple-400 font-medium">
                  (As of September 2025)
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 - Average Client Tenure */}
            <div className="card-tilt">
              <div className="card-inner stat-card p-8 h-full">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                    <Smile className="w-8 h-8 text-purple-500" strokeWidth={2} />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-black mb-3">
                    17+
                  </div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide mb-2">
                    MONTHS
                  </div>
                  <div className="text-base text-purple-600 font-semibold">
                    Average Client Tenure
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Average Review Rating */}
            <div className="card-tilt">
              <div className="card-inner stat-card p-8 h-full">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                    <Star className="w-8 h-8 text-purple-500 fill-purple-500" strokeWidth={2} />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-black mb-3">
                    5
                  </div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide mb-2">
                    STARS
                  </div>
                  <div className="text-base text-purple-600 font-semibold">
                    Average Review Rating on<br />Clutch
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - B2B SaaS Clients */}
            <div className="card-tilt">
              <div className="card-inner stat-card p-8 h-full">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                    <Users className="w-8 h-8 text-purple-500" strokeWidth={2} />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-black mb-3">
                    50+
                  </div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide mb-2">
                    B2B SAAS CLIENTS
                  </div>
                  <div className="text-base text-purple-600 font-semibold">
                    Across Different Industries &<br />Verticals
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Revenue from Repeated Clients */}
            <div className="card-tilt relative">
              <div className="card-inner stat-card p-8 h-full">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                    <RefreshCw className="w-8 h-8 text-purple-500" strokeWidth={2} />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-black mb-3">
                    ~63.3%
                  </div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide mb-2">
                    REVENUE
                  </div>
                  <div className="text-base text-purple-600 font-semibold">
                    From Repeated Clients
                  </div>
                </div>
              </div>

              {/* Bottom Right - Team Avatar Badge */}
              <div className="absolute -bottom-4 -right-4 bg-purple-600 rounded-3xl px-6 py-3 shadow-2xl transform hover:scale-110 transition-transform duration-300 z-10">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 border-2 border-white overflow-hidden">
                      <div className="w-full h-full bg-gray-500"></div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 border-2 border-white overflow-hidden">
                      <div className="w-full h-full bg-gray-500"></div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 border-2 border-white overflow-hidden">
                      <div className="w-full h-full bg-gray-500"></div>
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-cyan-400 rounded-xl flex items-center justify-center transform rotate-12 shadow-lg">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}