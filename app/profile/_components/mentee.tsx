"use client"
import Image from "next/image";
import Link from "next/link";
import { memo, useEffect, useState, useTransition } from "react";
import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsPhone } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { toast } from "sonner";
import { IMentee } from "./types";
import { getProfile } from "../_utils/apiCalls";
import { TypewriterEffectSmooth } from "@/components/Typewriter";

interface MenteeProps {
	username: string | undefined;
	image: string | undefined;
}

const Mentee = memo(function Mentee({ username, image }: MenteeProps) {
	const [profile, setProfile] = useState<IMentee>();
	const [isPending, startTransition] = useTransition();

	useEffect(() => {
		if (username) {
			startTransition(async () => {
				try {
					const data = await getProfile('participant', username);
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

			<span className="w-full flex font-Poppins font-normal py-5 md:py-10 justify-center md:justify-start text-white text-xl">Joined from Referral of</span>
			{profile && profile.evangelist && (
				<div className="flex flex-col md:flex-row w-full items-center gap-7">
					<div className="flex flex-col gap-2 justify-between items-baseline">
						<span className="font-mokoto font-normal text-2xl text-nowrap"> {profile.evangelist.fullname}</span>
						<div className="w-full flex gap-5 justify-center md:justify-start text-white">
							<Link href={`https://www.instagram.com/${profile.evangelist.instagramUsername}`} target="_blank">
								<FaInstagram className="size-6 hover:text-textyellow transition-colors duration-150" />
							</Link>
							<Link href={profile.evangelist.linkedinUrl} target="_blank">
								<FaLinkedin className="size-6 hover:text-textyellow transition-colors duration-150" />
							</Link>
							<Link href={`https://github.com/${profile.evangelist.username}`} target="_blank">
								<FaGithub className="size-6 hover:text-textyellow transition-colors duration-150" />
							</Link>
							{profile.evangelist.twitterUsername &&
								<Link href={`https://x.com/${profile.evangelist.twitterUsername}`} target="_blank">
									<FaTwitter className="size-6 hover:text-textyellow transition-colors duration-150" />
								</Link>
							}
						</div>
					</div>
				</div>
			)}

			{profile && profile.communityPartner && (
				<div className="flex flex-col md:flex-row w-full items-center gap-7 pb-7 ">
					<div className="flex flex-col justify-between items-baseline">
						<span className="font-mokoto font-normal text-2xl text-nowrap"> {profile.communityPartner.fullname}</span>
						<div className="w-full flex gap-5 justify-center md:justify-start text-white">
							<Link href={`https://www.instagram.com/${profile.communityPartner.instagramUsername}`} target="_blank">
								<FaInstagram className="size-6 hover:text-textyellow" />
							</Link>
							<Link href={profile.communityPartner.linkedinUrl} target="_blank">
								<FaLinkedin className="size-6 hover:text-textyellow" />
							</Link>
							<Link href={`https://github.com/${profile.communityPartner.username}`} target="_blank">
								<FaGithub className="size-6 hover:text-textyellow" />
							</Link>
							{profile.communityPartner.twitterUsername &&
								<Link href={`https://x.com/${profile.communityPartner.twitterUsername}`} target="_blank">
									<FaTwitter className="size-6 hover:text-textyellow" />
								</Link>
							}
						</div>
					</div>
				</div>
			)}
		</div>
	)
})

export default Mentee;
