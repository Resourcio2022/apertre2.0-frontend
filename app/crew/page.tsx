"use client"
import { teamSections } from "@/constants/team-constant";
import { MoveUpIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TeamSection } from "./_components/team-section";

const stars = [
  { id: 1, src: "/star.png", left: "5%", top: "15%", size: 35 },
  { id: 2, src: "/star.png", left: "25%", top: "35%", size: 20 },
  { id: 3, src: "/star.png", left: "50%", top: "15%", size: 25 },
  { id: 4, src: "/star.png", left: "70%", top: "25%", size: 15 },
  { id: 5, src: "/star.png", left: "85%", top: "35%", size: 35 },
  { id: 6, src: "/star.png", left: "15%", top: "55%", size: 28 },
  { id: 7, src: "/star.png", left: "40%", top: "75%", size: 40 },
  { id: 8, src: "/star.png", left: "60%", top: "45%", size: 22 },
  { id: 9, src: "/star.png", left: "75%", top: "65%", size: 30 },
  { id: 10, src: "/star.png", left: "90%", top: "80%", size: 25 },
  { id: 11, src: "/star.png", left: "30%", top: "90%", size: 18 },
  { id: 12, src: "/star.png", left: "5%", top: "85%", size: 32 },
  { id: 13, src: "/star.png", left: "95%", top: "10%", size: 20 },
  { id: 14, src: "/star.png", left: "45%", top: "30%", size: 28 },
  { id: 15, src: "/star.png", left: "80%", top: "50%", size: 24 }
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

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 relative" id="header">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="relative flex flex-col items-center justify-center min-h-[25vh] mb-8">
          <div className="relative z-10 text-center">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 
                          text-4xl md:text-8xl font-bold mb-2 font-mokoto tracking-wider animate-gradient-x">
              THE CREW
            </h1>
            <p className="text-yellow-400/90 font-mokoto text-base md:text-lg tracking-wide">
              Making sure you take off in style!
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 to-transparent rounded-3xl blur-3xl -z-10" />
        </header>

        {/* Navigation Buttons */}
        <nav className="hidden md:flex items-center justify-center mb-12 px-4">
          <div className="inline-flex flex-nowrap gap-3 p-2 rounded-full bg-zinc-900/50 backdrop-blur-sm border border-yellow-400/20">
            {teamSections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  const element = document.getElementById(section.id);
                  if (element) {
                    const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
                className="group relative px-4 py-2 text-white font-bold text-sm font-mokoto uppercase rounded-full 
                         bg-gradient-to-br from-yellow-400/10 to-amber-500/10
                         border border-yellow-400/20 hover:border-yellow-400/50
                         transition-all duration-300 hover:scale-105 hover:-translate-y-0.5
                         hover:shadow-[0_0_15px_rgba(251,191,36,0.3)] whitespace-nowrap"
              >
                <span className="relative z-10 bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  {section.title}
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/10 to-amber-500/10 opacity-0 
                             group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </button>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <div className="relative">
          <div className="max-w-7xl mx-auto font-mokoto relative z-10">
            {teamSections.map((section) => (
              <div key={section.id} className="relative">
                <TeamSection section={{ ...section, id: section.id }} />
              </div>
            ))}
          </div>

          {/* Animated Stars */}
          {stars.map((star) => (
            <Image
              key={star.id}
              src={star.src}
              alt={`Star ${star.id}`}
              width={star.size}
              height={star.size}
              className="fixed transition-all duration-500 hover:scale-125 hover:brightness-150 
                       hidden md:block opacity-60 hover:opacity-100 animate-twinkle"
              style={{
                left: star.left,
                top: star.top,
                animationDelay: `${star.id * 0.2}s`,
                filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))'
              }}
            />
          ))}
        </div>
      </div>

      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:32px_32px] opacity-5" />
      </div>

      {/* Scroll to Top Button */}
      {showButton && (
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
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 
                        blur-xl opacity-40 group-hover:opacity-70 transition-all duration-500" />
          <MoveUpIcon className="w-6 h-6 relative z-10 text-white group-hover:text-yellow-100 
                              transition-colors duration-300 group-hover:animate-bounce"
            strokeWidth={2.5} />
        </button>
      )}
    </div>
  );
}

