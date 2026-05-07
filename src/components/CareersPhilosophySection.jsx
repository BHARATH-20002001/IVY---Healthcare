import React from "react";
// Placeholder images - you can update these imports to your specific philosophy images later
import TopImage from "../assets/servicebannerimg.png";
import BottomLeftImage from "../assets/conselt-img1.png";
import BottomRightImage from "../assets/conselt-img2.png";
import { Link } from "react-router-dom";

export default function CareersPhilosophySection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#0F0F0F] transition-colors duration-300">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <span className="font-jost text-[#247c8f] dark:text-[#56b9cb] text-sm md:text-base tracking-[0.2em] uppercase font-semibold mb-3 block">
              Our Philosophy
            </span>
            <h2 className="font-redhat font-black text-4xl md:text-5xl lg:text-[54px] text-stone-900 dark:text-white leading-[1.1] mb-6">
              Personal Accident & Health Insurance
            </h2>

            <p className="font-jost text-stone-600 dark:text-stone-300 text-base md:text-lg leading-relaxed mb-8">
              Dapibus Curae Risus Rutrum Curabitur Nunc Sociis Nullam Nisl, Aliquet Quis iaculis Scelerisque
              Primis Massa Imperdiet, Dis Senectus Blandit Aptent Nulla Cubilia Sodales Convallis Tortor
              Pellentesque Nulla.
            </p>

            {/* Checkmark Features */}
            <div className="flex flex-col w-fit gap-4 mb-8">
              {[1, 2].map((idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 border border-[#e2e8f0] dark:border-stone-700 py-4 px-6 bg-transparent w-fit"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#247c8f] dark:text-[#56b9cb] flex-shrink-0">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 11.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                  <span className="font-redhat font-bold text-stone-700 dark:text-stone-200 text-base">
                    We Use The Latest Diagnostic Equipment
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}
            <Link
              to="/contact"
              className="bg-[#247c8f] hover:bg-[#1a5e6d] text-white font-redhat font-semibold text-[15px] px-8 py-3.5 rounded-md transition-colors duration-300 shadow-md"
            >
              Contact Us
            </Link>
          </div>

          {/* Right Content - Images Grid */}
          <div className="w-full lg:w-1/2 flex flex-col gap-3">
            {/* Top Large Image */}
            <div className="w-full">
              <img
                src={TopImage}
                alt="Philosophy Top"
                className="w-full h-[250px] md:h-[320px] object-cover rounded-xl"
              />
            </div>

            {/* Divider Line */}
            <div className="w-full h-1.5 bg-[#247c8f] dark:bg-[#56b9cb] rounded-full"></div>

            {/* Bottom Two Images */}
            <div className="flex gap-5 mt-1 w-full">
              <img
                src={BottomLeftImage}
                alt="Philosophy Detail 1"
                className="w-1/2 md:w-[calc(35%-12px)] h-[180px] md:h-[208px] object-cover rounded-xl md:-ml-[37px]"
              />
              <img
                src={BottomRightImage}
                alt="Philosophy Detail 2"
                className="w-1/2 md:flex-1 md:w-full h-[180px] md:h-[245px] object-cover rounded-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
