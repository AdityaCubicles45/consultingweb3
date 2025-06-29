'use client';
import { useState } from 'react';
import HeroSection from "@/components/Herosection";
import Navbar from '../components/Navbar';
import MarketingServices from "@/components/MarketingServices";
import CaseStudies from "@/components/CaseStudies";
import MarketingDepartmentSection from "@/components/MarketingDepartment";
import ScheduleMeeting from "@/components/ScheduleMeeting";
import Footer from "@/components/Footer";
import MenuModal from '@/components/MenuModal';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="unified-bg">
      {/* Flowing Background Elements */}
      <div className="bg-flow-element bg-flow-1"></div>
      <div className="bg-flow-element bg-flow-2"></div>
      <div className="bg-flow-element bg-flow-3"></div>
      <div className="bg-flow-element bg-flow-4"></div>
      
      <Navbar />
      <HeroSection />
      <MarketingServices />
      <CaseStudies />
      <MarketingDepartmentSection />
      <ScheduleMeeting />
      <Footer />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </main>
  );
}