"use client";
import Image from "next/image";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import useDetectDevice from "../_utils/device-detect";

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

const Icons = [
  {
    imageUrl: "/community_partners/capybara.png",
    alt: "CommunityPartner-1",
  },
  {
    imageUrl: "/community_partners/capybara.png",
    alt: "CommunityPartner-2",
  },
];

const Icons2 = [
  {
    imageUrl: "/community_partners/capybara.png",
    alt: "CommunityPartner-3",
  },
  {
    imageUrl: "/community_partners/capybara.png",
    alt: "CommunityPartner-4",
  },
  {
    imageUrl: "/community_partners/capybara.png",
    alt: "CommunityPartner-5",
  },
  {
    imageUrl: "/community_partners/capybara.png",
    alt: "CommunityPartner-6",
  },
];

const Icons3 = [
  {
    imageUrl: "/community_partners/capybara.png",
    alt: "CommunityPartner-7",
  },
];

const Icons4 = [
  {
    imageUrl: "/community_partners/capybara.png",
    alt: "CommunityPartner-8",
  },
  {
    imageUrl: "/community_partners/capybara.png",
    alt: "CommunityPartner-9",
  },
  {
    imageUrl: "/community_partners/capybara.png",
    alt: "CommunityPartner-10",
  },
];

export default function CommunityPartner() {
  const { isMobile, isTablet } = useDetectDevice();
  return (
    <section
      className="h-[90vh] sm:h-[calc(max(70vh,960px))] lg:h-[100vh] flex py-14 sm:py-20 justify-end px-10  lg:px-20 text-white font-sans bg-gradient-to-tl from-[#272323] to-black relative"
      id=""
    >
      <div className="absolute flex h-full w-full flex-col items-center justify-center overflow-hidden z-10 left-1/2 -translate-x-1/2 md:left-0 md:-translate-x-1/3 top-1/2 -translate-y-1/2">
        <OrbitingCircles
          iconSize={isMobile ? 35 : isTablet ? 50 : 80}
          radius={isMobile ? 80 : isTablet ? 100 : 120}
          speed={0.8}
        >
          {Icons.map((communitypartner, i) => (
            <Image
              key={i}
              src={communitypartner.imageUrl}
              alt={communitypartner.alt}
              width={70}
              height={70}
              className="z-10 rounded-full"
            />
          ))}
        </OrbitingCircles>
        <OrbitingCircles
          iconSize={isMobile ? 40 : isTablet ? 60 : 90}
          radius={isMobile ? 127 : isTablet ? 200 : 240}
          speed={1}
        >
          {Icons3.map((communitypartner, i) => (
            <Image
              key={i}
              src={communitypartner.imageUrl}
              alt={communitypartner.alt}
              width={70}
              height={70}
              className="z-10 rounded-full"
            />
          ))}
        </OrbitingCircles>
        <OrbitingCircles
          iconSize={isMobile ? 50 : isTablet ? 70 : 160}
          radius={isMobile ? 175 : isTablet ? 280 : 380}
          speed={1.5}
        >
          {Icons2.map((communitypartner, i) => (
            <Image
              key={i}
              src={communitypartner.imageUrl}
              alt={communitypartner.alt}
              width={70}
              height={70}
              className="z-10 rounded-full"
            />
          ))}
        </OrbitingCircles>
        <Image
          src="/community_partners/logo.png"
          width={70}
          height={60}
          alt="Apertre capybara"
          className="absolute w-[10%] sm:w-auto"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
      <div className="flex flex-col items-center h-full justify-between md:justify-start md:items-end w-full gap-5">
        <h2 className="text-textyellow text-2xl sm:text-3xl lg:text-5xl font-mokoto text-nowrap">
          Community Partners
        </h2>
        <div className=" text-center md:text-right text-sm sm:text-lg md:text-xl text-white font-poppins ">
          <p>Together, our community partners empower more</p>
          <p> developers to join Apertre.</p>
        </div>
      </div>

      {stars.map((star) => (
        <Image
          key={star.id}
          src={star.src}
          alt={`Star ${star.id}`}
          width={star.size}
          height={star.size}
          className="absolute transition-transform duration-300 hover:scale-110 hover:filter hover:brightness-200 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] hidden md:block -z-0 animate-pulse opacity-80"
          style={{
            left: star.left,
            top: star.top,
            animationDelay: `${star.id * 0.1}s`,
          }}
        />
      ))}
    </section>
  );
}
