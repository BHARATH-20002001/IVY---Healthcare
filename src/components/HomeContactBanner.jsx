import { Link } from "react-router-dom";
import HomepageContactBg from "../assets/homepage-contact-bg.png";

export default function HomeContactBanner() {
  return (
    <section className="relative py-20 md:py-25 overflow-hidden">
      {/* --- BACKGROUND IMAGE --- */}
      {/* Add your building/sign image to the public folder as 'contact-banner-bg.jpg' */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HomepageContactBg})` }}
      />

      {/* --- DARK OVERLAY --- */}
      {/* This ensures the white text is always readable over the photograph */}
      <div className="absolute inset-0 z-0 bg-stone-900/50 dark:bg-stone-900/70 transition-colors duration-300" />

      {/* --- CONTENT --- */}
      <div className="relative flex flex-col z-10 max-w-7xl mx-auto px-6 lg:px-8 md:flex-row items-center justify-between gap-8">
        {/* Text Section */}
        <h2 className="font-redhat font-bold text-2xl md:text-2xl lg:text-2xl text-white leading-tight text-center md:text-left">
          Need Any Business Consultancy?
          {/* Using a slightly lighter teal so it pops against the dark background */}
          <span className="text-[#56b9cb] text-[16px] font-light md:tracking-[3px] ml-5">Contact With Us</span>
        </h2>

        {/* Button Section */}
        <div className="flex-shrink-0">
          <Link
            to="/contact"
            className="inline-block font-redhat font-semibold text-white bg-[#155d6a] hover:bg-[#0f4651] px-6 py-2 rounded-md transition-colors text-lg shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
