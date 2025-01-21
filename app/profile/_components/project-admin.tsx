import { useEffect, useState } from "react";
import { toast } from "sonner";
import { IProjectAdmin } from "./types";

interface ProjectAdminProps {
    username: string | undefined;
}

export default function ProjectAdmin({ username }: ProjectAdminProps) {
    const [profile, setProfile] = useState<IProjectAdmin>();

    useEffect(() => { 
        async function getProfile() {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project-admin/${username}`);
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
