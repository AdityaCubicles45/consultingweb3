import React from "react";
import Image from "next/image";

const checklist = [
  "How NinjaPromo works",
  "How you can do marketing at scale better, faster and cheaper",
  "How we're different from agencies, freelancers and in-house marketing teams (hint: we're 15x faster than hiring!)",
  "The most suitable subscription plan for your needs",
];

const logos = [
  { src: "/logos/logitech.png", alt: "logitech" },
  { src: "/logos/bitcoin.png", alt: "Bitcoin.com" },
  { src: "/logos/stripe.png", alt: "stripe" },
  { src: "/logos/samsung.png", alt: "SAMSUNG" },
  { src: "/logos/hubspot.png", alt: "HubSpot" },
  { src: "/logos/burgerking.png", alt: "Burger King" },
];

export default function ScheduleMeetingInfo() {
  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 leading-tight">
          Ready to take your marketing to the next level?
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-8">
          Book a demo and discovery call to get a look at:
        </p>
        <ul className="space-y-6 mb-10">
          {checklist.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-white text-base md:text-lg">
              <span className="mt-1 text-green-400">&#10003;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap items-center gap-6 mt-8">
        {logos.map((logo, idx) => (
          <Image
            key={idx}
            src={logo.src}
            alt={logo.alt}
            width={90}
            height={32}
            className="h-8 w-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
} 