"use client";
import { useGitHub } from "@/hooks/useGithubUser";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Preloader from "./Loader";

interface INavLink {
  name: string;
  url: string;
}

const NAV_LINKS: INavLink[] = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "#about" },
  { name: "Projects", url: "/projects" },
  { name: "Leaderboard", url: "/leaderboard" },
  { name: "Crew", url: "/crew" },
  { name: "Sponsors", url: "/sponsors" },
];

export default function Navbar() {
  const { loading } = useGitHub();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 bg-black left-0 w-full text-white z-[999]">
      <div className="flex items-center justify-between px-6 lg:px-20 py-6">
        {/* Logo aligned to the left */}
        <Link href="/" className="flex items-center">
          <div className="flex items-center">
            <Image
              src="/Logo_primary.svg"
              alt="Logo"
              width={120}
              height={120}
            />
          </div>
        </Link>

        {/* Navigation links aligned to the right */}

        <div className="hidden lg:flex items-center justify-end gap-8 flex-grow">
          <div className="flex flex-wrap justify-center gap-4 text-sm md:gap-6 lg:gap-8 md:text-base font-mokoto">
            {NAV_LINKS.map((item, index) => (
              <Link key={index} href={item.url} className="relative group scroll-smooth">
                <span>{item.name}</span>
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-customYellow transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center">
            {loading ? (
              <Preloader
                bgHeight="20%"
                width="2rem"
                height="2rem"
                color="#ffffff"
              />
            ) : (
              <>
                <SignedOut>
                  <SignInButton>
                    <button className="px-4 py-1 bg-customYellow text-black rounded hover:bg-yellow-600 transition">
                      Sign In
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </>
            )}
          </div>
        </div>

        <button className="lg:hidden text-white" onClick={toggleMobileMenu}>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      <div
        className={`lg:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-black p-6 absolute top-full left-0 w-full`}
      >
        {NAV_LINKS.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="block text-white font-mokoto py-2 relative group w-fit scroll-smooth"
          >
            <span>{item.name}</span>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-customYellow transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
