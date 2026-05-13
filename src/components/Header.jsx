import { useState, useEffect } from "react";
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
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-colors duration-300 bg-white dark:bg-[#0F0F0F] shadow-sm">
      <div className="max-w-[1240px] w-full mx-auto px-[20px] md:px-0 py-5 flex items-center justify-between">
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
        <div className="flex items-center gap-4 md:gap-8">
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="font-jost text-[13px] font-normal transition-colors text-stone-800 hover:text-[#155d6a] dark:text-stone-100 dark:hover:text-stone-300 md:text-[16px]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-2">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors text-stone-800 dark:text-stone-100"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Hamburger Menu for Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-stone-800 dark:text-stone-100"
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
                  d={
                    isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white dark:bg-[#0F0F0F] md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen
          ? "max-h-[400px] border-t border-stone-100 dark:border-stone-800 shadow-xl"
          : "max-h-0 border-t-0 border-transparent shadow-none"
          }`}
      >
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
        </nav>
      </div>
    </header>
  );
}
