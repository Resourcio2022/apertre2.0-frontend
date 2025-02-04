"use client"
import { MoveUpIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { teamSections } from "../../constants/team-constant";
import { TeamSection } from "./_components/team-section";

const stars = [
  { id: 1, src: "/star.png", left: "5%", top: "15%", size: 35 },
  { id: 2, src: "/star.png", left: "35%", top: "55%", size: 40 },
  { id: 3, src: "/star.png", left: "50%", top: "15%", size: 25 },
  { id: 4, src: "/star.png", left: "70%", top: "25%", size: 35 },
  { id: 5, src: "/star.png", left: "90%", top: "35%", size: 38 },
  { id: 6, src: "/star.png", left: "7%", top: "75%", size: 45 },
  { id: 7, src: "/star.png", left: "40%", top: "75%", size: 50 },
  { id: 8, src: "/star.png", left: "60%", top: "85%", size: 33 },
  { id: 9, src: "/star.png", left: "80%", top: "75%", size: 30 },
];

export default function Page() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHeader = () => {
    const header = document.getElementById("header");
    if (header) {
      header.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="min-h-screen bg-black text-white p-8" id="header">
      <div>
        <header className="px-10 mb-16">
          <h1 className="text-yellow-400 text-5xl font-bold mb-2 font-mokoto">THE CREW</h1>
          <p className=" text-white font-mokoto">Making sure you take off in style!</p>
        </header>

        <div className="hidden md:flex flex-wrap gap-4 mb-12 px-10 ">
          {teamSections.map((section) => (
            <button
              key={section.id}
              className="relative px-6 py-3 text-yellow-400 font-bold text-lg font-mokoto uppercase rounded-full 
                     bg-black border-2 border-transparent hover:border-pink-400 
                     transition-all duration-300 shadow-lg overflow-hidden"
              onClick={() => {
                const element = document.getElementById(section.id);
                if (element) {
                  const yOffset = -80;
                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
            >
              <span
                className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500
                       opacity-20 pointer-events-none"
              />
              <span className="relative z-10">{section.title}</span>
            </button>
          ))}
        </div>
        {stars.map((star) => (
          <Image
            key={star.id}
            src={star.src}
            alt={`Star ${star.id}`}
            width={star.size}
            height={star.size}
            className="absolute transition-transform duration-300 hover:scale-110 hover:filter hover:brightness-200 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] hidden md:block -z-0 animate-pulse opacity-80"
            style={{ left: star.left, top: star.top, animationDelay: `${star.id * 0.1}s` }}
          />
        ))}
      </div>

      {/* Team Sections */}
      <div className="max-w-7xl mx-auto font-mokoto">
        {teamSections.map((section) => (
          <div key={section.id} className="relative">
            {/* TeamSection should have a higher z-index */}
            <div className="relative z-10">
              <TeamSection
                section={{
                  ...section,
                  id: section.id
                }}
              />
            </div>

            {stars.map((star) => (
              <Image
                key={star.id}
                src={star.src}
                alt={`Star ${star.id}`}
                width={star.size}
                height={star.size}
                className="absolute transition-transform duration-300 hover:scale-110 hover:filter hover:brightness-200 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] hidden md:block z-0 animate-pulse opacity-20"
                style={{ left: star.left, top: star.top, animationDelay: `${star.id * 0.1}s` }}
              />
            ))}
          </div>
        ))}
      </div>
      {/* Stars BG */}
      <div className="fixed inset-0 -z-10">
        <div
          className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] 
          [background-size:32px_32px] opacity-10"
        />
      </div>
      {showButton && (
        <button
          onClick={scrollToHeader}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 
                   p-3 rounded-full shadow-lg shadow-yellow-500/50 
                   hover:from-yellow-300 hover:via-orange-400 hover:to-yellow-300 
                   transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
          aria-label="Scroll to top"
        >

          <span
            className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 
                     blur-xl opacity-50 group-hover:opacity-100 transition-all duration-300"
            aria-hidden="true"
          />

          <MoveUpIcon
            className="w-6 h-6 relative z-10 text-black transition-transform duration-300 
                      group-hover:animate-bounce"
            strokeWidth={2.5}
          />
        </button>
      )}
    </div>
  )
}

