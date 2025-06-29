'use client';
import React, { useState } from 'react';

const faqItems = [
  {
    question: "What are your marketing specialities?",
    answer: "We specialize in a wide range of marketing services including digital strategy, social media, paid media, SEO, influencer marketing, content creation, and more. Our team tailors solutions to your business needs for maximum impact.",
  },
  {
    question: "How can my business benefit from partnering with your agency?",
    answer: "Partnering with us gives you access to a team of experienced marketers, proven strategies, and the latest tools. We help you grow your brand, reach new audiences, and achieve measurable results efficiently and cost-effectively.",
  },
  {
    question: "How do I determine my marketing budget?",
    answer: "We work with you to assess your business goals, industry benchmarks, and available resources to recommend a marketing budget that aligns with your objectives and delivers the best ROI.",
  },
];

const DownArrowIcon = ({ className }: { className?: string }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`stroke-current text-white transition-transform duration-300 ${className}`}
  >
    <path
      d="M7 10L12 15L17 10"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-bg-gradient py-16 md:py-24 px-6 relative z-10">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-white">FAQ&apos;s</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="glass-card rounded-2xl">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full p-8 text-left"
            >
              <span className="text-xl md:text-2xl text-white font-semibold">{item.question}</span>
              <DownArrowIcon className={activeIndex === index ? 'rotate-180' : ''} />
            </button>
            {activeIndex === index && (
              <div className="p-6 pt-0">
                <p className="text-white/70 text-sm md:text-base">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ; 