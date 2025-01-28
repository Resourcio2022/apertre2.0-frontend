'use client'

import { useGitHub } from "@/hooks/useGithubUser"
import { useUser } from "@clerk/clerk-react"
import CommunityPartner from "./_components/community-partner";
import Evangelist from "./_components/evangelist";
import Mentee from "./_components/mentee"
import Mentor from "./_components/mentor";
import ProjectAdmin from "./_components/project-admin";
import { Loader } from "@/components/Pre-Loader";
import { useState } from "react";
import { Role } from "../(registration)/_utils/apiCalls";
import { Button } from "@/components/ui/button";

export default function Page() {
    const { user } = useUser();
    const { githubUsername, image, loading } = useGitHub();
    const roles = user?.publicMetadata?.roles as Role[] || [];

    return (
        <div className="w-full min-h-screen bg-[#1F1E1E] px-5 py-5 md:px-16 md:py-10">
            {loading
                ? (
                    <Loader
                        width="4rem"
                        height="4rem"
                        color="#ffffff"
                    />
                ) : (
                    roles.length > 0 ? (
                        <RoleTabs
                            roles={roles}
                            githubUsername={githubUsername}
                            image={image}
                        />
                    ) : (
                        <div className="text-white text-3xl font-motoko flex justify-center">
                            <span>You haven&apos;t registered yet</span>
                        </div>
                    )
                )}
        </div>
    )
}

const RoleTabs = ({ roles, githubUsername, image }: { roles: Role[]; githubUsername: string | undefined; image: string | undefined }) => {
    const [activeRole, setActiveRole] = useState<Role>(roles[0] || "");

    const renderComponent = () => {
        switch (activeRole) {
            case "mentee":
                return <Mentee username={githubUsername} image={image} key="mentee" />;
            case "community partner":
                return <CommunityPartner username={githubUsername} image={image} key="community partner" />;
            case "evangelist":
                return <Evangelist username={githubUsername} image={image} key="evangelist" />;
            case "mentor":
                return <Mentor username={githubUsername} image={image} key="mentor" />;
            case "project admin":
                return <ProjectAdmin username={githubUsername} image={image} key="project admin" />;
            default:
                return <span>Select a role to view content</span>;
        }
    };

    return (
        <>
            <div className="flex gap-4 py-10">
                {roles.map((role) => (
                    <Button
                        variant="ghost"
                        key={role}
                        onClick={() => setActiveRole(role)}
                        className={`px-4 py-2 text-2xl font-mokoto transition-colors duration-500 ${activeRole === role ? "text-textyellow border-b-2" : "text-white"}`}
                    >
                        {role.toUpperCase()}
                    </Button>
                ))}
            </div>

            {renderComponent()}
        </>
    );
};
