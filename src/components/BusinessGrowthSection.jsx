import React from "react";
import { Link } from "react-router-dom";
import IvyLogo from "../assets/Ivylogo.png";
import InstantGrowthIcon from "../assets/Instant-Growth.svg";
import QualityServiceIcon from "../assets/quality-service.svg";
import CustomerServiceIcon from "../assets/customer-service.svg";
import CostServiceIcon from "../assets/cost-service.svg";

export default function BusinessGrowthSection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* --- LEFT COLUMN: MAIN CONTENT --- */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {/* Title */}
            <h2 className="font-redhat font-bold text-4xl md:text-5xl text-stone-900 dark:text-white">
              Business Growth Management
            </h2>

            {/* Paragraphs 1 & 2 */}
            <div className="flex flex-col gap-6 text-stone-600 dark:text-stone-400 font-jost text-[15px] leading-loose">
              <p>
                Continually Myocardinate Holistic Mindshare With Client-Based Web Services. Assertively E-Enable Catalysts For Change Before Tested Markets. Phosfluorescently Maintain Wireless Scenarios After Intermandated Applications. Conveniently Predominate Revolutionary Quality Vectors Through Future-Proof Manufactured Products. Enthusiastically Transform Distinctive Collaboration.
              </p>
              <p>
                Intrinsically Coordinate Multifunctional Functionalities Reliable Potentialities. Objectively Envisioneer High In Convergence Through Collaborative Networks. Interactively Generate B2C E-Tailers For Business Data Restore Fully Researched Relationships Through Resource Maximizing Results.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
              <div className="bg-white dark:bg-[#151515] rounded-lg shadow-[0_4px_25px_rgb(0,0,0,0.05)] dark:shadow-none border-l-4 border-[#155d6a] p-6 flex items-start gap-5 transition-transform hover:-translate-y-1 duration-300">
                <div className="flex-shrink-0 mt-1">
                  <img src={InstantGrowthIcon} alt="Instant Business Growth" className="w-12 h-12 object-contain" />
                </div>
                <div>
                  <h3 className="font-redhat font-bold text-lg text-stone-900 dark:text-white mb-2">Instant Business Growth</h3>
                  <p className="font-jost text-stone-500 dark:text-stone-400 text-sm leading-relaxed">Maintain Wireless Scenarios After Sure Quality Vectors Future</p>
                </div>
              </div>
              <div className="bg-white dark:bg-[#151515] rounded-lg shadow-[0_4px_25px_rgb(0,0,0,0.05)] dark:shadow-none border-l-4 border-[#155d6a] p-6 flex items-start gap-5 transition-transform hover:-translate-y-1 duration-300">
                <div className="flex-shrink-0 mt-1">
                  <img src={QualityServiceIcon} alt="24/7 Quality Service" className="w-12 h-12 object-contain" />
                </div>
                <div>
                  <h3 className="font-redhat font-bold text-lg text-stone-900 dark:text-white mb-2">24/7 Quality Service</h3>
                  <p className="font-jost text-stone-500 dark:text-stone-400 text-sm leading-relaxed">Maintain Wireless Scenarios After Sure Quality Vectors Future</p>
                </div>
              </div>
              <div className="bg-white dark:bg-[#151515] rounded-lg shadow-[0_4px_25px_rgb(0,0,0,0.05)] dark:shadow-none border-l-4 border-[#155d6a] p-6 flex items-start gap-5 transition-transform hover:-translate-y-1 duration-300">
                <div className="flex-shrink-0 mt-1">
                  <img src={CustomerServiceIcon} alt="Easy Customer Service" className="w-12 h-12 object-contain" />
                </div>
                <div>
                  <h3 className="font-redhat font-bold text-lg text-stone-900 dark:text-white mb-2">Easy Customer Service</h3>
                  <p className="font-jost text-stone-500 dark:text-stone-400 text-sm leading-relaxed">Maintain Wireless Scenarios After Sure Quality Vectors Future</p>
                </div>
              </div>
              <div className="bg-white dark:bg-[#151515] rounded-lg shadow-[0_4px_25px_rgb(0,0,0,0.05)] dark:shadow-none border-l-4 border-[#155d6a] p-6 flex items-start gap-5 transition-transform hover:-translate-y-1 duration-300">
                <div className="flex-shrink-0 mt-1">
                  <img src={CostServiceIcon} alt="Quality Cost Service" className="w-12 h-12 object-contain" />
                </div>
                <div>
                  <h3 className="font-redhat font-bold text-lg text-stone-900 dark:text-white mb-2">Quality Cost Service</h3>
                  <p className="font-jost text-stone-500 dark:text-stone-400 text-sm leading-relaxed">Maintain Wireless Scenarios After Sure Quality Vectors Future</p>
                </div>
              </div>
            </div>

            {/* Paragraphs 3 & 4 */}
            <div className="flex flex-col gap-6 text-stone-600 dark:text-stone-400 font-jost text-[15px] leading-loose">
              <p>
                Phosfluorescently Maintain Wireless Scenarios After Intermandated Applications. Conveniently Unique Predominate Revolutionary Quality Vectors Through Future-Proof Manufactured Products. Objectively Envisioneer High Solution Convergence Through Collaborative Networks. Interactively Generate B2C E-Tailers For Business Data Restore Fully Researched Relationships Through Resource Maximizing Results.
              </p>
              <p className="whitespace-pre-line">
                Assertively E-Enable Catalysts For Change Before Fully Tested Markets. Phosfluorescently Maintain Wireless Scenarios After Intermandated Applications. Conveniently Predominate Business Revolutionary Quality Vectors Through Future-Proof Manufactured Products. Enthusiastically Transform Distinctive Collaboration.
                {"\n\n"}
                Phosfluorescently Maintain Wireless Scenarios After Intermandated Applications. Conveniently Predominate Misslat Revolutionary Quality Vectors Through Future-Proof Manufactured Products.
              </p>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
              <div className="bg-white dark:bg-[#151515] rounded-xl shadow-[0_4px_25px_rgb(0,0,0,0.05)] dark:shadow-none p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
                {/* Number Circle */}
                <div className="w-20 h-20 rounded-full bg-[#155d6a]/10 dark:bg-[#155d6a]/20 flex items-center justify-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-[#155d6a] flex items-center justify-center text-white text-xl font-bold font-redhat">
                    1
                  </div>
                </div>
                {/* Text */}
                <h3 className="font-redhat font-bold text-lg text-stone-900 dark:text-white mb-3">STEP ONE</h3>
                <p className="font-jost text-stone-500 dark:text-stone-400 text-sm leading-relaxed">Tactical Services Through Market Web Services</p>
              </div>
              <div className="bg-white dark:bg-[#151515] rounded-xl shadow-[0_4px_25px_rgb(0,0,0,0.05)] dark:shadow-none p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
                {/* Number Circle */}
                <div className="w-20 h-20 rounded-full bg-[#155d6a]/10 dark:bg-[#155d6a]/20 flex items-center justify-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-[#155d6a] flex items-center justify-center text-white text-xl font-bold font-redhat">
                    2
                  </div>
                </div>
                {/* Text */}
                <h3 className="font-redhat font-bold text-lg text-stone-900 dark:text-white mb-3">STEP TWO</h3>
                <p className="font-jost text-stone-500 dark:text-stone-400 text-sm leading-relaxed">Tactical Services Through Market Web Services</p>
              </div>
              <div className="bg-white dark:bg-[#151515] rounded-xl shadow-[0_4px_25px_rgb(0,0,0,0.05)] dark:shadow-none p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
                {/* Number Circle */}
                <div className="w-20 h-20 rounded-full bg-[#155d6a]/10 dark:bg-[#155d6a]/20 flex items-center justify-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-[#155d6a] flex items-center justify-center text-white text-xl font-bold font-redhat">
                    3
                  </div>
                </div>
                {/* Text */}
                <h3 className="font-redhat font-bold text-lg text-stone-900 dark:text-white mb-3">STEP THREE</h3>
                <p className="font-jost text-stone-500 dark:text-stone-400 text-sm leading-relaxed">Tactical Services Through Market Web Services</p>
              </div>
            </div>

            {/* Paragraph 5 */}
            <p className="text-stone-600 dark:text-stone-400 font-jost text-[15px] leading-loose">
              Conveniently Predominate Revolutionary Quality Vectors Through Future-Proof Manufactured Products. Objectively Envisioneer High In Convergence Through Collaborative Networks. Interactively Generate B2C Tailers For Business Data Restore Fully Researched Relationships Through.
            </p>
          </div>

          {/* --- RIGHT COLUMN: SIDEBAR --- */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-[#286f7f] dark:bg-[#155d6a] rounded-xl p-10 flex flex-col items-center text-center shadow-xl">
              {/* Logo */}
              <img
                src={IvyLogo}
                alt="Logo"
                className="w-48 mb-8 brightness-0 invert object-contain"
              />
              {/* Separator Line */}
              <div className="w-full h-px bg-white/20 mb-8" />

              {/* Title */}
              <h3 className="font-redhat font-bold text-2xl md:text-3xl text-white whitespace-pre-line leading-tight mb-10">
                Need Help? We Are Here{"\n"}To Help You
              </h3>

              {/* Button */}
              <Link
                to="/contact"
                className="bg-white text-[#155d6a] font-redhat font-bold text-lg px-8 py-3.5 rounded hover:bg-stone-100 transition-colors duration-300 w-full shadow-md"
              >
                Contact Us
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
