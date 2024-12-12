import Model from "@/components/Model";
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
        <div className="lg:w-1/2 space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight lg:mt-20">
            THE
            <span className="text-textyellow"> OPEN SOURCE</span>
            <br />
            CONTRIBUTION
            <br />
            PROGRAMME IS BACK
          </h1>
          <div className="text-lg md:text-2xl font-medium flex flex-col gap-6">
            <div className="flex gap-2">
              <Image
                src="/calendar-02.png"
                alt="Calendar Icon"
                width={30}
                height={30}
              />
              <p className="mt-1">7RD MARCH - 5TH APRIL</p>
            </div>
            <Link
              href="#register"
              className="bg-[rgba(128,0,128,0.2)] text-textyellow font-medium px-4 py-3 rounded-xl border border-customYellow hover:bg-yellow-100/10 transition-colors duration-300 w-fit scroll-smooth"
            >
              REGISTER
            </Link>
          </div>
          <p>Presented by</p>
          <Image
            src="/Resourcio_Logo.png"
            alt="Resourcio Logo"
            width={150}
            height={150}
            className="inline-block mr-2.5"
            style={{ position: "relative", top: "20px" }}
          />
          <Image
            src="/gdglogo.svg"
            alt="GDG Logo"
            width={200}
            height={150}
            className="inline-block ml-2.5"
          />
        </div>

        <Model />
      </div>
      <div className="absolute bottom-0 right-0 mb-0 mr-0">
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
