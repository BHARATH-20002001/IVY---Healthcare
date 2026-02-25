import ServiceBg from "../assets/service-bg.png";
import IconSearch from "../assets/icon-search.svg";
import IconMegaphone from "../assets/icon-megaphone.svg";
import IconVideo from "../assets/icon-video.svg";
import IconCalendar from "../assets/icon-calendar.svg";
import IconCertificate from "../assets/icon-certificate.svg";
import IconTeam from "../assets/icon-team.svg";

// We will define the data array outside the component to keep the code clean.
// Using inline SVGs for the icons so they load instantly and scale perfectly.
const SERVICES_DATA = [
  {
    id: 1,
    title: "Talent Search",
    description:
      "We know how to search for the best talent. We use the latest profiling tools as part of our service, which will help you develop the right job profile.",
    icon: IconSearch,
  },
  {
    id: 2,
    title: "Megaphone",
    description:
      "We know how to search for the best talent. We use the latest profiling tools as part of our service, which will help you develop the right job profile.",
    icon: IconMegaphone,
  },
  {
    id: 3,
    title: "Video call free",
    description:
      "We know how to search for the best talent. We use the latest profiling tools as part of our service, which will help you develop the right job profile.",
    icon: IconVideo,
  },
  {
    id: 4,
    title: "Calendar",
    description:
      "We know how to search for the best talent. We use the latest profiling tools as part of our service, which will help you develop the right job profile.",
    icon: IconCalendar,
  },
  {
    id: 5,
    title: "Certificate",
    description:
      "We know how to search for the best talent. We use the latest profiling tools as part of our service, which will help you develop the right job profile.",
    icon: IconCertificate,
  },
  {
    id: 6,
    title: "Team Building",
    description:
      "We know how to search for the best talent. We use the latest profiling tools as part of our service, which will help you develop the right job profile.",
    icon: IconTeam,
  },
];

export default function ServicesSection() {
  return (
    <section
      className="relative py-24 bg-white dark:bg-stone-900 transition-colors duration-300 bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${ServiceBg})` }}
    >
      {/* Background Map Image (Optional) */}
      {/* If you have the faint network map image, place it in the public folder as map-bg.png */}
      <div
        className="absolute inset-0 z-0 opacity-5 dark:opacity-10 bg-no-repeat bg-center bg-contain pointer-events-none"
        style={{ backgroundImage: "url('/map-bg.png')" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <span className="text-xs md:text-smfont-jost text-[#155d6a] dark:text-[#56b9cb] tracking-[0.2em] uppercase font-semibold tracking-[5px]">
            Key To Success
          </span>
          <h2 className="font-redhat font-black text-2xl md:text-3xl lg:text-5xl text-stone-900 dark:text-white mt-4 uppercase">
            What We Do
          </h2>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {SERVICES_DATA.map((item) => (
            <div key={item.id} className="flex flex-col">
              {/* Icon & Title Row */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-8 md:w-10 h-8 md:h-10 dark:invert"
                  />
                </div>
                <h3 className="font-redhat font-bold text-[20px] md:text-1xl text-stone-900 dark:text-white">
                  {item.title}
                </h3>
              </div>

              {/* Description Paragraph */}
              <p className="font-jost text-stone-500 dark:text-stone-400 leading-relaxed text-[16px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
