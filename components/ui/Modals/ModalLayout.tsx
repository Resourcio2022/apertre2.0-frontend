'use client';
import { useEffect } from "react";

export interface ModalLayoutProps {
  isVisible: boolean;
  children?: React.ReactNode;
  onClose: () => void;
}

export default function ModalLayout({ isVisible, children, onClose }: ModalLayoutProps) {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      onClick={onClose}
      className="fixed z-[999] bg-black/80 w-screen h-screen overflow-hidden left-0 top-0 flex justify-center items-center"
    >
      {children}
    </div>
  )
}
