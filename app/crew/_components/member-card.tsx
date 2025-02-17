"use"
import { TeamRole } from "@/constants/team-constant";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const planets = {
  organisers: '/crew/planets/design.svg',
  techies: '/crew/planets/tech.svg',
  designers: '/crew/planets/planet.svg',
  content: '/crew/planets/content.svg',
  socialities: '/crew/planets/social.svg',
  marketters: '/crew/planets/market.svg',
  video: '/crew/planets/video.svg'
}


interface MemberCardProps {
  name: string
  image: string
  accentColor: string
  github?: string
  linkedin?: string
  instagram?: string
  role: TeamRole
}

export function MemberCard({ name, image, github, linkedin, instagram, role }: MemberCardProps) {
  const getPlanetSrc = () => planets[role] || '/crew/planets/planet.svg'

  return (
    <div className="relative group w-full transform transition-all duration-500 hover:-translate-y-2">
      {/*Golden Bordar*/}
      <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 rounded-2xl blur-md 
                    opacity-40 md:opacity-0 
                    md:group-hover:opacity-50 transition-all duration-700 animate-gradient-xy" />
      <div className="absolute -inset-1 bg-gradient-to-br from-yellow-200 via-amber-500 to-yellow-200 rounded-2xl 
                    opacity-30 md:opacity-0
                    md:group-hover:opacity-30 md:group-hover:animate-pulse transition-all duration-700" />

      <div className="relative rounded-2xl overflow-hidden bg-zinc-900/90 backdrop-blur-sm 
                    shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-500
                    border-2 border-amber-500/50 md:border md:border-amber-500/20 md:group-hover:border-amber-500/40">
        <div className="aspect-square relative overflow-hidden">
          {/* Planet Icon */}
          <div className="absolute -top-1 -left-1 w-14 h-14 rounded-full z-20 bg-black/90 p-0.5
                       shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_25px_rgba(251,191,36,0.3)]
                       transition-all duration-700">
            <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-yellow-400/20 to-amber-600/20">
              <Image
                src={getPlanetSrc()}
                alt={`${role} Planet`}
                width={56}
                height={56}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out
                         group-hover:rotate-[360deg] group-hover:scale-110"
              />
            </div>
          </div>

          {/* Member Images */}
          <div className="w-full h-full transform transition-all duration-700">
            <Image
              src={`https://utfs.io/f/${image}`}
              alt={name}
              width={300}
              height={300}
              loading="lazy"
              unoptimized
              className="w-full h-full object-cover md:transition-transform md:duration-500 
             md:group-hover:scale-105 md:group-hover:filter md:group-hover:brightness-105"
            />

            {/* Overlay Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-75" />
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-amber-500/20 opacity-0 
                          md:group-hover:opacity-40 transition-opacity duration-700 mix-blend-overlay" />
          </div>

          {/* Content */}
          <div className="absolute inset-x-0 bottom-0 p-5">
            <h3 className="text-white font-bold text-lg tracking-wide mb-3 drop-shadow-lg">
              {name}
              <div className="h-0.5 md:group-hover:w-full w-full md:w-0 bg-gradient-to-r from-yellow-200 to-amber-500 
                           transition-all duration-700 mt-1.5" />
            </h3>

            {/* Social Links - Icons Only */}
            <div className="flex gap-4 md:transform md:translate-y-8 md:opacity-0 
                          md:group-hover:translate-y-0 md:group-hover:opacity-100 
                          transition-all duration-500 ease-out">
              {github && (
                <Link
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full 
                           bg-gradient-to-br from-orange-500/20 to-amber-600/20
                           hover:from-orange-500/30 hover:to-amber-600/30
                           border border-orange-500/30 hover:border-orange-500/50
                           transition-all duration-300 active:scale-95 md:hover:scale-110
                           hover:shadow-[0_0_25px_rgba(245,158,11,0.4)]"
                >
                  <FaGithub className="w-6 h-6 text-amber-400 hover:text-amber-300" />
                </Link>
              )}
              {linkedin && (
                <Link
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full 
                           bg-gradient-to-br from-sky-500/20 to-blue-600/20
                           hover:from-sky-500/30 hover:to-blue-600/30
                           border border-sky-500/30 hover:border-sky-500/50
                           transition-all duration-300 active:scale-95 md:hover:scale-110
                           hover:shadow-[0_0_25px_rgba(14,165,233,0.4)]"
                >
                  <FaLinkedin className="w-6 h-6 text-sky-400 hover:text-sky-300" />
                </Link>
              )}
              {instagram && (
                <Link
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full 
                           bg-gradient-to-br from-blue-500/10 to-blue-600/10
                           hover:from-blue-500/20 hover:to-blue-600/20
                           border border-blue-500/20 hover:border-blue-500/40
                           transition-all duration-300 active:scale-95 md:hover:scale-105 md:hover:-translate-y-1
                           hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                >
                  <FaInstagram className="w-4 h-4 md:w-5 md:h-5 text-white/90" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
