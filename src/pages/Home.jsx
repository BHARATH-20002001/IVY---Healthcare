import HeroBanner from "../components/HeroBanner";
import SolutionSection from "../components/SolutionSection";
import ServicesSection from "../components/ServicesSection";
import HomeContactBanner from "../components/HomeContactBanner";


export default function Home() {
  return (
    <main>
      {/* This calls the Hero Banner you just built */}
      <HeroBanner />
      <SolutionSection />
      <ServicesSection />
      <HomeContactBanner />

      {/* Later, you can add more homepage sections here, like "About Us" or "Services" */}
    </main>
  );
}
