"use client"
import { memo, useEffect, useState, useTransition } from "react";
import { toast } from "sonner";
import { IProjectAdmin } from "./types";
import { getProfile } from "../_utils/apiCalls";

interface ProjectAdminProps {
    username: string | undefined;
    image: string | undefined;
}

const ProjectAdmin = memo(function ProjectAdmin({ username, image }: ProjectAdminProps) {
    const [profile, setProfile] = useState<IProjectAdmin>();
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        if (username) {
            startTransition(async () => {
                try {
                    const data = await getProfile('project-admin', username);
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

export default ProjectAdmin;
