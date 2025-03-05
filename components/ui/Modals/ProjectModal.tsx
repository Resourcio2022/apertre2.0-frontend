import React from "react";
import ModalLayout, { ModalLayoutProps } from "./ModalLayout";
import Image from "next/image";
import { useAtomValue } from "jotai";
import { projectsStateAtom } from "@/states/projectsState";
import Link from "next/link";
import { Button } from "../button";

function ProjectModal({ isVisible, onClose }: ModalLayoutProps) {
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

        <div className="z-10 w-full relative gap-3 flex flex-col justify-center h-full py-4 pl-8 pr-14 text-white">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h2 className="text-yellow-400 text-2xl font-bold font-mokoto">
                {projectData.repoName}
              </h2>
              <Link href={projectData.repoURL} target="_blank">
                <Image
                  onClick={onClose}
                  src="/github.svg"
                  alt="github logo"
                  width={30}
                  height={30}
                  className="cursor-pointer "
                />
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <p className=" text-gray-300">by</p>
              <h3 className=" text-lg font-bold">
                {projectData.projectAdmin.fullname}
              </h3>
            </div>
            <p className="text-gray-300 mt-1">Domain : {projectData.projectDomain.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")}</p>
          </div>
          <p>
            Description :{" "}
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
          <div className="w-full flex justify-center">
              <Link href={projectData.repoURL} target="_blank">
              <Button
              className="bg-textyellow text-black font-bold py-2 px-4 rounded-md hover:bg-textyellow/30 hover:text-textyellow hover:border hover:border-textyellow"
              >Go to project</Button>
              </Link>
          </div>
        </div>
      </div>
    </ModalLayout>
  );
}

export default ProjectModal;
