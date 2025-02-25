"use client";
import { modalStateAtom } from "@/states/appModalState";
import { useAtom } from "jotai";
import ProjectModal from "./ProjectModal";

function ModalManager() {
  const [appModals, setAppModals] = useAtom(modalStateAtom);
  return (
    <>
      <ProjectModal
        isVisible={appModals === "projectCard"}
        onClose={() => setAppModals(null)}
      />
    </>
  );
}

export default ModalManager;
