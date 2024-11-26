"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface INavLink {
  name: string;
  url: string;
}

// Update links to redirect to sections and not page.
const NAV_LINKS: INavLink[] = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about-us" },
  { name: "Projects", url: "/projects" },
  { name: "Leaderboard", url: "/leaderboard" },
  { name: "Crew", url: "/crew" },
  { name: "Sponsors", url: "/sponsors" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent text-white z-50">
      <div className="flex items-center justify-between px-6 lg:px-20 py-6">
        <div className="flex items-center">
          <Image src="/Logo_primary.svg" alt="Logo" width={120} height={120} />
        </div>

        <button className="lg:hidden text-white" onClick={toggleMobileMenu}>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>

        <div className="hidden lg:flex flex-wrap justify-center gap-4 text-sm md:gap-6 lg:gap-8 md:text-base font-mokoto">
          {NAV_LINKS.map((item, index) => (
            <Link key={index} href={item.url} className="relative group">
              <span>{item.name}</span>
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-customYellow transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
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
            className="block text-white font-mokoto py-2 relative group w-fit"
          >
            <span>{item.name}</span>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-customYellow transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
    </nav>
  );
}