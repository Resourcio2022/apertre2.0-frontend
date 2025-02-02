import Image from "next/image";
import Link from "next/link";

function SponsorCard({
  imageUrl,
  alt,
  width = 300,
  websiteUrl,
}: {
  imageUrl: string
  alt?: string
  width?: number
  websiteUrl: string
}) {
  const floatKeyframes = {
    "0%, 100%": { transform: "translateY(0)" },
    "50%": { transform: "translateY(-10px)" },
  }

  const floatAnimation = {
    animation: "float 3s ease-in-out infinite",
  }

  return (
    <Link
      href={websiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group transform transition-all duration-300 hover:scale-105"
      style={{ ...floatAnimation }}
    >
      <div className="  relative w-[250px] sm:w-[300px] md:w-[350px] h-[150px] sm:h-[180px] md:h-[200px] flex items-center justify-center">
        {/* Background shape with border effect */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 211 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M210.648 15.433C210.648 11.5946 209.123 7.91346 206.409 5.19932L205.849 4.63932C203.135 1.92518 199.454 0.400391 195.615 0.400391H77.5803C69.5873 0.400391 63.1077 6.88 63.1077 14.873V48.6426C63.1077 56.6356 56.6281 63.1152 48.6351 63.1152H14.8658C6.87277 63.1152 0.393158 69.5949 0.393158 77.5879V93.9628C0.393158 97.8012 1.91795 101.482 4.6321 104.197L40.117 139.681C42.8312 142.396 46.5123 143.92 50.3507 143.92H196.414C200.189 143.92 203.809 142.421 206.479 139.751C209.148 137.082 210.648 133.461 210.648 129.686V15.433Z"
            fill="url(#paint0_linear)"
            stroke="transparent"
            strokeWidth="2"
            className="group-hover:stroke-yellow-400 group-hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] transition-all duration-300"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="-184.866"
              y1="-190.792"
              x2="-63.9697"
              y2="231.148"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E9BB0B" />
              <stop offset="0.704" stopColor="#1F1E1E" />
              <stop offset="1" stopColor="#0E0A0A" />
            </linearGradient>
          </defs>
        </svg>

        {/* Logo container */}
        <div className="absolute flex items-center justify-center w-[70%] h-[60%] translate-x-[10px]">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={alt || "sponsor logo"}
            layout="intrinsic"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        {/* Rocket div - Updated size and positioning */}
        {/* <div className=" stroke stroke-yellow-400 absolute -top-8 sm:-top-4 -left-4 sm:-left-0  w-22 h-22 rounded-xl">
          <svg width="90" height="90" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="8" fill="url(#rocket_bg)" />

            <defs>
              <linearGradient id="rocket_bg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E9BB0B" stopOpacity={0.2} />
                <stop offset="0.3" stopColor="#1F1E1E"  />
                <stop offset="1" stopColor="#0E0A0A" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/file1.png"
              alt="Floating rocket"

              width={100}
              height={100}
              className="-rotate-45 object-contain animate-float "
            />
          </div>
        </div> */}
        <div className="stroke stroke-yellow-400 absolute -top-8 sm:-top-4 -left-4 sm:-left-0 w-22 h-22 rounded-xl">
          <svg
            width="90"
            height="90"
            viewBox="0 0 0 0"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            
            {/* Removed the gradient: set fill to transparent */}
            <rect width="48" height="48" rx="8" fill="transparent" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/file1.png"
              alt="Floating rocket"
              width={100}
              height={100}
              className="group-hover:stroke-yellow-400 rounded-3xl group-hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] transition-all duration-300 object-contain animate-float"
            />
          </div>
        </div>


        {/* Glow effect on hover */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: "radial-gradient(circle at center, rgba(255,215,0,0.15) 0%, transparent 70%)",
            filter: "blur(8px)",
          }}
        />
      </div>
    </Link>
  )
}

function SponsorTier({
  title,
  color,
  sponsors = [],
  columns = 1
}: {
  title: string;
  color: string;
  sponsors?: {
    imageUrl: string;
    alt: string;
    width?: number;
    websiteUrl: string;
  }[];
  columns?: number;
}) {
  return (
    <div className="mb-12 text-center">
      <div className="flex items-center justify-center gap-4 mb-14">
        <div className="h-[2px] w-20 bg-yellow-500" />
        <h3 className="text-2xl font-extrabold ">{title}</h3>
        <div className="h-[2px] w-20 bg-yellow-500" />
      </div>
      <div className="flex justify-center">
        <div
          className={`grid place-items-center gap-12 sm:gap-8 max-w-4xl w-full ${columns === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
            }`}
        >
          {sponsors.length > 0 ? (
            sponsors.map((sponsor, i) => (
              <SponsorCard
                key={i}
                imageUrl={sponsor.imageUrl}
                alt={sponsor.alt}
                width={sponsor.width}
                websiteUrl={sponsor.websiteUrl}
              />
            ))
          ) : (
            <div className="text-white/60 text-center">
              Sponsorship slot available
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const domainSponsors = [
  {
    imageUrl: "/sponsors/xyz_logo.webp",
    alt: "XYZ Domains",
    width: 400,
    websiteUrl: "https://gen.xyz"
  }
];

const digitalSponsors = [
  {
    imageUrl: "/sponsors/interview_buddy.png",
    alt: "Interview Buddy",
    width: 400,
    websiteUrl: "https://interviewbuddy.in"
  },
  {
    imageUrl: "/sponsors/jet-brains.jpg",
    alt: "JetBrains",
    width: 350,
    websiteUrl: "https://www.jetbrains.com"
  }
];

const platformSponsors = [
  {
    imageUrl: "/sponsors/commudle.svg",
    alt: "Commudle",
    width: 350,
    websiteUrl: "https://www.commudle.com/"
  }
];

const bronzeSponsors = [
  {
    imageUrl: "/sponsors/quill_ai.webp",
    alt: "Quill AI Network",
    width: 350,
    websiteUrl: "https://quillai.network/"
  }
];

const inKindSponsors = [
  {
    imageUrl: "/sponsors/flutter_kolkata.jpeg",
    alt: "Flutter Kolkata",
    width: 350,
    websiteUrl: "https://www.flutterkolkata.dev/"
  }
];

export default function Sponsor() {
  return (
    <section
      className="w-full flex items-center justify-center p-10 md:p-14 text-white font-sans bg-black"
      style={{
        backgroundImage: 'url("/aboutus.svg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="sponsors"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-extrabold text-yellow-500 text-center py-24 tracking-wide">
          Our Partners
        </h2>
        <SponsorTier
          title="Domain Sponsor"
          color="#CD7F32"
          sponsors={domainSponsors}
        />
        <SponsorTier
          title="Digital Sponsor"
          color="#CD7F32"
          sponsors={digitalSponsors}
          columns={2}
        />
        <SponsorTier
          title="Platform Sponsor"
          color="#C0C0C0"
          sponsors={platformSponsors}
        />
        <SponsorTier
          title="Bronze Sponsor"
          color="#CD7F32"
          sponsors={bronzeSponsors}
        />
        <SponsorTier
          title="In-Kind Sponsor"
          color="#228B22"
          sponsors={inKindSponsors}
        />
      </div>
    </section>
  );
}