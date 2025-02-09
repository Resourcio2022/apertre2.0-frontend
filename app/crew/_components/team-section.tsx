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
      <div className="mb-12">
        <h2 className="text-yellow-400 text-4xl font-bold tracking-wide" id={section.id}>{section.title}</h2>
        <p className="text-white text-base mt-2 opacity-90">{section.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {section.members.map((member, index) => (
          <div key={index} className="flex justify-center">
            <MemberCard
              name={member.name}
              image={member.image}
              accentColor={section.accentColor}
              linkedin={member.linkedin}
              github={member.github}
              instagram={member.instagram}
              role={section.id}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

