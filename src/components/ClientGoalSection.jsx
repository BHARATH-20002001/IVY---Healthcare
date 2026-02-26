import { Link } from "react-router-dom";
import ClientGoalMain from "../assets/client-goal-main.png";
import ClientGoalTop from "../assets/client-goal-top.png";
import ClientGoalLogo from "../assets/client-goal-logo.png";

// Data array for the two feature blocks
const FEATURES = [
  {
    id: 1,
    title: "Strategic Vision Work",
    description:
      "Dorem Ipsum Dolor Sit Amet, Consectetu Mod Tempor Incididunt Business Phasellus Gravida",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Tactical Vision Work",
    description:
      "Dorem Ipsum Dolor Sit Amet, Consectetu Mod Tempor Incididunt Business Phasellus Gravida",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

export default function ClientGoalSection() {
  return (
    <section className="py-24 bg-white dark:bg-stone-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* --- LEFT COLUMN: Image Collage --- */}
          <div className="relative w-full pb-10 pr-10">
            {/* Decorative Top Left Blue Dash */}
            <div className="absolute top-0 left-10 w-24 h-4 bg-[#155d6a] mt-4 z-0 hidden md:block" />

            {/* Main Large Image */}
            <img
              src={ClientGoalMain}
              alt="Team collaborating"
              className="relative z-10 w-[85%] ml-auto rounded-lg shadow-xl object-cover aspect-[4/5] md:aspect-square mb-4"
            />

            {/* Small Floating Image (Top Right) */}
            <img
              src={ClientGoalTop}
              alt="Meeting"
              className="hidden lg:block absolute top-0 right-0 z-0 w-[45%] rounded-lg shadow-xl object-cover aspect-[4/3] -mt-12 -mr-6 transition-colors duration-300"
            />

            {/* Logo Box (Bottom Left) */}
            <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 z-30 w-[150px] md:w-[220px]">
              <img
                src={ClientGoalLogo}
                alt="Ivy Healthcare Group"
                className="w-full"
              />
            </div>
          </div>

          {/* --- RIGHT COLUMN: Content --- */}
          <div>
            {/* Subtitle & Title */}
            <span className="font-jost text-stone-500 dark:text-stone-400 tracking-[0.2em] uppercase text-sm font-medium">
              Easy Business Solution
            </span>
            <h2 className="font-redhat font-black text-4xl lg:text-5xl text-stone-900 dark:text-white mt-4 mb-8 leading-tight uppercase">
              We Are Help Our <br /> Clients{" "}
              <span className="text-[#155d6a] dark:text-[#56b9cb]">
                For Goal
              </span>
            </h2>

            {/* Side-bordered paragraph */}
            <div className="border-l-4 border-[#155d6a] pl-6 mb-12">
              <p className="font-jost text-stone-600 dark:text-stone-300 leading-relaxed text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl.
              </p>
            </div>

            {/* Feature Blocks */}
            <div className="flex flex-col gap-6">
              {FEATURES.map((feature) => (
                <div
                  key={feature.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-stone-50 dark:bg-stone-800 p-6 rounded-md transition-colors duration-300"
                >
                  {/* Icon Box */}
                  <div className="bg-[#155d6a] p-4 rounded-md flex-shrink-0">
                    {feature.icon}
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="font-redhat font-bold text-xl text-stone-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="font-jost text-stone-500 dark:text-stone-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
