import { useState } from "react";
import ChooseUsTop from "../assets/chooseustop.png";
import ChooseusBL from "../assets/chooseusbottomleft.png";
import ChooseusBR from "../assets/chooseusbottomright.png";

// Data for the accordion items
const ACCORDION_DATA = [
  {
    id: 1,
    question: "01. WHAT SHOULD I INCLUDED MY PERSONAL DETAILS?",
    answer:
      "Neque parturient nascetur facilisis suscipit ridiculus agna lobortis imperdiet vivamus est aliquam euismod nector quam convallis ornare justo service lifereu visionary sources unleash online businesss solutions",
  },
  {
    id: 2,
    question: "02. WHERE I CAN FIND MY BUSINESS GROWTH RESULT?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    id: 3,
    question: "03. DID YOU GET ANY BUSINESS CONSULTANT?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
];

export default function WhyChooseUsSection() {
  // State to track which accordion is open. Default is 1.
  const [openId, setOpenId] = useState(1);

  // Toggle function
  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-[#121621] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* --- LEFT COLUMN: Text & Accordion --- */}
          <div>
            {/* Header */}
            <span className="font-jost text-[#155d6a] tracking-[0.2em] uppercase text-sm font-semibold">
              Why Choose Us
            </span>
            <h2 className="font-redhat font-black text-4xl lg:text-5xl text-white mt-4 mb-10 leading-tight uppercase">
              We Are Experienced <br /> Business{" "}
              <span className="text-[#56b9cb]">Solution</span>
            </h2>

            {/* Accordion List */}
            <div className="flex flex-col gap-4">
              {ACCORDION_DATA.map((item) => {
                const isOpen = openId === item.id;

                return (
                  <div
                    key={item.id}
                    className={`rounded-md overflow-hidden transition-all duration-300 border ${
                      isOpen
                        ? "bg-white border-white"
                        : "bg-transparent border-stone-700 hover:border-stone-500"
                    }`}
                  >
                    {/* Accordion Header (Clickable) */}
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    >
                      <span
                        className={`font-redhat font-bold text-lg ${isOpen ? "text-stone-900" : "text-white"}`}
                      >
                        {/* Make the number teal if open, or teal if closed depending on design. Let's make the number teal! */}
                        <span className="text-[#155d6a] mr-2">
                          {item.question.split(" ")[0]}
                        </span>
                        {item.question.substring(
                          item.question.indexOf(" ") + 1,
                        )}
                      </span>

                      {/* Chevron Icon */}
                      <svg
                        className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                          isOpen
                            ? "text-[#155d6a] rotate-180"
                            : "text-[#155d6a]"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Accordion Body */}
                    <div
                      className={`px-6 transition-all duration-500 ease-in-out ${
                        isOpen
                          ? "max-h-40 pb-6 opacity-100"
                          : "max-h-0 pb-0 opacity-0"
                      }`}
                    >
                      <p className="font-jost text-stone-600 text-sm leading-relaxed pl-8">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* --- RIGHT COLUMN: Image Collage --- */}
          <div className="relative w-full h-[500px] sm:h-[600px] mt-10 lg:mt-0 hidden sm:block">
            {/* Top Right Image */}
            <img
              src={ChooseUsTop}
              alt="Team celebrating"
              className="absolute top-0 right-0 w-[65%] h-[250px] object-cover rounded-lg shadow-2xl z-10"
            />

            {/* Bottom Left Image (Tall) */}
            <img
              src={ChooseusBL}
              alt="Woman presenting"
              className="absolute bottom-0 left-0 w-[55%] h-[350px] object-cover rounded-lg shadow-2xl z-20 "
            />

            {/* Bottom Right Image */}
            <img
              src={ChooseusBR}
              alt="Team meeting"
              className="absolute bottom-12 right-0 w-[60%] h-[200px] object-cover rounded-lg shadow-2xl z-30 "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
