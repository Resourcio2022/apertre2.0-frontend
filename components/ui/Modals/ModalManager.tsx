"use client";
import { modalStateAtom } from "@/states/appModalState";
import { useAtom } from "jotai";
import ProjectModal from "./ProjectModal";
import MentorModal from "./MentorModal";
import LeaderboardModal from "./LeaderboardModal";

function ModalManager() {
  const [appModals, setAppModals] = useAtom(modalStateAtom);
  return (
    <>
      <ProjectModal
        isVisible={appModals === "projectCard"}
        onClose={() => setAppModals(null)}
      />
      <MentorModal
        isVisible={appModals === "mentorModal"}
        onClose={() => setAppModals(null)}
      />
      <LeaderboardModal
        isVisible={appModals === "leaderboardModal"}
        onClose={() => setAppModals(null)}
      />
    </>
  );
}

export default ModalManager;
