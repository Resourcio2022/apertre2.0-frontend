"use client";
import dynamic from "next/dynamic";
import animationData from "@/public/tree_grow.json" assert { type: "json" };

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

export default function TreeAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} style={{ transform: "scale(0.8)" }} />;
}
