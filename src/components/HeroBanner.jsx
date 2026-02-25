import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import BannerImage1 from "../../public/home-banner-bg.png";
// 1. Array holding your slide content
const SLIDES = [
  {
    id: 1,
    image: BannerImage1,
    subtitle: "MAKE YOUR STRATEGY STRONG",
    title: "GROWN BUSINESS",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.",
    ctaText: "Get Started",
    ctaLink: "/services",
  },
  {
    id: 2,
    image: BannerImage1,
    subtitle: "ELEVATE YOUR WORKSPACE",
    title: "WORK TOGETHER",
    description:
      "Collaborate with the best minds in the industry to build solutions that scale and drive real results for your organization.",
    ctaText: "View Amenities",
    ctaLink: "/amenities",
  },
  {
    id: 3,
    image: BannerImage1,
    subtitle: "ELEVATE WORKSPACE",
    title: "WORK TOGETHER",
    description:
      "Collaborate with the best minds in the industry to build solutions that scale and drive real results for your organization.",
    ctaText: "View Amenities",
    ctaLink: "/amenities",
  },
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const extendedSlides = [SLIDES[SLIDES.length - 1], ...SLIDES, SLIDES[0]];

  // 2. Navigation Functions
  const nextSlide = useCallback(() => {
    if (currentSlide >= extendedSlides.length - 1) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  }, [currentSlide, extendedSlides.length]);

  const prevSlide = useCallback(() => {
    if (currentSlide <= 0) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  }, [currentSlide]);

  const handleTransitionEnd = () => {
    if (currentSlide === 0) {
      setIsTransitioning(false);
      setCurrentSlide(SLIDES.length);
    } else if (currentSlide === extendedSlides.length - 1) {
      setIsTransitioning(false);
      setCurrentSlide(1);
    }
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[600px] md:h-[80vh] overflow-hidden group">
      <div
        className={`flex w-full h-full ${
          isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedSlides.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="relative z-20 h-full px-5 md:px-10 lg:px-20 flex flex-col justify-center items-start text-white">
              <span className="font-jost text-sm md:text-base font-medium tracking-widest uppercase mb-2">
                {slide.subtitle}
              </span>
              <h1 className="font-redhat text-5xl md:text-7xl font-black tracking-tight mb-6">
                {slide.title}
              </h1>
              <p className="font-jost text-lg md:text-xl max-w-2xl mb-8 leading-relaxed text-stone-200">
                {slide.description}
              </p>
              <Link
                to={slide.ctaLink}
                className="font-redhat font-semibold text-white bg-[#155d6a] hover:bg-[#0f4651] px-8 py-3 rounded-md transition-colors"
              >
                {slide.ctaText}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Navigation Arrows */}
      <div className="absolute z-30 w-full flex justify-center gap-4 bottom-12 md:bottom-auto md:top-1/2 md:justify-between md:px-4 md:-translate-y-1/2 pointer-events-none">
        <button
          onClick={prevSlide}
          className="bg-[#37373706] hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all pointer-events-auto opacity-100 md:opacity-0 md:group-hover:opacity-100"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all pointer-events-auto opacity-100 md:opacity-0 md:group-hover:opacity-100"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
