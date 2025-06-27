import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const FeaturedIn = () => {
  return (
    <section className="w-full bg-[#0D0D0D] text-white py-24 px-6 md:px-16 lg:px-24 font-sans">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">We Are Featured In</h2>
            <h1 className="text-[140px] font-bold leading-[1] text-[#7B7B7B] tracking-tight">Forbes</h1>
          </div>
          <div className="max-w-[550px]">
            <p className="text-[#A1A1AA] text-base md:text-lg mb-6">
              Barbarika&apos;s founders shared insights with Forbes on the strategic advantages of partnering over contracting with service providers.
            </p>
            <button className="border border-white text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-white hover:text-black transition-all duration-300">
              Read the article
            </button>
          </div>
        </div>

        {/* Subheader */}
        <h3 className="text-2xl font-semibold mt-24 mb-10">And other media</h3>

        {/* Media Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#1C1C1C] rounded-2xl p-6 min-h-[120px] text-sm">
            <p className="text-white font-semibold mb-2">Analytics Insight</p>
            <p className="text-[#A1A1AA]">
              What Artificial Intelligence Can Bring to Digital Marketing in 2024
            </p>
          </div>

          <div className="bg-[#1C1C1C] rounded-2xl p-6 min-h-[120px] text-sm">
            <p className="text-white font-semibold mb-2">CoinPedia.</p>
            <p className="text-[#A1A1AA]">
              State of User Acquisition 2024 in Web3
            </p>
          </div>

          <div className="bg-[#1C1C1C] rounded-2xl p-6 min-h-[120px] text-sm">
            <p className="text-white font-semibold mb-2">Cryptopolitan</p>
            <p className="text-[#A1A1AA]">
              What&apos;s Holding Up The Next Bull Run in 2024, and What Trends Will Fuel It
            </p>
          </div>

          <div className="bg-[#1C1C1C] rounded-2xl p-6 min-h-[120px] text-sm">
            <p className="text-white font-semibold mb-2">Bitcoin.com</p>
            <p className="text-[#A1A1AA]">
              Game-Changing Subscription Model for Marketing Services Unveiled by Barbarika.io
            </p>
          </div>
        </div>

        {/* Arrows */}
        <div className="flex justify-end items-center gap-4 mt-10">
          <button className="w-10 h-10 rounded-full bg-[#1C1C1C] flex items-center justify-center">
            <ArrowLeft size={20} color="white" />
          </button>
          <button className="w-10 h-10 rounded-full bg-[#1C1C1C] flex items-center justify-center">
            <ArrowRight size={20} color="white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn; 