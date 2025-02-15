"use client"
import { useGitHub } from "@/hooks/useGithubUser"
import { useUser } from "@clerk/nextjs";
import CommunityPartner from "./_components/community-partner"
import Evangelist from "./_components/evangelist"
import Mentee from "./_components/mentee"
import Mentor from "./_components/mentor"
import ProjectAdmin from "./_components/project-admin"
import { Loader } from "@/components/Loader"
import { useState, useRef, useEffect } from "react"
import type { Role } from "../(registration)/_utils/apiCalls"
import { ChevronDown } from "lucide-react"

export default function Page() {
    const { user } = useUser()
    const { githubUsername, image, loading } = useGitHub()
    const roles = (user?.publicMetadata?.roles as Role[]) || []

    return (
        <div className="w-full min-h-screen bg-[#1F1E1E] px-4 py-4 md:px-16 md:py-10">
            {loading ? (
                <div className="flex items-center justify-center h-[calc(100vh-8rem)]">
                    <Loader width="4rem" height="4rem" color="#ffffff" />
                </div>
            ) : roles.length > 0 ? (
                <RoleTabs roles={roles} githubUsername={githubUsername} image={image} />
            ) : (
                <div className="text-white text-xl md:text-3xl font-mokoto flex justify-center items-center h-[calc(100vh-8rem)]">
                    <span>You haven&apos;t registered yet</span>
                </div>
            )}
        </div>
    )
}

const RoleTabs = ({ roles, githubUsername, image }: { roles: Role[]; githubUsername: string | undefined; image: string | undefined }) => {
    const [activeRole, setActiveRole] = useState<Role>(roles[0])
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const renderComponent = () => {
        switch (activeRole) {
            case "mentee":
                return <Mentee username={githubUsername} image={image} key="mentee" />
            case "community partner":
                return <CommunityPartner username={githubUsername} image={image} key="community partner" />
            case "evangelist":
                return <Evangelist username={githubUsername} image={image} key="evangelist" />
            case "mentor":
                return <Mentor username={githubUsername} image={image} key="mentor" />
            case "project admin":
                return <ProjectAdmin username={githubUsername} image={image} key="project admin" />
            default:
                return (
                    <span className="text-white text-xl">
                        GM
                    </span >
                )
        }
    }

    return (
        <>
            <div className="w-full">
                {/* Mobile dropdown */}
                <div className="md:hidden mb-6" ref={dropdownRef}>
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full bg-[#2A2A2A] text-textyellow font-mokoto py-2 px-4 rounded flex justify-between items-center"
                    >
                        <span>{activeRole.toUpperCase()}</span>
                        <ChevronDown className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute mt-1 w-full bg-[#2A2A2A] rounded shadow-lg z-10">
                            {roles.map((role) => (
                                <button
                                    key={role}
                                    onClick={() => {
                                        setActiveRole(role)
                                        setIsDropdownOpen(false)
                                    }}
                                    className="block w-full text-left px-4 py-2 text-textyellow font-mokoto hover:bg-[#3A3A3A]"
                                >
                                    {role.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Desktop tabs */}
                <div className="hidden md:block overflow-x-auto">
                    <div className="flex gap-4 py-6 md:py-10 min-w-max">
                        {roles.map((role) => (
                            <button
                                key={role}
                                onClick={() => setActiveRole(role)}
                                className={`px-3 md:px-4 py-1.5 text-lg md:text-2xl font-mokoto transition-colors duration-500 hover:text-textyellow ${activeRole === role ? "text-textyellow border-b-2 border-textyellow" : "text-white"}`}
                            >
                                {role.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-6 md:mt-10">{renderComponent()}</div>
        </>
    )
}
