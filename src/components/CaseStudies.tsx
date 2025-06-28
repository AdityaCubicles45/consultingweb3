import React from "react";

const cases = [
  {
    tag: "PAID SOCIAL ADS",
    title: "Attracted $20,000,000 Worth Of Clients For HTX.",
    company: "HTX",
    logo: "/logos/htx.svg",
  },
  {
    tag: "INVESTOR RELATIONS",
    title: "Garnered 600 Investors For Damex's IEO",
    company: "damex.io",
    logo: "/logos/damex.svg",
  },
  {
    tag: "COMMUNITY MANAGEMENT",
    title: "4x Affyn Community Engagement Growth",
    company: "Affyn",
    logo: "/logos/affyn.svg",
  },
  {
    tag: "COMMUNITY MANAGEMENT",
    title: "Increase Intellectsoft Online Engagement By Over 159%",
    company: "intellectsoft",
    logo: "/logos/intellectsoft.svg",
  },
  {
    tag: "PUBLIC RELATIONS",
    title: "Raised $250 Mln In Funding For Planet Quest",
    company: "PLANETQUEST",
    logo: "/logos/planetquest.svg",
  },
  {
    tag: "COMMUNITY MANAGEMENT",
    title: "5x Subscriber Growth For Paypolitan",
    company: "paypolitan",
    logo: "/logos/paypolitan.svg",
  },
];

export default function CaseStudies() {
  return (
    <div className="section-bg-gradient text-white px-6 py-12 md:px-20 relative z-10">
      <h2 className="text-center text-3xl md:text-4xl font-semibold">
        Follow the{" "}
        <span className="gradient-text font-bold">
          top worldwide brands
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
        {cases.map((item, i) => (
          <div
            key={i}
            className="glass-card p-8 flex flex-col min-h-[220px]"
          >
            <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded w-fit mb-6 uppercase tracking-wider">
              {item.tag}
            </span>
            
            <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-auto text-white">
              {item.title}
            </h3>
            
            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center text-lg group">
                <a href="#" className="gradient-text font-semibold relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#FF6A5F] after:via-[#FF5BBE] after:to-[#A63FFD] group-hover:after:opacity-0 after:transition-opacity after:duration-300">
                  Explore Case
                </a>
                <span className="gradient-text text-3xl ml-3 group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
              </div>
              <div className="flex justify-end">
                <img src={item.logo} alt={item.company} className="h-8" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="gradient-border px-8 py-3 text-white font-semibold transition-all duration-300 hover:scale-105">
          <span className="relative z-10">More cases</span>
        </button>
      </div>
    </div>
  );
} 