'use client';
import { useState } from 'react';
import HeroSection from "@/components/Herosection";
import Navbar from '../components/Navbar';
import MarketingServices from "@/components/MarketingServices";
import CaseStudies from "@/components/CaseStudies";
import FeaturedIn from "@/components/FeaturedIn";
import MarketingDepartmentSection from "@/components/MarketingDepartment";
import ScheduleMeeting from "@/components/ScheduleMeeting";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import MenuModal from '@/components/MenuModal';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main style={{ backgroundColor: '#F3F3F3', minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />
      <FeaturedIn />
      <MarketingServices />
      <CaseStudies />
      <MarketingDepartmentSection />
      <ScheduleMeeting />
      <FAQ />
      <Footer />
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </main>
  );
}