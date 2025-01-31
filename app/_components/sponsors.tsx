import Image from "next/image";
import Link from "next/link";

function SponsorCard({ imageUrl, alt, width = 300, websiteUrl }: {
  imageUrl: string;
  alt?: string;
  width?: number;
  websiteUrl: string;
}) {
  return (
    <Link
      href={websiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group transform transition-transform duration-300 hover:scale-105"
    >
      <div className="relative w-[250px] sm:w-[300px] md:w-[350px] h-[150px] sm:h-[180px] md:h-[200px] flex items-center justify-center">
        <Image
          src="/sponsorCard.svg"
          alt="Sponsor Card Background"
          width={300}
          height={180}
          className="absolute"
        />

        <div className="absolute flex items-center justify-center w-[70%] h-[60%] translate-x-[30px]">
          <Image
            src={imageUrl}
            alt={alt || "sponsor logo"}
            layout="intrinsic"
            width={100} 
            height={100} 
            className="object-contain"
          />
        </div>
      </div>
    </Link>
  );
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
          className={`grid place-items-center gap-12 sm:gap-8 max-w-4xl w-full ${
            columns === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
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
