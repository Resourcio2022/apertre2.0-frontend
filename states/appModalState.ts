import { atom } from "jotai";

type modalStates = "projectCard" | null;
export const modalStateAtom = atom<modalStates>(null);
