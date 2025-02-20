import Image from "next/image";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

const stars = [
  { id: 1, src: "/star.png", left: "5%", top: "15%", size: 35 },
  { id: 2, src: "/star.png", left: "35%", top: "55%", size: 40 },
  { id: 3, src: "/star.png", left: "50%", top: "15%", size: 25 },
  { id: 4, src: "/star.png", left: "70%", top: "25%", size: 35 },
  { id: 5, src: "/star.png", left: "90%", top: "35%", size: 38 },
  { id: 6, src: "/star.png", left: "7%", top: "75%", size: 45 },
  { id: 7, src: "/star.png", left: "40%", top: "75%", size: 50 },
  { id: 8, src: "/star.png", left: "60%", top: "85%", size: 33 },
  { id: 9, src: "/star.png", left: "80%", top: "75%", size: 30 },
];

const Icons = [
  {
    imageUrl: "/community_partners/community-partner.jpg",
    alt: "CommunityPartner-1",
  },
  {
    imageUrl: "/community_partners/community-partner.jpg",
    alt: "CommunityPartner-2",
  }
];

const Icons2 = [
  {
    imageUrl: "/community_partners/community-partner.jpg",
    alt:"CommunityPartner-3",
  },
  {
    imageUrl: "/community_partners/community-partner.jpg",
    alt: "CommunityPartner-4",
  },
  {
    imageUrl: "/community_partners/community-partner.jpg",
    alt: "CommunityPartner-5",
  },
  {
    imageUrl: "/community_partners/community-partner.jpg",
    alt: "CommunityPartner-6",
  }
];

const Icons3 = [
  {
    imageUrl: "/community_partners/community-partner.jpg",
    alt: "CommunityPartner-7",
  }
];

const Icons4 = [
  {
    imageUrl: "/community_partners/community-partner.jpg",
    alt: "CommunityPartner-8",
  },
  {
    imageUrl: "/community_partners/community-partner.jpg",
    alt: "CommunityPartner-9",
  },
  {
    imageUrl: "/community_partners/community-partner.jpg",
    alt: "CommunityPartner-10",
  }
];

export default function communitypartner() {
  return (
    <section
      className="h-[200vh] md:h-[260vh] flex items-center justify-center p-10 md:p-14 text-white font-sans bg-black relative"
      id="communitypartners"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:32px_32px] opacity-5" />
      </div>

      <div className="container">
        <h2 className="absolute top-0 right-20 text-textyellow text-2xl md:text-6xl font-mokoto py-12 md:py-24">
          Community Partners
        </h2>
        <p className="absolute top-[182vh] md:top-52 mr-4 md:right-20 text-center md:text-right text-lg md:text-xl text-white font-poppins">
          Together, our community partners empower more <br /> developers to join Apertre.
        </p>
        </div>
        <div className="relative flex md:right-96 h-[1200px] md:min-w-full md:h-[1200px] md:top-44 w-full flex-col items-center justify-center overflow-hidden">
          <OrbitingCircles iconSize={70} radius={100} speed={1.5}>
            {Icons.map((communitypartner, i) => (
              <Image
                key={i}
                src={communitypartner.imageUrl}
                alt={communitypartner.alt}
                width={70}
                height={70}
              />
            ))}
          </OrbitingCircles>
          <OrbitingCircles iconSize={72} radius={250} reverse speed={1.2}>
            {Icons2.map((communitypartner, i) => (
              <Image
                key={i}
                src={communitypartner.imageUrl}
                alt={communitypartner.alt}
                width={72}
                height={72}
              />
            ))}
          </OrbitingCircles>
          <OrbitingCircles iconSize={75} radius={350} speed={0.8}>
            {Icons3.map((communitypartner, i) => (
              <Image
                key={i}
                src={communitypartner.imageUrl}
                alt={communitypartner.alt}
                width={75}
                height={75}
              />
            ))}
          </OrbitingCircles>
          <OrbitingCircles iconSize={70} radius={500} speed={1}>
            {Icons4.map((communitypartner, i) => (
              <Image
                key={i}
                src={communitypartner.imageUrl}
                alt={communitypartner.alt}
                width={70}
                height={70}
              />
            ))}
          </OrbitingCircles>
          <Image
            src="/community_partners/logo.png"
            width={70}
            height={60}
            alt="Apertre Logo"
            className="absolute"
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />
        </div>
    

      {stars.map((star) => (
        <Image
          key={star.id}
          src={star.src}
          alt={`Star ${star.id}`}
          width={star.size}
          height={star.size}
          className="absolute transition-transform duration-300 hover:scale-110 hover:filter hover:brightness-200 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] hidden md:block -z-0 animate-pulse opacity-80"
          style={{ left: star.left, top: star.top, animationDelay: `${star.id * 0.1}s` }}
        />
      ))}
    </section>
  );
}
