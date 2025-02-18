"use client";
import { useEffect, useState } from "react";
import ProjectCard from "./_components/ProjectCard";
import { Search } from "lucide-react";
import { getGithubRepo, getProjectsByTechStack, Repo } from "./_utils/apiCall";
import RocketComingSoon from "@/components/ComingSoon";

import localProjects from "../../public/project_data.json";
import Image from "next/image";
import { debounce } from "@google/model-viewer/lib/utilities";

const comingSoon = false;

const ProjectsPage = () => {
  const [search, setSearch] = useState("");
  const [projects, setProjects] = useState<Repo[] | undefined>();
  const page = 1;
  const pageSize = 9;

  useEffect(() => {
    // if (process.env.NODE_ENV === "production") {
    getGithubRepo(page, pageSize)
      .then((data) => {
        console.log(data);
        setProjects(data.data);
      })
      .catch((error) => console.error("Error fetching projects:", error));
    // }
  }, []);

  const handleSearch = () => {
    const techstacks = search.split(",").map((stack) => stack.trim());
    getProjectsByTechStack(techstacks)
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  };

  return comingSoon ? (
    <>
      <RocketComingSoon />
    </>
  ) : (
    <>
      <div
        className="min-h-screen text-white w-full"
        style={{
          background:
            "linear-gradient(132.96deg, #0B0A0A 27.52%, #272323 84.97%)",
        }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-center sticky top-8 sm:top-20 z-20 backdrop-blur bg-black/50 py-2 w-full px-6">
          <div>
            <h1 className="text-yellow-400 text-4xl font-bold font-mokoto">
              PROJECTS
            </h1>
            <p className="text-gray-300">Pick your choice and contribute</p>
          </div>
          <div className="flex justify-between pl-8 pr-8 pt-2 pb-2 rounded-full bg-[#1d1c1c] border border-yellow-500 text-white text-center focus:outline-none ">
            <input
              type="text"
              placeholder="Search by tech stack"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-[#1d1c1c] focus:outline-none"
            />
            <button
              onClick={handleSearch}
              className="ml-2 px-4 py-2 rounded-full text-gray-400"
            >
              <Search />
            </button>
          </div>
        </div>

        <div className=" gap-6 flex justify-center flex-wrap items-center py-8 px-4">
          {projects ? (
            projects.map((project, index) => (
              <ProjectCard
                key={index}
                projectName={project.repoName}
                projectURL={project.repoURL}
                projectDescription={project.description}
                projectDomain={project.projectDomain}
                tags={project.techstack}
                maintainerUsername={project.projectAdmin.username}
                maintainerfFullname={project.projectAdmin.fullname}
              />
            ))
          ) : (
            <div className="w-10 h-10 border-t-2 border-yellow-500 rounded-full animate-spin"></div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
