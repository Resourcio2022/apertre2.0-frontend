"use client"
import { memo, useEffect, useState, useTransition } from "react";
import { toast } from "sonner";
import { IMentor } from "./types";
import { getProfile } from "../_utils/apiCalls";

interface MentorProps {
    username: string | undefined;
    image: string | undefined;
}

const Mentor = memo(function Mentor({ username, image }: MentorProps) {
    const [profile, setProfile] = useState<IMentor>();
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        if (username) {
            startTransition(async () => {
                try {
                    const data = await getProfile('mentor', username);
                    setProfile(data);
                }
                catch (err: any) {
                    toast.error(err.message);
                }
            })
        }
    }, [username])

    return (
        <></>
    )
})

export default Mentor;
