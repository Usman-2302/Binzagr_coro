"use client";

import { HeroSection } from "@/components/home/HeroSection";
import { TrustTicker } from "@/components/home/TrustTicker";
import { SustainabilitySection } from "@/components/home/SustainabilitySection";
import { StatsSection } from "@/components/home/StatsSection";
import {
  AboutSection,
  BrandsSection,
  WhyChooseUsSection,
  CTASection,
} from "@/components/home";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustTicker />
      <AboutSection />
      <BrandsSection />
      <StatsSection />
      <SustainabilitySection />
      <WhyChooseUsSection />
      <CTASection />
    </>
  );
}
