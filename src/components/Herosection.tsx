import React from 'react';

export default function HeroSection() {
  const handleBookDemoClick = () => {
    const scheduleSection = document.getElementById('schedule-meeting');
    if (scheduleSection) {
      scheduleSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0a0d16] to-[#10131e] overflow-hidden text-white font-sans">
      {/* SVG mesh overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          style={{ opacity: 0.7 }}
        >
          <defs>
            <linearGradient id="meshLine" x1="0" y1="0" x2="1440" y2="600" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00eaff" />
              <stop offset="1" stopColor="#00bfff" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {/* Example mesh lines */}
          <polyline points="0,250 200,220 400,270 600,210 800,260 1000,230 1200,250 1440,220"
            stroke="url(#meshLine)" strokeWidth="1.7" fill="none" filter="url(#glow)" />
          <polyline points="0,400 200,350 400,420 600,300 800,380 1000,320 1200,400 1440,350"
            stroke="url(#meshLine)" strokeWidth="2" fill="none" filter="url(#glow)" />
          <polyline points="0,500 200,450 400,520 600,400 800,480 1000,420 1200,500 1440,450"
            stroke="url(#meshLine)" strokeWidth="1.5" fill="none" filter="url(#glow)" />
          {/* Add more lines for density */}
          {/* Example glowing nodes */}
          <circle cx="200" cy="350" r="6" fill="#00eaff" filter="url(#glow)" />
          <circle cx="600" cy="300" r="7" fill="#00eaff" filter="url(#glow)" />
          <circle cx="1000" cy="320" r="5" fill="#00eaff" filter="url(#glow)" />
          <circle cx="800" cy="380" r="8" fill="#00eaff" filter="url(#glow)" />
        </svg>
      </div>
      {/* Optional: floating dots for shimmer */}
      <div className="absolute left-1/3 top-1/2 w-3 h-3 bg-cyan-400 rounded-full blur-md opacity-70 animate-pulse"></div>
      <div className="absolute right-1/4 top-1/3 w-2 h-2 bg-cyan-300 rounded-full blur-sm opacity-60 animate-pulse"></div>
      {/* Hero content overlay */}
      <div className="relative z-10 flex flex-col items-start px-20 pt-32 pb-16">
        <h1 className="text-[64px] font-semibold leading-none tracking-tight font-dm-sans mt-9 ml-7 mb-0">
          <span
            className="inline-block text-transparent bg-clip-text font-semibold font-dm-sans"
            style={{
              backgroundImage: 'linear-gradient(90deg, #ff9966 0%, #ff5e62 40%, #ff8ba7 70%, #a685ff 100%)',
            }}
          >
            SUBSCRIPTION-BASED
          </span><br />
          <span className="text-white font-semibold font-dm-sans">MARKETING FOR UNSTOPPABLE GROWTH</span>
        </h1>
        {/* Divider/Arrow and Subheading/Button side by side, arrow just left of button */}
        <div className="flex w-full items-start mb-2">
          {/* Divider and Arrow */}
          <div className="flex-1 flex items-center mt-25">
            <div className="h-px bg-white/60 w-full"></div>
            <svg className="mx-4" width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polyline points="0,8 16,16 0,24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          {/* Subheading and Button Container */}
          <div className="flex flex-col items-start" style={{width: 600}}>
            {/* Subheading */}
            <div className="mb-4">
              <p className="text-xl text-gray-300 text-left font-dm-sans">
                Design, development, content, ads and all you need in one package from a leading digital marketing company worldwide
              </p>
            </div>
            {/* Button */}
            <div className="w-full mt-4">
              <button 
                onClick={handleBookDemoClick}
                className="w-full py-4 rounded-lg text-lg font-bold text-white shadow-lg transition text-center gradient-reverse-on-hover font-dm-sans"
              >
                Book a demo
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Awards & Trust Section */}
      <div className="relative z-10 flex justify-center gap-10 px-10 flex-wrap">
        {[
          { name: 'Clutch', text: 'Top Digital Marketing Agencies For Startups' },
          { name: 'sortlist', text: 'Best Advertising Agency In The US' },
          { name: 'FINTECH DRIFT', text: 'Best Marketing Agencies For Fintech Companies' },
          { name: 'Influencer MarketingHub', text: '#1 Crypto Marketing Agency 2021–2023' },
          { name: 'HOSTINGER', text: 'Best Digital Agency Worldwide' },
        ].map((item, idx) => (
          <div
            key={idx}
            className="glass-card flex flex-col items-center justify-center text-center p-8 w-[280px] h-[200px] min-w-[260px] max-w-[300px] min-h-[200px] max-h-[240px] -mx-2 backdrop-blur-xl"
          >
            <div className="font-bold text-4xl mb-3 text-white/90" style={{fontFamily: 'inherit'}}>{item.name}</div>
            <div className="text-base text-white/70 font-normal leading-snug" style={{fontFamily: 'inherit'}}>{item.text}</div>
          </div>
        ))}
      </div>
      {/* Download Guide Section */}
      <div className="relative z-10 mx-24 mt-24 mb-10">
        <div className="glass-card p-7 backdrop-blur-xl">
          {/* Top Section - Title and Profile Image */}
          <div className="flex items-start justify-between mb-8">
            <div className="flex-1">
              <h2 className="text-4xl font-semibold text-white font-dm-sans leading-tight ml-6 mt-4 mb-6">
                Download A Guide to Making<br />
                2025 Your Best Marketing Year
              </h2>
            </div>
            {/* Profile Image */}
            <div className="ml-8 flex items-center justify-center w-28 h-full">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center overflow-hidden mt-4">
                <div className="w-24 h-24 rounded-full bg-gray-400 flex items-center justify-center text-gray-600 font-bold text-sm">
                  Profile
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Section - Email and Button */}
          <div className="flex items-center gap-6 ml-6 mb-4">
            <div className="min-w-[300px]">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b-2 border-white/30 text-white placeholder-white/70 py-2 px-0 focus:outline-none focus:border-white font-dm-sans text-base"
              />
            </div>
            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold text-base hover:bg-black hover:text-white transition font-dm-sans whitespace-nowrap">
              DOWNLOAD FOR FREE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
