import React from "react";
import { FaFacebookF, FaXTwitter, FaYoutube, FaLinkedinIn, FaInstagram, FaBehance } from "react-icons/fa6";

const services1 = [
  "Marketing Subscription",
  "Social Media",
  "Paid Social",
  "Paid Media",
  "SEO",
  "Influencer Marketing",
  "PR & Outreach",
  "Video Production",
  "Video Marketing",
];
const services2 = [
  "Branding",
  "Community Management",
  "Website development",
  "Mobile App Development",
  "Web Design",
  "Mobile App Design",
  "Blockchain Development",
  "Lead Generation",
];
const company = [
  "About us",
  "Success Stories",
  "Our people",
  "Pricing",
  "Events",
  "Blog",
  "Affiliate Program",
  "Careers",
  "Contact",
];
const industries = [
  "B2B",
  "Fintech",
  "Crypto",
  "Healthcare",
  "Software",
  "SaaS",
  "Startup",
  "Small Business",
  "Gaming",
  "Esports",
  "Mobile",
  "eCommerce",
];
const locations = [
  {
    city: "London",
    address: "71-75, Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom",
    icon: "🏢",
  },
  {
    city: "Dubai",
    address: "Nassima Tower, 04th floor, Sheikh Zayed Road, Dubai, 00971",
    icon: "🏢",
  },
  {
    city: "Singapore",
    address: "3 Coleman St, #03-24, Singapore 179804",
    icon: "📍",
  },
  {
    city: "Hong Kong",
    address: "38 Wong Chuk Hang Road 1/F, 2F, 25-27F, Hong Kong Island, Hong Kong",
    icon: "🏢",
  },
  {
    city: "New York",
    address: "276 5th Avenue, NY 10001, New York, United States of America",
    icon: "🏢",
  },
  {
    city: "Vilnius",
    address: "Konstitucijos ave. 21A, Vilnius, LT-08130, Lithuania",
    icon: "🏛️",
  },
];
const social = [
  { icon: <FaFacebookF />, label: "Facebook", href: "#" },
  { icon: <FaXTwitter />, label: "X", href: "#" },
  { icon: <FaYoutube />, label: "YouTube", href: "#" },
  { icon: <FaLinkedinIn />, label: "LinkedIn", href: "#" },
  { icon: <FaInstagram />, label: "Instagram", href: "#" },
  { icon: <FaBehance />, label: "Behance", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-4 md:px-12 lg:px-24 text-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-white/10 pb-10">
          {/* Services */}
          <div className="md:col-span-2 flex gap-10">
            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-1">
                {services1.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="mt-10 md:mt-14 space-y-1">
                {services2.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-1">
              {company.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Industries */}
          <div>
            <h3 className="font-bold text-lg mb-4">Industries</h3>
            <ul className="space-y-1">
              {industries.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Social */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4 text-2xl">
              {social.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className="hover:text-gray-400">{s.icon}</a>
              ))}
            </div>
          </div>
        </div>
        {/* Contact & Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 border-b border-white/10 pb-10">
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="mb-2">hello@ninjapromo.io</div>
            <div className="mb-2">+1 929-492-4413 (US)</div>
            <div className="mb-2">+44 20 3868 4672 (UK)</div>
            <div className="mb-2">+65 3165 4789 (SG)</div>
            <div className="mb-2">+971 54 237 6132 (UAE)</div>
            <div className="mt-4 font-bold">Want To Join The Team?</div>
            <div className="mb-2">careers@ninjapromo.io</div>
            <div className="mt-4 font-bold">Press Inquiries</div>
            <div>media@ninjapromo.io</div>
          </div>
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {locations.map((loc) => (
              <div key={loc.city} className="mb-4">
                <div className="font-bold flex items-center gap-2 mb-1">
                  <span>{loc.icon}</span> {loc.city}
                </div>
                <div className="text-white/80 whitespace-pre-line">{loc.address}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 text-xs text-white/60">
          <div>© 2025 NinjaPromo. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <span>Hide Corporation Ltd</span>
          </div>
        </div>
      </div>
    </footer>
  );
} 