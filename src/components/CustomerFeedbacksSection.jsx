import React, { useState, useEffect } from "react";
import GoogleIcon from "../assets/google-icon.svg";

const FEEDBACKS = [
  {
    id: 1,
    name: "David Smith",
    role: "Finance",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop",
    quote: `"Dabus nisl aliquet congue tellus nascetur lectus pien mattis arcu dictums augue volutpat felis etiam suspen disse rhoncus mauris dignissim ante"`,
    rating: 5
  },
  {
    id: 2,
    name: "Mark Jone",
    role: "Finance",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&auto=format&fit=crop",
    quote: `"Dabus nisl aliquet congue tellus nascetur lectus pien mattis arcu dictums augue volutpat felis etiam suspen disse rhoncus mauris dignissim ante"`,
    rating: 4
  },
  {
    id: 3,
    name: "Sarah Lee",
    role: "Marketing",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop",
    quote: `"Dabus nisl aliquet congue tellus nascetur lectus pien mattis arcu dictums augue volutpat felis etiam suspen disse rhoncus mauris dignissim ante"`,
    rating: 5
  },
  {
    id: 4,
    name: "John Doe",
    role: "Operations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop",
    quote: `"Dabus nisl aliquet congue tellus nascetur lectus pien mattis arcu dictums augue volutpat felis etiam suspen disse rhoncus mauris dignissim ante"`,
    rating: 5
  }
];

// Google icon is now imported

const StarIcon = ({ filled }) => (
  <svg className={`w-5 h-5 ${filled ? "text-[#FFC107]" : "text-[#E0E0E0]"}`} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

export default function CustomerFeedbacksSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Drag states
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      // Show 2 cards on lg (1024px) and above, 1 card below
      setItemsPerView(window.innerWidth >= 1024 ? 2 : 1);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Clone feedbacks for infinite scroll. We need enough clones to fill the view.
  const clonedFeedbacks = [...FEEDBACKS, ...FEEDBACKS.slice(0, 2)];

  // Auto-scroll logic
  useEffect(() => {
    if (isDragging) return; // Pause auto-scroll when dragging
    const timer = setInterval(() => {
      if (!isTransitioning) setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 4000); // Swipe every 4 seconds
    return () => clearInterval(timer);
  }, [isTransitioning, isDragging]);

  // Handle infinite loop seamless jump
  useEffect(() => {
    if (currentIndex >= FEEDBACKS.length) {
      // Wait for the slide transition to finish (700ms), then silently jump back to 0
      const resetTimer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700);
      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex]);

  // --- Mouse & Touch Dragging Handlers ---
  const handleDragStart = (e) => {
    setIsDragging(true);
    setIsTransitioning(false); // disable smooth transition during drag for instant feedback
    setStartX(e.type.includes('mouse') ? e.pageX : e.touches[0].pageX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setIsTransitioning(true);

    if (dragOffset < -50) {
      // Swiped left
      setCurrentIndex((prev) => prev + 1);
    } else if (dragOffset > 50) {
      // Swiped right
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : FEEDBACKS.length - 1));
    }
    setDragOffset(0);
  };

  return (
    <section className="py-16 md:py-24 bg-[#F6F6F6] dark:bg-[#111111] transition-colors duration-300">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-0 text-center">
        
        {/* --- HEADER --- */}
        <span className="font-jost text-[#247c8f] dark:text-[#56b9cb] text-sm md:text-base tracking-[0.2em] uppercase font-semibold mb-3 block">
          Feedbacks
        </span>
        <h2 className="font-redhat font-black text-3xl md:text-5xl lg:text-[54px] text-stone-900 dark:text-white uppercase mb-16">
          Customer Feedbacks
        </h2>

        {/* --- CARDS SLIDER CONTAINER --- */}
        <div 
          className="relative w-full overflow-hidden py-8 cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <div 
            className={`flex gap-6 ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
            style={{ 
              transform: `translateX(calc(-${currentIndex * (100 / itemsPerView)}% - ${currentIndex * (1.5 / itemsPerView)}rem + ${dragOffset}px))` 
            }}
          >
            {clonedFeedbacks.map((feedback, idx) => (
              <div 
                key={`${feedback.id}-${idx}`} 
                onDragStart={(e) => e.preventDefault()} // prevent default image drag
                className="w-full lg:w-[calc(50%-0.75rem)] flex-shrink-0 bg-white dark:bg-stone-900 rounded-xl shadow-[0_10px_30px_rgb(0,0,0,0.06)] dark:shadow-none text-left flex flex-col justify-between"
              >
                {/* Top Section */}
                <div className="p-8 md:p-10 pb-6 border-b border-stone-100 dark:border-stone-800">
                  <div className="flex items-center gap-4 mb-6">
                    {/* Image with Quote Badge */}
                    <div className="relative">
                      <img 
                        src={feedback.image} 
                        alt={feedback.name} 
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-[#e73b3b] w-7 h-7 rounded-full flex items-center justify-center shadow-sm">
                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                    </div>
                    {/* User Info */}
                    <div>
                      <h4 className="font-redhat font-bold text-lg text-stone-900 dark:text-white">
                        {feedback.name}
                      </h4>
                      <span className="font-jost text-stone-500 dark:text-stone-400 text-sm">
                        {feedback.role}
                      </span>
                    </div>
                  </div>
                  
                  {/* Quote Paragraph */}
                  <p className="font-jost text-stone-600 dark:text-stone-300 text-base md:text-lg leading-relaxed">
                    {feedback.quote}
                  </p>
                </div>

                {/* Bottom Section (Google & Stars) */}
                <div className="px-8 py-5 flex justify-between items-center bg-white dark:bg-stone-900 rounded-b-xl">
                  <img src={GoogleIcon} alt="Google" className="w-8 h-8" />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} filled={i < feedback.rating} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
