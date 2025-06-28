'use client';
import React, { useState } from 'react';

const faqItems = [
  {
    question: 'How can I earn money by walking?',
    answer: 'You can earn money by walking through various apps and platforms that reward physical activity.'
  },
  {
    question: 'How can I sell my shoes?',
    answer: 'You can sell your shoes through online marketplaces, social media platforms, or specialized sneaker resale apps.'
  },
  {
    question: 'What can I do if my shoes get worn out?',
    answer: 'If your shoes get worn out, you can repair them, recycle them, or dispose of them properly through shoe recycling programs.'
  },
  {
    question: 'How are the rarity levels of shoes determined?',
    answer: 'Shoe rarity levels are typically determined by factors like limited production runs, exclusive collaborations, and market demand.'
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
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-white">FAQ</h2>
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