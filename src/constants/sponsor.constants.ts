export interface Sponsor {
    id: number;
    name: string;
    image?: string; // Added the image field for storing image URL or path
    tier: string;
}

export interface SponsorTier {
    name: string;
    color: string;
}

export const sponsorTiers: SponsorTier[] = [
    { name: "PLATINUM SPONSORS", color: "text-gray-300" }, // Platinum-like light gray
    { name: "GOLD SPONSORS", color: "text-yellow-400" },   // Gold
    { name: "SILVER SPONSORS", color: "text-gray-400" },   // Silver
    { name: "BRONZE SPONSORS", color: "text-orange-600" }  // Bronze-like shade
];

export const sponsors: Sponsor[] = [
    { id: 1, name: "Platinum Sponsor 1", tier: "PLATINUM SPONSORS", image: "/images/platinum1.png" },
    { id: 2, name: "Platinum Sponsor 2", tier: "PLATINUM SPONSORS", image: "/images/platinum2.png" },
    { id: 3, name: "Gold Sponsor 1", tier: "GOLD SPONSORS", image: "/images/gold1.png" },
    { id: 4, name: "Silver Sponsor 1", tier: "SILVER SPONSORS", image: "/images/silver1.png" },
    { id: 5, name: "Bronze Sponsor 1", tier: "BRONZE SPONSORS", image: "/images/bronze1.png" },
    { id: 6, name: "Platinum Sponsor 3", tier: "PLATINUM SPONSORS", image: "/images/platinum3.png" },
    { id: 7, name: "Gold Sponsor 2", tier: "GOLD SPONSORS", image: "/images/gold2.png" },
    { id: 8, name: "Silver Sponsor 2", tier: "SILVER SPONSORS", image: "/images/silver2.png" },
    { id: 9, name: "Bronze Sponsor 2", tier: "BRONZE SPONSORS", image: "/images/bronze2.png" }
];