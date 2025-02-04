import { TeamRole } from "@/constants/team-constant"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image"
import Link from "next/link"

const planets = {
  organisers: '/crew/planets/design.svg',
  techies: '/crew/planets/tech.svg',
  designers: '/crew/planets/planet.svg',
  content: '/crew/planets/content.svg',
  socialities: '/crew/planets/social.svg',
  marketters: '/crew/planets/market.svg'
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
    <div className="relative group p-3">
      {/* Yellow Permamnent border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-yellow-400/50" />

      {/* Outer glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-700" />

      <div className="relative overflow-hidden rounded-2xl aspect-square transform transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_8px_40px_rgba(251,191,36,0.4)]">

        <div className="absolute inset-0 p-[3px] rounded-2xl bg-gradient-to-br from-amber-200 via-yellow-400 to-orange-500 animate-gradient-slow opacity-75 group-hover:opacity-100 transition-all duration-700">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-zinc-950 to-zinc-900/95">
            <div className="absolute inset-0 opacity-20 mix-blend-soft-light bg-[repeating-linear-gradient(45deg,_transparent_0,_transparent_2px,_rgba(255,255,255,0.1)_2px,_rgba(255,255,255,0.1)_4px)]" />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 h-full bg-zinc-900/80 backdrop-blur-sm rounded-2xl overflow-hidden group-hover:bg-zinc-900/70 transition-all duration-700">

          {/* Planet Cutout Part */}
          <div className="absolute -top-2 -left-2 w-16 h-16 rounded-full z-[50] bg-black overflow-hidden">
            <div className="w-full h-full transition-transform duration-700 group-hover:rotate-180">
              <Image
                src={getPlanetSrc()}
                alt={`${role} Planet`}
                width={100}
                height={100}
                className="w-full h-full object-cover opacity-100 transition-opacity duration-700 group-hover:opacity-0"
              />
              <Image
                src={getPlanetSrc()}
                alt={`${role} Planet Alternate`}
                width={100}
                height={100}
                className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              />
            </div>
          </div>

          {/* Image*/}
          <div className="h-full transform transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] relative z-[10]">
            <Image
              src={image}
              alt={name}
              width={100}
              height={100}
              className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:filter group-hover:brightness-110 group-hover:contrast-110 group-hover:saturate-105"
            />


            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-90 transition-all duration-500" />


            <div className="absolute inset-0 opacity-0 group-hover:opacity-40 duration-700 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000 blur-md" />


            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-1000 bg-[radial-gradient(circle_at_50%_50%,_white_1px,_transparent_1px)] [background-size:12px_12px]" />
          </div>


          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-[15]">
            <div className="relative">

              {/* Animated underline for names while hover */}
              <h3 className="text-white font-bold text-lg sm:text-xl mb-4 tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-4 group-hover:translate-y-0 drop-shadow-[0_0_12px_rgba(251,191,36,0.6)]">
                {name}
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-amber-200 to-orange-500 transition-all duration-700 mt-1" />
              </h3>

              {/*  Git and Linkedin hover effects */}
              <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 translate-y-4 group-hover:translate-y-0">
                {github && (
                  <Link
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative p-3 rounded-full bg-gradient-to-br from-amber-500/10 to-orange-500/10 hover:from-amber-500/30 hover:to-orange-500/30 backdrop-blur-md transition-all duration-300 hover:scale-125 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(251,191,36,0.5)] border border-white/10 hover:border-white/30 group/link"
                  >
                    <span className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/30 to-orange-500/30 blur-md opacity-0 group-hover/link:opacity-100 transition-all duration-300" />
                    <span className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-200/10 to-orange-300/10 animate-pulse" />
                    <FaGithub
                      className="w-6 h-6 transition-all duration-300 relative z-10 text-white group-hover/link:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                    />
                  </Link>
                )}
                {linkedin && (
                  <Link
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative p-3 rounded-full bg-gradient-to-br from-amber-500/10 to-orange-500/10 hover:from-amber-500/30 hover:to-orange-500/30 backdrop-blur-md transition-all duration-300 hover:scale-125 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(251,191,36,0.5)] border border-white/10 hover:border-white/30 group/link"
                  >
                    <span className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/30 to-orange-500/30 blur-md opacity-0 group-hover/link:opacity-100 transition-all duration-300" />
                    <span className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-200/10 to-orange-300/10 animate-pulse" />
                    <FaLinkedin
                      className="w-6 h-6 transition-all duration-300 relative z-10 text-white group-hover/link:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                    />
                  </Link>
                )}
                {instagram && (
                  <Link
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative p-3 rounded-full bg-gradient-to-br from-amber-500/10 to-orange-500/10 hover:from-amber-500/30 hover:to-orange-500/30 backdrop-blur-md transition-all duration-300 hover:scale-125 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(251,191,36,0.5)] border border-white/10 hover:border-white/30 group/link"
                  >
                    <span className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/30 to-orange-500/30 blur-md opacity-0 group-hover/link:opacity-100 transition-all duration-300" />
                    <span className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-200/10 to-orange-300/10 animate-pulse" />
                    <FaInstagram
                      className="w-6 h-6 transition-all duration-300 relative z-10 text-white group-hover/link:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}