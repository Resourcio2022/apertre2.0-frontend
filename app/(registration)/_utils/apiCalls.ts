export type Role = 'mentee' | 'mentor' | 'evangelist' | 'community partner' | 'project admin'

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface Repo {
    repoName: string;
    repoURL: string;
    description: string;
    projectDomain: string;
    techStack: string[];
}

export async function evangelistSignup(clerk_userId: string, role: Role, email: string, username: string, fullname: string, address: string, phoneNumber: string, linkedinUrl: string, instagramUsername: string, discordUsername: string, twitterUsername: string | undefined, collegeName: string): Promise<string> {
    const payload = {
        clerk_userId,
        role,
        email,
        username,
        fullname,
        address,
        phoneNumber,
        linkedinUrl,
        instagramUsername,
        discordUsername,
        collegeName
    }

    if (twitterUsername !== "") {
        Object.assign(payload, { twitterUsername })
    }

    const res = await fetch(`${API_URL}/evangelist`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await res.json()

    if (!res.ok) {
        throw new Error(data.message)
    }

    return data.message as string;
}

export async function communityPartnerSignup(clerk_userId: string, role: Role, email: string, username: string, fullname: string, address: string, phoneNumber: string, linkedinUrl: string, instagramUsername: string, discordUsername: string, twitterUsername: string | undefined, communityName: string, communityUrl: string, communityStrength: number) {
    const payload = {
        clerk_userId,
        role,
        email,
        username,
        fullname,
        address,
        phoneNumber,
        linkedinUrl,
        instagramUsername,
        discordUsername,
        communityName,
        communityUrl,
        communityStrength
    }

    if (twitterUsername !== "") {
        Object.assign(payload, { twitterUsername })
    }

    const res = await fetch(`${API_URL}/community-partner`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await res.json()

    if (!res.ok) {
        throw new Error(data.message)
    }

    return data.message as string;
}

export async function mentorSignup(clerk_userId: string, role: Role, email: string, username: string, fullname: string, address: string, phoneNumber: string, discordUsername: string, linkedinUrl: string, twitterUsername: string, techstack: string[]) {
    const payload = {
        clerk_userId,
        role,
        email,
        username,
        fullname,
        address,
        phoneNumber,
        discordUsername,
        linkedinUrl,
        techstack
    }

    if (twitterUsername !== "") {
        Object.assign(payload, { twitterUsername })
    }

    const res = await fetch(`${API_URL}/mentor`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await res.json()

    if (!res.ok) {
        throw new Error(data.message)
    }

    return data.message as string;
}

export async function menteeSignup(clerk_userId: string, role: string, email: string, username: string, fullname: string, address: string, phoneNumber: string, linkedinUrl: string, discordUsername: string, twitterUsername: string, referralCode: string) {
    const payload = {
        clerk_userId,
        role,
        email,
        username,
        fullname,
        address,
        phoneNumber,
        linkedinUrl,
        discordUsername,
        referralCode
    }

    if (twitterUsername !== "") {
        Object.assign(payload, { twitterUsername })
    }

    if (referralCode !== "") {
        Object.assign(payload, { referralCode })
    }

    const res = await fetch(`${API_URL}/participant`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await res.json()

    if (!res.ok) {
        throw new Error(data.message)
    }

    return data.message as string;
}

export async function projectAdminSignup(clerk_userId: string, role: Role, email: string, username: string, fullname: string, address: string, phoneNumber: string, discordUsername: string, linkedinUrl: string, twitterUsername: string, repos: Repo[]) {
    const payload = {
        clerk_userId,
        role,
        email,
        username,
        fullname,
        address,
        phoneNumber,
        linkedinUrl,
        discordUsername,
        repos
    }

    if (twitterUsername !== "") {
        Object.assign(payload, { twitterUsername })
    }

    const res = await fetch(`${API_URL}/project-admin`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await res.json()

    if (!res.ok) {
        throw new Error(data.message)
    }

    return data.message as string;
}

export async function getTechStacks() {
    const res = await fetch(`${API_URL}/common/techstack`)

    if (!res.ok) {
        return {}
    }
    const data = await res.json()

    return data as Record<string, string>
}

export async function getProjectDomains() {
    const res = await fetch(`${API_URL}/common/project-domain`)

    if (!res.ok) {
        return {}
    }
    const data = await res.json()

    return data as Record<string, string>
}
