"use client";
import { Leaderboard } from "@/models/leaderboard.model";
import { modalStateAtom } from "@/states/appModalState";
import { leaderboardModalAtom } from "@/states/leaderboard";
import { useSetAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const coins = [
  "/leaderboard/1st_coin.png",
  "/leaderboard/2nd_coin.png",
  "/leaderboard/3rd_coin.png",
];

function TopThreeCard({
  rank,
  github_url,
  linkedin_url,
  name,
  score,
  avatar,
  prs,
}: {
  github_url: string;
  linkedin_url: string;
  rank: number;
  name: string;
  score: number;
  avatar: string;
  prs: Pick<Leaderboard, "pr_urls">;
}) {
  const setLeaderboardModal = useSetAtom(leaderboardModalAtom);
  const setModal = useSetAtom(modalStateAtom);

  function handleOpen() {
    setLeaderboardModal({ pr_urls: prs.pr_urls });
    setModal("leaderboardModal");
  }
  return (
    <div className={`${rank !== 1 && "md:translate-y-10"} flex flex-col gap-4 items-center`}>
      <div className="rounded-full border-2 border-textyellow flex items-center justify-center relative w-fit h-fit">
        <Image
          src={avatar}
          alt={name}
          width={rank == 1 ? 300 : 215}
          height={160}
          className="rounded-full"
          unoptimized
        />
        <Image
          src="/leaderboard/rocket.png"
          alt="rocket"
          width={rank == 1 ? 100 : 70}
          height={160}
          className="absolute top-0 right-0 -translate-y-1/3"
          unoptimized
        />
        <Image
          src={coins[rank - 1]}
          alt="rocket"
          width={rank == 1 ? 100 : 70}
          height={160}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
          unoptimized
        />
        <div className="rounded-tl-xl rounded-md bg-[#515144] border-2 border-textyellow px-6 text-white font-semibold font-mokoto text-lg absolute bottom-4 -right-9 py-1">
          <p className="text-sm text-left leading-4">Points:</p>
          <p className="leading-5">{score}</p>
        </div>
      </div>
      <h1 className="text-2xl font-mokoto mt-8">{name}</h1>
      <div className="flex items-center gap-4">
        <Link href={github_url} target="_blank">
          <FaGithub size={30} className="text-textyellow" />
        </Link>
        <Link href={linkedin_url} target="_blank">
          <FaLinkedin size={30} className="text-textyellow" />
        </Link>
        <button onClick={handleOpen}>
          <Image
            src="/leaderboard/prs.png"
            alt="prs"
            width={25}
            height={25}
            unoptimized
          />
        </button>
      </div>
    </div>
  );
}

export default TopThreeCard;
