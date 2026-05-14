"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { authClient } from "../lib/auth-client";
import UserAccount from "./UserAccount";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data } = authClient.useSession();
  const user = data?.user;

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="container mx-auto px-2 flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
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
          <ul className="hidden items-center gap-4 md:flex">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/destinations">Destinations</Link>
            </li>
            <li>
              <Link href="/my-booking">My Book List</Link>
            </li>
            <li>
              <Link href="/add-destinations">Add Destinations</Link>
            </li>
          </ul>
        </div>
        <div>
          <Image
            width={100}
            height={100}
            alt="nav logo"
            src={"/assets/Wanderlast.png"}
          />
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          {user ? (
            <UserAccount user={user} />
          ) : (
            <>
              <li>
                <Link href="/auth/sigin">Login</Link>
              </li>
              <li>
                <Link href="/auth/signup">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link href="/" className="block py-2">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2">
                Destinations
              </Link>
            </li>
            <li>
              <Link href="/my-booking" className="block py-2">
                My Book List
              </Link>
            </li>
            {user ? (
              <UserAccount user={user} />
            ) : (
              <>
                <li>
                  <Link href="/auth/sigin">Login</Link>
                </li>
                <li>
                  <Link href="/auth/signup">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
