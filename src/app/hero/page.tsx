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
    <section className="bg-black text-white min-h-screen flex items-center pt-24 px-8 md:px-16 font-mokoto relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:justify-between w-full">
        <div className="lg:w-1/2 space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            THE <span className="text-textyellow">OPEN SOURCE</span> <br />
            CONTRIBUTION
            <br />
            PROGRAMME IS BACK
          </h1>
          <p className="text-lg md:text-2xl font-medium flex items-center mt-2">
            <Image
              src="/calendar-02.png"
              alt="Calendar Icon"
              width={30}
              height={30}
              className="inline-block mr-2.5"
            />
            3RD MARCH - 3RD APRIL
          </p>
          <button className="bg-[rgba(128,0,128,0.2)] text-textyellow font-medium px-4 py-4 w-64 rounded-xl border border-customYellow hover:bg-yellow-100/10 hover:text-textyellow transition-all duration-300 text-xl md:text-2xl">
            REGISTER
          </button>
          <p>Presented by</p>
          <Image
            src="/Resourcio_Logo.png"
            alt="Resourcio Logo"
            width={150}
            height={150}
            className="inline-block mr-2.5"
          />
        </div>
        <div className="lg:w-1/2 mt-16 lg:mt-0 flex justify-center lg:justify-end">
          <model-viewer
            ref={modelViewerRef}
            src="/apertre.glb"
            alt="3D Planet Model"
            auto-rotate
            camera-controls
            style={{
              width: "600px",
              height: "600px",
              background: "transparent",
              "--model-viewer-background-color": "transparent"
            } as CustomCSSProperties }
            shadow-intensity="1"
            exposure="1.0"
            lighting="neutral"
          ></model-viewer>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 mb-0 mr-0">
        <Image src="/astronaut.png" alt="Astronaut" width={200} height={200} />
      </div>
      {stars.map((star) => (
        <Image
          key={star.id}
          src={star.src}
          alt={`Star ${star.id}`}
          width={star.size}
          height={star.size}
          className="absolute transition-transform duration-300 hover:scale-110 hover:filter hover:brightness-200 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] hidden md:block"
          style={{ left: star.left, top: star.top }}
        />
      ))}
    </section>
  );
}
