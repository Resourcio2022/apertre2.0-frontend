"use client"
import { memo, useEffect, useState, useTransition } from "react";
import { toast } from "sonner";
import { IMentor } from "./types";
import { getProfile } from "../_utils/apiCalls";
import Link from "next/link";
import Image from "next/image";
import { TypewriterEffectSmooth } from "@/components/Typewriter";
import { FaGithub,FaHome,FaLinkedin,FaTwitter,FaInstagram } from "react-icons/fa";
import { BsPhone } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
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
                    console.log(data);
                }
                catch (err: any) {
                    toast.error(err.message);
                }
            })
        }
    }, [username])

    return (
        <div className="flex flex-col justify-center text-textyellow">
      <div className="flex flex-col md:flex-row w-full items-center gap-7">
        {image && (
          <Image
            src={image}
            alt=""
            width={160}
            height={160}
            className="rounded-full border-textyellow border-2"
          />
        )}
        <div className="flex flex-col justify-between items-baseline">
          <div className="font-mokoto font-normal text-2xl text-nowrap flex flex-col md:flex-row">
            <span className="text-white whitespace-nowrap">{'>'}_.. Hello&nbsp;</span>
            {profile?.fullname &&
              <TypewriterEffectSmooth words={profile.fullname.split(" ").map(word => ({ text: word }))} />
            }
          </div>
          <div className="mt-4">
        <h3 className="text-lg font-semibold text-white">Tech Stacks</h3>
        <div className="flex flex-wrap gap-2 mt-2">
            {profile?.techstack.map((stack, index) => (
                <span key={index} className="bg-footer p-2 rounded">
                    {stack}
                </span>
            ))}
        </div>
    </div>
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
              <Link href={`https://github.com/${profile.username}`} target="_blank">
                <FaGithub className="size-6 hover:text-textyellow transition-colors duration-150" />
              </Link>
            )}
            {profile && (
              <Link href={profile.linkedinUrl} target="_blank">
                <FaLinkedin className="size-6 hover:text-textyellow transition-colors duration-150" />
              </Link>
            )}
            {profile && profile.twitterUsername && (
              <Link href={`https://x.com/${profile.twitterUsername}`} target="_blank">
                <FaTwitter className="size-6 hover:text-textyellow transition-colors duration-150" />
              </Link>
            )}
          </div>
        </div>
      </div>

     

     
    </div>
    )
})

export default Mentor;
