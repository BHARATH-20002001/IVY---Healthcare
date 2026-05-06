import React from "react";
import ServiceBanner from "../components/ServiceBanner";
import ServiceList from "../components/ServiceList";
import BusinessGrowthSection from "../components/BusinessGrowthSection";

export default function Services() {
  return (
    <main className="min-h-screen bg-stone-50 dark:bg-stone-900 transition-colors duration-300">
      <ServiceBanner />
      <ServiceList />
      <BusinessGrowthSection />
    </main>
  );
}
