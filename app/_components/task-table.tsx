"use client";
import Link from "next/link";
import { useGitHub } from "@/hooks/useGithubUser";
import SimpleImageUploader from "@/components/ImageUploader";

interface Task {
  name: string;
  link: string;
  screenShotrequired: boolean;
  points: number;
}

const tasks: Task[] = [
  { name: "Star OLake Repo", link: "https://github.com/datazip-inc/olake", screenShotrequired: false, points: 10 },
  { name: "Star LangDB Repo", link: "https://github.com/langdb/ai-gateway", screenShotrequired: false, points: 10 },
  { name: "Star Keploy Repo", link: "https://github.com/keploy/keploy", screenShotrequired: false, points: 10 },
  { name: "Star LLMware.ai Repo", link: "https://github.com/llmware-ai/llmware", screenShotrequired: false, points: 10 },
  { name: "Fork LLMware.ai Repo", link: "https://github.com/llmware-ai/llmware", screenShotrequired: true, points: 10 },
  { name: "Join LLmware Discord", link: "https://discord.gg/ycbZDbvZDK", screenShotrequired: true, points: 10 },
  { name: "Join Endless Domain Discord Server", link: "https://discord.gg/AzEKaA4pBA ", screenShotrequired: true, points: 5 },
  { name: "Follow DevRelSquad LinkedIn", link: "https://www.linkedin.com/company/devrelsquad/", screenShotrequired: true, points: 5 },
  { name: "Follow Resourcio YouTube", link: "https://www.youtube.com/@resourciocommunity", screenShotrequired: true, points: 5 },
  { name: "Follow Resourcio Twitter", link: "https://x.com/resourcio_", screenShotrequired: true, points: 5 },
  { name: "Follow Apertre2.0 LinkedIn", link: "https://www.linkedin.com/showcase/apertre", screenShotrequired: true, points: 5 },
  { name: "Follow Apertre2.0 Twitter", link: "https://x.com/apertre25", screenShotrequired: true, points: 5 }
];

export default function TaskTable() {
  const { githubUsername, isSignedIn } = useGitHub();

  return (
    <div className="bg-black w-full p-4 sm:p-6 md:p-8 lg:px-12 lg:py-20">
      <div className="flex flex-col items-center pb-10">
        <h1 className="text-4xl md:text-7xl font-bold text-textyellow font-mokoto">BONUS POINTS</h1>
        <span className="text-lg md:text-2xl text-gray-400 font-Poppins my-4">Complete the following tasks to earn extra points</span>
      </div>
      <div className="overflow-x-auto px-24">
        <table className="w-full border-t-2 text-white border-gray-300">
          <thead>
            <tr className="text-white bg-gray-800 w-full">
              {['Task Name', 'Link', 'Upload Screenshot', 'Points'].map(header => (
                <th key={header} className="py-2 px-3 border uppercase">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index} className="border-t text-center w-full">
                <td className="py-2 px-3">{task.name}</td>
                <td className="py-2 px-3">
                  <Link href={task.link} target="_blank" rel="noopener noreferrer" className="text-textyellow hover:border-b-2">Visit</Link>
                </td>
                <td className="py-6 px-3 flex justify-center">
                  {task.screenShotrequired ? (
                    <SimpleImageUploader
                      folderPath={githubUsername}
                      taskName={task.name}
                      isSignedIn={isSignedIn}
                    />
                  ) : (
                    <span
                      className="bg-gray-500 text-white font-medium px-4 py-1.5 rounded-md border border-customYellow"
                    >
                      No screenshot needed
                    </span>
                  )}
                </td>
                <td className="py-2 px-3 text-center">{task.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
