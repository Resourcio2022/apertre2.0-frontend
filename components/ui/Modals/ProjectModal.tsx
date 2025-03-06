import ModalLayout, { ModalLayoutProps } from "./ModalLayout";
import Image from "next/image";
import { useAtomValue } from "jotai";
import { projectsStateAtom } from "@/states/projectsState";
import Link from "next/link";
import { Button } from "../button";

export default function ProjectModal({ isVisible, onClose }: ModalLayoutProps) {
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
            <p className="text-gray-300 mt-1">
              <span className="text-textyellow">Domain :{" "}</span>
              {projectData.projectDomain
                .split("_")
                .map(
                  (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ")}
            </p>
          </div>
          <p>
            <span className="text-textyellow">Description :{" "}</span>
            {projectData.description.length > 100
              ? `${projectData.description.slice(0, 150)}...`
              : projectData.description}
          </p>
          <div className="flex flex-wrap gap-2 my-4">
            {projectData.techstack.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-700 text-white px-3 py-1 rounded-lg text-sm border border-gray-500"
              >
                {tag}
              </span>
            ))}
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
