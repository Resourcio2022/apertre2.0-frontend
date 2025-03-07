import { Repo } from "@/app/projects/_utils/apiCall";
import { atom } from "jotai";

export const projectsStateAtom = atom<Repo>({
  repoName: "",
  repoURL: "",
  description: "",
  projectDomain: "",
  techstack: [],
  projectAdmin: {
    fullname: "",
    username: "",
  },
  mentors: [
    {
      mentor: {
        fullname: "",
        username: "",
        linkedinUrl: "",
      },
    },
  ],
});
