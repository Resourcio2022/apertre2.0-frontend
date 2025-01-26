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
      className="rounded-xl p-8 h-56 flex items-center justify-center hover:scale-105 transition-transform duration-300"
    >
      <Image
        src={imageUrl}
        alt={alt || "sponsor logo"}
        width={width}
        height={200}
        className="object-contain h-full max-w-full"
      />
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
    <div className="mb-12">
      <h3
        className="text-xl font-bold mb-6 text-center"
        style={{ color }}
      >
        {title}
      </h3>
      <div className="flex justify-center">
        <div className={`grid ${columns === 2 ? 'grid-cols-2' : 'grid-cols-1'} gap-8 max-w-6xl w-full`}>
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
      className="w-full flex items-center justify-center p-10 md:p-20 text-white font-sans bg-black"
      style={{
        backgroundImage: 'url("/aboutus.svg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="sponsors"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-yellow-500 text-center py-20">
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
