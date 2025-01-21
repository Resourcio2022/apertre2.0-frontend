import { useEffect, useState } from "react";
import { toast } from "sonner";
import { IEvangelist } from "./types";

interface EvangelistProps {
    username: string | undefined;
}

export default function Evangelist({ username }: EvangelistProps) {
    const [profile, setProfile] = useState<IEvangelist>();

    useEffect(() => { 
        async function getProfile() {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/evangelist/${username}`);
            const data = await res.json();
        
            if (!res.ok) {
                toast.error(data.message);
                return;
            }
            setProfile(data);
        }
        
        if (username) {
            getProfile();
        }
    }, [username])

    return (
        <></>
    )
}
