import * as React from "react";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps extends React.SVGProps<SVGSVGElement> {
  projectName?: string;
  authorName?: string;
  githubImage?: string;
  technologies?: string[];
}

// const technologies = [
//   { name: "JavaScript", id: 1 },
//   { name: "Python", id: 2 },
//   { name: "Pug", id: 3 },
//   { name: "Java", id: 4 },
//   { name: "PostgreSQL", id: 5 }
// ];

const ProjectCardSVG: React.FC<ProjectCardProps> = ({
  projectName = "PROJECT NAME",
  authorName = "John Doe",
  githubImage,
  technologies,
  ...props
}) => (
  <div className="relative w-[438px] h-[269px]">

    <svg width="438" height="269" viewBox="0 0 438 269" fill="none" xmlns="http://www.w3.org/2000/svg">

      <g clipPath="url(#clip0_1289_7092)">
        <mask id="path-1-inside-1_1289_7092" fill="white">
          <path fillRule="evenodd" clipRule="evenodd" d="M16.7123 0C7.48236 0 0 7.48236 0 16.7123V252.288C0 261.518 7.48234 269 16.7123 269H349.546C357.987 269 365.103 262.706 366.133 254.328L367.671 241.824L373.025 203.921C347.762 196.849 329.233 173.656 329.233 146.136C329.233 112.998 356.096 86.1355 389.233 86.1355C389.376 86.1355 389.519 86.136 389.661 86.137L393.61 58.1836C394.129 54.5064 393.409 50.761 391.563 47.5387L369.144 8.40481C366.166 3.2066 360.633 0 354.642 0H16.7123Z" />
        </mask>

        <path fillRule="evenodd" clipRule="evenodd" d="M16.7123 0C7.48236 0 0 7.48236 0 16.7123V252.288C0 261.518 7.48234 269 16.7123 269H349.546C357.987 269 365.103 262.706 366.133 254.328L367.671 241.824L373.025 203.921C347.762 196.849 329.233 173.656 329.233 146.136C329.233 112.998 356.096 86.1355 389.233 86.1355C389.376 86.1355 389.519 86.136 389.661 86.137L393.61 58.1836C394.129 54.5064 393.409 50.761 391.563 47.5387L369.144 8.40481C366.166 3.2066 360.633 0 354.642 0H16.7123Z" fill="url(#paint0_linear_1289_7092)" />
        <path d="M366.133 254.328L362.816 253.92L366.133 254.328ZM367.671 241.824L364.362 241.356L364.357 241.386L364.354 241.416L367.671 241.824ZM373.025 203.921L376.334 204.388L376.744 201.491L373.926 200.702L373.025 203.921ZM389.661 86.137L389.638 89.4794L392.562 89.4999L392.971 86.6045L389.661 86.137ZM393.61 58.1836L396.919 58.651L393.61 58.1836ZM391.563 47.5387L394.463 45.8772V45.8772L391.563 47.5387ZM369.144 8.40481L372.044 6.7433L372.044 6.7433L369.144 8.40481Z" fill="#E0A800" mask="url(#path-1-inside-1_1289_7092)" />
      </g>
      <path d="M366.133 254.328L362.816 253.92L366.133 254.328ZM367.671 241.824L364.362 241.356L364.357 241.386L364.354 241.416L367.671 241.824ZM373.025 203.921L376.334 204.388L376.744 201.491L373.926 200.702L373.025 203.921ZM389.661 86.137L389.638 89.4794L392.562 89.4999L392.971 86.6045L389.661 86.137ZM393.61 58.1836L396.919 58.651L393.61 58.1836ZM391.563 47.5387L394.463 45.8772V45.8772L391.563 47.5387ZM369.144 8.40481L372.044 6.7433L372.044 6.7433L369.144 8.40481ZM3.34247 16.7123C3.34247 9.32835 9.32836 3.34247 16.7123 3.34247V-3.34247C5.63637 -3.34247 -3.34247 5.63637 -3.34247 16.7123H3.34247ZM3.34247 252.288V16.7123H-3.34247V252.288H3.34247ZM16.7123 265.658C9.32834 265.658 3.34247 259.672 3.34247 252.288H-3.34247C-3.34247 263.364 5.63635 272.342 16.7123 272.342V265.658ZM349.546 265.658H16.7123V272.342H349.546V265.658ZM362.816 253.92C361.992 260.622 356.299 265.658 349.546 265.658V272.342C359.675 272.342 368.214 264.789 369.451 254.736L362.816 253.92ZM364.354 241.416L362.816 253.92L369.451 254.736L370.989 242.232L364.354 241.416ZM369.715 203.453L364.362 241.356L370.981 242.291L376.334 204.388L369.715 203.453ZM373.926 200.702C350.068 194.024 332.576 172.118 332.576 146.136H325.891C325.891 175.194 345.455 199.675 372.124 207.139L373.926 200.702ZM332.576 146.136C332.576 114.844 357.942 89.478 389.233 89.478V82.7931C354.25 82.7931 325.891 111.152 325.891 146.136H332.576ZM389.233 89.478C389.368 89.478 389.503 89.4785 389.638 89.4794L389.685 82.7946C389.534 82.7936 389.384 82.7931 389.233 82.7931V89.478ZM390.3 57.7161L386.352 85.6696L392.971 86.6045L396.919 58.651L390.3 57.7161ZM388.663 49.2002C390.139 51.7781 390.716 54.7744 390.3 57.7161L396.919 58.651C397.543 54.2385 396.678 49.744 394.463 45.8772L388.663 49.2002ZM366.243 10.0663L388.663 49.2002L394.463 45.8772L372.044 6.7433L366.243 10.0663ZM354.642 3.34247C359.435 3.34247 363.861 5.90774 366.243 10.0663L372.044 6.7433C368.47 0.50546 361.831 -3.34247 354.642 -3.34247V3.34247ZM16.7123 3.34247H354.642V-3.34247H16.7123V3.34247Z" fill="#E0A800" mask="url(#path-1-inside-1_1289_7092)" />
      <defs>
        <linearGradient id="paint0_linear_1289_7092" x1="105.669" y1="35.0069" x2="372.415" y2="258.709" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0B0A0A" />
          <stop offset="1" stopColor="#2D2D2D" />
        </linearGradient>
        <clipPath id="clip0_1289_7092">
          <rect width="438" height="269" fill="white" />
        </clipPath>
      </defs>
    </svg>

    {/* Content overlay */}
    <div className="absolute inset-0 p-6 font-Poppins text-white">
      {/* Title section with GitHub profile */}
      <div className="flex justify-between ml-[5rem] font-mokoto items-start">
        <div className="space-y-1 text-center">
          <h3 className="text-2xl font-bold  text-amber-500">{projectName}</h3>
          <p className="text-sm text-gray-400">by</p>
          <p className="text-lg">{authorName}</p>
        </div>

        {/* GitHub Profile Circle */}
        <div className="relative w-24 h-24 top-[4.5rem] left-[1rem] rounded-full border-2 border-amber-500 overflow-hidden bg-gray-800">
          {githubImage ? (
            <Image
              src={githubImage}
              alt="GitHub Profile"
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full  h-full flex flex-col items-center justify-center text-xs text-amber-500">
              <span>GITHUB</span>
              <span>PROFILE</span>
              <span>PHOTO</span>
            </div>
          )}
        </div>
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap">
        {technologies?.map((tech,idx) => (
          <span
            key={idx}
            className="px-10 py-1 bg-black text-white text-sm rounded-full border border-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Details Button */}
      <div className="mt-3 font-mokoto">
        <Link
          href="#register"
          className="bg-[rgba(128,0,128,0.2)] text-textyellow font-medium px-4 py-3 rounded-xl border border-customYellow transition-all duration-300 hover:border-yellow-500 hover:shadow-[0_0_25px_rgba(255,215,0,1),0_0_25px_rgba(255,223,0,0.9)] hover:animate-pulse hover:translate-y-[-2px] w-fit"
        >
          REGISTER
        </Link>
      </div>
    </div>
  </div>
);

export default ProjectCardSVG;