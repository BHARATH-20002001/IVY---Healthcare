import React from "react";
import CareersBanner from "../components/CareersBanner";
import CareersPhilosophySection from "../components/CareersPhilosophySection";
import CareersBenefitsSection from "../components/CareersBenefitsSection";

export default function Careers() {
  return (
    <main className="min-h-screen bg-stone-50 dark:bg-stone-900 transition-colors duration-300">
      <CareersBanner />
      <CareersPhilosophySection />
      <CareersBenefitsSection />
    </main>
  );
}
