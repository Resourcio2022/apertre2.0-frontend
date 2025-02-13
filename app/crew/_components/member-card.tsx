"use"
import { TeamRole } from "@/constants/team-constant";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const planets = {
  organisers: '/crew/planets/design.svg',
  techies: '/crew/planets/tech.svg',
  designers: '/crew/planets/planet.svg',
  content: '/crew/planets/content.svg',
  socialities: '/crew/planets/social.svg',
  marketters: '/crew/planets/market.svg',
  video: ''
}

// Remove linkedin and instagram from imports and interface
interface MemberCardProps {
  name: string
  image: string
  accentColor: string
  github?: string
  role: TeamRole
}

const iconStyle = "w-6 h-6 transition-all duration-300 relative z-10 text-white group-hover/link:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
const linkStyle = "relative p-3 rounded-full bg-gradient-to-br from-amber-500/10 to-orange-500/10 hover:from-amber-500/30 hover:to-orange-500/30 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(251,191,36,0.5)] border border-white/10 hover:border-white/30 group/link"

export function MemberCard({ name, image, github, role }: MemberCardProps) {
  const getPlanetSrc = () => planets[role] || '/crew/planets/planet.svg'

  return (
    <div className="relative group w-full">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl blur opacity-0 
                    group-hover:opacity-30 transition duration-700" />

      <div className="relative rounded-2xl overflow-hidden bg-zinc-900/90 backdrop-blur-sm">
        {/* Card Content Container */}
        <div className="aspect-square relative overflow-hidden">
          {/* Planet Icon */}
          <div className="absolute -top-2 -left-2 w-12 h-12 rounded-full z-20 bg-black/90 p-0.5
                        shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_25px_rgba(251,191,36,0.3)]
                        transition-all duration-700">
            <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-yellow-400/20 to-amber-600/20">
              <Image
                src={getPlanetSrc()}
                alt={`${role} Planet`}
                width={48}
                height={48}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out
                         group-hover:rotate-[360deg] group-hover:scale-110"
              />
            </div>
          </div>

          {/* Member Image */}
          <div className="w-full h-full transform transition-all duration-700">
            <Image
              src={image}
              alt={name}
              width={300}
              height={300}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 
                       group-hover:scale-105 group-hover:filter group-hover:brightness-105"
            />

            {/* Overlay Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-75" />
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-amber-500/20 opacity-0 
                          group-hover:opacity-40 transition-opacity duration-700 mix-blend-overlay" />
          </div>

          {/* Content */}
          <div className="absolute inset-x-0 bottom-0 p-5 transform transition-all duration-500">
            <h3 className="text-white font-bold text-lg tracking-wide mb-3 drop-shadow-lg">
              {name}
              <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-yellow-200 to-amber-500 
                           transition-all duration-700 mt-1.5" />
            </h3>

            {github && github !== "__" && (
              <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                           transition-all duration-500 ease-out">
                <Link
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-full 
                           bg-gradient-to-br from-yellow-500/10 to-amber-500/10
                           hover:from-yellow-500/20 hover:to-amber-500/20
                           border border-yellow-500/20 hover:border-yellow-500/40
                           transition-all duration-300 hover:scale-105 hover:-translate-y-1
                           hover:shadow-[0_0_20px_rgba(251,191,36,0.3)]"
                >
                  <FaGithub className="w-5 h-5 text-white/90" />
                  <span className="text-white/90 text-sm font-medium">GitHub</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
