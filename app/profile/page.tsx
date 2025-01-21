'use client'

import { useGitHub } from "@/hooks/useGithubUser"
import { useUser } from "@clerk/clerk-react"
import Mentee from "./_components/mentee"
import CommunityPartner from "./_components/community-partner";
import Evangelist from "./_components/evangelist";
import Mentor from "./_components/mentor";
export default function page() {
    // const { user } = useUser()
    const { githubUsername } = useGitHub();

    // console.log(user?.publicMetadata)


    return (
    //    <><Mentee username={githubUsername} /></>
    // <><CommunityPartner username={githubUsername}/></>
    // <><Evangelist username={githubUsername}/></>
    <><Mentor username={githubUsername}/></>
    )
}
