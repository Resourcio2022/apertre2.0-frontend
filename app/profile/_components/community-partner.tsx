import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ICommunityPartner } from "./types";

interface CommunityPartnerProps {
    username: string | undefined;
}

export default function CommunityPartner({ username }: CommunityPartnerProps) {
    const [profile, setProfile] = useState<ICommunityPartner>();

    useEffect(() => {
        async function getProfile() {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/community-partner/${username}`);
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
