export type Status = 'VERIFIED' | 'UNVERIFIED' | 'PENDING'
export type ProjectStatus = 'SELECTED' | 'REJECTED' | 'PENDING'

export const statusColors = {
    VERIFIED: "bg-green-100 text-green-800",
    UNVERIFIED: "bg-gray-100 text-gray-800",
    PENDING: "bg-yellow-100 text-yellow-800",
};

export const projectStatusColors = {
    SELECTED: "bg-green-100 text-green-800",
    REJECTED: "bg-gray-100 text-gray-800",
    PENDING: "bg-yellow-100 text-yellow-800",
}

type Participant = {
    fullname: string,
    username: string,
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

type AssignedRepo = {
    repoName: string,
    repoURL: string,
    description: string,
    projectDomain: string,
    techstack: string[],
    projectAdmin: {
        fullname: string,
        username: string,
        discordUsername: string,
    }
}

export interface IMentor {
    email: string,
    username: string,
    fullname: string,
    address: string,
    phoneNumber: string,
    linkedinUrl: string,
    discordUsername: string,
    twitterUsername: string | null,
    techstack: string[],
    status: Status,
    githubRepos: { githubRepo: AssignedRepo }[]
}

type AssignedMentor = {
    username: string,
    fullname: string,
    techstack: string[],
}

type Project = {
    repoName: string,
    repoURL: string,
    projectStatus: string,
    mentors: { mentor: AssignedMentor }[],
}

export interface IProjectAdmin {
    email: string,
    username: string,
    fullname: string,
    address: string,
    phoneNumber: string,
    linkedinUrl: string,
    discordUsername: string,
    twitterUsername: string | null,
    status: Status,
    githubRepos: Project[]
}
