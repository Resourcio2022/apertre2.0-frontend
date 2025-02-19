import React from "react";

export interface ModalLayoutProps {
  isVisible: boolean;
  children?: React.ReactNode;
  onClose: () => void;
}
function ModalLayout({ isVisible, children, onClose }: ModalLayoutProps) {
  return (
    isVisible && (
      <div
        onClick={onClose}
        className="fixed z-[999] bg-black/80 w-screen h-screen overflow-hidden left-0 top-0 flex justify-center items-center"
      >
        {children}
      </div>
    )
  );
}

export default ModalLayout;
