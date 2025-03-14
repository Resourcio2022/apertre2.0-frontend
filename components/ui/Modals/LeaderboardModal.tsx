import ModalLayout, { ModalLayoutProps } from "./ModalLayout";
import { leaderboardModalAtom } from "@/states/leaderboard";
import { useAtomValue } from "jotai";
import Link from "next/link";

function LeaderboardModal({ isVisible, onClose }: ModalLayoutProps) {
  const leaderboardData = useAtomValue(leaderboardModalAtom);

  return (
    <ModalLayout isVisible={isVisible} onClose={onClose}>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-mokoto text-white">Pull Requests :</h1>
        <div className="flex flex-col gap-4 w-[600px] h-[300px] overflow-y-scroll border border-textyellow p-4 rounded-lg bg-[#515144] divide-y-2 divide-textyellow/50">
          {leaderboardData?.pr_urls.map((pr, index) => (
            <div
              key={index}
              className="items-center flex gap-2 justify-between py-2"
            >
              <Link
                href={pr.url}
                target="_blank"
                rel="noreferrer"
                className="text-white max-w-[400px] truncate"
              >
                {index + 1} : <span className="underline">{pr.url}</span>
              </Link>
              <span
                className={`${pr.difficulty === "Easy" ? "bg-green-500/40 border-green-500" : pr.difficulty === "Medium" ? "bg-yellow-500/40 border-yellow-500" : "bg-red-500/40 border-red-500"} px-5 py-1 rounded-full text-sm font-medium text-white opacity-100 col-span-1 flex justify-center items-center border`}
              >
                {pr.difficulty}
              </span>
            </div>
          ))}
        </div>
      </div>
    </ModalLayout>
  );
}

export default LeaderboardModal;
