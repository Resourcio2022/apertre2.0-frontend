import { useEffect, useState } from "react";
import { toast } from "sonner";
import { IMentor } from "./types";

interface MentorProps {
    username: string | undefined;
}

export default function Mentor({ username }: MentorProps) {
    const [profile, setProfile] = useState<IMentor>();

    useEffect(() => { 
        async function getProfile() {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/mentor/${username}`);
            const data = await res.json();
        
            if (!res.ok) {
                toast.error(data.message);
                return;
            }
            setProfile(data);
        }
        username && getProfile();
    }, [username])

    return (
        <></>
    )
}
