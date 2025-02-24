"use client";
import FAQ from "./_components/faq";
import Hero from "./_components/hero-section";
import Registration from "./_components/registration";
import Sponsor from "./_components/sponsors";
import Plants from "./about-us/_components/plants";

import { useEffect, useState } from "react";
import { MoveUpIcon } from "lucide-react";

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector("#hero") as HTMLElement || null;
      const heroHeight = heroSection?.offsetHeight || 0;
      const scrollPosition = window.scrollY;
      setShowScrollButton(scrollPosition > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToHero = () => {
    const heroSection = document.querySelector("#hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div id="hero">
        <Hero />
      </div>
      <Plants />
      <Registration />
      <Sponsor />
      <FAQ />
      {showScrollButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full 
                   bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400
                   shadow-lg shadow-amber-500/30 
                   transition-all duration-500 
                   hover:shadow-amber-500/50 hover:shadow-xl
                   hover:scale-110 hover:-translate-y-1 
                   hover:from-yellow-400 hover:via-amber-500 hover:to-orange-500
                   group"
          aria-label="Scroll to top"
        >
          <span
            className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 
                        blur-xl opacity-40 group-hover:opacity-70 transition-all duration-500"
          />
          <MoveUpIcon
            className="w-6 h-6 relative z-10 text-white group-hover:text-yellow-100 
                              transition-colors duration-300 group-hover:animate-bounce"
            strokeWidth={2.5}
          />
        </button>
      )}
    </>
  );
}