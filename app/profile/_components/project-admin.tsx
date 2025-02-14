"use client"
import { memo, useEffect, useState, useTransition } from "react";
import { toast } from "sonner";
import { IProjectAdmin } from "./types";
import  {getProfile} from "../_utils/apiCalls";
import {TypewriterEffectSmooth} from "@/components/Typewriter";
import Image from "next/image";
import { MdAlternateEmail } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
import { FaDiscord,FaLinkedin,FaTwitter,FaHome,FaGithub} from "react-icons/fa";
import Link from "next/link";
interface ProjectAdminProps {
    username: string | undefined;
    image: string | undefined;
}

const ProjectAdmin = memo(function ProjectAdmin({ username, image }: ProjectAdminProps) {
    const [profile, setprofile] = useState<IProjectAdmin>();
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        if (username) {
            startTransition(async () => {
                try {
                    const data = await getProfile('project-admin', username);
                    setprofile(data);
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
							</Link>)}
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
						{profile && profile.twitterUsername && (
							<Link href={`https://x.com/${profile.discordUsername}`} target="_blank">
								<FaDiscord className="size-6 hover:text-textyellow transition-colors duration-150" />
							</Link>
						)}
					</div>
				</div>
			</div>
    
    <div className="my-5">
      <h3 className="text-xl font-semibold my-5 font-mokoto">GitHub Repositories:</h3>
      {profile?.githubRepo.map((repo, index) => (
        <div key={index} className="p-4 border rounded-lg text-textyellow flex flex-col gap-2 my-5">
          <Link href={repo.repoURL} className="text-lg font-medium font-mokoto hover:underline">
            {repo.repoName}
          </Link>
          <span className="w-fit px-2 py-1 my-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
            {repo.projectStatus}
            </span>
          <div className="mt-2">
            <p className="font-semibold">Mentors:</p>
            {repo.mentors.map(({ mentor }, idx) => (
              <div key={idx} className="text-textyellow font-mokoto font-normal"> 
                <strong>{mentor.fullname}</strong> (@{mentor.username}) - {mentor.techstack.join(', ')}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
    )
})

export default ProjectAdmin;
