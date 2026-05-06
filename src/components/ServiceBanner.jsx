import React from "react";
import ServiceBannerImg from "../assets/servicebannerimg.png";
import BannerBottomImage from "../assets/all-banner-bottom-image.png";

export default function ServiceBanner() {
  return (
    <section className="relative w-full h-[350px] md:h-[450px] overflow-hidden">
      {/* Background Image */}
      {/* Using an Unsplash team meeting image as a placeholder. Replace with your actual asset. */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${ServiceBannerImg})`,
        }}
      />

      {/* Overlay with #000000 at 61% opacity */}
      <div className="absolute inset-0 bg-[#000000] opacity-[0.61]" />

      {/* 
        Bottom Right Decorative Image / Shape 
      */}
      <img
        src={BannerBottomImage}
        alt=""
        className="absolute bottom-0 right-0 h-4/5 w-auto pointer-events-none z-0"
      />

      {/* Content Container */}
      <div className="relative z-10 h-full w-full max-w-[1240px] mx-auto px-[20px] md:px-0 flex flex-col justify-center items-start">
        {/* Font sizes and family matched from HeroBanner */}
        <h1 className="font-redhat text-5xl md:text-7xl font-black tracking-tight text-white uppercase drop-shadow-md">
          Our Services
        </h1>
      </div>
    </section>
  );
}
