import React from "react";
import AmenitiesBanner from "../components/AmenitiesBanner";
import ConsultancySection from "../components/ConsultancySection";

export default function Amenities() {
  return (
    <main className="min-h-screen bg-stone-50 dark:bg-stone-900 transition-colors duration-300">
      <AmenitiesBanner />
      <ConsultancySection />
    </main>
  );
}
