import { useEffect, useState } from "react";
import { toast } from "sonner";
import { IMentee } from "./types";

interface MenteeProps {
    username: string | undefined;
}

export default function Mentee({ username }: MenteeProps) {
    const [profile, setProfile] = useState<IMentee>();

    useEffect(() => { 
        async function getProfile() {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/participant/${username}`);
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
