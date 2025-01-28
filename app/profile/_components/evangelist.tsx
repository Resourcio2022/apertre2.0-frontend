"use client"
import { memo, useEffect, useState, useTransition } from "react";
import { toast } from "sonner";
import { IEvangelist, statusColors } from "./types";
import Image from 'next/image'
import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsPhone } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import Link from "next/link";
import { getProfile } from "../_utils/apiCalls";
import { TypewriterEffectSmooth } from "@/components/Typewriter";
import ClipboardCopy from "@/components/Clipboard";

interface EvangelistProps {
    username: string | undefined;
    image: string | undefined;
}

const Evangelist = memo(function Evangelist({ username, image }: EvangelistProps) {
    const [profile, setProfile] = useState<IEvangelist>();
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        if (username) {
            startTransition(async () => {
                try {
                    const data = await getProfile('evangelist', username);
                    setProfile(data);
                }
                catch (err: any) {
                    toast.error(err.message);
                }
            })
        }
    }, [username])

    return (
        <div className="flex flex-col justify-center text-textyellow">
            <div className="flex flex-col md:flex-row w-full items-start gap-8 pb-7 ">
                {image && (
                    <Image src={image} alt="" height={160} width={160} className="rounded-full border-textyellow border-2 " />
                )}
                <div className="flex flex-col justify-between items-baseline">
                    <div className="font-mokoto font-normal text-2xl text-nowrap flex">
                        <span className="text-white">{'>'}_.. Hello&nbsp;</span>
                        {profile?.fullname &&
                            <TypewriterEffectSmooth words={profile?.fullname.split(" ").map(word => ({ text: word }))} />
                        }
                    </div>
                    {profile && (
                        <span className={`px-2 py-1 my-2 rounded-full text-sm font-medium ${statusColors[profile.status] || "bg-gray-100 text-gray-800"}`}>
                            {profile?.status}
                        </span>
                    )}
                    <div className="flex flex-col gap-2 py-3 mb-4 text-white">
                        <div className="flex gap-3 items-center">
                            <MdAlternateEmail className="size-6 text-textyellow" />
                            <span className="font-Poppins font-normal">{profile?.email}</span>
                        </div>
                        <div className="flex gap-3 items-center">
                            <BsPhone className="size-6 text-textyellow" />
                            <span className="font-Poppins font-normal">{profile?.phoneNumber}</span>
                        </div>
                        <div className="flex gap-3 items-center">
                            <FaHome className="size-6 text-textyellow" />
                            <span className="font-Poppins font-normal">{profile?.address}</span>
                        </div>
                    </div>
                    <div className="w-full flex gap-5 justify-center md:justify-start text-white">
                        {profile && (
                            <Link href={profile.linkedinUrl} target="_blank">
                                <FaLinkedin className="size-6 hover:text-textyellow transition-colors duration-150" />
                            </Link>
                        )}
                        {profile && (
                            <Link href={`https://github.com/${profile.username}`} target="_blank">
                                <FaGithub className="size-6 hover:text-textyellow transition-colors duration-150" />
                            </Link>
                        )}
                        {profile && (
                            <Link href={`https://instagram.com/${profile.instagramUsername}`} target="_blank">
                                <FaInstagram className="size-6 hover:text-textyellow transition-colors duration-150" />
                            </Link>
                        )}
                        {profile && profile.twitterUsername && (
                            <Link href={`https://twitter.com/${profile.twitterUsername}`} target="_blank">
                                <FaTwitter className="size-6 hover:text-textyellow transition-colors duration-150" />
                            </Link>
                        )}
                    </div>
                    {profile && (
                        <span className="pt-4 text-xl font-semibold">{profile.collegeName}</span>
                    )}
                    {profile && profile.referralCode && (
                        <div className="py-5">
                            <ClipboardCopy text={profile.referralCode} />
                        </div>
                    )}
                </div>
            </div>

            <span className="w-full flex font-Poppins font-normal text-textyellow py-7 justify-center md:justify-start">Joined From Your Referral </span>

            <div className="w-full overflow-x-auto flex justify-between gap-5">
                {profile && profile.participant.length > 0 && profile.participant.map((participant, index) => (
                    <div key={index} className="flex flex-col md:flex-row w-full items-center gap-7 pb-7">
                        <div className="flex flex-col justify-between items-baseline">
                            <span className="font-mokoto font-normal text-2xl text-textyellow text-nowrap"> {participant.fullname}
                            </span>
                            <Link href={participant.linkedinUrl} className="text-transparent">
                                <FaLinkedin className="size-6 hover:text-textyellow transition-colors duration-150" />
                            </Link>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
})

export default Evangelist;
