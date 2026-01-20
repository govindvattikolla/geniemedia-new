import Lottie from "lottie-react";
import animeAnimation from "../assets/lottie/Animated plant loader..json";
import orange from "../assets/lottie/Orange skating.json";
import cat from "../assets/lottie/Loader cat.json"


export default function Services1() {
  return (
    <section className="w-full bg-[#F5F5F5] px-6 py-16 md:px-12 lg:px-20 lg:pt-32">
      <div className="mx-auto max-w-8xl">
        {/* Top Heading */}
        <div className="mb-14 max-w-7xl">
          <h1 className="font-serif text-4xl leading-tight tracking-tight md:text-6xl">
            Content so good it doesn&apos;t feel like marketing
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Our programs combine proprietary research, proven playbooks, and AI
            workflows to drive organic growth.
          </p>
        </div>

        {/* Main Grid1 */}
        <div className="grid group gap-0 md:grid-cols-3">
          {/* Left Card */}
          <div className="md:col-span-2  border border-gray-200 bg-white p-8 md:p-12">
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Brand & Authority
            </span>

            <h2 className="mt-4 font-serif text-3xl leading-snug md:text-6xl">
              Be the thought leader
            </h2>

            <p className="mt-6 max-w-2xl text-gray-600">
              Distribute perspectives that attract the right audience and
              deliver pipeline. Pair us with your experts or leave the research
              to us.
            </p>

            {/* Pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "LinkedIn",
                "Social Posts",
                "Research Reports",
                "Blog Articles",
                "Podcasts",
                "Books",
                "Micro-sites",
                "White Papers",
                "Content Strategy",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 rounded-full bg-gray-100 hover:bg-[#8F6AE6] px-4 py-2 text-sm text-gray-700"
                >
                  <span className="h-2 w-2 rounded-full bg-gray-500" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          
          {/* Right Card */}
          <div className="relative flex flex-col justify-between bg-[#8F6AE6] p-8 md:p-10 text-white">
            <div>
              <span className="text-sm font-semibold opacity-90">/// Unit21</span>

              <h3 className="mt-6 font-serif text-4xl leading-tight">
                $Millions in
                <br />
                Pipeline
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
              Read how Animalz wrote the book on fraud
              <span aria-hidden>→</span>
            </a>
          </div>

        </div>

        {/* Main Grid2 */}
        <div className="grid group gap-0 md:grid-cols-3 md:mt-12">
          {/* Left Card */}
          <div className="md:col-span-2  border border-gray-200 bg-white p-8 md:p-12">
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Brand & Authority
            </span>

            <h2 className="mt-4 font-serif text-3xl leading-snug md:text-6xl">
             Grow your presence in search & answer engines
            </h2>

            <p className="mt-6 max-w-2xl text-gray-600">
              Get sustainable ROI with a conversion-focused, AI-enabled, thoroughly measured SEO / AEO (Answer Engine Optimization) program. 
            </p>

            {/* Pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "LinkedIn",
                "Social Posts",
                "Research Reports",
                "Blog Articles",
                "Podcasts",
                "Books",
                "Micro-sites",
                "White Papers",
                "Content Strategy",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 rounded-full bg-gray-100 hover:bg-orange-400 px-4 py-2 text-sm text-gray-700"
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
              <span className="text-sm font-semibold opacity-90">/// Unit21</span>

              <h3 className="mt-6 font-serif text-4xl leading-tight">
                $Millions in
                <br />
                Pipeline
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
              Read how Animalz wrote the book on fraud
              <span aria-hidden>→</span>
            </a>
          </div>
          </div>

          {/* Main Grid3 */}
        <div className="grid group gap-0 md:grid-cols-3 md:mt-12">
          {/* Left Card */}
          <div className="md:col-span-2  border border-gray-200 bg-white p-8 md:p-12">
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Brand & Authority
            </span>

            <h2 className="mt-4 font-serif text-3xl leading-snug md:text-6xl">
              Scale your content production
            </h2>

            <p className="mt-6 max-w-2xl text-gray-600">
             Extend your team with content experts. We learn your product, industry, and go-to-market motion to produce quality content and provide supplementary strategic support.
            </p>

            {/* Pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "LinkedIn",
                "Social Posts",
                "Research Reports",
                "Blog Articles",
                "Podcasts",
                "Books",
                "Micro-sites",
                "White Papers",
                "Content Strategy",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 rounded-full bg-gray-100 hover:bg-blue-400  px-4 py-2 text-sm text-gray-700"
                >
                  <span className="h-2 w-2 rounded-full bg-gray-500" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          
          {/* Right Card */}
          <div className="relative flex flex-col justify-between bg-blue-400 p-8 md:p-10 text-white">
            <div>
              <span className="text-sm font-semibold opacity-90">/// Unit21</span>

              <h3 className="mt-6 font-serif text-4xl leading-tight">
                $Millions in
                <br />
                Pipeline
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
              Read how Animalz wrote the book on fraud
              <span aria-hidden>→</span>
            </a>
          </div>
          </div>
      </div>
    </section>
  );
}
