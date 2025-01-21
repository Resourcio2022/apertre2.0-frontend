export type Status = 'VERIFIED' | 'UNVERIFIED' | 'PENDING'

export interface ICommunityPartner {
    email: string,
    username: string,
    fullname: string,
    address: string,
    phoneNumber: string,
    status: Status,
}

export interface IEvangelist {
    email: string,
    username: string,
    fullname: string,
    address: string,
    phoneNumber: string,
    status: Status,
}

export interface IMentee {
    email: string,
    username: string,
    fullname: string,
    address: string,
    phoneNumber: string,
    status: Status,
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
