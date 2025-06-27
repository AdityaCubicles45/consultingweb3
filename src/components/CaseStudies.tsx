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
    <div className="bg-black text-white px-6 py-12 md:px-20">
      <h2 className="text-center text-3xl md:text-4xl font-semibold">
        Follow the{" "}
        <span className="bg-gradient-to-r from-[#FF6A5F] via-[#FF5BBE] to-[#A63FFD] bg-clip-text text-transparent font-bold">
          top worldwide brands
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
        {cases.map((item, i) => (
          <div
            key={i}
            className="bg-[#141416] rounded-xl p-6 border border-[#2E2E2E] flex flex-col min-h-[170px]"
          >
            <span className="text-[8px] font-semibold bg-blue-800 text-white px-3 py-1 rounded w-fit mb-4 uppercase tracking-wider">
              {item.tag}
            </span>
            
            <h3 className="text-lg md:text-xl font-semibold leading-snug mb-auto">
              {item.title}
            </h3>
            
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center text-sm group">
                <a href="#" className="bg-gradient-to-r from-[#FF6A5F] via-[#FF5BBE] to-[#A63FFD] bg-clip-text text-transparent font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gradient-to-r after:from-[#FF6A5F] after:via-[#FF5BBE] after:to-[#A63FFD] group-hover:after:opacity-0 after:transition-opacity after:duration-300">
                  Explore Case
                </a>
                <span className="bg-gradient-to-r from-[#FF6A5F] via-[#FF5BBE] to-[#A63FFD] bg-clip-text text-transparent text-xl ml-2 group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
              </div>
              <div className="flex justify-end">
                <img src={item.logo} alt={item.company} className="h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="bg-gradient-to-r from-[#FF6A5F] to-[#A63FFD] hover:bg-gradient-to-l hover:from-[#FF6A5F] hover:to-[#A63FFD] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300">
          More cases
        </button>
      </div>
    </div>
  );
} 