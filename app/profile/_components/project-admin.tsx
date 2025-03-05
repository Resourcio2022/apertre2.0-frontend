"use client";
import { memo, useEffect, useState } from "react";
import { toast } from "sonner";
import { IProjectAdmin } from "./types";
import { getProfile } from "../_utils/apiCalls";
import { TypewriterEffectSmooth } from "@/components/Typewriter";
import Image from "next/image";
import { MdAlternateEmail } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
import { FaLinkedin, FaTwitter, FaHome, FaGithub } from "react-icons/fa";
import Link from "next/link";
import Ticket from "@/components/Ticket";

interface ProjectAdminProps {
  username: string | undefined;
  image: string | undefined;
}

const ProjectAdmin = memo(function ProjectAdmin({
  username,
  image,
}: ProjectAdminProps) {
  const [profile, setProfile] = useState<IProjectAdmin>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (username) {
        setLoading(true);
        try {
          const data = await getProfile("project-admin", username);
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
      <div className="flex flex-col lg:flex-row w-full items-center gap-7 lg:justify-between">
        <div className="flex flex-col lg:flex-row w-[70%] gap-4">
          {image && (
            <Image
              src={image}
              alt=""
              width={160}
              height={160}
              className="rounded-full border-textyellow border-2 w-40 h-40"
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
        {profile.status === "VERIFIED" && (
          <Ticket
            name={profile.fullname}
            github={profile.username}
            role="project admin"
          />
        )}
      </div>

      <div className="my-5">
        <h3 className="text-xl font-semibold my-5 font-mokoto">
          GitHub Repositories:
        </h3>
        {profile.githubRepos.map((repo, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg text-textyellow flex flex-col gap-2 my-5"
          >
            <Link
              href={repo.repoURL}
              className="text-lg font-medium font-mokoto hover:underline"
            >
              {repo.repoName}
            </Link>
            <span className="w-fit px-2 py-1 my-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
              {repo.projectStatus}
            </span>
            <div className="mt-2">
              <p className="font-semibold">Mentors:</p>
              {repo.mentors.map(({ mentor }, idx) => (
                <div
                  key={idx}
                  className="text-textyellow font-mokoto font-normal"
                >
                  <strong>{mentor.fullname}</strong> (@{mentor.username}) -{" "}
                  {mentor.techstack.join(", ")}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default ProjectAdmin;
