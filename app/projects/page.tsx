"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "./_components/ProjectCard";
import { Search } from "lucide-react";
import { getGithubRepo, getProjectsByTechStack } from "./_utils/apiCall";
import RocketComingSoon from "@/components/ComingSoon";

// for local testing
import localProjects from "../../public/project_data.json";

const comingSoon = true;

const ProjectsPage = () => {
  const [search, setSearch] = useState("");
  const [projects, setProjects] = useState(localProjects.data);
  const page = 1;
  const pageSize = 10;

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      getGithubRepo(page, pageSize)
        .then((data) => setProjects(data.data))
        .catch((error) => console.error("Error fetching projects:", error));
    }
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
        className="bg-gray-900 min-h-screen text-white p-8"
        style={{
          background:
            "linear-gradient(132.96deg, #0B0A0A 27.52%, #272323 84.97%)",
        }}
      >
        <div className="flex justify-between items-center mb-6 pl-4 pr-4">
          <div>
            <h1 className="text-yellow-400 text-4xl font-bold font-mokoto">
              PROJECTS
            </h1>
            <p className="text-gray-300">Pick your choice and contribute</p>
          </div>
          <div className="flex justify-between pl-8 pr-8 pt-2 pb-2 rounded-full bg-[#1d1c1c] border border-yellow-500 text-white text-center focus:outline-none">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              projectName={project.repoName}
              username={project.projectAdmin.username}
              profilePic={project.repoURL}
              tags={project.techstack}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
