import React from "react";
import AmenitiesAwesomeImg from "../assets/aminities-awesome.png";
import CheckedIcon from "../assets/checked-icon.svg";

const CONTENT = {
  subtitle: "Our Awesome Features",
  title: "WE PRIDE OURSELVES ON OUR\nCONSULTANT FEATURE",
  paragraph: "Dapibus Curae Risus Rutrum Curabitur Nunc Sociis Nullam Nisl, Aliquet Quis Iaculis Scelerisque Primis Massa Imperdiet, Dis Senectus Blandit Aptent Nulla Cubilia Sodales Convallis Tortor Pellentesque Nulla.",
  features: [
    "We Use The Latest Diagnostic Equipment",
    "We Are A Member Of Professional Service",
    "Automotive Service Our Clients Receive",
    "We Use The Latest Diagnostic Equipment",
    "We Are A Member Of Professional Service",
    "Automotive Service Our Clients Receive",
    "We Use The Latest Diagnostic Equipment"
  ]
};

export default function AwesomeFeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#0F0F0F] transition-colors duration-300">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-start lg:items-stretch">

          {/* --- LEFT COLUMN: IMAGE --- */}
          <div className="w-full h-full">
            <img
              src={AmenitiesAwesomeImg}
              alt="Awesome Features"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* --- RIGHT COLUMN: CONTENT --- */}
          <div className="flex flex-col gap-6 lg:pl-4">
            <div>
              <span className="font-jost text-[#247c8f] dark:text-[#56b9cb] text-sm md:text-base tracking-[0.2em] uppercase font-semibold mb-3 block">
                {CONTENT.subtitle}
              </span>
              <h2 className="font-redhat text-3xl md:text-4xl lg:text-[35px] text-stone-900 dark:text-white leading-[1.3]">
                <span className="font-black block mb-2">WE PRIDE OURSELVES ON OUR</span>
                <span className="font-black">CONSULTANT </span>
                <span className="font-medium">FEATURE</span>
              </h2>
            </div>

            <p className="font-jost text-stone-600 dark:text-stone-400 text-lg leading-relaxed">
              {CONTENT.paragraph}
            </p>

            {/* Features List */}
            <ul className="flex flex-col gap-3.5 mt-2">
              {CONTENT.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <img
                    src={CheckedIcon}
                    alt="check"
                    className="w-5 h-5 mt-1 flex-shrink-0"
                  />
                  <span className="font-jost font-semibold text-stone-800 dark:text-stone-200 text-[16px] md:text-[17px]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
