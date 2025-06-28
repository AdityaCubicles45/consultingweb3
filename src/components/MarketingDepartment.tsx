import React from "react";

const teamImages = [
  "/team/1.jpg",
  "/team/2.jpg",
  "/team/3.jpg",
  "/team/4.jpg",
  "/team/5.jpg",
  "/team/6.jpg",
  "/team/7.jpg",
  "/team/8.jpg",
];

const departments = [
  {
    title: "Crypto Marketing",
    projects: "127",
    description: "Effectively promote your cryptocurrency, ICO, or blockchain offering within a complex and fast–evolving digital landscape through targeted cryptocurrency promotion.",
  },
  {
    title: "B2B Marketing",
    projects: "36",
    description: "Capture the attention of key decision-makers and increase your brand's visibility in the business–to–business space with our specialist expertise.",
  },
  {
    title: "Fintech Marketing",
    projects: "29",
    description: "Gain a competitive edge in the financial tech sector using our strategic marketing strategies. Drive awareness, foster trust, and trigger long-term growth.",
  },
  {
    title: "SaaS Marketing",
    projects: "22",
    description: "Grow your SaaS business with a focused strategy that boosts engagement and increases customer acquisition.",
  },
  {
    title: "Gaming Marketing",
    projects: "32",
    description: "Engage the gaming community and promote your product with an effective campaign designed to drive user engagement.",
  },
  {
    title: "Esports Marketing",
    projects: "36",
    description: "Increase your reach in the competitive Esports world with a carefully planned strategy that raises brand awareness.",
  },
  {
    title: "Mobile Marketing",
    projects: "28",
    description: "Reach your target audience and promote your mobile app with a marketing roadmap that drives downloads.",
  },
  {
    title: "iGaming Marketing",
    projects: "22",
    description: "Unlock the potential of your iGaming brand with sophisticated marketing techniques that engage users and drive results.",
  },
  {
    title: "Software Marketing",
    projects: "32",
    description: "Discover how NinjaPromo can take your software company from obscurity to global reach.",
  },
  {
    title: "Small Business",
    projects: "28",
    description: "Start growing your small business with targeted digital campaigns that build relationships and drive conversions.",
  },
  {
    title: "Ecommerce",
    projects: "26",
    description: "Empower and enable your eCommerce venture to achieve bigger and better things with NinjaPromo — your partner in everything digital and marketing.",
  },
  {
    title: "Startup Marketing",
    projects: "28",
    description: "Get your start-up off the ground with a comprehensive digital marketing strategy designed to bring success from day one.",
  },
];

export default function MarketingDepartmentSection() {
  return (
    <>
      {/* Team Section */}
      <div className="section-bg-gradient text-white py-16 text-center px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold leading-snug text-white">
          Get a full marketing department by <br />
          subscription in your industry
        </h2>
        <p className="text-lg md:text-xl text-white/80 mt-6">
          All marketing services in one package <br />
          with successful experience in your niche
        </p>

        <div className="flex justify-center mt-10 space-x-[-20px]">
          {teamImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Team member ${i + 1}`}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-[#0B0C2A] object-cover"
            />
          ))}
        </div>
      </div>

      {/* Marketing Categories Grid */}
      <div className="section-bg-gradient text-white py-16 px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="glass-card hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl p-8 h-full flex flex-col transition-all duration-300 cursor-pointer group"
            >
              <div className="mb-6">
                <span></span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 transition-colors duration-300">{dept.title}</h3>
              </div>
              <div className="flex gap-3 mb-6">
                <span className="border border-white/20 px-3 py-1 rounded text-sm font-semibold text-white/80 uppercase transition-all duration-300">Department</span>
                <span className="border border-white/20 px-3 py-1 rounded text-sm font-semibold text-white/80 uppercase transition-all duration-300">{dept.projects} Projects</span>
              </div>
              <p className="text-base md:text-lg text-white/80 leading-relaxed transition-colors duration-300">{dept.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="gradient-border px-8 py-3 text-white font-semibold text-lg transition-all duration-300 hover:scale-105">
            <span className="relative z-10">More cases</span>
          </button>
        </div>
      </div>

      {/* Service Department Note */}
      <div className="section-bg-gradient text-white py-20 px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
          Or one service department which you <br /> don&apos;t have resources for
        </h2>
        <p className="text-lg md:text-xl text-white/80 mt-6">
          We will take on all the tasks that you&apos;ve <br />
          been putting off for a long time
        </p>
      </div>

      {/* Department Heads */}
      <div className="section-bg-gradient text-white py-16 px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Social Media",
              title: "Head of",
              description:
                "Engage your audience on their favourite platforms to foster meaningful relationships that build trust.",
              image: "/team/social-media.jpg",
              highlight: true,
            },
            {
              name: "SEO",
              title: "Head of",
              description:
                "Employ strategic SEO to increase your visibility in search results and generate a higher volume of targeted traffic.",
              image: "/team/seo.jpg",
            },
            {
              name: "Paid Media",
              title: "Head of",
              description:
                "Maximise ROI on your ad spend through paid media specialists with a proven formula for multiplying revenue.",
              image: "/team/paid-media.jpg",
            },
            {
              name: "Paid Social",
              title: "Head of",
              description:
                "Drive engagement and conversions through strategic paid social campaigns that reach your target audience.",
              image: "/team/paid-social.jpg",
            },
            {
              name: "Influencer",
              title: "Head of",
              description:
                "Leverage the power of influencer partnerships to amplify your brand message and reach new audiences.",
              image: "/team/influencer.jpg",
            },
            {
              name: "PR",
              title: "Head of",
              description:
                "Build your brand reputation and media presence through strategic public relations campaigns.",
              image: "/team/pr.jpg",
            },
            {
              name: "Video Marketing",
              title: "Head of",
              description:
                "Create compelling video content that engages your audience and drives meaningful results.",
              image: "/team/video-marketing.jpg",
            },
            {
              name: "Video Production",
              title: "Head of",
              description:
                "Produce high-quality video content that tells your brand story and captivates your audience.",
              image: "/team/video-production.jpg",
            },
            {
              name: "UI/UX",
              title: "Head of",
              description:
                "Design intuitive and engaging user experiences that drive conversions and user satisfaction.",
              image: "/team/uiux.jpg",
            },
            {
              name: "Community",
              title: "Head of",
              description:
                "Build and nurture engaged communities around your brand to foster loyalty and advocacy.",
              image: "/team/community.jpg",
            },
            {
              name: "Branding",
              title: "Head of",
              description:
                "Develop a strong brand identity that resonates with your audience and sets you apart from competitors.",
              image: "/team/branding.jpg",
            },
            {
              name: "Website Development",
              title: "Head of",
              description:
                "Create powerful, conversion-focused websites that drive results and provide exceptional user experiences.",
              image: "/team/website-development.jpg",
            },
            {
              name: "Web Design",
              title: "Head of",
              description:
                "Design beautiful, functional websites that convert visitors into customers and drive business growth.",
              image: "/team/web-design.jpg",
            },
            {
              name: "Lead Generation",
              title: "Head of",
              description:
                "Generate high-quality leads through targeted campaigns and strategic marketing initiatives.",
              image: "/team/lead-generation.jpg",
            },
            {
              name: "Blockchain Development",
              title: "Head of",
              description:
                "Develop innovative blockchain solutions that drive your business forward in the digital economy.",
              image: "/team/blockchain-development.jpg",
            },
            {
              name: "Mobile App Development",
              title: "Head of",
              description:
                "Create powerful mobile applications that engage users and drive business results.",
              image: "/team/mobile-app-development.jpg",
            },
            {
              name: "Mobile App Design",
              title: "Head of",
              description:
                "Design intuitive and engaging mobile app experiences that delight users and drive engagement.",
              image: "/team/mobile-app-design.jpg",
            },
            {
              name: "Lead Generation",
              title: "Head of",
              description:
                "Invigorate your marketing strategy by partnering with NinjaPromo – a lead generation marketing agency that can elevate your brand into the stratosphere.",
              image: "/team/lead-generation.jpg",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`glass-card p-8 rounded-xl transition-all duration-300 cursor-pointer group ${
                item.highlight ? "border-2 border-white/30" : ""
              }`}
            >
              <div className="flex items-center mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover mr-6"
                />
                <div>
                  <p className="text-base text-white/70 font-semibold">{item.title}</p>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{item.name}</h3>
                </div>
              </div>
              <p className="text-base md:text-lg text-white/80 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
} 