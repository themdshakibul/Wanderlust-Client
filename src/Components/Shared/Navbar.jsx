"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { authClient } from "../lib/auth-client";
import UserAccount from "./UserAccount";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { data } = authClient.useSession();
  const user = data?.user;

  // Scroll hole background change korar jonno
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "My Book List", href: "/my-booking" },
    { name: "Add Destinations", href: "/add-destinations" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-black/60 backdrop-blur-xl h-16 md:h-20"
          : "bg-transparent h-20 md:h-24"
      }`}
    >
      <header className="container mx-auto px-4 md:px-6 flex h-full items-center justify-between">
        {/* Left Side: Logo */}
        <Link
          href="/"
          className="shrink-0 transition-transform active:scale-95"
        >
          <Image
            width={140}
            height={40}
            alt="Wanderlast Logo"
            src="/assets/Wanderlast.png"
            className="w-28 md:w-36 h-auto brightness-110"
          />
        </Link>

        {/* Center: Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-gray-200 hover:text-cyan-400 transition-all text-[13px] uppercase tracking-[0.15em] font-semibold"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side: Auth & Menu Toggle */}
        <div className="flex items-center gap-3 md:gap-5">
          <div className="hidden md:flex items-center">
            {user ? (
              <UserAccount user={user} />
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  href="/auth/sigin"
                  className="text-sm font-bold uppercase tracking-widest text-cyan-500 transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/auth/signup"
                  className="px-6 py-2.5 text-xs font-black uppercase tracking-tighter bg-cyan-500 hover:bg-cyan-400 text-black rounded-full transition-all shadow-lg shadow-cyan-500/30"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="lg:hidden p-2 text-white bg-white/10 rounded-full backdrop-blur-md border border-white/20 transition-all active:scale-90"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay - Home Page Style Glassmorphism */}
      <div
        className={`fixed inset-x-0 top-0 h-screen bg-black/90 backdrop-blur-3xl transition-all duration-500 ease-in-out lg:hidden ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 bg-white/10 rounded-full"
          >
            <svg
              className="h-8 w-8 text-cyan-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col items-center justify-center h-[70%] space-y-8">
          {navLinks.map((link) => (
            <li key={link.name} onClick={() => setIsMenuOpen(false)}>
              <Link
                href={link.href}
                className="text-2xl font-bold uppercase tracking-widest text-gray-200 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}

          <li className="pt-10 w-full px-10">
            {user ? (
              <div className="flex flex-col items-center gap-4">
                <UserAccount user={user} />
                <span className="text-gray-400 italic">
                  Welcome back, {user.name}
                </span>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <Link
                  href="/auth/signup"
                  className="w-full text-center py-4 rounded-full bg-cyan-500 text-black font-black uppercase tracking-widest"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up Now
                </Link>
                <Link
                  href="/auth/signin"
                  className="w-full text-center py-4 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
