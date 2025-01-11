import React from 'react';

const SponsorCard = ({ 
  imageUrl, 
  alt, 
  width = 300, 
  websiteUrl 
}: { 
  imageUrl?: string; 
  alt?: string; 
  width?: number;
  websiteUrl?: string;
}) => (
  <a 
    href={websiteUrl} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="rounded-xl p-8 h-56 flex items-center justify-center hover:scale-105 transition-transform duration-300"
  >
    {imageUrl ? (
      <img
        src={imageUrl}
        alt={alt}
        className="object-contain h-full max-w-full"
        style={{ maxWidth: `${width}px` }}
      />
    ) : (
      <span className="text-white/60">Sponsor</span>
    )}
  </a>
);

const SponsorTier = ({ title, color, sponsors = [], columns = 1 }: {
  title: string;
  color: string;
  sponsors?: { imageUrl: string; alt: string; width?: number; websiteUrl: string; }[];
  columns?: number;
}) => (
  <div className="mb-12">
    <h3 className="text-xl font-bold mb-6 text-center" style={{ color }}>
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

export default function Page() {
  const domainSponsors = [
    {
      imageUrl: "/xyz_logo.webp",
      alt: "XYZ Domains",
      width: 400,
      websiteUrl: "https://gen.xyz"
    }
  ];

  const digitalSponsors = [
    {
      imageUrl: "/interview_buddy.png",
      alt: "Interview Buddy",
      width: 400,
      websiteUrl: "https://interviewbuddy.in"
    },
    {
      imageUrl: "/jet-brains.jpg",
      alt: "JetBrains",
      width: 350,
      websiteUrl: "https://www.jetbrains.com"
    }
  ];

  return (
    <section
      className="w-full min-h-screen flex items-center justify-center p-6 md:p-20 text-white font-sans bg-black"
      style={{
        backgroundImage: 'url("/aboutus.svg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="about"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-yellow-500 mb-16 text-center">
          OUR SPONSORS
        </h2>
        <SponsorTier
          title="DOMAIN SPONSOR"
          color="#FFD700"
          sponsors={domainSponsors}
        />
        <SponsorTier
          title="DIGITAL SPONSOR"
          color="#CD7F32"
          sponsors={digitalSponsors}
          columns={2}
        />
        <div className="text-center mt-16">
          <p className="text-yellow-500 mb-4">
            SPONSOR US and gain exposure and popularity for your company
          </p>
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-full hover:bg-yellow-400 transition-colors font-semibold">
            BECOME A SPONSOR
          </button>
        </div>
      </div>
    </section>
  );
}
