export interface Sponsor {
    id: number;
    name: string;
    image?: string;
    tier: string;
}

export interface SponsorTier {
    name: string;
    color: string;
}

export const sponsorTiers: SponsorTier[] = [
    { name: "PLATINUM SPONSORS", color: "text-gray-200" },
    { name: "GOLD SPONSORS", color: "text-yellow-500" },
    { name: "SILVER SPONSORS", color: "text-gray-400" },
    { name: "BRONZE SPONSORS", color: "text-amber-700" }
];

export const sponsors: Sponsor[] = [
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