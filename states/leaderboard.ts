import { Leaderboard } from "@/models/leaderboard.model";
import { atom } from "jotai";

interface leaderboardModalType {
  url: string;
  difficulty: string;
  color: string;
}[];

export const leaderboardModalAtom = atom<Pick<Leaderboard, "pr_urls">>();
