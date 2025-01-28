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
      <div className="flex flex-col md:flex-row w-full items-center md:items-start gap-6 md:gap-8 pb-7">
        {image && (
          <Image
            src={image}
            alt=""
            height={160}
            width={160}
            className="rounded-full border-textyellow border-2 w-32 h-32 md:w-40 md:h-40"
          />
        )}
        <div className="flex flex-col justify-between items-center md:items-baseline w-full">
          <div className="font-mokoto font-normal text-xl md:text-2xl text-center md:text-left flex flex-col md:flex-row">
            <span className="text-white whitespace-nowrap gap-2">{'>'}_.. Hello&nbsp;</span>
            {profile?.fullname &&
              <TypewriterEffectSmooth words={profile?.fullname.split(" ").map(word => ({ text: word }))} />
            }
          </div>
          {profile && (
            <span className={`px-2 py-1 my-2 rounded-full text-sm font-medium ${statusColors[profile.status] || "bg-gray-100 text-gray-800"}`}>
              {profile?.status}
            </span>
          )}
          <div className="flex flex-col gap-2 py-3 mb-4 text-white w-full">
            <div className="flex gap-3 items-center justify-center md:justify-start">
              <MdAlternateEmail className="size-5 md:size-6 text-textyellow" />
              <span className="font-Poppins font-normal text-sm md:text-base">{profile?.email}</span>
            </div>
            <div className="flex gap-3 items-center justify-center md:justify-start">
              <BsPhone className="size-5 md:size-6 text-textyellow" />
              <span className="font-Poppins font-normal text-sm md:text-base">{profile?.phoneNumber}</span>
            </div>
            <div className="flex gap-3 items-center justify-center md:justify-start">
              <FaHome className="size-5 md:size-6 text-textyellow" />
              <span className="font-Poppins font-normal text-sm md:text-base">{profile?.address}</span>
            </div>
          </div>
          <div className="w-full flex gap-5 justify-center md:justify-start text-white">
            {profile && (
              <Link href={profile.linkedinUrl} target="_blank" className="hover:scale-110 transition-transform">
                <FaLinkedin className="size-5 md:size-6 hover:text-textyellow transition-colors duration-150" />
              </Link>
            )}
            {profile && (
              <Link href={`https://github.com/${profile.username}`} target="_blank" className="hover:scale-110 transition-transform">
                <FaGithub className="size-5 md:size-6 hover:text-textyellow transition-colors duration-150" />
              </Link>
            )}
            {profile && (
              <Link href={`https://instagram.com/${profile.instagramUsername}`} target="_blank" className="hover:scale-110 transition-transform">
                <FaInstagram className="size-5 md:size-6 hover:text-textyellow transition-colors duration-150" />
              </Link>
            )}
            {profile && profile.twitterUsername && (
              <Link href={`https://twitter.com/${profile.twitterUsername}`} target="_blank" className="hover:scale-110 transition-transform">
                <FaTwitter className="size-5 md:size-6 hover:text-textyellow transition-colors duration-150" />
              </Link>
            )}
          </div>
          {profile && (
            <span className="pt-4 text-lg md:text-xl font-semibold text-center md:text-left">
              {profile.collegeName}
            </span>
          )}
          {profile && profile.referralCode && (
            <div className="py-5 w-full flex justify-center md:justify-start">
              <ClipboardCopy text={profile.referralCode} />
            </div>
          )}
        </div>
      </div>

      <span className="w-full flex font-Poppins font-normal text-textyellow py-5 md:py-7 justify-center md:justify-start text-sm md:text-base">
        Joined From Your Referral
      </span>

      <div className="w-full overflow-x-auto">
        <div className="flex gap-5 pb-4 min-w-max">
          {profile && profile.participant.length > 0 && profile.participant.map((participant, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between w-[200px] p-4 bg-[#2A2929] rounded-lg shadow-lg"
            >
              <span className="font-mokoto font-normal text-lg md:text-xl text-textyellow text-center mb-3">
                {participant.fullname}
              </span>
              <Link
                href={participant.linkedinUrl}
                target="_blank"
                className="hover:scale-110 transition-transform"
              >
                <FaLinkedin className="size-5 md:size-6 text-white hover:text-textyellow transition-colors duration-150" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})

export default Evangelist;
