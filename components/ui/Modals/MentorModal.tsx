import ModalLayout, { ModalLayoutProps } from "./ModalLayout";
import Image from "next/image";
import { useAtomValue } from "jotai";
import { projectsStateAtom } from "@/states/projectsState";
import Link from "next/link";
import { Button } from "../button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function MentorModal({ isVisible, onClose }: ModalLayoutProps) {
  const projectData = useAtomValue(projectsStateAtom);
  
  return (
    <ModalLayout isVisible={isVisible} onClose={onClose}>
      <div className="relative w-[95vw] md:w-[50vw] min-h-[50vh]">
        <Image
          src="/project-card.webp"
          alt="Animated rocket logo"
          width={394}
          height={269}
          className=" absolute z-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full h-full"
        />
        <Image
          onClick={onClose}
          src="/abort.svg"
          alt="cross button"
          width={50}
          height={50}
          className="cursor-pointer absolute z-0 left-1/2 md:left-auto -translate-x-[70%] md:-translate-x-0 -bottom-6  md:bottom-auto translate-y-full md:translate-y-0 md:-right-10  md:-top-3"
        />

        <div className="z-10 w-full relative flex flex-col gap-4 justify-center h-full py-6 pl-9 pr-14 text-white">
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <h2 className="text-yellow-400 text-2xl font-bold font-mokoto">
                {projectData.repoName}
              </h2>
              <Image
                onClick={onClose}
                src="/github.svg"
                alt="github logo"
                width={30}
                height={30}
              />
            </div>
            <div className="flex items-center gap-2">
              <p className=" text-gray-300">by</p>
              <Link
                href={`https://www.github.com/${projectData.projectAdmin.username}`}
                target="_blank"
              >
                <h3 className=" text-lg font-bold">
                  {projectData.projectAdmin.fullname}
                </h3>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-lg text-textyellow">Mentors : </h1>
            {projectData.mentors.length === 0 ? (
              <p className="text-gray-300">No mentors assigned yet.</p>
            ) : (
              projectData.mentors.map(({ mentor }, index) => (
                <div key={index} className="flex items-center gap-2">
                  <h3 className="text-lg font-bold">{mentor.fullname}</h3>
                  <Link
                    href={`https://www.github.com/${mentor.username}`}
                    target="_blank"
                  >
                    <FaGithub width={24} height={24} />
                  </Link>
                  <Link href={mentor.linkedinUrl} target="_blank">
                    <FaLinkedin width={24} height={24} />
                  </Link>
                </div>
              ))
            )}
          </div>

          <div className="flex justify-center mt-10">
            <Link href={projectData.repoURL} target="_blank">
              <Button className="bg-textyellow text-black font-bold py-2 px-4 rounded-md hover:bg-textyellow/30 hover:text-textyellow hover:border hover:border-textyellow">
                Go to project
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </ModalLayout>
  );
}
