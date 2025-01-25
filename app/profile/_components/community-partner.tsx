"use client"
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ICommunityPartner } from "./types";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import  Link  from "next/link";
import { useGitHub } from "@/hooks/useGithubUser";

interface CommunityPartnerProps {
    username: string | undefined;
}

export default function CommunityPartner({ username }: CommunityPartnerProps) {
    const [profile, setProfile] = useState<ICommunityPartner>();
    const github=useGitHub();
        
        const im=github.image;
    useEffect(() => {
        async function getProfile() {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/community-partner/${username}`);
            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message);
                return;
            }
            setProfile(data);
            console.log(data);
        }
        
        if (username) {
            getProfile();
        }
    }, [username])

    return (
        <>
        <div className="w-full bg-[#1F1E1E] max-h-screen flex flex-col justify-center pt-7 pl-2 md:pl-10">
            <div className="flex flex-col md:flex-row w-full items-center gap-7 pb-7 ">
              
            {im && (
                    <Image src={im} alt="" height={160} width={160} className="rounded-full border-textyellow border-2 "/>
                )}
            <div className="flex flex-col justify-between items-baseline">
                <span className="font-mokoto font-normal text-[28px] text-textyellow text-nowrap"> {'>'}_.. Hello {username}</span>
                <div className="w-full flex gap-5 justify-center md:justify-start">
                {/* {profile && profile.instagramUsername  && (<Link href={`https://www.instagram.com/${profile.instagramUsername}`} className="text-transparent"><FaInstagram className="text-white size-6"/></Link>)} */}
                {profile && profile.linkedinUrl && (<Link href={profile?.linkedinUrl} className="text-transparent"><FaLinkedin className="text-white size-6"/></Link>)}
                {profile && profile.username && (
                <Link href={`https://github.com/${profile.username}`} className="text-transparent">
                    <FaGithub className="text-white size-6"/>
                </Link>
            )}
            {profile && profile.twitterUsername && (
                <Link href={`https://twitter.com/${profile.twitterUsername}`} className="text-transparent">
                    <FaTwitter className="text-white size-6"/>
                </Link>
            )}
                </div>
            </div>
            </div>
            <span className="w-full flex font-Poppins font-normal text-textyellow py-7 justify-center md:justify-start">Joined from referral of </span>
            {/* <div className="flex flex-col md:flex-row w-full items-center gap-7 pb-7 ">
              
              
                      <Image src="/" alt="" height={160} width={160} className="rounded-full border-textyellow border-2 bg-white"/>
                  
              <div className="flex flex-col justify-between items-baseline">
                  <span className="font-mokoto font-normal text-[28px] text-textyellow text-nowrap"> {profile?.evangelist?.fullname}</span>
                  <div className="w-full flex gap-5 justify-center md:justify-start">
                      {/* <Link href="" className="text-transparent"><FaInstagram className="text-white size-6"/></Link> */}
                      {/* <Link href="" className="text-transparent"><FaLinkedin className="text-white size-6"/></Link>
                      {profile && profile.username && (
                <Link href={`https://github.com/${profile?.evangelist?.username}`} className="text-transparent">
                    <FaGithub className="text-white size-6"/>
                </Link>
            )}
            {profile && profile.twitterUsername && (
                <Link href={`https://twitter.com/${profile?.evangelist?.twitterUsername}`} className="text-transparent">
                    <FaTwitter className="text-white size-6"/>
                </Link>
            )}
                  </div>
              </div> */}
              {/*</div> */}
        </div>
        </>
    )
}
