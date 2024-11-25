'use client'

interface Sponsor {
    id: number;
    name: string;
    image?: string;
    tier: string;
}

interface SponsorTier {
    name: string;
    color: string;
}
const PlaceholderSVG = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 50"
        className="w-full h-auto"
        fill="currentColor"
    >
        <rect width="100" height="50" rx="8" fill="#E5E7EB" />
        <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="10"
            fill="#9CA3AF"
        >
            LOGO
        </text>
    </svg>
);
const sponsorTiers: SponsorTier[] = [
    { name: "PLATINUM SPONSORS", color: "text-gray-200" },
    { name: "GOLD SPONSORS", color: "text-yellow-500" },
    { name: "SILVER SPONSORS", color: "text-gray-400" },
    { name: "BRONZE SPONSORS", color: "text-amber-700" }
];

const sponsors: Sponsor[] = [
    { id: 1, name: "Platinum Sponsor 1", tier: "PLATINUM SPONSORS" },
    { id: 2, name: "Platinum Sponsor 2", tier: "PLATINUM SPONSORS" },
    { id: 3, name: "Gold Sponsor 1", tier: "GOLD SPONSORS" },
    { id: 4, name: "Silver Sponsor 1", tier: "SILVER SPONSORS" },
    { id: 5, name: "Bronze Sponsor 1", tier: "BRONZE SPONSORS" },
    { id: 6, name: "Platinum Sponsor 3", tier: "PLATINUM SPONSORS" },
    { id: 7, name: "Gold Sponsor 2", tier: "GOLD SPONSORS" },
    { id: 8, name: "Silver Sponsor 2", tier: "SILVER SPONSORS" },
    { id: 9, name: "Bronze Sponsor 2", tier: "BRONZE SPONSORS" }
];

export default function SponsorsSection() {
    return (
        <section className="w-full bg-zinc-900 py-12 md:py-24 font-mokoto">
            <div className="container px-4 md:px-6 pl-8 lg:pl-16 justify-center">
                <h1 className="text-4xl font-bold text-yellow-500 mb-16 tracking-wider">
                    OUR SPONSORS
                </h1>

                <div className="space-y-16">
                    {sponsorTiers.map((tier) => (
                        <div key={tier.name} className="space-y-6">
                            <h2 className={`text-2xl font-semibold ${tier.color} tracking-wide`}>
                                {tier.name}
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                {sponsors
                                    .filter((sponsor) => sponsor.tier === tier.name)
                                    .map((sponsor) => (
                                        <div
                                            key={sponsor.id}
                                            className="bg-gray-200 rounded-lg p-4 aspect-[2/1] flex flex-col items-center justify-center hover:bg-gray-300 transition-colors"
                                        >
                                            {sponsor.image ? (
                                                <img
                                                    src={sponsor.image}
                                                    alt={sponsor.name}
                                                    className="mb-2 h-auto max-w-full"
                                                />
                                            ) : (
                                                <PlaceholderSVG />
                                            )}
                                            <span className="text-gray-800 font-medium text-center">
                                                {sponsor.name}
                                            </span>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center space-y-6">
                    <p className="text-lg text-gray-300">
                        <span className="text-yellow-500">SPONSOR US</span> and gain exposure and popularity for your company
                    </p>
                    <button
                        className="bg-purple-700 hover:bg-purple-600 text-white px-8 py-2 rounded-md uppercase tracking-wide"
                    >
                        Become a Sponsor
                    </button>
                </div>
            </div>
        </section>
    );
}