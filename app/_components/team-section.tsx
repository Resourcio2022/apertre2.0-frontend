import type { TeamSection as TeamSectionType } from "../../constants/team"
import { MemberCard } from "./member-card"

interface TeamSectionProps {
  section: TeamSectionType
}

export function TeamSection({ section }: TeamSectionProps) {
  return (
    <section className="mb-20">
      <div className="mb-8">
        <h2 className="text-yellow-400 text-3xl font-bold tracking-wide">{section.title}</h2>
        <p className="text-white text-sm mt-1">{section.subtitle}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {section.members.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            image={member.image}
            accentColor={section.accentColor}
            instagram={member.instagram}
            github={member.github}
          />
        ))}
      </div>
    </section>
  )
}

