"use client";
import { modalStateAtom } from "@/states/appModalState";
import { useAtom } from "jotai";
import ProjectModal from "./ProjectModal";
import MentorModal from "./MentorModal";

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
    </>
  );
}

export default ModalManager;
