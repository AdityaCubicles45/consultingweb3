import React, { useState } from "react";

const plans = [
  {
    name: "Get started plan",
    hours: 40,
    price: 3200,
    rate: 80,
    highlight: false,
  },
  {
    name: "Boost plan",
    hours: 80,
    price: 5600,
    rate: 70,
    highlight: false,
  },
  {
    name: "Full force plan",
    hours: 160,
    price: 9600,
    rate: 60,
    highlight: true,
  },
  {
    name: "All inclusive",
    hours: null,
    price: "20K-100K",
    rate: null,
    highlight: false,
    custom: true,
  },
];

const features = [
  "Access to all our services",
  "Dedicated project manager",
  "Weekly calls",
  "Access to the entire marketing team",
  "Customized work plan",
  "Real-time management dashboard",
  "Dedicated marketing strategist",
  "Detailed monthly reports",
  "24/5 timezone coverage",
];

const currencies = ["$", "€", "£"];

export default function PricingPlans() {
  const [duration, setDuration] = useState("3-Month");
  const [currency, setCurrency] = useState("$");

  return (
    <section className="bg-black text-white py-20 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">the plan that works for you</span> and<br />
          switch it up whenever you need to
        </h2>
        {/* Duration Toggle */}
        <div className="flex justify-center items-center gap-4 mt-8 mb-12">
          {[
            { label: "3-Month", discount: null },
            { label: "6-Month", discount: "10% off" },
            { label: "Annual", discount: "20% off" },
          ].map((d) => (
            <button
              key={d.label}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${duration === d.label ? "bg-white text-black" : "bg-gray-900 text-white"}`}
              onClick={() => setDuration(d.label)}
            >
              {d.label} {d.discount && <span className="text-xs ml-1 opacity-70">{d.discount}</span>}
            </button>
          ))}
          <div className="ml-6 flex gap-2 text-lg">
            {currencies.map((cur) => (
              <button
                key={cur}
                className={`rounded-full px-2 py-1 ${currency === cur ? "bg-white text-black" : "bg-gray-900 text-white"}`}
                onClick={() => setCurrency(cur)}
              >
                {cur}
              </button>
            ))}
          </div>
        </div>
        {/* Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 ${plan.highlight ? "bg-gradient-to-br from-purple-400 to-pink-400 text-white shadow-2xl scale-105" : "bg-gray-900 text-white/90"}`}
            >
              <div className="mb-2 text-sm opacity-70">
                {plan.custom ? <span className="inline-flex items-center"><span className="mr-1">👑</span>All inclusive</span> : plan.name}
              </div>
              <div className="text-4xl font-bold mb-2">
                {plan.hours ? `${plan.hours} hrs` : "Custom"}
                <span className="text-base font-normal"> / mo</span>
              </div>
              <div className="text-xl font-semibold mb-1">
                {currency}{plan.price}{typeof plan.price === "number" ? " / mo" : " / mo"}
              </div>
              {plan.rate && (
                <div className="text-base opacity-70 mb-2">
                  {currency}{plan.rate} <span className="text-xs">/ hr</span>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Features List */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-white/80 text-lg">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="text-green-400">&#10003;</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 