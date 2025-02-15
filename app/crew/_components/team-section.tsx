import type { TeamRole, TeamSection as TeamSectionType } from "@/constants/team-constant"
import { MemberCard } from "./member-card"

interface TeamSectionProps {
  section: TeamSectionType & {
    id: TeamRole
  }
}

export function TeamSection({ section }: TeamSectionProps) {
  return (
    <section className="mb-32 relative">
      {/* Add decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent opacity-50" />
      
      <div className="relative">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2
            className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 
                       text-4xl md:text-6xl font-bold tracking-wider animate-gradient-x
                       drop-shadow-[0_0_25px_rgba(251,191,36,0.2)]"
            id={section.id}
          >
            {section.title}
          </h2>
          <p className="text-white/80 text-base md:text-lg mt-4 tracking-wide max-w-2xl font-light">
            {section.subtitle}
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 mt-6 rounded-full opacity-50 
                        transform transition-all duration-500 hover:w-48 hover:opacity-75" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
          {section.members.map((member, index) => (
            <div key={index} className="flex justify-center"
                 style={{ animationDelay: `${index * 100}ms` }}>
              <MemberCard
                name={member.name}
                image={member.image || '/crew/default.jpg'}
                accentColor={section.accentColor}
                github={member.github}
                linkedin={member.linkedin}
                role={section.id}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

