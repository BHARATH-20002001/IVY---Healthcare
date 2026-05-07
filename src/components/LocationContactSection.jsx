import React from "react";
import LocationIcon from "../assets/location-icon1.svg";
import MailIcon from "../assets/main-icon1.svg";
import CallIcon from "../assets/call1.svg";

export default function LocationContactSection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#0F0F0F] transition-colors duration-300">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-0">

        {/* --- MAP & FORM CONTAINER --- */}
        <div className="flex flex-col lg:flex-row gap-[50px] w-full mb-20 md:mb-32">

          {/* Left Column: Google Map */}
          <div className="w-full lg:w-[calc(50%-25px)] bg-[#F6F6F6] dark:bg-[#151515] p-[20px] min-h-[400px] rounded-sm overflow-hidden shadow-[0_4px_25px_rgb(0,0,0,0.05)] dark:shadow-none flex flex-col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2729.079822602127!2d-111.29367158439162!3d47.49129597917726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53424d515f488f7b%3A0x95c80ba4c759560e!2s1130%2017th%20Ave%20S%2C%20Great%20Falls%2C%20MT%2059405!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
              className="flex-1 w-full h-full min-h-[360px] border-0 rounded-sm"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ivy Healthcare Location"
            ></iframe>
          </div>

          {/* Right Column: Form */}
          <div className="w-full lg:w-[calc(50%-25px)] bg-[#F6F6F6] dark:bg-[#151515] py-10 md:py-16 px-[20px] flex flex-col justify-center items-center lg:items-start rounded-sm overflow-hidden shadow-[0_4px_25px_rgb(0,0,0,0.05)] dark:shadow-none">
            <div className="w-full max-w-lg mx-auto lg:mx-0">
              <h2 className="font-redhat font-bold text-3xl md:text-4xl text-stone-900 dark:text-white mb-4">
                Get In Touch!
              </h2>
              <p className="font-jost text-stone-600 dark:text-stone-400 text-base mb-10 leading-relaxed max-w-md">
                get the right service, determine what you need contact us for the most suitable services.
              </p>

              <form className="flex flex-col gap-5 w-full">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white dark:bg-stone-900 border-none rounded-md px-6 py-4 font-jost text-stone-800 dark:text-stone-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#247c8f] transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white dark:bg-stone-900 border-none rounded-md px-6 py-4 font-jost text-stone-800 dark:text-stone-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#247c8f] transition-all"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-white dark:bg-stone-900 border-none rounded-md px-6 py-4 font-jost text-stone-800 dark:text-stone-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#247c8f] transition-all"
                />
                <textarea
                  placeholder="Message..."
                  rows="4"
                  className="w-full bg-white dark:bg-stone-900 border-none rounded-md px-6 py-4 font-jost text-stone-800 dark:text-stone-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#247c8f] transition-all resize-none"
                ></textarea>

                <div className="mt-4">
                  <button
                    type="button"
                    className="bg-[#247c8f] hover:bg-[#1a5e6d] text-white font-redhat font-semibold text-sm tracking-wide px-12 py-4 rounded transition-colors duration-300 shadow-md"
                  >
                    Send Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* --- CONTACT INFO ICONS SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-center text-center">

          {/* Location */}
          <div className="flex flex-col items-center gap-4">
            <img src={LocationIcon} alt="Location" className="w-[50px] h-[50px]" />
            <p className="font-redhat font-bold text-stone-900 dark:text-white text-[15px] md:text-[16px] leading-snug">
              1130 17TH AVENUE SOUTH <br />
              GREAT FALLS, MT 59405
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center gap-4">
            <img src={MailIcon} alt="Email" className="w-[50px] h-[50px]" />
            <p className="font-redhat font-bold text-stone-900 dark:text-white text-[15px] md:text-[16px] leading-snug uppercase">
              INFO@THEIVYATGREATFALLS.COM
            </p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center gap-4">
            <img src={CallIcon} alt="Phone" className="w-[50px] h-[50px]" />
            <p className="font-redhat font-bold text-stone-900 dark:text-white text-[15px] md:text-[16px] leading-snug uppercase">
              +1 (406) 771-4500
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
