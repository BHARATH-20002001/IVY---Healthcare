import HeroBanner from "../components/HeroBanner";
import SolutionSection from "../components/SolutionSection";
import ServicesSection from "../components/ServicesSection";


export default function Home() {
  return (
    <main>
      {/* This calls the Hero Banner you just built */}
      <HeroBanner />
      <SolutionSection />
      <ServicesSection />

      {/* Later, you can add more homepage sections here, like "About Us" or "Services" */}
    </main>
  );
}
