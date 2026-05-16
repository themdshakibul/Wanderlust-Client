"use client";

import React from "react";
import { Button } from "@heroui/react";
import { FiArrowLeft, FiCompass } from "react-icons/fi";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden px-6">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Animated Icon */}
        <div className="mb-8 p-6 bg-white/5 rounded-full border border-white/10 relative group">
          <FiCompass className="text-7xl text-cyan-500 animate-spin-slow group-hover:text-white transition-colors duration-500" />
          <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full scale-50 group-hover:scale-110 transition-transform" />
        </div>

        {/* 404 Text */}
        <h1 className="text-[12rem] md:text-[18rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white to-white/10 select-none">
          404
        </h1>

        {/* Message */}
        <div className="max-w-md -mt-10 md:-mt-20">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            Lost in <span className="text-cyan-500 italic">Paradise?</span>
          </h2>
          <p className="text-gray-400 font-medium leading-relaxed mb-10">
            The destination you are looking for doesn t exist or has been moved
            to another hidden gem. Let s get you back on track!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link href={"/"}>
            <Button
              variant="bordered"
              className="border-white/10 text-white font-black uppercase tracking-widest px-8 h-14 rounded-full hover:bg-white hover:text-black transition-all"
              startContent={<FiArrowLeft />}
            >
              Go Back
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
