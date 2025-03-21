"use client"
import { memo, useEffect, useState } from "react";
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
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProfile = async () => {
			if (username) {
				setLoading(true);
				try {
					const data = await getProfile('evangelist', username);
					setProfile(data);
				}
				catch (err: any) {
					toast.error(err.message);
				}
				finally {
					setLoading(false);
				}
			} else {
				setLoading(false);
			}
		};

		fetchProfile();
	}, [username]);

	if (isLoading) {
		return (
			<div className="">
				<div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white" />
			</div>
		)
	}
	else if (!profile) return null;

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
						<TypewriterEffectSmooth words={profile.fullname.split(" ").map(word => ({ text: word }))} />
					</div>
					<span className={`px-2 py-1 my-2 rounded-full text-sm font-medium ${statusColors[profile.status] || "bg-gray-100 text-gray-800"}`}>
						{profile.status}
					</span>
					<div className="flex flex-col gap-2 py-3 mb-4 text-white w-full">
						<div className="flex gap-3 items-center justify-center md:justify-start">
							<MdAlternateEmail className="size-5 md:size-6 text-textyellow" />
							<span className="font-Poppins font-normal text-sm md:text-base">{profile.email}</span>
						</div>
						<div className="flex gap-3 items-center justify-center md:justify-start">
							<BsPhone className="size-5 md:size-6 text-textyellow" />
							<span className="font-Poppins font-normal text-sm md:text-base">{profile.phoneNumber}</span>
						</div>
						<div className="flex gap-3 items-center justify-center md:justify-start">
							<FaHome className="size-5 md:size-6 text-textyellow" />
							<span className="font-Poppins font-normal text-sm md:text-base">{profile.address}</span>
						</div>
					</div>
					<div className="w-full flex gap-5 justify-center md:justify-start text-white">
						<Link href={profile.linkedinUrl} target="_blank" className="hover:scale-110 transition-transform">
							<FaLinkedin className="size-5 md:size-6 hover:text-textyellow transition-colors duration-150" />
						</Link>
						<Link href={`https://github.com/${profile.username}`} target="_blank" className="hover:scale-110 transition-transform">
							<FaGithub className="size-5 md:size-6 hover:text-textyellow transition-colors duration-150" />
						</Link>
						{profile.instagramUsername !== "" && (
							<Link href={`https://instagram.com/${profile.instagramUsername}`} target="_blank" className="hover:scale-110 transition-transform">
								<FaInstagram className="size-5 md:size-6 hover:text-textyellow transition-colors duration-150" />
							</Link>
						)}
						{profile.twitterUsername && (
							<Link href={`https://x.com/${profile.twitterUsername}`} target="_blank" className="hover:scale-110 transition-transform">
								<FaTwitter className="size-5 md:size-6 hover:text-textyellow transition-colors duration-150" />
							</Link>
						)}
					</div>
					<span className="pt-4 text-lg md:text-xl font-semibold text-center md:text-left">
						{profile.collegeName}
					</span>
					{profile.referralCode && (
						<div className="py-5 w-full flex justify-center md:justify-start">
							<ClipboardCopy text={profile.referralCode} />
						</div>
					)}
				</div>
			</div>

			{profile.participant.length > 0 && (
				<>
					<span className="w-full flex font-Poppins font-normal text-textyellow py-5 md:py-7 justify-center md:justify-start text-sm md:text-base">
						Joined From Your Referral
					</span>

					<div className="w-full flex flex-wrap gap-5 text-white">
						{profile.participant.map((participant, index) => (
							<div
								key={index}
								className="w-56 py-5 flex flex-col gap-5 items-center bg-[#2A2929] rounded-lg"
							>
								<span className="font-mokoto font-normal text-lg md:text-xl text-textyellow text-center">
									{participant.fullname}
								</span>
								<div className="flex gap-3">
									<Link
										href={`https://github.com/${participant.username}`}
										target="_blank"
										className="hover:scale-110 transition-transform"
									>
										<FaGithub className="size-5 md:size-6 hover:text-textyellow transition-colors duration-150" />
									</Link>
									<Link
										href={participant.linkedinUrl}
										target="_blank"
										className="hover:scale-110 transition-transform"
									>
										<FaLinkedin className="size-5 md:size-6 hover:text-textyellow transition-colors duration-150" />
									</Link>
								</div>
							</div>
						))}
					</div>
				</>
			)}
		</div>
	)
})

export default Evangelist;
