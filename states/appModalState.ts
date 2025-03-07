import { atom } from "jotai";

type modalStates = "projectCard" | "mentorModal" | null;
export const modalStateAtom = atom<modalStates>(null);
