import React from "react";
import ClientLogoBg from "../assets/clientlogobg.png";

const LOGOS = [
  { id: 1, name: "IVY Healthcare Group", src: "src/assets/Ivylogo.png" },
  { id: 2, name: "IVY At Great Falls", src: "src/assets/Ivylogo.png" },
  { id: 3, name: "IVY At Clemmons", src: "src/assets/Ivylogo.png" },
  { id: 4, name: "IVY At Deer Lodge", src: "src/assets/Ivylogo.png" },
  { id: 5, name: "IVY At Gastonia", src: "src/assets/Ivylogo.png" },
  { id: 6, name: "Angel Oak", src: "src/assets/Ivylogo.png" },
  { id: 7, name: "Palm Vista", src: "src/assets/Ivylogo.png" },
  { id: 8, name: "Silver Oak", src: "src/assets/Ivylogo.png" },
];

export default function ClientLogoSection() {
  return (
    <section className="relative py-10 md:py-16 bg-stone-50 dark:bg-stone-900 transition-colors duration-300 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-repeat-x bg-center opacity-100 dark:opacity-10 transition-opacity duration-300"
        style={{ backgroundImage: `url(${ClientLogoBg})` }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-8">
        <style>
          {`
            @keyframes infinite-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-100% - 20px)); }
            }
            .animate-infinite-scroll {
              animation: infinite-scroll 30s linear infinite;
            }
          `}
        </style>

        <div className="flex gap-[20px] w-full">
          {/* Duplicate the array twice to create a seamless infinite scrolling effect */}
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="flex flex-shrink-0 items-center justify-start gap-[20px] animate-infinite-scroll"
              aria-hidden={i === 1 ? "true" : undefined}
            >
              {LOGOS.map((logo) => (
                <div
                  key={logo.id}
                  className="flex flex-shrink-0 items-center justify-center w-[80px] h-[50px] md:w-[140px] md:h-[70px] bg-white rounded-xl shadow-lg dark:shadow-none dark:bg-[#151515] transition-colors duration-300 p-2 md:p-3 cursor-pointer group"
                >
                  {/* If user provides images in /public/assets, they will load. Otherwise alt text shows. */}
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="w-full h-full object-contain text-xs text-stone-400 text-center flex items-center justify-center font-jost"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
