import Lottie from 'lottie-react';

import lamp from '../assets/lottie/lamp.json'

export default function AboutPage() {
  return (
    <>
    <section className="w-full bg-white px-6 py-28   md:pt-44">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 md:grid-cols-5">
        
        {/* LEFT SIDE — TEXT */}
        <div className="text-center md:text-left md:col-span-3">
          <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-6xl">
            The content experts behind leading technology brands
          </h2>

          <p className="mt-6 text-lg text-gray-600 md:text-2xl">
            We’ve built a reputation for producing smart, impactful, and
            differentiated content programs that help ambitious brands grow
            faster in competitive markets.
          </p>

          <button className="mt-8 inline-flex items-center gap-3 rounded-lg bg-purple-600 px-6 py-3 text-white transition hover:bg-purple-700">
            Let’s talk
            <span className="text-xl">💬</span>
          </button>
        </div>

        {/* RIGHT SIDE — LOTTIE ANIMATION */}
        <div className="flex justify-center md:justify-end md:col-span-2">
          <div className="w-72 sm:w-80 md:w-[380px] lg:w-[420px]">
            <Lottie animationData={lamp} loop autoplay />
          </div>
        </div>

      </div>
    </section>

    <section className="w-full bg-white px-6 py-28  md:pt-10">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 md:grid-cols-5">
        
        {/* LEFT SIDE — TEXT */}
        <div className="text-center md:text-left md:col-span-2">
          <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-6xl">
            How it started
          </h2>

          <p className="mt-6 text-lg text-gray-600 md:text-2xl">
          We started in NYC in 2015 by a ragtag crew of ex-lawyers, neuroscientists, and researchers turned content marketers. 
          We grew through our reputation and word of mouth.
          </p>

         
        </div>

        {/* RIGHT SIDE — LOTTIE ANIMATION */}
        <div className="flex justify-center md:justify-end md:col-span-3">
          <div className="w-72 sm:w-80 md:w-[380px] lg:w-[420px]">
            <Lottie animationData={lamp} loop autoplay />
          </div>
        </div>

      </div>
    </section>

    </>
  );
}
