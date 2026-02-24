import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/ivylogo.png";

// Easy-to-manage navigation links
const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Amenities", path: "/amenities" },
  { label: "Locations", path: "/locations" },
  { label: "Careers", path: "/careers" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full px-5 py-5 flex items-center justify-between transition-colors duration-300 bg-white dark:bg-[#0F0F0F] md:px-10 lg:px-20">
      {/* Logo Section */}
      <div className="">
        <Link to="/">
          <img
            src={Logo}
            alt="Ivy Healthcare Group"
            className="h-12 w-auto transition-all duration-300 dark:invert dark:brightness-0"
          />
        </Link>
      </div>

      {/* Right side container for menu and CTA */}
      <div className="flex items-center gap-8">
        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="font-jost text-[16px] font-medium transition-colors text-stone-800 hover:text-[#155d6a] dark:text-stone-100 dark:hover:text-stone-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex-shrink-0 md:flex">
          <Link
            to="/contact"
            className="font-redhat font-semibold px-6 py-2.5 rounded-md transition-colors bg-[#155d6a] text-white hover:bg-[#0f4651] dark:bg-[#0f4651] dark:text-white dark:hover:bg-[#0f4651]"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-stone-800 dark:text-stone-100"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white dark:bg-[#0F0F0F] md:hidden">
          <nav className="flex flex-col items-start gap-4 p-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="font-jost text-[16px] font-medium transition-colors text-stone-800 hover:text-[#155d6a] dark:text-stone-100 dark:hover:text-stone-300"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="font-redhat font-semibold px-6 py-2.5 rounded-md transition-colors bg-[#155d6a] text-white hover:bg-[#0f4651] dark:bg-[#0f4651] dark:text-white dark:hover:bg-[#0f4651]"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
