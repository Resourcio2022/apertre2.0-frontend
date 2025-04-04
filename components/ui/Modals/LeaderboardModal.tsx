import ModalLayout, { ModalLayoutProps } from "./ModalLayout";
import { leaderboardModalAtom } from "@/states/leaderboard";
import { useAtomValue } from "jotai";
import Link from "next/link";

export default function LeaderboardModal({ isVisible, onClose }: ModalLayoutProps) {
  const leaderboardData = useAtomValue(leaderboardModalAtom);

  return (
    <ModalLayout isVisible={isVisible} onClose={onClose}>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-mokoto text-white">Pull Requests :</h1>
        <div className="flex flex-col gap-4 w-[90vw] md:w-[50vw] min-h-[300px] max-h-[80vh] overflow-y-scroll border border-textyellow p-4 rounded-lg bg-[#515144]">
          {leaderboardData?.pr_urls.map((pr, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex items-center justify-between py-1">
                <Link
                  href={pr.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white max-w-[25rem] whitespace-nowrap"
                >
                  {index + 1} : &nbsp;<span className="underline">{pr.url}</span>
                </Link>
                <span
                  className={`${pr.difficulty === "Easy"
                    ? "bg-green-500/40 border-green-500"
                    : pr.difficulty === "Medium"
                      ? "bg-yellow-500/40 border-yellow-500"
                      : pr.difficulty === "Doc"
                        ? "bg-blue-500/40 border-blue-500"
                        : "bg-red-500/40 border-red-500"
                    } px-5 py-1 rounded-full text-sm font-medium text-white opacity-100 col-span-1 flex justify-center items-center border`}
                >
                  {pr.difficulty}
                </span>
              </div>
              {(index < leaderboardData.pr_urls.length - 1) && <div className="border border-textyellow/50" />}
            </div>
          ))}
        </div>
      </div>
    </ModalLayout>
  );
}
