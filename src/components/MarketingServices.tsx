import React from 'react';

const MarketingServices = () => {
  return (
    <section className="section-bg-gradient py-32 px-8 md:px-20 lg:px-32 font-sans text-white min-h-screen">
      <div className="max-w-[1600px] mx-auto text-center relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug text-white">
          Get a full marketing department by <br/>
          subscription in your industry
        </h2>

        <p className="text-lg md:text-xl text-white/80 mt-6 mb-10">
          All marketing services in one package <br/>
          with successful experience in your niche
        </p>

        {/* Tabs (Text) */}
        <div className="flex justify-between items-center mt-12 mb-12 text-base md:text-lg font-semibold text-white max-w-[640px] mx-auto border-b border-white/20 pb-3">
          <span className="text-white/90">Freelance / In-house / Agencies</span>
          <span className="text-white/90">2024</span>
          <span className="text-white/90">Subscription</span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center mt-16">
          {/* Row 1 */}
          <div className="glass-card p-8 min-h-[180px] flex flex-col justify-center">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white">1–3 months</h3>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">you save on hiring an in-house marketer or an agency</p>
          </div>
          <div className="glass-card p-8 min-h-[180px] flex flex-col justify-center">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white">$100k</h3>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">average saving on annual agency fees</p>
          </div>
          <div className="glass-card p-8 min-h-[180px] flex flex-col justify-center">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white">30+</h3>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">marketing services in one package</p>
          </div>

          {/* Row 2 */}
          <div className="glass-card p-8 min-h-[180px] flex flex-col justify-center">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white">100+</h3>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">marketing specialists in your team</p>
          </div>
          <div className="glass-card p-8 min-h-[180px] flex flex-col justify-center">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white">2 hours</h3>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">per week you spend on management</p>
          </div>
          <div className="glass-card p-8 min-h-[180px] flex flex-col justify-center">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white">1 day</h3>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">from creating new task to starting work</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-20">
          <button className="gradient-border px-12 py-4 text-white font-semibold text-lg hover:scale-105 transition-transform duration-300">
            <span className="relative z-10">More about the Subscription</span>
          </button>
        </div>

        <div className="flex justify-center mt-10 space-x-[-20px]">
          <img src="/team/1.jpg" alt="Team member 1" className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-[#0B0C2A] object-cover"/>
          <img src="/team/2.jpg" alt="Team member 2" className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-[#0B0C2A] object-cover"/>
          <img src="/team/3.jpg" alt="Team member 3" className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-[#0B0C2A] object-cover"/>
          <img src="/team/4.jpg" alt="Team member 4" className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-[#0B0C2A] object-cover"/>
          <img src="/team/5.jpg" alt="Team member 5" className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-[#0B0C2A] object-cover"/>
          <img src="/team/6.jpg" alt="Team member 6" className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-[#0B0C2A] object-cover"/>
          <img src="/team/7.jpg" alt="Team member 7" className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-[#0B0C2A] object-cover"/>
          <img src="/team/8.jpg" alt="Team member 8" className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-[#0B0C2A] object-cover"/>
        </div>
      </div>
    </section>
  );
};

export default MarketingServices; 