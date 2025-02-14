"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TimelineEvent {
  title: string;
  date: string;
  size: string;
  status: "done" | "ongoing" | "upcoming";
  position: "left" | "right";
}

const events: TimelineEvent[] = [
  {
    title: "Mentor Registration",
    date: "26TH FEB 2025",
    status: "done",
    size: "1040",
    position: "left",
  },
  {
    title: "APERTRE 2.0 OPENING CEREMONY",
    date: "7TH MARCH 2025",
    status: "ongoing",
    size: "1016",
    position: "right",
  },
  {
    title: "Mini Games #1",
    date: "10TH - 11TH MARCH 2025",
    status: "upcoming",
    size: "1000",
    position: "left",
  },
];

const SvgTimelineCard = ({ event }: { event: TimelineEvent }) => {
  let xPos;
  if (event.size === "1040") xPos = 1040;
  else if (event.size === "1016") xPos = 1020;
  else if (event.size === "1000") xPos = 1000;
  else xPos = 1000;

  return (
    <div
      className={`timeline-card relative w-full md:w-[45%] ${event.position === "left"
        ? "md:mr-auto md:pr-12 px-4"
        : "md:ml-auto md:pl-12 px-4"
        }`}
      data-position={event.position}
    >
      <svg
        viewBox="0 0 1320 698"
        className="w-full h-auto"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <mask id="c" fill="#fff">
          <path
            fillRule="evenodd"
            d="M70 0C31.34 0 0 31.34 0 70v558c0 38.66 31.34 70 70 70h724c30.376 0 55-24.624 55-55V404c0-30.376 24.624-55 55-55h361c30.38 0 55-24.624 55-55V70c0-38.66-31.34-70-70-70H70Z"
            clipRule="evenodd"
          />
        </mask>
        <path
          fill="url(#a)"
          fillRule="evenodd"
          d="M70 0C31.34 0 0 31.34 0 70v558c0 38.66 31.34 70 70 70h724c30.376 0 55-24.624 55-55V404c0-30.376 24.624-55 55-55h361c30.38 0 55-24.624 55-55V70c0-38.66-31.34-70-70-70z"
          clipRule="evenodd"
        />
        <text
          x="90"
          y="140"
          fill="white"
          className="text-2xl md:text-4xl font-bold"
          fontFamily="Arial"
        >
          {event.title}
        </text>
        <path
          fill="url(#b)"
          d="M13 70c0-31.48 25.52-57 57-57v-26c-45.84 0-83 37.16-83 83h26Zm0 558V70h-26v558h26Zm57 57c-31.48 0-57-25.52-57-57h-26c0 45.84 37.16 83 83 83v-26Zm724 0H70v26h724v-26Zm68-42V404h-26v239h26Zm42-281h361v-26H904v26Zm403-292v224h26V70h-26Zm-57-57c31.48 0 57 25.52 57 57h26c0-45.84-37.16-83-83-83v26ZM70 13h1180v-26H70v26Zm1195 349c37.56 0 68-30.445 68-68h-26c0 23.196-18.8 42-42 42v26Zm-403 42c0-23.196 18.804-42 42-42v-26c-37.555 0-68 30.445-68 68h26Zm-68 307c37.555 0 68-30.445 68-68h-26c0 23.196-18.804-42-42 42v26Z"
          mask="url(#c)"
        />
        <rect
          width={428}
          height={306}
          x={885.5}
          y={385.5}
          fill="url(#d)"
          stroke="url(#e)"
          strokeWidth={13}
          rx={48.5}
        />
        <text
          x="100"
          y="540"
          fill="#FBCE1F"
          fontStyle="var(--font-mokoto)"
          className="text-xl md:text-4xl font-bold"
          fontFamily="Arial"
        >
          {event.date}
        </text>
        <path
          fill="#E0A800"
          fillOpacity={0.41}
          d="M1139.62 578h-80.33c-15.62 0-28.29 12.667-28.29 28.292 0 15.625 12.67 28.291 28.29 28.291h80.33c15.63 0 28.3-12.666 28.3-28.291S1155.25 578 1139.62 578Z"
        />
        <path
          fill="#E0A800"
          fillOpacity={0.41}
          d="M1139.62 618.417c6.7 0 12.13-5.429 12.13-12.125 0-6.697-5.43-12.125-12.13-12.125-6.69 0-12.12 5.428-12.12 12.125 0 6.696 5.43 12.125 12.12 12.125Z"
        />
        <text
          x={xPos}
          y="500"
          fill="#FBCE1F"
          className="text-2xl md:text-5xl font-bold"
          fontFamily="Arial"
        >
          {event.status}
        </text>
        <path
          stroke="#FBCE1F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={8.083}
          d="M1139.62 578h-80.33c-15.62 0-28.29 12.667-28.29 28.292 0 15.625 12.67 28.291 28.29 28.291h80.33c15.63 0 28.3-12.666 28.3-28.291S1155.25 578 1139.62 578Z"
        />
        <path
          stroke="#FBCE1F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={8.083}
          d="M1139.62 618.417c6.7 0 12.13-5.429 12.13-12.125 0-6.697-5.43-12.125-12.13-12.125-6.69 0-12.12 5.428-12.12 12.125 0 6.696 5.43 12.125 12.12 12.125Z"
        />
        <defs>
          <linearGradient
            id="a"
            x1={434.271}
            x2={841.241}
            y1={35.51}
            y2={752.223}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.123} stopColor="#0B0A0A" />
            <stop offset={1} stopColor="#272323" />
          </linearGradient>
          <linearGradient
            id="b"
            x1={62}
            x2={828.5}
            y1={0}
            y2={718}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.17} stopColor="#C29F18" />
            <stop offset={0.305} stopColor="#957A12" />
            <stop offset={1} stopColor="#0B0B0A" />
          </linearGradient>
          <linearGradient
            id="d"
            x1={1024.09}
            x2={1233.94}
            y1={395.229}
            y2={665.39}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.123} stopColor="#0B0A0A" />
            <stop offset={1} stopColor="#272323" />
          </linearGradient>
          <linearGradient
            id="e"
            x1={899.714}
            x2={1227.02}
            y1={379}
            y2={603.127}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.17} stopColor="#C29F18" />
            <stop offset={0.305} stopColor="#957A12" />
            <stop offset={1} stopColor="#0B0B0A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const TimelineDot = ({ active }: { active: boolean }) => (
  <div
    className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full border-2 
      ${active ? "bg-yellow-500 border-yellow-600" : "bg-gray-700 border-gray-600"}
      transform transition-all duration-500 ${active ? "scale-125" : "scale-100"}`}
  />
);

const AnimatedTimeline = () => {
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
      <div ref={timelineRef} className="max-w-5xl mx-auto relative">
        <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-gray-800">
          <div
            ref={progressRef}
            className="w-full bg-yellow-500 h-full transform origin-top"
          />
        </div>
        <div className="relative space-y-12 md:space-y-24">
          {events.map((event, index) => (
            <div key={event.title} className="relative">
              <TimelineDot active={index === 0} />
              <SvgTimelineCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedTimeline;
