"use client";
import { memo, useEffect, useState } from "react";
import { toast } from "sonner";
import { IMentor } from "./types";
import { getProfile } from "../_utils/apiCalls";
import Link from "next/link";
import Image from "next/image";
import { TypewriterEffectSmooth } from "@/components/Typewriter";
import { FaGithub, FaHome, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsPhone } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import Ticket from "@/components/Ticket";

interface MentorProps {
  username: string | undefined;
  image: string | undefined;
}

const Mentor = memo(function Mentor({ username, image }: MentorProps) {
  const [profile, setProfile] = useState<IMentor>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (username) {
        setLoading(true);
        try {
          const data = await getProfile("mentor", username);
          setProfile(data);
        } catch (err: any) {
          toast.error(err.message);
        } finally {
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
    );
  } else if (!profile) return null;

  return (
    <div className="flex flex-col justify-center text-textyellow">
      <div className="flex flex-col lg:items-center lg:flex-row">
        <div className="flex flex-col md:flex-row lg:w-[80%] items-center gap-7">
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
              <span className="text-white whitespace-nowrap">
                {">"}_.. Hello&nbsp;
              </span>
              <TypewriterEffectSmooth
                words={profile.fullname
                  .split(" ")
                  .map((word) => ({ text: word }))}
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-white">Tech Stacks</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {profile.techstack.map((stack, index) => (
                  <span key={index} className="bg-footer p-2 rounded">
                    {stack}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 py-3 mb-4 text-white">
              <div className="flex gap-3 items-center">
                <MdAlternateEmail className="size-6 text-textyellow" />
                <span className="font-Poppins font-normal">
                  {profile.email}
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <BsPhone className="size-6 text-textyellow" />
                <span className="font-Poppins font-normal">
                  {profile.phoneNumber}
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <FaHome className="size-6 text-textyellow" />
                <span className="font-Poppins font-normal">
                  {profile.address}
                </span>
              </div>
            </div>
            <div className="w-full flex gap-5 justify-center md:justify-start text-white">
              <Link
                href={`https://github.com/${profile.username}`}
                target="_blank"
              >
                <FaGithub className="size-6 hover:text-textyellow transition-colors duration-150" />
              </Link>
              <Link href={profile.linkedinUrl} target="_blank">
                <FaLinkedin className="size-6 hover:text-textyellow transition-colors duration-150" />
              </Link>
              {profile.twitterUsername && (
                <Link
                  href={`https://x.com/${profile.twitterUsername}`}
                  target="_blank"
                >
                  <FaTwitter className="size-6 hover:text-textyellow transition-colors duration-150" />
                </Link>
              )}
            </div>
          </div>
        </div>
        {profile.status === 'VERIFIED' && (
          <Ticket
            name={profile.fullname}
            github={profile.username}
            role="mentor"
          />
        )}
      </div>

      <div className="my-5">
        <h3 className="text-xl font-semibold my-5 font-mokoto">
          GitHub Repositories:
        </h3>
        <div className="flex items-center flex-wrap gap-8">
          {profile.githubRepos.map(({ githubRepo }, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg text-textyellow flex flex-col gap-2 my-5 w-[350px]"
            >
              <Link
                href={githubRepo.repoURL}
                className="text-lg font-medium font-mokoto hover:underline"
              >
                {githubRepo.repoName}
              </Link>
              <span className="w-fit px-2 py-1 my-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                {githubRepo.projectDomain}
              </span>
              <div className="flex flex-wrap gap-2">
                {githubRepo.techstack.map((tech, idx) => (
                  <span key={idx} className="bg-footer p-2 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-2">
                <p className="font-semibold">Maintainer:</p>
                <div className="text-white font-mokoto font-normal flex items-center gap-4">
                  <p className="text-wrap">{githubRepo.projectAdmin.fullname}</p>{" "}
                  <Link href={`https://github.com/${githubRepo.projectAdmin.username}`}>
                    <FaGithub size={24} />
                  </Link>{" "}
                  <Link href={githubRepo.projectAdmin.linkedinUrl}>
                    <FaLinkedin size={24} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Mentor;
