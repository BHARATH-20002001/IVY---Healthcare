import React from "react";
import { Link, useLocation } from "react-router-dom";
// Use a placeholder for the left image; the user can replace this with their local asset
import ServiceMeetingImage from "../assets/service-meeting.png";

const SERVICES = [
  { id: 1, name: "Financial Advices", path: "#" },
  { id: 2, name: "Investment Strategy", path: "#" },
  { id: 3, name: "Strategy Growth", path: "#" },
  { id: 4, name: "Tax Strategy", path: "#" },
  { id: 5, name: "Business Planning", path: "#" },
  { id: 6, name: "Market Research", path: "#" },
];

const ArrowRightIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12H19M19 12L12 5M19 12L12 19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ServiceList() {
  const location = useLocation();

  return (
    <section className="py-20 bg-white dark:bg-[#0F0F0F] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* --- LEFT COLUMN: IMAGE --- */}
          <div className="lg:col-span-8">
            <img
              src={ServiceMeetingImage}
              alt="Team meeting"
              className="w-full h-full min-h-[400px] object-cover rounded-xl shadow-md"
              // Fallback to an Unsplash image if the local asset doesn't exist yet
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2000&auto=format&fit=crop";
              }}
            />
          </div>

          {/* --- RIGHT COLUMN: SERVICES SIDEBAR --- */}
          <div className="lg:col-span-4 bg-[#f8f9fc] dark:bg-[#1a1a1a] rounded-xl p-6 lg:p-8">
            <h3 className="font-redhat font-bold text-2xl text-stone-900 dark:text-white mb-6">
              Our Services
            </h3>
            <div className="flex flex-col gap-3">
              {SERVICES.map((service) => {
                // Highlight the active link if the path matches exactly
                const isActive = location.pathname === service.path;

                return (
                  <Link
                    key={service.id}
                    to={service.path}
                    className="group flex items-center justify-between px-6 py-4 rounded-md bg-white dark:bg-[#222] shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <span
                      className={`font-redhat font-medium text-[16px] transition-colors duration-300 ${isActive
                        ? "text-[#155d6a] dark:text-[#56b9cb]"
                        : "text-stone-800 dark:text-stone-200 group-hover:text-[#155d6a] dark:group-hover:text-[#56b9cb]"
                        }`}
                    >
                      {service.name}
                    </span>
                    <span className="text-[#155d6a] dark:text-[#56b9cb] transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRightIcon />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
