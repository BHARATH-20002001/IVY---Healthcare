import HeroBanner from "../components/HeroBanner";
import SolutionSection from "../components/SolutionSection";

export default function Home() {
  return (
    <main>
      {/* This calls the Hero Banner you just built */}
      <HeroBanner />
      <SolutionSection />

      {/* Later, you can add more homepage sections here, like "About Us" or "Services" */}
    </main>
  );
}
