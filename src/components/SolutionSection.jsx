import { Link } from "react-router-dom";
import BusinessSolutionBig from "../assets/business-solution-big.png";
import BusinessSolutionSmall from "../assets/business-solution-small.png";
import CardLogo from "../assets/cardlogo.png";
import ReviewsTrain from "../assets/reviews-rail.png";
// Array for the bullet points to keep the code clean
const FEATURES = [
  "24/7 Call Services Available",
  "Leading Business Solution",
  "Great Skilled Consultant",
  "Business Is The Best Plan",
  "Expert Team Members",
  "How To Improve Business",
  "Reasonable Project Price",
  "Services We Provide",
];

export default function SolutionSection() {
  return (
    <section className="px-5 bg-[#F2F2F2] dark:bg-stone-900 transition-colors duration-300 overflow-hidden py-15 md:px-0">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 md:px-5 lg:grid-cols-2 gap-20 items-center">
          {/* --- LEFT COLUMN: Image Composition --- */}
          <div className="relative">
            {/* Main large image */}
            <img
              src={BusinessSolutionBig}
              alt="Professionals working"
              className="w-full md:w-3/5 h-[350px] md:h-[550px] ml-auto md:ml-0 lg:ml-auto rounded-xl shadow-lg object-cover lg:w-4/5 "
            />

            {/* Small overlapping image */}
            <img
              src={BusinessSolutionSmall}
              alt="Team meeting"
              className="hidden absolute top-1/2 -translate-y-1/2 left-[0px] w-[55%] rounded-xl dark:border-stone-900 shadow-xl object-cover h-[200px] transition-colors duration-300 lg:block"
            />

            {/* Overlapping Logo Box */}
            <div className="w-14 md:w-[200px] absolute bottom-12 right-[-17px] md:right-[156px] lg:right-[-135px] shadow-xl rounded-bl-xl rounded-tr-xl overflow-hidden">
              <img src={CardLogo} alt="Ivy Logo" className="w-24" />
            </div>
          </div>

          {/* --- RIGHT COLUMN: Content & Features --- */}
          <div>
            {/* Subtitle & Title */}
            <span className="font-jost text-stone-500 dark:text-stone-400 tracking-[0.2em] uppercase text-sm font-medium tracking-[5px]">
              Easy Business Solution
            </span>
            <h2 className="font-redhat font-black text-2xl md:text-3xl lg:text-5xl text-stone-900 dark:text-white mt-4 mb-8 leading-tight uppercase">
              The Most Leading Solution For You
            </h2>

            {/* Blockquote style paragraph */}
            <div className="border-l-0 md:border-l-4 pl-0 md:pl-6 border-[#155d6a] mb-10">
              <p className="font-jost text-stone-600 dark:text-stone-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl.
              </p>
            </div>

            {/* 2-Column Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 mb-10">
              {FEATURES.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  {/* Teal Checkmark Icon */}
                  <div className="bg-[#155d6a] rounded-full p-1 flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="font-jost text-stone-700 dark:text-stone-200 text-sm font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Row: Reviews & Button */}
            <div className="flex flex-wrap items-center gap-10 pt-8 border-t border-stone-200 dark:border-stone-700">
              {/* Avatars & Rating Text */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  <img
                    className="w-full h-12 border-white dark:border-stone-900 object-cover"
                    src={ReviewsTrain}
                    alt="Reviewer 1"
                  />
                </div>
                <div>
                  <p className="font-redhat font-black text-lg text-stone-900 dark:text-white leading-none mb-1">
                    1500+
                  </p>
                  <p className="font-jost text-sm font-medium text-[#155d6a] dark:text-[#56b9cb]">
                    Active Reviews
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="font-redhat font-semibold text-white bg-[#155d6a] hover:bg-[#0f4651] dark:bg-white dark:text-stone-900 dark:hover:bg-stone-200 px-6 py-2 rounded-md transition-colors"
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
