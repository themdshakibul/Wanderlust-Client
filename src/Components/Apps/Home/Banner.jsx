import { Separator } from "@heroui/react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center text-white overflow-hidden bg-black">
      {/* Background Section */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/20 to-black/90 z-10" />
        <Image
          fill
          priority
          src="/assets/banner.png"
          alt="Banner"
          className="object-cover scale-105"
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center gap-6 md:gap-8 pt-20 pb-32">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1]">
          Discover Your <br />
          <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Next Adventure
          </span>
        </h1>

        <p className="max-w-xl text-sm sm:text-lg md:text-xl text-gray-300 font-light leading-relaxed px-4">
          Explore breathtaking destinations and create memories that last a
          lifetime with our premium curated experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-none justify-center">
          <button className="px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full transition-all shadow-lg shadow-cyan-500/25 active:scale-95 text-sm sm:text-base">
            EXPLORE NOW
          </button>
          <button className="px-8 py-3.5 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 rounded-full transition-all active:scale-95 text-sm sm:text-base">
            VIEW DESTINATION
          </button>
        </div>
      </div>

      {/* Floating Glassmorphic Search Bar - Ultra Responsive */}
      <div className="absolute bottom-6 md:bottom-10 z-30 w-full max-w-6xl px-4">
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl md:rounded-full p-2 md:p-3 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Location */}
            <div className="w-full lg:flex-1 px-5 py-3 text-left border-b border-white/10 lg:border-none">
              <span className="block text-[10px] uppercase tracking-widest text-cyan-400 font-bold mb-1">
                Location
              </span>
              <input
                type="text"
                placeholder="Where are you going?"
                className="bg-transparent border-none outline-none text-sm w-full placeholder:text-gray-400 focus:ring-0 p-0"
              />
            </div>

            <Separator
              orientation="vertical"
              className="hidden lg:block h-10 bg-white/20 mx-2"
            />

            {/* Date */}
            <div className="w-full lg:flex-1 px-5 py-3 text-left border-b border-white/10 lg:border-none">
              <span className="block text-[10px] uppercase tracking-widest text-cyan-400 font-bold mb-1">
                Date
              </span>
              <p className="text-sm font-medium text-gray-200">
                Anytime / 3 Days
              </p>
            </div>

            <Separator
              orientation="vertical"
              className="hidden lg:block h-10 bg-white/20 mx-2"
            />

            {/* Budget */}
            <div className="w-full lg:flex-1 px-5 py-3 text-left">
              <span className="block text-[10px] uppercase tracking-widest text-cyan-400 font-bold mb-1">
                Budget
              </span>
              <p className="text-sm font-medium text-gray-200">$0 - $3000</p>
            </div>

            {/* Search Button */}
            <div className="w-full lg:w-auto p-1">
              <button className="w-full lg:w-16 h-12 lg:h-16 bg-cyan-500 hover:bg-cyan-400 rounded-xl lg:rounded-full flex items-center justify-center transition-all group shadow-lg shadow-cyan-500/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 lg:h-6 lg:w-6 text-black group-hover:scale-110 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span className="lg:hidden ml-2 font-bold text-black uppercase text-sm">
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
