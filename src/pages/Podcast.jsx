import React, { useEffect, useState } from "react";
import './podcast.css'




export default function PodcastStudio() {
  



  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const openWhatsApp = () =>
    window.open("https://wa.me/919032845433", "_blank");
  

  // Intersection Observers (converted)
  useEffect(() => {
    const options1 = { threshold: 0.3 };
    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach((entry) =>
        entry.target.classList.toggle("animate", entry.isIntersecting)
      );
    }, options1);

    const content = document.querySelector(".content");
    const visual = document.querySelector(".visual");
    if (content) observer1.observe(content);
    if (visual) observer1.observe(visual);

    // Studio section animation
    const options2 = { threshold: 0.05, rootMargin: "120px 0px" };
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) =>
        entry.target.classList.toggle("animate", entry.isIntersecting)
      );
    }, options2);

    const elementsToAnimate = document.querySelectorAll(
      ".studio-header, .studio-image, .floating-actions"
    );
    elementsToAnimate.forEach((el) => observer2.observe(el));

    requestAnimationFrame(() => {
      const section = document.querySelector(".studio-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          elementsToAnimate.forEach((el) => el.classList.add("animate"));
        }
      }
    });

    // Furniture cards animation
    const options3 = { threshold: 0.2 };
    const observer3 = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("sbf-show");
          obs.unobserve(entry.target);
        }
      });
    }, options3);

    document.querySelectorAll(".sbf-card").forEach((card) => {
      observer3.observe(card);
    });

    // Testimonials animation
    const options4 = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
    const observer4 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("animate");
      });
    }, options4);

   
    const tCards = document.querySelectorAll(".testimonial-card");
    const tCta = document.querySelector(".testimonial-cta");

   
    tCards.forEach((c) => observer4.observe(c));
    if (tCta) observer4.observe(tCta);
  }, []);

  return (
    <div>
      

      {/* HERO SECTION */}
      <section className="hero">
        <video autoPlay muted loop playsInline className="hero-bg-video">
          <source src= 'https://res.cloudinary.com/dcnwphnzn/video/upload/v1766472614/podcast_clip_jhfw5o.mp4' type="video/mp4" loading='lazy' /> 
        </video>

        <div className="bg-gradient bg-gradient-1"></div>
        <div className="bg-gradient bg-gradient-2"></div>

        <h1 className="hero-title1">
          <span>YOUR PODCAST BEGINS HERE</span>
          <br />
          <span>IN</span>
          <span className="highlight">VISAKHAPATNAM</span>
        </h1>

        <p className="hero-description1">
          Bring your voice to life at Genie Studio, the city’s most trusted
          podcast recording and content creation space.
        </p>

        <div className="hero-cta">
          <a href="https://wa.me/+919032845433" className="btn btn-primary">
            Book Studio
          </a>
        </div>
      </section>

      {/* NETWORK SECTION */}
      <section className="network-section" id="network">
        <div className="network-content">
          <h4 className="network-subtitle">OUR SPACE</h4>
          <h2 className="network-title">
            Where voices grow louder, stories find rhythm, <br />
            and sound becomes legacy.
          </h2>
        </div>

        <div className="marquee-container">
          <div className="marquee-track">
            <img src= 'https://res.cloudinary.com/dcnwphnzn/image/upload/v1766472600/podcast-mic_otl8dg.jpg' alt="Podcast 1" loading='lazy'/>
            <img src= 'https://res.cloudinary.com/dcnwphnzn/image/upload/v1766472603/StudioNightView-min_qhb4dq.jpg' alt="Podcast 2" loading='lazy'/>
            <img src=  'https://res.cloudinary.com/dcnwphnzn/image/upload/v1766472604/studioSet-min_yqhydl.jpg' alt="Podcast 3" loading='lazy'  />
            <img src=  'https://res.cloudinary.com/dcnwphnzn/image/upload/v1766472594/studio-light2-min_gcgzj2.jpg' alt="Podcast 4" loading='lazy' />
            <img src= 'https://res.cloudinary.com/dcnwphnzn/image/upload/v1766472598/podcast-cameras_mzeqzl.jpg' alt="Podcast 5" loading='lazy' />

            <img src= 'https://res.cloudinary.com/dcnwphnzn/image/upload/v1766472593/podcast-chair_efyzne.jpg' alt="Podcast 1" loading='lazy' />
            <img src= 'https://res.cloudinary.com/dcnwphnzn/image/upload/v1766472600/podcast-mic_otl8dg.jpg' alt="Podcast 3" loading='lazy' />
            <img src= 'https://res.cloudinary.com/dcnwphnzn/image/upload/v1766472604/studio-set2-min_j5xye3.jpg' alt="Podcast 4" loading='lazy'  />
          </div>
        </div>
      </section>

      {/* ADVERTISING SECTION */}
      <section className="advertising-section">
        <div className="bg-orb bg-orb-1"></div>
        <div className="bg-orb bg-orb-2"></div>

        <div className="container">
          <div className="content">
            <span className="content-label">ADVERTISING</span>
            <h2>YOUR VOICE. OUR STUDIO. ONE VISION.</h2>
            <p>
              At Genie Studio, your ideas become sound that connects. We provide
              high-quality acoustics, professional support, and more.
            </p>
            <a
              href="https://wa.me/+919032845433"
              className="cta-button"
            >
              Get Started
            </a>
          </div>

          <div className="visual">
            <div className="phone-mockup">
              <div className="mic-circle">
                <div className="mic-icon">
                  <div className="mic-stand"></div>
                  <div className="mic-base"></div>
                </div>
              </div>

              <div className="sound-wave">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="wave-bar"></div>
                ))}
              </div>

              <div className="hand-visual"></div>
            </div>
          </div>
        </div>
      </section>

      {/* STUDIO SECTION */}
      <section className="studio-section" id="our-studio">
        <div className="studio-container">
          <div className="left-column">
            <div className="studio-header">
              <h2>A SPACE DESIGNED FOR EVERY CREATOR</h2>
              <p>
                Whether you're a solo podcaster or influencer, Genie Studio
                adapts to you.
              </p>
            </div>

            <div className="studio-image large">
              <img
                src= 'https://res.cloudinary.com/dcnwphnzn/image/upload/v1766472604/studio-set2-min_j5xye3.jpg'
                alt="Red Studio Setup"
                loading='lazy'
              />
            </div>
          </div>

          <div className="right-column">
            <div className="studio-image small">
              <img
                src= 'https://res.cloudinary.com/dcnwphnzn/image/upload/v1766472603/StudioNightView-min_qhb4dq.jpg'
                alt="Studio Setup"
                loading='lazy'
              />
            </div>

            <div className="studio-image small">
              <img
                src= 'https://res.cloudinary.com/dcnwphnzn/image/upload/v1766472594/studio-light2-min_gcgzj2.jpg'
                alt="Studio Setup"
                loading='lazy'
              />
            </div>
          </div>
        </div>

      </section>

      {/* EQUIPMENT SECTION */}
      <section className="furniture-section" id="equipment">
        <h2 className="section-title">
          Equipped with all the <br /> furniture & props you need
        </h2>

        <div className="furniture-container">
          <div className="furniture-item">
            <img src= 'https://res.cloudinary.com/dcnwphnzn/image/upload/v1766472604/studio-set2-min_j5xye3.jpg'  alt="Studio Set" loading='lazy' />
            <p className="item-text">1 x complete podcast setup</p>
          </div>

          <div className="furniture-item">
            <img src= 'https://res.cloudinary.com/dcnwphnzn/image/upload/v1766472600/podcast-mic_otl8dg.jpg' alt="Mics" loading='lazy' />
            <p className="item-text">2 x high-quality mic</p>
          </div>
        </div>
      </section>

      {/* Grid section */}
      <section className="sbf-section">
        <div className="sbf-grid">
          <figure className="sbf-card sbf-left">
            <img src= 'https://res.cloudinary.com/dcnwphnzn/image/upload/v1766472598/podcast-cameras_mzeqzl.jpg' loading='lazy' alt="Camera" />
            <figcaption>3 x high-quality camera</figcaption>
          </figure>

          <figure className="sbf-card sbf-right">
            <img src= 'https://res.cloudinary.com/dcnwphnzn/image/upload/v1766472605/podcast-output_jfrcba.jpg' loading='lazy' alt="Output" />
            <figcaption>4 x excellent output</figcaption>
          </figure>

          <figure className="sbf-card sbf-bottom">
            <img src= 'https://res.cloudinary.com/dcnwphnzn/image/upload/v1766472603/StudioNightView-min_qhb4dq.jpg' loading='lazy' alt="Premium" />
            <figcaption>5 x premium look set</figcaption>
          </figure>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="testimonial-section" id="reviews">
        <div className="bg-pattern"></div>
        <div className="decor-orb decor-orb-1"></div>
        <div className="decor-orb decor-orb-2"></div>

        <div className="testimonial-container">
          <div className="testimonial-header">
            <span className="testimonial-label">Testimonials</span>
            <h2>WHAT OUR CREATORS SAY</h2>
            <p>
             Every voice, every emotion, every story, that’s the Genie Studio experience.
            </p>
          </div>

          <div className="testimonials-grid">
            {/* Testimonial 1 */}
            <div className="testimonial-card">
              <div className="quote-icon"></div>
              <div className="rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>

              <p className="testimonial-text">
                "The studio quality is absolutely incredible. The acoustics are perfect, and the equipment is top-notch. Our podcast has never sounded better since we started recording here."
              </p>

              <div className="author-info">
                <div className="author-avatar">SP</div>
                <div className="author-details">
                  <h4>Sasidhar Pydiraju</h4>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-card">
              <div className="quote-icon"></div>
              <div className="rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>

              <p className="testimonial-text">
                "Professional setup with amazing support staff. They helped us every step of the way, from setup to post-production. Highly recommend for serious podcasters!"
              </p>

              <div className="author-info">
                <div className="author-avatar">AS</div>
                <div className="author-details">
                  <h4>Aruna Sai Kumar</h4>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial-card">
              <div className="quote-icon"></div>
              <div className="rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>

              <p className="testimonial-text">
                "As a beginner, I was nervous about recording my first podcast. The team made everything so easy and welcoming. The studio space is inspiring and the results are phenomenal!"
              </p>

              <div className="author-info">
                <div className="author-avatar">S</div>
                <div className="author-details">
                  <h4>Shanmuk</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-cta">
            <button
              className="cta-button"
              onClick={() =>
                window.open("https://wa.me/919032845433", "_blank")
              }
            >
              Book Your Session Today
            </button>
          </div>
        </div>
      </section>

      
    </div>
  );
}
