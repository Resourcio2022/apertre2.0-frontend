export type Status = 'VERIFIED' | 'UNVERIFIED' | 'PENDING'

export const statusColors = {
    VERIFIED: "bg-green-100 text-green-800",
    UNVERIFIED: "bg-gray-100 text-gray-800",
    PENDING: "bg-yellow-100 text-yellow-800",
};

type Participant = {
    fullname: string,
    linkedinUrl: string,
}

export interface ICommunityPartner {
    email: string,
    username: string,
    fullname: string,
    address: string,
    phoneNumber: string,
    linkedinUrl: string,
    instagramUsername: string,
    twitterUsername: string | null,
    discordUsername: string,
    communityName: string,
    communityUrl: string,
    communityStrength: number,
    referralCode: string | null,
    status: Status,
    participant: Participant[]
}

export interface IEvangelist {
    email: string,
    username: string,
    fullname: string,
    address: string,
    phoneNumber: string,
    linkedinUrl: string,
    instagramUsername: string,
    twitterUsername: string | null,
    discordUsername: string,
    collegeName: string,
    referralCode: string | null,
    status: Status,
    participant: Participant[]
}

type Evangelist = {
    username: string,
    fullname: string,
    linkedinUrl: string,
    instagramUsername: string,
    twitterUsername: string | null,
    discordUsername: string,
    collegeName: string,
}

type CommunityPartner = {
    username: string,
    fullname: string,
    linkedinUrl: string,
    instagramUsername: string,
    twitterUsername: string | null,
    discordUsername: string,
    communityName: string,
    communityUrl: string
}

export interface IMentee {
    email: string,
    username: string,
    fullname: string,
    address: string,
    phoneNumber: string,
    linkedinUrl: string,
    discordUsername: string,
    twitterUsername: string | null,
    evangelist: Evangelist | null,
    communityPartner: CommunityPartner | null,
}

export interface IMentor { // fix 
    email: string,
    username: string,
    fullname: string,
    address: string,
    phoneNumber: string,
    status: Status,
}

export interface IProjectAdmin { // fix
    email: string,
    username: string,
    fullname: string,
    address: string,
    phoneNumber: string,
    status: Status,
}
