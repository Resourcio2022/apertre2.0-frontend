"use client";
import { useGitHub } from "@/hooks/useGithubUser";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Loader } from "./Loader";
import ScrollProgress from "../components/ui/ScrollProgress";

type INavLink = {
  name: string;
  url: string;
}

export default function Navbar() {
  const { isSignedIn, loading } = useGitHub();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NAV_LINKS: INavLink[] = [
    { name: "About Us", url: "/about-us" },
    { name: "Timeline", url: "/timeline" },
    { name: "Sponsors", url: "/#sponsors" },
    { name: "Crew", url: "/crew" },
    { name: "Projects", url: "/projects" },
    // { name: "Leaderboard", url: "/leaderboard" },
    ...(isSignedIn ? [{ name: "Profile", url: "/profile" }] : [])
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
    <nav className="sticky top-0 left-0 right-0 h-20 bg-customblack w-full text-white z-[999]">
      <div className="flex items-center justify-between px-6 lg:px-20 py-6 max-h-full">
        {/* Logo aligned to the left */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo_primary.svg"
            alt="Logo"
            width={120}
            height={120}
          />
        </Link>

        {/* Navigation links aligned to the right */}
        <div className="hidden lg:flex items-center justify-end gap-8">
          <div className="flex flex-wrap justify-center gap-4 text-sm md:gap-6 lg:gap-8 md:text-base font-mokoto">
            {NAV_LINKS.map((item, index) => (
              <Link key={index} href={item.url} className="relative group">
                <span>{item.name}</span>
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-customYellow transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center">
            {loading ? (
              <Loader
                bgHeight="10%"
                width="1.4rem"
                height="1.4rem"
                color="#ffffff"
              />
            ) : (
              <>
                <SignedOut>
                  <SignInButton>
                    <button className="px-4 py-1 bg-customYellow text-black rounded hover:bg-yellow-600 transition font-mokoto">
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

        {/* Mobile sign-in button and hamburger */}
        <div className="lg:hidden flex items-center gap-4">
          {loading ? (
            <Loader
              bgHeight="10%"
              width="1.4rem"
              height="1.4rem"
              color="#ffffff"
            />
          ) : (
            <>
              <SignedOut>
                <SignInButton>
                  <button className="px-3 py-1 bg-customYellow text-black rounded hover:bg-yellow-600 transition font-mokoto text-sm">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </>
          )}
          <button
            className="text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>

      <div className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-black p-6 absolute top-full left-0 w-full`}>
        {NAV_LINKS.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="block text-white font-mokoto py-2 text-center"
          >
            <span onClick={toggleMobileMenu}>{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
    <ScrollProgress />
    </>
  );
}

