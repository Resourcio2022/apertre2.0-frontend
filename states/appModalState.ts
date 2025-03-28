import { atom } from "jotai";

type modalStates = "projectCard" | "mentorModal" | "leaderboardModal" | null;
export const modalStateAtom = atom<modalStates>(null);
