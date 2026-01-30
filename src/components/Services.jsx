import Lottie from "lottie-react";
import animeAnimation from "../assets/lottie/Animated plant loader..json";
import orange from "../assets/lottie/Orange skating.json";
import cat from "../assets/lottie/Loader cat.json"
import bird from "../assets/lottie/hummingbird 1.json"


export default function Services1() {
  return (
    <section className="w-full bg-gray-100 px-6 py-12 md:px-12 lg:px-20 lg:pt-28">
      <div className="mx-auto max-w-8xl">
        {/* Top Heading */}
        <div className="mb-10 max-w-7xl text-center">
          <h1 className="font-serif text-4xl leading-tight tracking-tight md:text-6xl">
            Services we offer
          </h1>
          <p className="mt-4 text-lg text-gray-800">
            Our programs combine proprietary research, proven playbooks, and AI
            workflows to drive organic growth.
          </p>
        </div>

        {/* Main Grid1 */}
        <div className="grid group gap-0 md:grid-cols-3">
          {/* Left Card */}
          <div className="md:col-span-2  border border-gray-200 bg-white p-8 md:p-12">
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-700">
             Digital Marketing
            </span>

            <h2 className="mt-4 font-serif text-2xl leading-snug md:text-6xl">
              Turning Ideas into Impactful Marketing Strategies
            </h2>

            <p className="mt-6 max-w-2xl text-gray-900">
              We help your business grow online with in-house marketing and
               by running ads on Google, Facebook, Instagram, and LinkedIn.
            </p>

            {/* Pills */}
            <div className="mt-8 flex flex-wrap gap-2 lg:gap-3">
              {[
                "Personal Branding",
                "Creative Campaigns",
                "Content Strategy & Blogs/Articles",
                "Social Media Marketing",
                "Google & Facebook Ads",
                "SEO (Search Engine Optimization)"
               
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 rounded-full bg-gray-100 hover:bg-[#8F6AE6] px-4 py-2 text-sm text-gray-800"
                >
                  <span className="h-2 w-2 rounded-full bg-gray-700" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          
          {/* Right Card */}
          <div className="relative flex flex-col justify-between bg-purple-500 p-8 md:p-10 text-white">
            <div>
              <span className="text-sm font-semibold opacity-90">/// Unit1</span>

              <h3 className="mt-6 font-serif text-3xl leading-tight">
                Digital Marketing
                <br />
                Services
              </h3>
            </div>

                {/* Lottie Animation */}
                <div className="pointer-events-none absolute bottom-16 right-0 w-42 md:w-70 lg:w-[350px] opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                  <Lottie animationData={orange} loop autoplay />
                </div>


            <a
              href="#"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium opacity-90 hover:opacity-100"
            >
              Where strategy meets performance marketing
              <span aria-hidden>→</span>
            </a>
          </div>

        </div>

        {/* Main Grid2 */}
        <div className="grid group gap-0 md:grid-cols-3 mt-8 md:mt-12">
          {/* Left Card */}
          <div className="md:col-span-2  border border-gray-200 bg-white p-8 md:p-12">
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-700">
              Web Design & Development
            </span>

            <h2 className="mt-4 font-serif text-2xl leading-snug md:text-6xl">
             Transforming Ideas into Powerful Web Experiences
            </h2>

            <p className="mt-6 max-w-2xl text-gray-900">
              We build user-friendly and interactive websites using WordPress, Coding, and Shopify that match your brand’s style and goals. 
            </p>

            {/* Pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Complete Website Solutions",
                "Beautiful UI & UX Designs",
                "UI/UX Development",
                "Ecommerce websites",
                "Shopify stores",
                "wordpress solutions",
                "Static & Dynamic websites"
                
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 rounded-full bg-gray-100 hover:bg-orange-400 px-4 py-2 text-sm text-black"
                >
                  <span className="h-2 w-2 rounded-full bg-gray-500" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          
          {/* Right Card */}
          <div className="relative flex flex-col justify-between bg-orange-400 p-8 md:p-10 text-white">
            <div>
              <span className="text-sm font-semibold opacity-90">/// Unit2</span>

              <h3 className="mt-6 font-serif text-4xl leading-tight">
                Website
                <br />
                Development
              </h3>
            </div>

                {/* Lottie Animation */}
                <div className="pointer-events-none absolute bottom-16 right-4 w-40 md:w-56 opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                  <Lottie animationData={animeAnimation} loop autoplay />
                </div>


            <a
              href="#"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium opacity-90 hover:opacity-100"
            >
              Where strategy meets modern web development
              <span aria-hidden>→</span>
            </a>
          </div>
          </div>

          {/* Main Grid3 */}
        <div className="grid group gap-0 md:grid-cols-3 mt-8 md:mt-12">
          {/* Left Card */}
          <div className="md:col-span-2  border border-gray-200 bg-white p-8 md:p-12">
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
              Production House
            </span>

            <h2 className="mt-4 font-serif text-2xl leading-snug md:text-6xl">
              Transforming Concepts into Captivating Productions
            </h2>

            <p className="mt-6 max-w-2xl text-gray-900">
             We handle all kinds of shoots, events, corporate videos, model shoots, & product photography & make sure every moment is captured neatly & on time.
            </p>

            {/* Pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Video Productions",
                "PhotoShoots",
                "Corporate Events",
                "High quality videos",
                "Post Production works",
                "ProductShoots",
                "ModelShoots",
                "Other MultiMedia Projects"
                
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 rounded-full bg-gray-100 hover:bg-blue-400  px-4 py-2 text-sm text-black"
                >
                  <span className="h-2 w-2 rounded-full bg-gray-500" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          
          {/* Right Card */}
          <div className="relative flex flex-col justify-between bg-purple-500 p-8 md:p-10 text-white">
            <div>
              <span className="text-sm font-semibold opacity-90">/// Unit3</span>

              <h3 className="mt-6 font-serif text-4xl leading-tight">
                Production
                <br />
                Works
              </h3>
            </div>

                {/* Lottie Animation */}
                <div className="pointer-events-none absolute bottom-6 right-1 w-40 md:w-56 lg:w-[350px] opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                  <Lottie animationData={cat} loop autoplay />
                </div>


            <a
              href="#"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium opacity-90 hover:opacity-100"
            >
              Bringing stories to life through powerful production
              <span aria-hidden>→</span>
            </a>
          </div>
          </div>

           {/* Main Grid4 */}
        <div className="grid group gap-0 md:grid-cols-3 mt-8 md:mt-12">
          {/* Left Card */}
          <div className="md:col-span-2  border border-gray-200 bg-white p-8 md:p-12">
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-700">
              Podcast Studio 
            </span>

            <h2 className="mt-4 font-serif text-2xl leading-snug md:text-6xl">
             Where Great Conversations Come to Life
            </h2>

            <p className="mt-6 max-w-2xl text-gray-900">
              Record your podcast in our studio, which is ready for use. Everything you need is already set up, so you can walk in & start recording right away. 
            </p>

            {/* Pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "complete podcast setup",
                "2 x high-quality mics",
                "3 x high-quality camera",
                "Excellent Audio with AudioMixer ",
                "Premium Look Set"
                
                
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 rounded-full bg-gray-100 hover:bg-orange-400 px-4 py-2 text-sm text-black"
                >
                  <span className="h-2 w-2 rounded-full bg-gray-500" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          
          {/* Right Card */}
          <div className="relative flex flex-col justify-between bg-orange-400 p-8 md:p-10 text-white">
            <div>
              <span className="text-sm font-semibold opacity-90">/// Unit4</span>

              <h3 className="mt-6 font-serif text-4xl leading-tight">
                Podcast Studio 
                <br />
                Rentals
              </h3>
            </div>

                {/* Lottie Animation */}
                <div className="pointer-events-none absolute bottom-16 right-4 w-40 md:w-60 opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                  <Lottie animationData={bird} loop autoplay />
                </div>


            <a
              href="#"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium opacity-90 hover:opacity-100"
            >
              Studio-quality podcasts built to grow your audience
              <span aria-hidden>→</span>
            </a>
          </div>
          </div>
      </div>
    </section>
  );
}
