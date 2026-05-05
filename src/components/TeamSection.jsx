import React from "react";

const TEAM_DATA = [
  {
    id: 1,
    name: "Alan Dosan",
    role: "Nutrition",
    image:
      "src/assets/Alan dosan.png",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Abdul Rahman",
    role: "Diet Planer",
    image:
      "src/assets/abdul rahman.png",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Ameila Colver",
    role: "Doctor",
    image:
      "src/assets/ameila colver.png",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];

const FacebookIcon = () => (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
  </svg>
);

export default function TeamSection() {
  return (
    <section className="py-[30px] md:py-24 bg-stone-50 dark:bg-stone-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-left md:text-center mb-16">
          <span className="text-xs md:text-sm font-jost text-[#155d6a] dark:text-[#56b9cb] tracking-[0.2em] uppercase font-semibold">
            Our Experts
          </span>
          <h2 className="font-redhat font-black text-2xl md:text-3xl lg:text-5xl text-stone-900 dark:text-white mt-4 uppercase">
            Our Team Mates
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_DATA.map((member) => (
            <div
              key={member.id}
              className="relative w-full aspect-[3/4] md:aspect-[3.3/4.5] rounded-[15px] overflow-hidden group shadow-lg dark:shadow-none"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[500px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 w-[85%] bg-[#151515] rounded-tr-[40px] p-6 flex flex-col items-center justify-center transition-all duration-300 group-hover:w-[90%]">
                <h3 className="text-white font-bold text-xl md:text-2xl font-redhat text-center">
                  {member.name}
                </h3>
                <p className="text-[#155d6a] dark:text-[#56b9cb] text-sm md:text-base mt-2 font-jost text-center">
                  {member.role}
                </p>
                <div className="flex gap-3 mt-5">
                  <a
                    href={member.socials.facebook}
                    className="w-8 h-8 rounded-full bg-[#5c80e1] hover:bg-white hover:text-[#5c80e1] transition-colors duration-300 flex items-center justify-center text-white"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href={member.socials.twitter}
                    className="w-8 h-8 rounded-full bg-[#46b1ed] hover:bg-white hover:text-[#46b1ed] transition-colors duration-300 flex items-center justify-center text-white"
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    href={member.socials.linkedin}
                    className="w-8 h-8 rounded-full bg-[#0077b5] hover:bg-white hover:text-[#0077b5] transition-colors duration-300 flex items-center justify-center text-white"
                  >
                    <LinkedinIcon />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
