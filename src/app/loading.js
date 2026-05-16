"use client";

import { Spinner } from "@heroui/react";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-80 flex flex-col items-center justify-center bg-black">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-cyan-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Animated Brand Logo / Initial */}
        <div className="relative">
          <div className="text-6xl font-black text-white tracking-tighter animate-pulse">
            W<span className="text-cyan-500 italic">.</span>
          </div>
          {/* Circular Ring Loader */}
          <div className="absolute -inset-4 border-2 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin" />
        </div>

        {/* HeroUI Spinner */}
        <div className="flex flex-col items-center gap-4">
          <Spinner
            size="lg"
            color="primary"
            classNames={{
              circle1: "border-b-cyan-500",
              circle2: "border-b-cyan-500",
            }}
          />

          <div className="space-y-1 text-center">
            <p className="text-white font-black uppercase tracking-[0.5em] text-[10px] animate-pulse">
              Loading Adventure
            </p>
            <div className="flex justify-center gap-1">
              <div className="w-1 h-1 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
              <div className="w-1 h-1 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
              <div className="w-1 h-1 bg-cyan-500 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Text at Bottom */}
      <div className="absolute bottom-12 overflow-hidden">
        <p className="text-white/20 text-[8px] font-bold uppercase tracking-[1em] whitespace-nowrap">
          Discover • Explore • Experience • Wanderlust
        </p>
      </div>
    </div>
  );
};

export default Loading;
