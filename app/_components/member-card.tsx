import { Card } from "../../components/ui/card"
import { GitHub, Instagram } from "react-feather"

interface MemberCardProps {
  name: string
  image: string
  accentColor: string
  instagram?: string
  github?: string
}

export function MemberCard({ name, image, accentColor, instagram, github }: MemberCardProps) {
  return (
    <div className="relative group">
      {/* Card */}
      <Card
        className="relative border-[1px] border-white/10 bg-black/40 backdrop-blur-sm
        overflow-hidden transition-all duration-300 
        group-hover:border-yellow-400 group-hover:shadow-[0_0_20px_5px_rgba(255,223,88,0.6)]"
      >
        <div className="p-1.5">
          {/* Image Container */}
          <div className="relative rounded-sm overflow-hidden mb-2">
            <div className="aspect-square">
              <img
                src={image || "/placeholder.svg?height=400&width=400"}
                alt={name}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Name and Social Links */}
          <div className="flex items-center justify-between px-1 py-0.5">
            <span className="text-yellow-400 font-bold text-sm tracking-wide">{name}</span>
            <div className="flex gap-2">
              {instagram && (
                <a
                  href={instagram}
                  className="text-white/70 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {github && (
                <a
                  href={github}
                  className="text-white/70 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHub className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}