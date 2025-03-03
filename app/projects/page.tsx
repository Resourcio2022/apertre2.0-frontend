"use client";
import { useEffect, useState } from "react";
import { TechStacks } from "../(registration)/project-admin/_components/techstack-combo-box";
import ProjectPagination from "./_components/Pagination";
import ProjectCard from "./_components/ProjectCard";
import { getGithubRepo, getProjectsByTechStack, Repo } from "./_utils/apiCall";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [projects, setProjects] = useState<Repo[] | undefined>();
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const pageSize = 9;

  useEffect(() => {
    getGithubRepo(page, pageSize)
      .then((data) => {
        setProjects(data.data);
        setTotalPages(data.meta.totalPages);
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, [page]);

  const handleSearch = (val: string) => {
    if (val === "") {
      getGithubRepo(page, pageSize)
        .then((data) => {
          setProjects(data.data);
        })
        .catch((error) => console.error("Error fetching projects:", error));
      return;
    }
    const techstacks = val.split(" ").map((stack) => stack.trim());
    getProjectsByTechStack(techstacks)
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  };

  return (
    <div
      className="min-h-[85vh] text-white w-full pb-8 flex flex-col justify-between"
      style={{
        background:
          "linear-gradient(132.96deg, #0B0A0A 27.52%, #272323 84.97%)",
      }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-center sticky top-8 sm:top-20 z-20 backdrop-blur bg-black/50 px-8 py-6 w-full">
        <div>
          <h1 className="text-yellow-400 text-4xl font-bold font-mokoto">
            PROJECTS
          </h1>
          <p className="text-gray-300">Pick your choice and contribute</p>
        </div>
        <TechStacks
          placeholder={"Select Techstacks*"}
          value={search}
          onChange={(value: string) => {
            handleSearch(value);
            setSearch(value);
          }}
        />
      </div>

      <div className=" gap-6 flex justify-center flex-wrap items-center py-8 px-4">
        {projects && projects.length > 0 ? (
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
              ribbonText={index === 1 ? "WIN SWAGS" : undefined} // Add this line
            />
          ))
        ) : projects && projects.length === 0 ? (
          <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-yellow-400 text-4xl font-bold font-mokoto">
              No projects found
            </h1>
          </div>
        ) : (
          <div className="w-10 h-10 border-t-2 border-yellow-500 rounded-full animate-spin"></div>
        )}
      </div>
      <ProjectPagination
        totalPages={totalPages}
        currentPage={page}
        setPage={setPage}
      />
    </div>
  );
}
