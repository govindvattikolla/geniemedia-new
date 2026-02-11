import React, { useState } from 'react';
import { ChevronDown, MessageCircle, ArrowUp } from 'lucide-react';
import Lottie from 'lottie-react';
import hummingBird from '../assets/lottie/hummingbird 1.json';
import arrows from '../assets/lottie/Animated Arrows.json'
import AboutSection1 from '../components/AboutSec';
import Services1 from '../components/Services'
import ContentEvolution from '../components/contentEval';
import ContentMarketing from '../components/contentEval';
import ProcessSection from '../components/Process';
import VideoTestimonials from '../components/testimonials';
import ContactSec from '../components/Contact';
import { TypingText } from '../components/TypingEff';


export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes wave {
          0%, 100% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(-5px) translateY(-10px); }
          50% { transform: translateX(0) translateY(-15px); }
          75% { transform: translateX(5px) translateY(-10px); }
        }

        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-wave {
          animation: wave 4s ease-in-out infinite;
        }

        .draw-animation {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 2s ease-out forwards;
        }

        .underline-cyan {
          position: relative;
          display: inline-block;
        }

        .underline-cyan::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 100%;
          height: 4px;
          background: #22d3ee;
          border-radius: 2px;
        }
      `}</style>

      

      {/* Hero Section */}
      <section className="relative min-h-screen bg-white flex items-center pt-20 pb-0 overflow-hidden">
        
        {/* Left Character - Lamp */}
        <div className="absolute left-0 sm:left-8 lg:left-0 hidden md:block bottom-5 w-32 sm:w-40 lg:w-48 animate-float">
          <Lottie
             animationData={arrows}
              loop={true}
              style={{ width: 300, height: 300 }} />
         
        </div>


         {/* Right-top Character - Genie */}
        {/* <div className="absolute right-0 sm:right-8 lg:right-30 bottom-0 lg:top-40 w-20 sm:w-24  lg:w-60 animate-float hidden md:block" style={{animationDelay: '1s'}}>
      
              <img src="https://res.cloudinary.com/dcnwphnzn/image/upload/v1769754292/noun-genie-1005023_noi6wa.png" alt="GENIE" width='250px' height='380px' />

        </div> */}

        {/* Right Character - lamp */}
        <div className="absolute right-0 sm:right-8 lg:right-12 bottom-36 w-22 sm:w-24  lg:w-72 animate-float hidden md:block" style={{animationDelay: '2s'}}>
        
              <img src="https://res.cloudinary.com/dcnwphnzn/image/upload/v1769853809/genie-image_se78s9.jpg" alt="lamp" width='450px' height='700px' />

        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-15 pb-0 lg:py-36 text-center lg:ml-56">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-serif lg:pt-10 leading-tight mb-8 max-w-5xl mx-auto">
            <span className="italic">Smarter Digital Marketing </span>
            <br/>
            <span className="italic">Stronger Growth.</span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-6">
           From visibility to real business growth, we position your brand as the obvious choice in your market through{' '}
            <TypingText/>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2 lg:mb-16">
            <button className="bg-purple-500 hover:bg-black text-white px-8 py-4 mb-0 rounded-full text-lg font-semibold transition-colors shadow-xl hover:shadow-2xl transform hover:scale-105 duration-300 my-4">
              Get Started
            </button>
            
          </div>

        
        </div>

        {/* Scroll Indicator */}
       <div className="absolute bottom-8 inset-x-0 flex justify-center animate-bounce">
         <ChevronDown className="w-8 h-8 text-gray-400" />
       </div>
      </section>

      <AboutSection1/>

      
      <Services1/>
      <ContentMarketing/>
      <ProcessSection/>
      <VideoTestimonials/>
      <ContactSec/>

    
    </>
  );
}