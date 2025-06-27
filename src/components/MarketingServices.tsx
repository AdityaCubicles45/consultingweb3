import React from 'react';

const MarketingServices = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#0D0D0D] via-[#141423] to-[#1B1441] py-32 px-8 md:px-20 lg:px-32 font-sans text-white min-h-screen">
      <div className="max-w-[1600px] mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-12 leading-tight">
          Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-400 to-purple-500">new generation</span><br />
          of digital marketing services
        </h2>

        {/* Tabs (Text) */}
        <div className="flex justify-between items-center mt-12 mb-12 text-sm md:text-base font-medium text-white max-w-[640px] mx-auto border-b border-[#3f3f3f] pb-3">
          <span className="text-white/80">Freelance / In-house / Agencies</span>
          <span className="text-white/80">2024</span>
          <span className="text-white/80">Subscription</span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center mt-16">
          {/* Row 1 */}
          <div className="bg-[#1B1B1F] border border-[#3A3A3C] rounded-xl p-8 min-h-[180px] flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-semibold mb-4">1–3 months</h3>
            <p className="text-base md:text-lg text-white/70">you save on hiring an in-house marketer or an agency</p>
          </div>
          <div className="bg-[#1B1B1F] border border-[#3A3A3C] rounded-xl p-8 min-h-[180px] flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-semibold mb-4">$100k</h3>
            <p className="text-base md:text-lg text-white/70">average saving on annual agency fees</p>
          </div>
          <div className="bg-[#1B1B1F] border border-[#3A3A3C] rounded-xl p-8 min-h-[180px] flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-semibold mb-4">30+</h3>
            <p className="text-base md:text-lg text-white/70">marketing services in one package</p>
          </div>

          {/* Row 2 */}
          <div className="bg-[#1B1B1F] border border-[#3A3A3C] rounded-xl p-8 min-h-[180px] flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-semibold mb-4">100+</h3>
            <p className="text-base md:text-lg text-white/70">marketing specialists in your team</p>
          </div>
          <div className="bg-[#1B1B1F] border border-[#3A3A3C] rounded-xl p-8 min-h-[180px] flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-semibold mb-4">2 hours</h3>
            <p className="text-base md:text-lg text-white/70">per week you spend on management</p>
          </div>
          <div className="bg-[#1B1B1F] border border-[#3A3A3C] rounded-xl p-8 min-h-[180px] flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-semibold mb-4">1 day</h3>
            <p className="text-base md:text-lg text-white/70">from creating new task to starting work</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-20">
          <button className="bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-semibold py-4 px-12 rounded-xl shadow-lg hover:opacity-90 transition-all text-lg">
            More about the Subscription
          </button>
        </div>
      </div>
    </section>
  );
};

export default MarketingServices; 