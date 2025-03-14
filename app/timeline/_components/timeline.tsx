"use client";
export { AnimatedTimeline };
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AnimatedTimeline({ children }: { children: React.ReactNode }) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current || !progressRef.current) return;

    gsap.fromTo(
      progressRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "top",
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    const cards = gsap.utils.toArray<HTMLElement>(".timeline-card");
    cards.forEach((card) => {
      const position = card.dataset.position;

      const config = {
        start: position === "left" ? -100 : 100,
        end: 0,
      };

      gsap.fromTo(
        card,
        {
          x: config.start,
          opacity: 0,
        },
        {
          x: config.end,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-black py-10 md:py-20 px-4">
      <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold font-mokoto tracking-wider text-yellow-500 text-center mb-20">
        Apertre 2.0 Timeline
      </h1>
      <div ref={timelineRef} className="max-w-5xl mx-auto relative">
        <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-gray-800">
          <div
            ref={progressRef}
            className="w-full bg-yellow-500 h-full transform origin-top"
          />
        </div>
        <div className="relative space-y-12 md:space-y-24">
          {children}
        </div>
      </div>
    </div>
  );
};
