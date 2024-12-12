"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import "@google/model-viewer";
type CustomCSSProperties = React.CSSProperties & {
  '--model-viewer-background-color'?: string;
};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src: string;
        alt: string;
        "auto-rotate"?: boolean;
        "camera-controls"?: boolean;
        style?: React.CSSProperties;
        "shadow-intensity"?: string;
        exposure?: string;
        lighting?: string;
      };
    }
  }
}

export default function Hero() {
  const modelViewerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const modelViewer = modelViewerRef.current as any;

    const applyCustomColor = () => {
      if (modelViewer && modelViewer.model) {
        const scene = modelViewer.model;
        scene.materials.forEach((material: any) => {
          const r = parseInt("FB", 16) / 255;
          const g = parseInt("CE", 16) / 255;
          const b = parseInt("1F", 16) / 255;
          material.pbrMetallicRoughness.setBaseColorFactor([r, g, b, 1]);
        });
      }
    };

    if (modelViewer) {
      modelViewer.addEventListener("load", applyCustomColor);
    }

    return () => {
      if (modelViewer) {
        modelViewer.removeEventListener("load", applyCustomColor);
      }
    };
  }, []);

  const stars = [
    { id: 1, src: "/star.png", left: "10%", top: "20%", size: 35 },
    { id: 2, src: "/star.png", left: "30%", top: "10%", size: 40 },
    { id: 3, src: "/star.png", left: "50%", top: "15%", size: 25 },
    { id: 4, src: "/star.png", left: "70%", top: "25%", size: 35 },
    { id: 5, src: "/star.png", left: "90%", top: "35%", size: 38 },
    { id: 6, src: "/star.png", left: "20%", top: "89%", size: 45 },
    { id: 7, src: "/star.png", left: "40%", top: "75%", size: 50 },
    { id: 8, src: "/star.png", left: "60%", top: "90%", size: 33 },
    { id: 9, src: "/star.png", left: "80%", top: "75%", size: 30 },
  ];

  return (
    <section className="bg-black text-white min-h-screen flex items-center pt-24 px-4 sm:px-8 md:px-16 font-mokoto relative">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:justify-between w-full">
    {/* Text Content */}
    <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        THE <span className="text-textyellow">OPEN SOURCE</span> <br />
        CONTRIBUTION
        <br />
        PROGRAMME IS BACK
      </h1>
      <p className="text-base sm:text-lg md:text-2xl font-medium flex justify-center lg:justify-start items-center mt-2">
        <Image
          src="/calendar-02.png"
          alt="Calendar Icon"
          width={25}
          height={25}
          className="inline-block mr-2"
        />
        3RD MARCH - 3RD APRIL
      </p>
      <div className="flex justify-center lg:justify-start">
        <button className="bg-[rgba(128,0,128,0.2)] text-textyellow font-medium px-4 py-3 sm:py-4 w-48 sm:w-64 rounded-xl border border-customYellow hover:bg-yellow-100/10 hover:text-textyellow transition-all duration-300 text-lg sm:text-xl md:text-2xl">
          REGISTER
        </button>
      </div>
      <p className="text-sm sm:text-base">Presented by</p>
      <div className="flex justify-center lg:justify-start">
        <Image
          src="/Resourcio_Logo.png"
          alt="Resourcio Logo"
          width={100}
          height={100}
          className="inline-block"
        />
      </div>
    </div>

    {/* 3D Model Viewer - Hidden on smaller screens */}
    <div className="w-full lg:w-1/2 mt-16 lg:mt-0 flex justify-center lg:justify-end hidden lg:flex">
      <model-viewer
        ref={modelViewerRef}
        src="/apertre.glb"
        alt="3D Planet Model"
        auto-rotate
        data-js-focus-visible=""
        style={{
          width: "300px",
          height: "300px",
          background: "transparent",
          "--model-viewer-background-color": "transparent",
          border: "none",
          outline: "none",
          boxShadow: "none",
        } as CustomCSSProperties}
        shadow-intensity="1"
        exposure="1.0"
        lighting="neutral"
        className="sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]"
      ></model-viewer>
    </div>
  </div>

  {/* Astronaut Image - Hidden on smaller screens */}
  <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 hidden lg:block">
    <Image
      src="/astronaut.png"
      alt="Astronaut"
      width={100}
      height={100}
      className="sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px]"
    />
  </div>

  {/* Stars */}
  {stars.map((star) => (
    <Image
      key={star.id}
      src={star.src}
      alt={`Star ${star.id}`}
      width={star.size}
      height={star.size}
      className="absolute transition-transform duration-300 hover:scale-110 hover:filter hover:brightness-200 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
      style={{ left: star.left, top: star.top }}
    />
  ))}
</section>

  );
}
