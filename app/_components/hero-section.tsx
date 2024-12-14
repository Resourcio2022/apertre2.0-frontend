import Model from "@/components/Model";
import { CalendarRange } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

export default function Hero() {
  return (
    <section className="bg-black text-white min-h-screen flex items-center px-8 md:px-12 font-mokoto relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:justify-between w-full">
        <div className="lg:w-1/2 space-y-8 mt-20">
          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            THE
            <span className="text-textyellow">{" "}OPEN SOURCE</span>
            <br />
            CONTRIBUTION
            <br />
            PROGRAMME IS BACK
          </h1>
          <div className="text-lg md:text-2xl font-medium flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <CalendarRange className="text-yellow-400" />
              <p className="mt-1">7RD MARCH - 5TH APRIL</p>
            </div>
            <Link
              href="#register"
              className="bg-[rgba(128,0,128,0.2)] text-textyellow font-medium px-4 py-3 rounded-xl border border-customYellow transition-all duration-300 hover:border-yellow-500 hover:shadow-[0_0_25px_rgba(255,215,0,1),0_0_25px_rgba(255,223,0,0.9)] hover:animate-pulse hover:translate-y-[-2px] w-fit scroll-smooth"
            >
              REGISTER
            </Link>
          </div>
          <p>Presented by</p>
          <div className="flex gap-16 items-center">
            <Link
              href="https://resourcio.in"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Resourcio Website"
            >
              <Image
                src="/Resourcio_Logo.png"
                alt="Resourcio Logo"
                width={150}
                height={150}
              />
            </Link>
            <Link
              href="https://gdg.community.dev/gdg-on-campus-academy-of-technology-hooghly-india/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GDG Website"
            >
              <Image
                src="/gdglogo.svg"
                alt="GDG Logo"
                width={200}
                height={150}
              />
            </Link>
          </div>
        </div>
        <Model />
      </div>
      <div className="hidden md:block absolute bottom-10 right-0 h-10 md:h-96">
        <Image src="/astronaut.png" alt="Astronaut" width={200} height={200} />
      </div>
      {stars.map((star) => (
        <Image
          key={star.id}
          src={star.src}
          alt={`Star ${star.id}`}
          width={star.size}
          height={star.size}
          className="absolute transition-transform duration-300 hover:scale-110 hover:filter hover:brightness-200 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] hidden md:block"
          style={{ left: star.left, top: star.top }}
        />
      ))}
    </section>
  );
}
