"use client";
import leaderboardData from "@/leaderboard.json";
import TopThreeCard from "./_components/TopThreeCard";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { leaderboardModalAtom } from "@/states/leaderboard";
import { modalStateAtom } from "@/states/appModalState";
import { useSetAtom } from "jotai";
import { Leaderboard } from "@/models/leaderboard.model";
import { useState } from "react";
import Fuse from "fuse.js";
import { Input } from "@/components/ui/input";

const fuseOptions = {
  isCaseSensitive: false,
  includeScore: true,
  shouldSort: true,
  includeMatches: true,
  findAllMatches: false,
  threshold: 0,
  distance: 0,
  useExtendedSearch: true,
  ignoreLocation: true,
  minMatchCharLength: 1,
  keys: ["rank", "full_name"],
};

export default function Page() {
  const first = leaderboardData.leaderboardData[0];
  const second = leaderboardData.leaderboardData[1];
  const third = leaderboardData.leaderboardData[2];

  const [filteredData, setFilteredData] = useState(
    leaderboardData.leaderboardData.slice(3)
  );

  const setLeaderboardModal = useSetAtom(leaderboardModalAtom);
  const setModal = useSetAtom(modalStateAtom);

  function handleOpen(urls: Pick<Leaderboard, "pr_urls">) {
    setLeaderboardModal({ pr_urls: urls.pr_urls });
    setModal("leaderboardModal");
  }

  return (
    <main className="flex flex-col items-center py-8 sm:py-16 w-full flex-1 px-6 sm:px-20 text-center min-h-screen bg-gradient-to-b from-[#1F1E1E] to-[#0E0A0A] text-white">
      <div className="w-full flex flex-col justify-between gap-3 items-center">
        <h1 className="text-2xl md:text-5xl font-mokoto w-fit text-textyellow">
          LEADERBOARD
        </h1>
        <div className="flex sm:items-center gap-2 pb-16">
          <span className="text-textyellow font-semibold text-nowrap">
            Last Updated :{" "}
          </span>
          <span className="text-start">{leaderboardData.lastUpdated}</span>
        </div>
        <div className="lg:hidden">
          <TopThreeCard
            prs={{ pr_urls: first.pr_urls }}
            github_url={first.github_url}
            linkedin_url={first.linkedin_url}
            rank={1}
            name={first.full_name}
            score={first.total_points}
            avatar={first.avatar_url}
          />
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center gap-12 md:gap-28 items-center md:items-end pt-8 md:pt-0">
          <TopThreeCard
            prs={{ pr_urls: second.pr_urls }}
            github_url={second.github_url}
            linkedin_url={second.linkedin_url}
            rank={2}
            name={second.full_name}
            score={second.total_points}
            avatar={second.avatar_url}
          />
          <div className="hidden lg:block">
            <TopThreeCard
              prs={{ pr_urls: first.pr_urls }}
              github_url={first.github_url}
              linkedin_url={first.linkedin_url}
              rank={1}
              name={first.full_name}
              score={first.total_points}
              avatar={first.avatar_url}
            />
          </div>
          <TopThreeCard
            prs={{ pr_urls: third.pr_urls }}
            github_url={third.github_url}
            linkedin_url={third.linkedin_url}
            rank={3}
            name={third.full_name}
            score={third.total_points}
            avatar={third.avatar_url}
          />
        </div>
        <div className="max-w-[1200px] w-full flex justify-center md:justify-end items-center gap-4 pt-20">
          <Input
            onChange={(e) => {
              const fuse = new Fuse(
                leaderboardData.leaderboardData.slice(3),
                fuseOptions
              );
              if (e.target.value === "") {
                setFilteredData(leaderboardData.leaderboardData.slice(3));
                return;
              }
              const result = fuse.search(e.target.value);
              setFilteredData(result.map((item) => item.item));
            }}
            placeholder="Search by name or rank"
            className="w-[300px] h-[50px] bg-[#515144] border border-textyellow rounded-lg px-4 py-2"
          />
        </div>
        <div className="w-full overflow-x-scroll space-y-6 flex flex-col lg:items-center rounded-xl overflow-hidden">
          <div className="w-[750px] md:w-[1200px] flex justify-around bg-white px-4 py-2 rounded-xl">
            {["RANK", "NAME", "SOCIAL LINKs", "MERGED PRs", "POINTS"].map(
              (item, index) => (
                <div
                  key={index}
                  className="w-1/5 text-center font-mokoto text-xl text-black "
                >
                  {item}
                </div>
              )
            )}
          </div>
          {filteredData.length === 0 ? (
            <div className="w-[750px] md:w-[1200px] flex justify-around bg-white/50 px-4 py-2 rounded-xl">
              <div className="w-full text-center font-mokoto text-xl text-black ">
                No results found
              </div>
            </div>
          ) : (
            filteredData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-between items-center px-6 w-[750px] md:w-[1200px] relative h-[50px]"
                >
                  <Image
                    src="/leaderboard/leaderboard_entry.png"
                    alt="leaderboard entry"
                    width={1404}
                    height={80}
                    className="absolute top-0 left-0 object-fill w-full h-full -z-0"
                    unoptimized
                  />
                  <span className="w-1/5 text-center z-[1]">{item.rank}</span>
                  <div className="w-1/5 text-left z-[1] flex items-center gap-2">
                    <Image
                      src={item.avatar_url}
                      alt={item.full_name}
                      width={40}
                      height={40}
                      className="rounded-full"
                      unoptimized
                    />
                    {item.full_name}
                  </div>
                  <div className="w-1/5 text-center flex justify-center items-center gap-2 z-[1]">
                    <Link href={item.github_url} target="_blank">
                      <FaGithub className="inline-block" size={25} />
                    </Link>
                    <Link href={item.linkedin_url} target="_blank">
                      <FaLinkedin className="inline-block" size={25} />
                    </Link>
                  </div>
                  <div className="w-1/5 text-center pl-1 z-[1]">
                    <button
                      onClick={() => handleOpen({ pr_urls: item.pr_urls })}
                    >
                      <Image
                        src="/leaderboard/prs.png"
                        alt="prs"
                        width={20}
                        height={20}
                        unoptimized
                      />
                    </button>
                  </div>
                  <span className="w-1/5 text-center pl-1 z-[1]">
                    {item.total_points}
                  </span>
                </div>
              );
            })
          )}
        </div>
      </div>
    </main>
  );
}
