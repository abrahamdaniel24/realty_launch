import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ─── Icons ───────────────────────────────────────────────────────────────────

function IconBranding() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
    </svg>
  );
}

function IconMobile() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold-400" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold-500" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold-600" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6c.9 0 1.7.07 1.9.1v2.2h-1.3c-1 0-1.2.5-1.2 1.2V12h2.5l-.3 3h-2.2v6.8c4.56-.93 8-4.96 8-9.8z"/>
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5h.008v.008H16.5V7.5zm-6 3.5a3 3 0 116 0 3 3 0 01-6 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 1.5h6A7.5 7.5 0 0122.5 9v6a7.5 7.5 0 01-7.5 7.5H9A7.5 7.5 0 011.5 15V9A7.5 7.5 0 019 1.5z" />
    </svg>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

const caseStudies = [
  {
    title: "Miami Luxury Market Concept",
    subtitle: "Mobile-First Lead Generation Architecture",
    bulletPoints: [
      "Engineered with a dual-funnel layout separating buyers and sellers instantly.",
      "Geolocation-focused interface optimized for premier luxury zip codes.",
      "Zero-latency structure achieving a 1.2s mobile loading speed threshold."
    ]
  },
  {
    title: "Austin Boutique Brokerage System",
    subtitle: "High-Conversion Social Proof Engine",
    bulletPoints: [
      "Interactive grid ready for seamless, real-time Google Business API reviews.",
      "Native automated lead-capture routing direct to private CRM/SMS systems.",
      "Built to standalone brand authority specifications, independent of parent brokerages."
    ]
  },
  {
    title: "Southern California Portfolio",
    subtitle: "High-Value Valuation Funnel",
    bulletPoints: [
      "Features an interactive 'What is My Property Worth?' seller intake widget.",
      "Premium dark-mode interface designed to capture high-net-worth clientele.",
      "Direct-to-phone instant notifications to capture leads under the critical 5-minute mark."
    ]
  }
];

const features = [
  {
    icon: <IconBranding />,
    title: "Personal Branding",
    description: "A website that reflects your unique identity, not your brokerage's. Your name, your story, your brand front and center.",
  },
  {
    icon: <IconMobile />,
    title: "Mobile Responsive Design",
    description: "Over 60% of homebuyers search on their phones. Your site will look stunning on every screen size.",
  },
  {
    icon: <IconSearch />,
    title: "Google Optimized",
    description: "Built with SEO best practices so local homebuyers and sellers can find you when they search online.",
  },
  {
    icon: <IconMail />,
    title: "Contact Form & Lead Capture",
    description: "Capture visitor information effortlessly with integrated contact forms and lead generation tools.",
  },
  {
    icon: <IconBolt />,
    title: "Fast Turnaround",
    description: "Your professional website delivered in as little as 10 business days. No months of waiting around.",
  },
];

const pricingIncludes = [
  "Custom designed 5-page website framework",
  "Premium personal branding & logo layout",
  "Flawless mobile responsiveness on all devices",
  "Strategic local SEO metadata configuration",
  "Instant lead routing (contact forms sent directly to your phone/email)",
  "Seamless social media and local profile linking",
  "Google Analytics & search console integration",
  "Secure SSL certificate & custom domain mapping",
  "2 comprehensive rounds of design revisions",
  "Standard 10-day delivery with live launch assistance",
];

// ─── Components ──────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-md border-b border-navy-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gold-400 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-navy-900" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">
              Realty<span className="text-gold-400">Launch</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-navy-200 hover:text-white transition-colors">What's Included</a>
            <a href="#case-studies" className="text-sm text-navy-200 hover:text-white transition-colors">Case Studies</a>
            <a href="#pricing" className="text-sm text-navy-200 hover:text-white transition-colors">Pricing</a>
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gold-400 text-navy-900 text-sm font-semibold hover:bg-gold-300 transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2" aria-label="Toggle menu">
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-6 space-y-4">
            <a href="#features" onClick={() => setOpen(false)} className="block text-navy-200 hover:text-white transition-colors">What's Included</a>
            <a href="#case-studies" onClick={() => setOpen(false)} className="block text-navy-200 hover:text-white transition-colors">Case Studies</a>
            <a href="#pricing" onClick={() => setOpen(false)} className="block text-navy-200 hover:text-white transition-colors">Pricing</a>
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gold-400 text-navy-900 text-sm font-semibold hover:bg-gold-300 transition-colors">
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-6rem)] flex items-center overflow-hidden bg-navy-900 pt-20 sm:pt-24">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/5922402/pexels-photo-5922402.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920"
          alt=""
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/95 to-navy-900/80" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 sm:pt-16 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h1
              data-aos="fade-up"
              data-aos-duration="800"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              We Build High-Authority Digital Platforms For{" "}
              <span className="text-gold-400">Elite Real Estate Agents</span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="150"
              className="text-lg sm:text-xl text-navy-200 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Stop sending high-value traffic to your brokerage’s generic profile page. We design and engineer bespoke, independent web assets that position you as the undisputed local market authority.
            </p>

            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gold-400 text-navy-900 font-bold text-lg hover:bg-gold-300 transition-all hover:shadow-lg hover:shadow-gold-400/25 hover:-translate-y-0.5"
              >
                Get Your Website
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-navy-600 text-white font-semibold text-lg hover:border-navy-400 transition-all"
              >
                See What's Included
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="hidden lg:block relative">
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-navy-700/50"
            >
              <img
                src="https://images.pexels.com/photos/27392807/pexels-photo-27392807.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Modern website on laptop"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="900"
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-navy-900">New Lead!</div>
                <div className="text-xs text-gray-500">From your website — just now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 sm:py-28 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            data-aos="fade-up"
            data-aos-duration="600"
            className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3"
          >
            Case Studies
          </p>
          <h2
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="100"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Engineered Conversion Frameworks
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="200"
            className="text-navy-300 text-lg max-w-2xl mx-auto"
          >
            Explore our active design and code architectures engineered specifically to dominate highly competitive US real estate markets.
          </p>
        </div>

        {/* Case Studies grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((cs, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={i * 150}
              className="bg-navy-800 rounded-2xl p-8 border border-navy-700 hover:border-gold-400/50 hover:shadow-xl hover:shadow-gold-400/10 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-400/10 border border-gold-400/30 mb-6">
                <span className="text-gold-400 text-sm font-semibold">ACTIVE FRAMEWORK</span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl font-bold text-white mb-2">{cs.title}</h3>
              <p className="text-navy-300 text-sm mb-6">{cs.subtitle}</p>

              {/* Bullet Points */}
              <ul className="space-y-4">
                {cs.bulletPoints.map((point, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 text-gold-400">
                      <IconCheck />
                    </span>
                    <span className="text-navy-200 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Buttons */}
              {i === 0 && (
                <a
                  href="https://miami-updatee.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 text-navy-950 font-bold text-sm rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 active:scale-[0.98] mt-8 cursor-pointer z-10"
                >
                  <span>Launch Interactive Demo</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              )}
              
              {i === 1 && (
                <a
                  href="https://austin-real-estate-website.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 text-navy-950 font-bold text-sm rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 active:scale-[0.98] mt-8 cursor-pointer z-10"
                >
                  <span>Launch Interactive Demo</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            data-aos="fade-up"
            data-aos-duration="600"
            className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3"
          >
            What's Included
          </p>
          <h2
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="100"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4"
          >
            Everything You Need to Win Online
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="200"
            className="text-navy-500 text-lg max-w-2xl mx-auto"
          >
            Every Realty Launch website is crafted with the tools and features that help real estate agents convert visitors into clients.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={i * 100}
              className={`group rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                i === 0
                  ? "bg-navy-900 border-navy-800 text-white shadow-xl shadow-navy-900/20 sm:col-span-2 lg:col-span-1"
                  : "bg-white border-navy-100 text-navy-900 hover:shadow-lg hover:border-navy-200"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  i === 0 ? "bg-gold-400 text-navy-900" : "bg-navy-50 text-gold-600 group-hover:bg-gold-50"
                } transition-colors`}
              >
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className={`leading-relaxed ${i === 0 ? "text-navy-300" : "text-navy-500"}`}>
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-navy-900 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            data-aos="fade-up"
            data-aos-duration="600"
            className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3"
          >
            Pricing
          </p>
          <h2
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="100"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Simple, Transparent Pricing
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="200"
            className="text-navy-300 text-lg max-w-2xl mx-auto"
          >
            No monthly fees. No hidden charges. One price for your complete professional website.
          </p>
        </div>

        {/* Pricing card */}
        <div className="max-w-lg mx-auto">
          <div
            data-aos="zoom-in-up"
            data-aos-duration="800"
            data-aos-delay="200"
            className="bg-white rounded-3xl p-10 sm:p-12 shadow-2xl shadow-black/20"
          >
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-navy-900 mb-2">Professional Agent Website</h3>
              <p className="text-navy-500 text-sm mb-6">Everything you need to launch your online presence</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl sm:text-6xl font-extrabold text-navy-900">$1,500</span>
              </div>
              <p className="text-navy-400 mt-2 text-sm font-medium">One-time payment · No recurring fees</p>
            </div>

            <div className="border-t border-navy-100 pt-8 mb-8">
              <ul className="space-y-4">
                {pricingIncludes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0">
                      <IconCheck />
                    </span>
                    <span className="text-navy-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              className="block w-full text-center px-8 py-4 rounded-xl bg-navy-900 text-white font-bold text-lg hover:bg-navy-800 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Get Your Website Today
            </a>

            <p className="text-center text-sm text-navy-400 mt-4">
              🔒 100% satisfaction guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function GuaranteeSection() {
  return (
    <section className="py-20 sm:py-28 bg-navy-950 relative overflow-hidden border-y border-gold-400/20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-400/5 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Metrics */}
          <div
            data-aos="fade-right"
            data-aos-duration="700"
          >
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">
              The Mobile Speed Crisis
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">
              Is Your Brokerage Website Leaking High-Value Leads?
            </h2>
            <p className="text-navy-300 text-lg leading-relaxed">
              Over 70% of modern home buyers search for properties on their mobile devices. Standard corporate templates take over 5 seconds to load, resulting in a staggering 50% drop-off in ad-traffic conversions. Our custom-engineered independent assets are built to load in under 2 seconds, preserving every dollar of your marketing budget.
            </p>
          </div>

          {/* Right: Guarantee */}
          <div
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-delay="150"
            className="bg-navy-900 rounded-3xl p-8 sm:p-10 border border-gold-400/30"
          >
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">
              Zero-Risk Guarantee
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-6">
              Our 100% Zero-Risk Prototype Guarantee
            </h3>
            <p className="text-navy-200 text-lg leading-relaxed">
              We don't expect you to buy blindly. Our team will engineer a custom, live, mobile-responsive homepage mockup of your brand—complete with your local market branding and logo—before you pay us a single dollar. If the strategic wireframe doesn't match your vision perfectly, you owe us absolutely nothing. The risk is entirely on us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left content */}
          <div>
            <p
              data-aos="fade-right"
              data-aos-duration="600"
              className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3"
            >
              Get Started
            </p>
            <h2
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-delay="100"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6"
            >
              Ready to Launch Your Website?
            </h2>
            <p
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-delay="200"
              className="text-navy-500 text-lg leading-relaxed mb-10"
            >
              Fill out the form and a member of our team will reach out within 24 hours to discuss your project and get you started.
            </p>

            <div className="space-y-6">
              <div
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-delay="300"
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-navy-900 flex items-center justify-center border border-navy-700">
                  <IconInstagram />
                </div>
                <div>
                  <div className="font-semibold text-navy-900">Follow Our Work</div>
                  <a 
                    href="https://instagram.com/realty_launch" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-navy-500 hover:text-gold-600 text-sm transition-colors block mt-0.5"
                  >
                    @realty_launch
                  </a>
                </div>
              </div>

              <div
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-delay="400"
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-navy-50 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-navy-900">Email Us</div>
                  <a href="mailto:realtylaunchhq@gmail.com" className="text-navy-500 hover:text-gold-600 transition-colors">
                    realtylaunchhq@gmail.com
                  </a>
                </div>
              </div>

              <div
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-delay="500"
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-navy-50 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold-600" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-navy-900">Response Time</div>
                  <div className="text-navy-500">Within 24 hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
            className="bg-navy-50 rounded-2xl p-8 sm:p-10 border border-navy-100"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-2">Message Sent!</h3>
                <p className="text-navy-500">Thank you for reaching out. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-navy-800 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3.5 rounded-xl border border-navy-200 bg-white text-navy-900 placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy-800 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-navy-200 bg-white text-navy-900 placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-navy-800 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3.5 rounded-xl border border-navy-200 bg-white text-navy-900 placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-navy-800 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your business and what you're looking for..."
                    className="w-full px-4 py-3.5 rounded-xl border border-navy-200 bg-white text-navy-900 placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-xl bg-gold-400 text-navy-900 font-bold text-lg hover:bg-gold-300 transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                >
                  Send Message
                </button>

                <p className="text-center text-sm text-navy-400">
                  No spam, ever. We respect your privacy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-950 py-12 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gold-400 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-navy-900" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
            </div>
            <span className="text-lg font-bold text-white">
              Realty<span className="text-gold-400">Launch</span>
            </span>
          </div>

          <div className="flex items-center gap-8 text-sm text-navy-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-6">
            <p className="text-sm text-navy-500">
              © {new Date().getFullYear()} Realty Launch. All rights reserved.
            </p>
            <div className="flex gap-4 text-navy-500">
              <a href="https://instagram.com/realty_launch" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors" aria-label="Instagram">
                <IconInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      easing: "ease-out-cubic",
      offset: 80,
    });
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-white overflow-y-auto overflow-x-hidden">
      <Navbar />
      <Hero />
      <CaseStudies />
      <Features />
      <Pricing />
      <GuaranteeSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
