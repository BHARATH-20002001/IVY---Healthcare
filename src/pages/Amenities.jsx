import React from "react";
import AmenitiesBanner from "../components/AmenitiesBanner";
import ConsultancySection from "../components/ConsultancySection";
import AwesomeFeaturesSection from "../components/AwesomeFeaturesSection";
import CustomerFeedbacksSection from "../components/CustomerFeedbacksSection";
import HomeContactBanner from "../components/HomeContactBanner";
import TeamSection from "../components/TeamSection";

export default function Amenities() {
  return (
    <main className="min-h-screen bg-stone-50 dark:bg-stone-900 transition-colors duration-300">
      <AmenitiesBanner />
      <ConsultancySection />
      <AwesomeFeaturesSection />
      <HomeContactBanner />
      <CustomerFeedbacksSection />
      <TeamSection />
    </main>
  );
}
