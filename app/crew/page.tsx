import { teamSections } from "../../constants/team"
import { TeamSection } from "../_components/team-section"
import Image from "next/image";
const stars = [
    { id: 1, src: "/star.png", left: "5%", top: "15%", size: 35 }
] 
  
  console.log(stars);
export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Header */}
      <header className="px-10 mb-16">
        <h1 className="text-yellow-400 text-5xl font-bold mb-2 font-mokoto">THE CREW</h1>
        <p className=" text-white font-mokoto">Making sure you take off in style!</p>
      </header>

      {/* Team Sections */}
      <div className="max-w-7xl mx-auto font-mokoto ">
        {teamSections.map((section) => (
          <TeamSection key={section.id} section={section} />
        ))}
      </div>

      {/* Stars Background */}
      <div className="fixed inset-0 -z-10">
        <div
          className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] 
          [background-size:32px_32px] opacity-20"
        />
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
    
  )
}

