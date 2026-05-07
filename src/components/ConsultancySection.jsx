import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const AnimatedProgressBar = ({ title, targetPercentage, height = "5px" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const barRef = useRef(null);

  useEffect(() => {
    // Set up an intersection observer to trigger animation when the bar scrolls into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Only animate once
          if (barRef.current) observer.unobserve(barRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) observer.unobserve(barRef.current);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Animate the number counting up
      let start = 0;
      const duration = 2000; // 2 seconds animation
      const increment = targetPercentage / (duration / 16); // ~60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= targetPercentage) {
          setPercentage(targetPercentage);
          clearInterval(timer);
        } else {
          setPercentage(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible, targetPercentage]);

  return (
    <div className="w-full mb-6 last:mb-0" ref={barRef}>
      <div className="flex justify-between items-center mb-3">
        <span className="font-redhat font-bold text-stone-900 dark:text-white text-[15px] md:text-[16px]">
          {title}
        </span>
        <span className="font-jost font-semibold text-[#247c8f] dark:text-[#56b9cb] text-[15px] md:text-[16px]">
          {percentage}%
        </span>
      </div>
      <div
        className="w-full bg-white dark:bg-stone-800 rounded-none overflow-hidden"
        style={{ height }}
      >
        <div
          className="bg-[#247c8f] dark:bg-[#56b9cb] h-full transition-all duration-[2000ms] ease-out"
          style={{ width: isVisible ? `${targetPercentage}%` : "0%" }}
        />
      </div>
    </div>
  );
};

export default function ConsultancySection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#0F0F0F] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* --- LEFT COLUMN: STAGGERED IMAGES --- */}
          <div className="w-full grid grid-cols-2 gap-[10px] h-[450px] md:h-[650px] mt-10 lg:mt-0 order-2 lg:order-1">
            {/* Left Image Column */}
            <div className="flex flex-col h-full justify-end pt-12 md:pt-24">
              {/* Teal Line */}
              <div className="w-[calc(100%+10px)] h-1 bg-[#25758A] mb-4 md:mb-5 rounded-l-sm"></div>
              {/* Image */}
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
                alt="Business Meeting"
                className="w-full flex-grow object-cover rounded-xl shadow-lg"
              />
            </div>

            {/* Right Image Column */}
            <div className="h-full pb-12 md:pb-24">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                alt="Consultant Smiling"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* --- RIGHT COLUMN: CONTENT --- */}
          <div className="flex flex-col items-start order-1 lg:order-2">
            <span className="font-jost text-[#247c8f] dark:text-[#56b9cb] text-sm md:text-base tracking-[0.2em] uppercase font-semibold mb-4">
              Just A Consultancy
            </span>

            <h2 className="font-redhat text-3xl md:text-4xl lg:text-[42px] text-stone-900 dark:text-white leading-[1.1] mb-6">
              <span className="font-black block mb-2">GET CONSULTING FOR</span>
              <span className="font-black">BETTER </span>
              <span className="font-medium">BUSINESS GROWTH</span>
            </h2>

            <p className="font-jost text-stone-600 dark:text-stone-400 text-lg leading-relaxed mb-10">
              Dapibus Curae Risus Rutrum Curabitur Nunc Sociis Nullam Nisl, Aliquet Quis Iaculis Scelerisque Primis Massa Imperdiet, Dis Senectus Blandit Aptent Nulla Cubilia Sodales Convallis Tortor Pellentesque Nulla.
            </p>

            {/* Progress Bars Container */}
            <div className="w-full bg-[#F6F6F6] dark:bg-[#151515] p-8 md:p-10 rounded-xl mb-10 shadow-[0_4px_25px_rgb(0,0,0,0.03)] dark:shadow-none">
              <AnimatedProgressBar title="Business Strategy" targetPercentage={70} height="5px" />
              <div className="h-4"></div> {/* Spacing */}
              <AnimatedProgressBar title="Company Strength" targetPercentage={93} height="5px" />
            </div>

            <Link
              to="/contact"
              className="bg-[#247c8f] hover:bg-[#1a5e6d] text-white font-redhat font-bold px-8 py-3.5 rounded transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
