import React from "react";
import LocationsBanner from "../components/LocationsBanner";
import LocationContactSection from "../components/LocationContactSection";

export default function Locations() {
  return (
    <main className="min-h-screen bg-stone-50 dark:bg-stone-900 transition-colors duration-300">
      <LocationsBanner />
      <LocationContactSection />
    </main>
  );
}
