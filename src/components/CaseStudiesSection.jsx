import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CastStudy1 from "../assets/casestudy1.png";
import CastStudy2 from "../assets/casestudy2.png";
import CastStudy3 from "../assets/casestudy3.png";

// 1. THIS IS HOW YOU MANAGE CASE STUDIES
// To add a new case study, simply copy one of these blocks, paste it at the end,
// update the id, title, category, and image path. The scroller will automatically update!
const CASE_STUDIES = [
  {
    id: 1,
    title: "Digital Startup Agency",
    category: "Business Growth",
    image: CastStudy1,
    link: "#",
  },
  {
    id: 2,
    title: "Corporate Rebranding",
    category: "Marketing Strategy",
    image: CastStudy2,
    link: "#",
  },
  {
    id: 3,
    title: "Financial Optimization",
    category: "Consulting",
    image: CastStudy3,
    link: "#",
  },
  {
    id: 4,
    title: "Tech Infrastructure",
    category: "IT Solutions",
    image: CastStudy1,
    link: "#",
  },
];

export default function CaseStudiesSection() {
  const scrollRef = useRef(null);
  // Triple the data to create an infinite loop effect
  const infiniteStudies = [...CASE_STUDIES, ...CASE_STUDIES, ...CASE_STUDIES];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const getMetrics = () => {
      const cardWidth = scrollContainer.firstElementChild?.clientWidth || 0;
      const gap = 32;
      const singleSetWidth = (cardWidth + gap) * CASE_STUDIES.length;
      return { cardWidth, gap, singleSetWidth };
    };

    // Start in the middle set so user can scroll left/right immediately without hitting edge
    const { singleSetWidth: initSetWidth } = getMetrics();
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollLeft = initSetWidth;
    }

    const interval = setInterval(() => {
      const { cardWidth, gap, singleSetWidth } = getMetrics();

      // If we've scrolled past the second set (into the third set), reset to second set
      if (scrollContainer.scrollLeft >= singleSetWidth * 2) {
        scrollContainer.scrollLeft -= singleSetWidth;
      }
      // If we've scrolled back into the first set (e.g. manual scroll), reset to second set
      else if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft += singleSetWidth;
      }

      scrollContainer.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 bg-stone-50 dark:bg-stone-900 transition-colors duration-300 overflow-hidden">
      {/* Optional Faint Wavy Background */}
      <div
        className="absolute inset-0 z-0 opacity-10 dark:opacity-5 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: "url('/wave-bg.png')" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-jost text-[#155d6a] dark:text-[#56b9cb] tracking-[0.2em] uppercase text-sm font-semibold">
              Recent Case Studies
            </span>
            <h2 className="font-redhat font-black text-4xl lg:text-5xl text-stone-900 dark:text-white mt-4 uppercase">
              Our Business Cases
            </h2>
          </div>

          <Link
            to="/contact"
            className="inline-block font-redhat font-semibold text-white bg-[#155d6a] hover:bg-[#0f4651] dark:bg-white dark:text-stone-900 dark:hover:bg-stone-200 px-6 py-2 rounded-md transition-colors whitespace-nowrap"
          >
            Let's Work Together
          </Link>
        </div>

        {/* --- HORIZONTAL SCROLLER --- */}
        {/* We use flex + overflow-x-auto to create a native, smooth horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-6 px-6 lg:-mx-8 lg:px-8"
        >
          {infiniteStudies.map((study, index) => (
            <div
              key={`${study.id}-${index}`}
              className="group relative flex-shrink-0 w-[80vw] sm:w-[400px] h-[500px] rounded-xl overflow-hidden snap-center cursor-pointer"
            >
              {/* Card Background Image */}
              <img
                src={study.image}
                alt={study.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay (Darkens on hover to make text/icon pop) */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

              {/* Center Eye Icon (Visible by default, hides on hover) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-20">
                <div className="bg-white rounded-full p-4 shadow-lg">
                  <svg
                    className="w-8 h-8 text-[#155d6a]"
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
                </div>
              </div>

              {/* White Info Box (Bottom Left) */}
              <div className="absolute bottom-10 left-[5vw] bg-white dark:bg-black p-9 rounded-md shadow-xl z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 max-w-[100%]">
                <h3 className="font-redhat font-bold text-xl text-stone-900 dark:text-white mb-1 leading-tight">
                  {study.title}
                </h3>
                <p className="font-jost text-[#155d6a] dark:text-[#56b9cb] font-medium text-sm">
                  {study.category}
                </p>
                {/* Decorative bottom corner shape */}
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#155d6a] rounded-tr-full rounded-bl-md -z-10 translate-y-4 -translate-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
              </div>

              {/* Clickable Link Overlay */}
              <Link to={study.link} className="absolute inset-0 z-30">
                <span className="sr-only">View {study.title} case study</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
