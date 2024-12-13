export type Role = 'mentee' | 'mentor' | 'evangelist' | 'community partner' | 'project admin'

const API_URL = process.env.NEXT_PUBLIC_API_URL;

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

    const res = await fetch(`${API_URL}/evangelists`, {
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

    return data.message;
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

    return data.message;
}
