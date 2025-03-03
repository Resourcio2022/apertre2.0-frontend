import { modalStateAtom } from "@/states/appModalState";
import { projectsStateAtom } from "@/states/projectsState";
import { useAtom, useSetAtom } from "jotai";
import Image from "next/image";

interface ProjectCardProps {
  projectName: string;
  projectURL: string;
  projectDescription: string;
  projectDomain: string;
  tags: string[];
  maintainerUsername: string;
  maintainerfFullname: string;
  ribbonText?: string; // Add this line
}

export default function ProjectCard({
  projectName,
  projectURL,
  projectDescription,
  projectDomain,
  tags,
  maintainerUsername,
  maintainerfFullname,
  ribbonText, // Add this line
}: ProjectCardProps) {
  const [projectModal, setProjectModal] = useAtom(projectsStateAtom);
  const setAppModal = useSetAtom(modalStateAtom);

  function handleSelect() {
    setAppModal("projectCard");
    setProjectModal({
      repoName: projectName,
      repoURL: projectURL,
      description: projectDescription,
      projectDomain: projectDomain,
      techstack: tags,
      projectAdmin: {
        fullname: maintainerfFullname,
        username: maintainerUsername,
      },
    });
  }

  return (
    <div className=" text-white relative w-[394px] h-[269px] max-w-md px-6 py-8">
      {ribbonText && (
        <div className="absolute top-0 right-8 z-10">
          <div className="relative">
            <div
              className="bg-red-600 text-white font-bold py-1 px-3 shadow-md text-center"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                height: "110px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                borderBottomLeftRadius: "4px",
                borderBottomRightRadius: "4px",
              }}
            >
              {ribbonText}
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 h-2 bg-red-800"
              style={{
                borderBottomLeftRadius: "4px",
                borderBottomRightRadius: "4px",
              }}
            ></div>
          </div>
        </div>
      )}
      <Image
        src="/project-card.webp"
        alt="Animated rocket logo"
        width={394}
        height={269}
        className="object-fill absolute z-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full h-full"
      />
      <div className="z-10 w-full relative flex flex-col justify-between h-full">
        <div className="space-y-1">
          <h2 className="text-yellow-400 text-xl font-bold font-mokoto">
            {projectName.length > 40
              ? `${projectName.slice(0, 40)}...`
              : projectName}
          </h2>
          <div className="flex items-center gap-2">
            <p className=" text-gray-300">by</p>
            <h3 className=" text-lg font-semibold">{maintainerUsername}</h3>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 my-4">
          {tags.slice(0, 4).map((tag, index) => (
            <span
              key={index}
              className="bg-gray-700 text-white px-3 py-1 rounded-lg text-sm border border-gray-500"
            >
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="bg-gray-700 text-white px-3 py-1 rounded-lg text-sm border border-gray-500">
              {tags.length - 4} more+
            </span>
          )}
        </div>
        <button
          onClick={() => handleSelect()}
          className="bg-gradient-to-br from-[#FBCE1F] to-[#F01DD4] p-[1px] rounded-lg max-w-[80%] overflow-hidden mt-2 z-20"
        >
          <div className="bg-black rounded-lg">
            <p className="w-full text-yellow-400 py-1 rounded-lg font-semibold font-mokoto bg-[#F01DD4]/15">
              DETAILS
            </p>
          </div>
        </button>

        {/* <div className="absolute -right-6 top-10 w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center border-1 border-gray-900">
        <Image
          src={profilePic}
          alt="GitHub Profile"
          width={64}
          height={64}
          className="rounded-full border-2 border-white"
        />
      </div> */}
      </div>
    </div>
  );
}
