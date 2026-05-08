import React from "react";
import FullProtectionInsuranceIcon from "../assets/Full protection insurance.svg";
import EmployeesWorldwideIcon from "../assets/Employees-Worldwide.svg";
import TargetFillupIcon from "../assets/Target-Fillup-for-Clients.svg";
import SuperFastSupportIcon from "../assets/Super-Fars-Support.svg";
import HomeIcon from "../assets/home.svg";
import VehiclesIcon from "../assets/vehicles.svg";
import LifeIcon from "../assets/life.svg";
import BusinessIcon from "../assets/business.svg";
import HealthIcon from "../assets/health.svg";
import TravelIcon from "../assets/travel.svg";
import RetireIcon from "../assets/retire.svg";
import PetIcon from "../assets/pet.svg";
import MarineIcon from "../assets/marine.svg";

export default function CareersBenefitsSection() {
  return (
    <div className="w-full bg-white dark:bg-[#0F0F0F] transition-colors duration-300">

      {/* =========================================
          SECTION 1: BENEFIT
          ========================================= */}
      <section className="py-16 md:py-24 max-w-[1240px] mx-auto px-6 lg:px-0 text-center">
        <span className="font-jost text-[#247c8f] dark:text-[#56b9cb] text-sm md:text-base tracking-[0.2em] uppercase font-semibold mb-3 block">
          Our Benefit
        </span>
        <h2 className="font-redhat font-black text-4xl md:text-5xl lg:text-[54px] text-stone-900 dark:text-white uppercase mb-16">
          Why You Choose Asri?
        </h2>

        {/* 4 Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Item 1 */}
          <div className="flex items-center justify-center gap-4 text-left">
            <img src={FullProtectionInsuranceIcon} alt="Full protection insurance" className="w-14 h-14 flex-shrink-0" />
            <h4 className="font-redhat font-bold text-lg md:text-xl text-stone-900 dark:text-white leading-tight">
              Full protection <br /> insurance
            </h4>
          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-center gap-4 text-left">
            <img src={EmployeesWorldwideIcon} alt="Employees Worldwide" className="w-14 h-14 flex-shrink-0" />
            <h4 className="font-redhat font-bold text-lg md:text-xl text-stone-900 dark:text-white leading-tight">
              780+ Employees <br /> Worldwide
            </h4>
          </div>

          {/* Item 3 */}
          <div className="flex items-center justify-center gap-4 text-left">
            <img src={TargetFillupIcon} alt="Target Fillup for Clients" className="w-14 h-14 flex-shrink-0" />
            <h4 className="font-redhat font-bold text-lg md:text-xl text-stone-900 dark:text-white leading-tight">
              Target Fillup <br /> for Clients
            </h4>
          </div>

          {/* Item 4 */}
          <div className="flex items-center justify-center gap-4 text-left">
            <img src={SuperFastSupportIcon} alt="Super Fast Support" className="w-14 h-14 flex-shrink-0" />
            <h4 className="font-redhat font-bold text-lg md:text-xl text-stone-900 dark:text-white leading-tight">
              Super Fast <br /> Support
            </h4>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: INSURANCE
          ========================================= */}
      <section className="py-16 md:py-24 max-w-[1240px] mx-auto px-6 lg:px-0 text-center">
        <span className="font-jost text-[#247c8f] dark:text-[#56b9cb] text-sm md:text-base tracking-[0.2em] uppercase font-semibold mb-3 block">
          Get An Insurance Quote
        </span>
        <h2 className="font-redhat font-black text-4xl md:text-5xl lg:text-[54px] text-stone-900 dark:text-white uppercase mb-16 leading-tight">
          Compare Quotes & Get <br className="hidden md:block" /> Life Insurance
        </h2>

        {/* Gray Container */}
        <div className="w-full bg-[#F6F6F6] dark:bg-[#151515] rounded-xl p-8 md:p-12 lg:p-20 flex flex-col lg:flex-row gap-12 lg:gap-20 text-left">

          {/* Left: 9 Grid Items */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4">

            <div className="bg-white dark:bg-stone-900 rounded-lg p-4 flex flex-col items-center justify-center gap-2 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
              <img src={HomeIcon} alt="Home" className="w-8 h-8 object-contain" />
              <span className="font-jost font-medium text-stone-800 dark:text-stone-200">Home</span>
            </div>

            <div className="bg-white dark:bg-stone-900 rounded-lg p-4 flex flex-col items-center justify-center gap-2 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
              <img src={VehiclesIcon} alt="Vehicles" className="w-8 h-8 object-contain" />
              <span className="font-jost font-medium text-stone-800 dark:text-stone-200">Vehicles</span>
            </div>

            <div className="bg-white dark:bg-stone-900 rounded-lg p-4 flex flex-col items-center justify-center gap-2 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
              <img src={LifeIcon} alt="Life" className="w-8 h-8 object-contain" />
              <span className="font-jost font-medium text-stone-800 dark:text-stone-200">Life</span>
            </div>

            <div className="bg-white dark:bg-stone-900 rounded-lg p-4 flex flex-col items-center justify-center gap-2 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
              <img src={BusinessIcon} alt="Business" className="w-8 h-8 object-contain" />
              <span className="font-jost font-medium text-stone-800 dark:text-stone-200">Business</span>
            </div>

            <div className="bg-white dark:bg-stone-900 rounded-lg p-4 flex flex-col items-center justify-center gap-2 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
              <img src={HealthIcon} alt="Health" className="w-8 h-8 object-contain" />
              <span className="font-jost font-medium text-stone-800 dark:text-stone-200">Health</span>
            </div>

            <div className="bg-white dark:bg-stone-900 rounded-lg p-4 flex flex-col items-center justify-center gap-2 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
              <img src={TravelIcon} alt="Travel" className="w-8 h-8 object-contain" />
              <span className="font-jost font-medium text-stone-800 dark:text-stone-200">Travel</span>
            </div>

            <div className="bg-white dark:bg-stone-900 rounded-lg p-4 flex flex-col items-center justify-center gap-2 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
              <img src={RetireIcon} alt="Retire" className="w-8 h-8 object-contain" />
              <span className="font-jost font-medium text-stone-800 dark:text-stone-200">Retire</span>
            </div>

            <div className="bg-white dark:bg-stone-900 rounded-lg p-4 flex flex-col items-center justify-center gap-2 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
              <img src={PetIcon} alt="Pet" className="w-8 h-8 object-contain" />
              <span className="font-jost font-medium text-stone-800 dark:text-stone-200">Pet</span>
            </div>

            <div className="bg-white dark:bg-stone-900 rounded-lg p-4 flex flex-col items-center justify-center gap-2 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
              <img src={MarineIcon} alt="Marine" className="w-8 h-8 object-contain" />
              <span className="font-jost font-medium text-stone-800 dark:text-stone-200">Marine</span>
            </div>

          </div>

          {/* Right: Form */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <form className="flex flex-col gap-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white dark:bg-stone-900 border-none rounded-md px-6 py-4 font-jost text-stone-800 dark:text-stone-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#247c8f] transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white dark:bg-stone-900 border-none rounded-md px-6 py-4 font-jost text-stone-800 dark:text-stone-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#247c8f] transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Address"
                  className="w-full bg-white dark:bg-stone-900 border-none rounded-md px-6 py-4 font-jost text-stone-800 dark:text-stone-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#247c8f] transition-all"
                />
                <input
                  type="tel"
                  placeholder="Your Number"
                  className="w-full bg-white dark:bg-stone-900 border-none rounded-md px-6 py-4 font-jost text-stone-800 dark:text-stone-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#247c8f] transition-all"
                />
              </div>

              <div className="mt-2 text-left">
                <button
                  type="button"
                  className="bg-[#1a5e6d] hover:bg-[#0f4651] text-white font-redhat font-semibold text-sm tracking-wide px-8 py-3.5 rounded-md transition-colors duration-300 shadow-md"
                >
                  Contact Us
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
