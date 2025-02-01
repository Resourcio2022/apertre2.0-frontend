interface MemberCardProps {
  name: string
  image: string
  role: string
  accentColor: string
  instagram?: string
  github?: string
}

export function MemberCard({ name, image, role, instagram, github }: MemberCardProps) {
  const getCardBackground = () => {
    const normalizedRole = role.toLowerCase().trim();

    switch (normalizedRole) {
      case 'organisers':
        return '/crew/member-organiser.svg';
      case 'techies':
        return '/crew/member-techies.svg';
      case 'designers':
        return '/crew/member-designers.svg';
      case 'content creators':
        return '/crew/member-content.svg';
      case 'socialities':
        return '/crew/member.social.svg';
      case 'marketters':
        return '/crew/member-marketers.svg';
      default:
        return '/crew/member-organiser.svg';
    }
  };

  return (
    <div className="relative w-full">
      <div className="relative w-full aspect-[291/341]">
        <img
          src={getCardBackground()}
          alt="card background"
          className="absolute inset-0 w-full h-full"
        />

        {/* Member Photo */}
        <div className={`absolute ${role.toLowerCase().includes('content')
            ? 'left-[35px] right-[35px] sm:left-[45px] sm:right-[45px] md:left-[45px] md:right-[45px]'
            : 'left-[35px] right-[35px] sm:left-[45px] sm:right-[45px] md:left-[57px] md:right-[5px]'
          } top-[45px] sm:top-[55px] md:top-[65px] h-[160px] sm:h-[180px] md:h-[210px] overflow-hidden`}>
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center rounded-lg relative z-0"
          />
        </div>

        {/* Name Text */}
        <div className="absolute bottom-[15px] left-[20px] sm:bottom-[20px] sm:left-[30px] md:bottom-[15px] md:left-[45px] lg:bottom-[2px] lg:left-[60px] w-[70%] sm:w-[70%] md:w-[75%]">
          <h3 className="text-yellow-400 text-[11px] xs:text-[12px] sm:text-[14px] md:text-base lg:text-lg font-bold font-mokoto uppercase tracking-wider leading-none">
            {name.split(' ').map((word, index) => (
              <span key={index} className={`${index !== 0 ? 'block -mt-0.5 xs:mt-0' : ''} truncate`}>
                {word}
              </span>
            ))}
          </h3>
        </div>

        {/* Social Icons */}
        <div className="absolute bottom-[15px] right-[15px] sm:bottom-[20px] sm:right-[20px] md:bottom-[15px] md:right-[25px] lg:bottom-[9px] lg:right-[15px] flex gap-1.5 sm:gap-2 md:gap-3">
          {instagram && (
            <a href={instagram} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-all duration-300">
              <img
                src="/crew/linkedin.svg"
                alt="LinkedIn"
                className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 filter brightness-125 hover:scale-110 transition-transform duration-300"
              />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-all duration-300">
              <img
                src="/crew/github.svg"
                alt="GitHub"
                className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 filter brightness-125 hover:scale-110 transition-transform duration-300"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}