import type { TeamRole, TeamSection as TeamSectionType } from "@/constants/team-constant"
import { MemberCard } from "./member-card"

interface TeamSectionProps {
  section: TeamSectionType & {
    id: TeamRole
  }
}

export function TeamSection({ section }: TeamSectionProps) {
  return (
    <section className="mb-20">
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h2
          className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 
                     text-4xl md:text-5xl font-bold tracking-wider animate-gradient-x"
          id={section.id}
        >
          {section.title}
        </h2>
        <p className="text-white/80 text-base md:text-lg mt-3 tracking-wide max-w-2xl">
          {section.subtitle}
        </p>
        <div className="h-1 w-32 bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 mt-4 rounded-full opacity-50" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {section.members.map((member, index) => (
          <div key={index} className="flex justify-center">
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
    </section>
  )
}

