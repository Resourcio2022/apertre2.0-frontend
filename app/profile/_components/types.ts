export type Status = 'VERIFIED' | 'UNVERIFIED' | 'PENDING'

export interface ICommunityPartner {
    username: string,
    fullname: string,
    linkedinUrl: string,
    instagramUsername: string,
    twitterUsername: string | null,
    discordUsername: string,
    communityName: string,
    communityUrl: string
}

export interface IEvangelist {
    username: string,
    fullname: string,
    linkedinUrl: string,
    instagramUsername:string ,
    twitterUsername:string| null ,
    discordUsername:string ,
    collegeName: string,
    participant:IParticipant[] | null,
}
type Evangelist={
    username: string,
    fullname: string,
    linkedinUrl: string,
    instagramUsername:string ,
    twitterUsername:string| null ,
    discordUsername:string ,
    collegeName: string,

}
type CommunityPartner={
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
    evangelist:Evangelist | null,
    communityPartner:CommunityPartner | null,
}

export interface IMentor {
    email: string,
    username: string,
    fullname: string,
    address: string,
    phoneNumber: string,
    status: Status,
}

export interface IProjectAdmin {
    email: string,
    username: string,
    fullname: string,
    address: string,
    phoneNumber: string,
    status: Status,
}
export interface IParticipant {
    fullname: string,
    linkedinUrl: string,
    twitterUsername: string,
}