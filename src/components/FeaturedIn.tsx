import React from 'react';

export default function FeaturedIn() {
  return (
    <section className="section-bg-gradient text-white py-24 px-6 md:px-16 lg:px-24 font-sans relative z-10">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">We Are Featured In</h2>
            <h1 className="text-[140px] font-bold leading-[1] text-white/20 tracking-tight">Forbes</h1>
          </div>
          <div className="max-w-[550px]">
            <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">
              Barbarika&apos;s founders shared insights with Forbes on the strategic advantages of partnering over contracting with service providers.
            </p>
            <button className="glass-card border border-white/20 text-white rounded-full px-8 py-4 text-base font-semibold hover:bg-white/10 transition-all duration-300">
              Read the article
            </button>
          </div>
        </div>

        {/* Subheader */}
        <h3 className="text-3xl md:text-4xl font-bold mt-24 mb-12 text-white">And other media</h3>

        {/* Media Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-8 min-h-[140px]">
            <p className="text-white font-bold text-lg mb-3">Analytics Insight</p>
            <p className="text-white/80 text-base leading-relaxed">What Artificial Intelligence Can Bring to Digital Marketing in 2024</p>
          </div>

          <div className="glass-card p-8 min-h-[140px]">
            <p className="text-white font-bold text-lg mb-3">CoinPedia.</p>
            <p className="text-white/80 text-base leading-relaxed">State of User Acquisition 2024 in Web3</p>
          </div>

          <div className="glass-card p-8 min-h-[140px]">
            <p className="text-white font-bold text-lg mb-3">Cryptopolitan</p>
            <p className="text-white/80 text-base leading-relaxed">What&apos;s Holding Up The Next Bull Run in 2024, and What Trends Will Fuel It</p>
          </div>

          <div className="glass-card p-8 min-h-[140px]">
            <p className="text-white font-bold text-lg mb-3">Bitcoin.com</p>
            <p className="text-white/80 text-base leading-relaxed">Game-Changing Subscription Model for Marketing Services Unveiled by Barbarika.io</p>
          </div>
        </div>

        {/* Arrows */}
        <div className="flex justify-end items-center gap-4 mt-12">
          <button className="glass-card w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left" aria-hidden="true">
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
          </button>
          <button className="glass-card w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
} 