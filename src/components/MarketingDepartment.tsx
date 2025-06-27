import React from "react";
import { Icon } from "@iconify/react"; // Optional: replace with real SVG icons

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

const categories = [
  {
    title: "Crypto Marketing",
    projects: 127,
    description:
      "Effectively promote your cryptocurrency, ICO, or blockchain offering within a complex and fast–evolving digital landscape through targeted cryptocurrency promotion.",
    icon: "ph:currency-eth-bold",
  },
  {
    title: "B2B Marketing",
    projects: 36,
                  description:
                "Capture the attention of key decision-makers and increase your brand&apos;s visibility in the business–to–business space with our specialist expertise.",
    icon: "ph:briefcase-bold",
  },
  {
    title: "Fintech Marketing",
    projects: 29,
    description:
      "Gain a competitive edge in the financial tech sector using our strategic marketing strategies. Drive awareness, foster trust, and trigger long-term growth.",
    icon: "ph:bank-bold",
  },
  {
    title: "SaaS Marketing",
    projects: 22,
    description:
      "Grow your SaaS business with a focused strategy that boosts engagement and increases customer acquisition.",
    icon: "ph:cloud-bold",
  },
  {
    title: "Gaming Marketing",
    projects: 32,
    description:
      "Engage the gaming community and promote your product with an effective campaign designed to drive user engagement.",
    icon: "ph:game-controller-bold",
  },
  {
    title: "Esports Marketing",
    projects: 36,
    description:
      "Increase your reach in the competitive Esports world with a carefully planned strategy that raises brand awareness.",
    icon: "ph:trophy-bold",
  },
  {
    title: "Mobile Marketing",
    projects: 28,
    description:
      "Reach your target audience and promote your mobile app with a marketing roadmap that drives downloads.",
    icon: "ph:device-mobile-bold",
  },
  {
    title: "iGaming Marketing",
    projects: 22,
    description:
      "Unlock the potential of your iGaming brand with sophisticated marketing techniques that engage users and drive results.",
    icon: "ph:cards-bold",
  },
  {
    title: "Software Marketing",
    projects: 32,
    description:
      "Discover how NinjaPromo can take your software company from obscurity to global reach.",
    icon: "ph:cpu-bold",
  },
  {
    title: "Small Business",
    projects: 28,
    description:
      "Start growing your small business with targeted digital campaigns that build relationships and drive conversions.",
    icon: "ph:storefront-bold",
  },
  {
    title: "Ecommerce",
    projects: 26,
    description:
      "Empower and enable your eCommerce venture to achieve bigger and better things with NinjaPromo — your partner in everything digital and marketing.",
    icon: "ph:shopping-cart-bold",
  },
  {
    title: "Startup Marketing",
    projects: 28,
    description:
      "Get your start-up off the ground with a comprehensive digital marketing strategy designed to bring success from day one.",
    icon: "ph:rocket-launch-bold",
  },
];

export default function MarketingDepartmentSection() {
  return (
    <>
      {/* Team Section */}
      <div className="bg-black text-white py-16 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          Get a full marketing department by <br />
          subscription in your industry
        </h2>
        <p className="text-sm md:text-base text-gray-300 mt-4">
          All marketing services in one package <br />
          with successful experience in your niche
        </p>

        <div className="flex justify-center mt-8 space-x-[-20px]">
          {teamImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Team member ${i + 1}`}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-black object-cover"
            />
          ))}
        </div>
      </div>

      {/* Marketing Categories Grid */}
      <div className="bg-black text-white py-16 px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {categories.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#111114] hover:bg-gradient-to-b hover:from-purple-50 hover:to-yellow-100 border border-[#2A2A2E] hover:border-gray-300 rounded-xl p-6 h-full flex flex-col transition-all duration-300 cursor-pointer group"
            >
              <div className="mb-6">
                <Icon icon={item.icon} className="text-3xl text-white group-hover:text-black mb-6 transition-colors duration-300" />
                <h3 className="text-xl font-semibold text-white group-hover:text-black mb-6 transition-colors duration-300">{item.title}</h3>
              </div>
              <div className="flex gap-3 mb-6">
                <span className="border border-[#555] group-hover:border-black px-3 py-1 rounded text-xs font-medium text-gray-300 group-hover:text-black uppercase transition-all duration-300">
                  Department
                </span>
                <span className="border border-[#555] group-hover:border-black px-3 py-1 rounded text-xs font-medium text-gray-300 group-hover:text-black uppercase transition-all duration-300">
                  {item.projects} Projects
                </span>
              </div>
              <p className="text-sm text-gray-400 group-hover:text-gray-800 leading-relaxed transition-colors duration-300">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-gradient-to-r from-[#FF6A5F] to-[#A63FFD] hover:bg-gradient-to-l hover:from-[#FF6A5F] hover:to-[#A63FFD] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300">
            More cases
          </button>
        </div>
      </div>

      {/* Service Department Note */}
      <div className="bg-black text-white py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Or one service department which you <br /> don&apos;t have resources for
        </h2>
        <p className="text-sm md:text-base text-gray-300 mt-4">
          We will take on all the tasks that you&apos;ve <br />
          been putting off for a long time
        </p>
      </div>

      {/* Department Heads */}
      <div className="bg-black text-white py-16 px-6 md:px-12">
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
                "Extend the reach of your brand through laser-focused social ads that amplify awareness and propel sales.",
              image: "/team/paid-social.jpg",
            },
            {
              name: "Influencer Marketing",
              title: "Head of",
              description:
                "Turbo-boost engagement and sales with strategic influencer advertising campaigns that create a big buzz around your brand across the web.",
              image: "/team/influencer.jpg",
            },
            {
              name: "Email Marketing",
              title: "Head of",
              description:
                "Entice customers and prospects to take specific actions using personalised messaging that promotes your brand.",
              image: "/team/email.jpg",
            },
            {
              name: "PR",
              title: "Head of",
              description:
                "Leverage stellar media relations expertise to boost brand exposure and positively influence public opinion.",
              image: "/team/pr.jpg",
            },
            {
              name: "Video Production",
              title: "Head of",
              description:
                "Cater to the growing hunger for multimedia digital content through attention-grabbing video production.",
              image: "/team/video-production.jpg",
            },
            {
              name: "Video Marketing",
              title: "Head of",
              description:
                "Generate leads and drive conversions with an effective and creative video strategy that tells your brand story in a compelling way.",
              image: "/team/video-marketing.jpg",
            },
            {
              name: "Branding",
              title: "Head of",
              description:
                "Put the spotlight on your brand and stand out from the crowd with an inspired branding campaign that generates positive PR.",
              image: "/team/branding.jpg",
            },
            {
              name: "UI/UX Design Department",
              title: "Head of",
              description:
                "Engage your audience on their favourite platforms to foster meaningful relationships that build trust.",
              image: "/team/uiux.jpg",
            },
            {
              name: "Community Management",
              title: "Head of",
              description:
                "Grow your web presence and build strong, lasting relationships with your target audience through strategic community management.",
              image: "/team/community.jpg",
            },
            {
              name: "Website Development",
              title: "Head of",
              description:
                "Optimise the customer experience with a feature-rich and intuitive website design that drives conversions.",
              image: "/team/website-development.jpg",
            },
            {
              name: "Web Design",
              title: "Head of",
              description:
                "Create an unbeatable foundation for your digital marketing strategy with a website that is both visually stunning and highly performant.",
              image: "/team/web-design.jpg",
            },
            {
              name: "Mobile App Development",
              title: "Head of",
              description:
                "Harness the power of technology by creating intuitive and user-friendly digital applications that add value to your business.",
              image: "/team/mobile-app-development.jpg",
            },
            {
              name: "Mobile App Design",
              title: "Head of",
              description:
                "Design and develop user-centered iOS and Android apps that set your brand apart in a saturated marketplace.",
              image: "/team/mobile-app-design.jpg",
            },
            {
              name: "Blockchain Development",
              title: "Head of",
              description:
                "Harness the incredible potential of blockchain technology to acquire new revenue streams and propel your business into the future.",
              image: "/team/blockchain-development.jpg",
            },
            {
              name: "Lead Generation",
              title: "Head of",
              description:
                "Invigorate your marketing strategy by partnering with NinjaPromo - a lead generation marketing agency that can elevate your brand into the stratosphere.",
              image: "/team/lead-generation.jpg",
            },
          ].map((person, idx) => (
            <div
              key={idx}
              className="rounded-xl p-6 bg-black hover:bg-gradient-to-br hover:from-[#E6E0FF] hover:to-[#F8D3D3] transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-300 group-hover:text-gray-600 transition-colors duration-300">
                    {person.title}
                  </p>
                  <h3
                    className="text-xl font-bold mb-1 text-white group-hover:text-black transition-colors duration-300"
                  >
                    {person.name}
                  </h3>
                  <span
                    className="inline-block text-[8px] px-1.5 py-0.5 border rounded font-medium border-white text-white group-hover:border-gray-400 group-hover:text-gray-700 transition-all duration-300"
                  >
                    DEPARTMENT
                  </span>
                </div>
              </div>
              <p
                className="text-sm text-gray-400 group-hover:text-black transition-colors duration-300"
              >
                {person.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
} 