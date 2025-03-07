"use client";
import { useEffect, useState } from "react";
import { TechStacks } from "../(registration)/project-admin/_components/techstack-combo-box";
import ProjectPagination from "./_components/Pagination";
import ProjectCard from "./_components/ProjectCard";
import { getGithubRepo, getProjectsByTechStack, Repo, searchProjectsByName } from "./_utils/apiCall";
import { ProjectTechStacks } from "./_components/project-combo-box";
import { Input } from "@/components/ui/input";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [nameSearch, setNameSearch] = useState("");
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
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
  const handleNameSearch = (val: string) => {
    setNameSearch(val);
    if (val === "") {
      getGithubRepo(page, pageSize)
        .then((data) => {
          setProjects(data.data);
        })
        .catch((error) => console.error("Error fetching projects:", error));
      return;
    }
    searchProjectsByName(val)
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
      <div className="flex flex-col gap-4 justify-center sm:flex-row sm:justify-between items-center sticky top-8 sm:top-20 z-30 backdrop-blur bg-black/50 p-8 w-full">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-yellow-400 text-4xl font-bold font-mokoto w-fit">
            PROJECTS
          </h1>
          <p className="text-gray-300">Pick your choice and contribute</p>
        </div>
        <div className="flex items-center justify-between gap-3 flex-col lg:flex-row">
          <Input
            type="text"
            placeholder="Search by name"
            onChange={(e) => handleNameSearch(e.target.value)}
            className="w-[200px] border-textyellow"
          />
          <ProjectTechStacks
            placeholder={"Search by Techstacks*"}
            value={search}
            onChange={(value: string) => {
              handleSearch(value);
              setSearch(value);
            }}
          />
        </div>
      </div>

      <div
        className={` gap-6 flex justify-center flex-wrap items-center pt-28 pb-8 px-4`}
      >
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
              exclusivePrizes={project.repoName === "OLake"}
              mentors={project.mentors}
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
