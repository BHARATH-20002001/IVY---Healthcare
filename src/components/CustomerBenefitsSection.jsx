import React from "react";
// Using a placeholder image from the assets. You can replace this if you have a specific image for this section.
import ServiceMeetingImage from "../assets/service-meetingimg.png";
import CheckedIcon from "../assets/checked-icon.svg";

const CONTENT = {
  title: "Customer Benefits",
  paragraph: `Catalysts For Change Before Fully Tested Markets Are Maintain Wireless Scenarios After Intermandated Applications Predominate Revolutionary.`,
  benefits: [
    "We Use The Latest Diagnostic Equipment",
    "We Are A Member Of Professional Service",
    "Automotive Service Our Clients Receive",
  ],
};

export default function CustomerBenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#0F0F0F] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* --- LEFT COLUMN: IMAGE --- */}
          <div className="w-full">
            <img
              src={ServiceMeetingImage}
              alt="Customer Benefits"
              className="w-full h-auto max-h-[500px] rounded-xl shadow-lg object-cover"
              // Fallback to Unsplash if the local image isn't available
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=2000&auto=format&fit=crop";
              }}
            />
          </div>

          {/* --- RIGHT COLUMN: CONTENT --- */}
          <div className="flex flex-col gap-6 lg:pl-6">
            {/* Title */}
            <h2 className="font-redhat font-bold text-4xl md:text-5xl text-stone-900 dark:text-white">
              {CONTENT.title}
            </h2>

            {/* Paragraph */}
            <p className="font-jost text-stone-600 dark:text-stone-400 text-lg leading-loose">
              {CONTENT.paragraph}
            </p>

            {/* Benefits List */}
            <ul className="flex flex-col gap-4 mt-2">
              {CONTENT.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-4">
                  {/* Teal Checkmark Circle Icon */}
                  <img
                    src={CheckedIcon}
                    alt="Checked icon"
                    className="w-5 h-5 flex-shrink-0"
                  />
                  <span className="font-jost font-semibold text-stone-800 dark:text-stone-200 text-base md:text-lg">
                    {benefit}
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
