"use client";

import { Separator } from "@heroui/react";
import { FiMapPin, FiCalendar, FiUsers, FiSearch } from "react-icons/fi";

const Banner = () => {
  return (
    <div className="relative w-full min-h-screen lg:h-[90vh] flex flex-col items-center justify-center overflow-hidden py-20 lg:py-0">
      {/* Background Image with Deep Blue Overlay */}
      <div className="absolute inset-0 bg-[url('/assets/banner.png')] bg-cover bg-center bg-no-repeat transition-transform duration-1000 lg:hover:scale-105">
        <div className="absolute inset-0 bg-linear-to-b from-cyan-900/70 via-black/40 to-black/80" />
      </div>

      {/* Content Section */}
      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center gap-6 mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[1.1]">
          Discover Your <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-cyan-300">
            Next Adventure
          </span>
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-blue-50/80 max-w-2xl leading-relaxed font-light">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences. Your journey starts here.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
          <button className="group px-8 py-4 bg-cyan-600 text-white font-bold rounded-full transition-all hover:bg-cyan-500 hover:shadow-[0_0_30px_rgba(73, 124, 233, 0.4)] active:scale-95">
            <span className="flex items-center justify-center gap-2 uppercase tracking-wider text-sm">
              Explore Now <FiSearch />
            </span>
          </button>

          <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full transition-all hover:bg-white hover:text-cyan-900 active:scale-95">
            <span className="uppercase tracking-wider text-sm">
              View Destinations
            </span>
          </button>
        </div>
      </div>

      {/* Floating Search Bar Section - Fully Responsive */}
      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6">
        <div className="bg-cyan-950/30 backdrop-blur-2xl border border-white/10 rounded-[2rem] lg:rounded-full p-4 lg:p-2 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-11 gap-2 items-center">
            {/* Location */}
            <div className="lg:col-span-3 flex items-center gap-3 px-6 py-3 hover:bg-white/5 rounded-full transition-colors cursor-pointer group">
              <div className="p-3 bg-cyan-500/20 rounded-full text-cyan-300 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                <FiMapPin size={18} />
              </div>
              <div className="text-left">
                <h3 className="text-blue-100 text-[10px] font-bold uppercase tracking-widest">
                  Location
                </h3>
                <p className="text-white text-sm font-medium">
                  City or Destination
                </p>
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-1 justify-self-center">
              <Separator
                variant="tertiary"
                orientation="vertical"
                className="h-8 bg-white/10"
              />
            </div>

            {/* Date */}
            <div className="lg:col-span-3 flex items-center gap-3 px-6 py-3 hover:bg-white/5 rounded-full transition-colors cursor-pointer group">
              <div className="p-3 bg-cyan-500/20 rounded-full text-cyan-300 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                <FiCalendar size={18} />
              </div>
              <div className="text-left">
                <h3 className="text-blue-100 text-[10px] font-bold uppercase tracking-widest">
                  Date
                </h3>
                <p className="text-white text-sm font-medium">
                  Anytime / 3 Days
                </p>
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-1 justify-self-center">
              <Separator
                variant="tertiary"
                orientation="vertical"
                className="h-8 bg-white/10"
              />
            </div>

            {/* Travelers */}
            <div className="lg:col-span-2 flex items-center gap-3 px-6 py-3 hover:bg-white/5 rounded-full transition-colors cursor-pointer group">
              <div className="p-3 bg-cyan-500/20 rounded-full text-cyan-300 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                <FiUsers size={18} />
              </div>
              <div className="text-left">
                <h3 className="text-blue-100 text-[10px] font-bold uppercase tracking-widest">
                  Travelers
                </h3>
                <p className="text-white text-sm font-medium">5-10 People</p>
              </div>
            </div>

            {/* Search Button */}
            <div className="lg:col-span-1 p-1">
              <button className="w-full bg-cyan-600 hover:bg-cyan-500 text-white h-14 lg:h-14 lg:w-14 rounded-full flex items-center justify-center transition-all active:scale-90 shadow-lg shadow-blue-600/30">
                <FiSearch size={22} />
                <span className="lg:hidden ml-2 font-bold uppercase tracking-wider text-sm">
                  Search
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
