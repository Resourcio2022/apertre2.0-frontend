interface MemberCardProps {
  name: string
  image: string
  accentColor: string
  instagram?: string
  github?: string
}

export function MemberCard({ name, image, instagram, github }: MemberCardProps) {
  return (
    <div className="relative group">
      {/* Outer glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-700" />

      <div className="relative overflow-hidden rounded-2xl aspect-square transform transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_8px_40px_rgba(251,191,36,0.4)]">
        {/* Animated border with double gradient */}
        <div className="absolute inset-0 p-[3px] rounded-2xl bg-gradient-to-br from-amber-200 via-yellow-400 to-orange-500 animate-gradient-slow opacity-75 group-hover:opacity-100 transition-all duration-700">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-zinc-950 to-zinc-900/95">
            {/* CSS-based texture pattern */}
            <div className="absolute inset-0 opacity-20 mix-blend-soft-light bg-[repeating-linear-gradient(45deg,_transparent_0,_transparent_2px,_rgba(255,255,255,0.1)_2px,_rgba(255,255,255,0.1)_4px)]" />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 h-full bg-zinc-900/80 backdrop-blur-sm rounded-2xl overflow-hidden group-hover:bg-zinc-900/70 transition-all duration-700">
          {/* Image Container */}
          <div className="h-full transform transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:filter group-hover:brightness-110 group-hover:contrast-110 group-hover:saturate-105"
            />

            {/* Dynamic lighting and texture effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-90 transition-all duration-500" />

            {/* Enhanced shimmer effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000 blur-md" />

            {/* Particle overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-1000 bg-[radial-gradient(circle_at_50%_50%,_white_1px,_transparent_1px)] [background-size:12px_12px]" />
          </div>

          {/* Content Container with enhanced animations */}
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
            <div className="relative">
              {/* Name with animated underline */}
              <h3 className="text-white font-bold text-lg sm:text-xl mb-4 tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-4 group-hover:translate-y-0 drop-shadow-[0_0_12px_rgba(251,191,36,0.6)]">
                {name}
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-amber-200 to-orange-500 transition-all duration-700 mt-1" />
              </h3>

              {/* Enhanced social links with new hover effects */}
              <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 translate-y-4 group-hover:translate-y-0">
                {instagram && instagram !== "" && instagram !== "#" && (
                  <a
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative p-3 rounded-full bg-gradient-to-br from-amber-500/10 to-orange-500/10 hover:from-amber-500/30 hover:to-orange-500/30 backdrop-blur-md transition-all duration-300 hover:scale-125 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(251,191,36,0.5)] border border-white/10 hover:border-white/30 group/link"
                  >
                    <span className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/30 to-orange-500/30 blur-md opacity-0 group-hover/link:opacity-100 transition-all duration-300" />
                    <span className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-200/10 to-orange-300/10 animate-pulse" />
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 transition-all duration-300 relative z-10 group-hover/link:text-amber-200 group-hover/link:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                )}
                {github && github !== "" && github !== "#" && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative p-3 rounded-full bg-gradient-to-br from-amber-500/10 to-orange-500/10 hover:from-amber-500/30 hover:to-orange-500/30 backdrop-blur-md transition-all duration-300 hover:scale-125 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(251,191,36,0.5)] border border-white/10 hover:border-white/30 group/link"
                  >
                    <span className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/30 to-orange-500/30 blur-md opacity-0 group-hover/link:opacity-100 transition-all duration-300" />
                    <span className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-200/10 to-orange-300/10 animate-pulse" />
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 transition-all duration-300 relative z-10 group-hover/link:text-amber-200 group-hover/link:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}