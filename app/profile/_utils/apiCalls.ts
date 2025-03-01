type Path = 'participant' | 'mentor' | 'evangelist' | 'community-partner' | 'project-admin'

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export async function getProfile(path: Path, username: string) {
    const res = await fetch(`${API_URL}/${path}/${username}`);
    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message);
    }

    return data;
}
