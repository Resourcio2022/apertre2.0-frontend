"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

type CustomCSSProperties = React.CSSProperties & {
    "--model-viewer-background-color"?: string;
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

function Model() {
    const [isClient, setIsClient] = useState(false);
    const modelViewerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        setIsClient(true);
        import("@google/model-viewer");
    }, []);

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
    }, [isClient]);

    if (!isClient) {
        return null;
    }

    return (
        <div className="lg:w-1/2 mt-16 lg:mt-0 flex justify-center lg:justify-end">
            <model-viewer
                ref={modelViewerRef}
                src="/apertre.glb"
                alt="3D Planet Model"
                auto-rotate
                style={{
                    background: "transparent",
                    "--model-viewer-background-color": "transparent",
                } as CustomCSSProperties
                }
                className="hidden md:block w-[250px] sm:w-[350px] md:w-[550px] lg:w-[600px] xl:w-[700px] h-[250px] sm:h-[350px] md:h-[550px] lg:h-[600px] xl:h-[700px]"
                shadow-intensity="1"
                exposure="1.0"
                lighting="neutral"
            />
        </div>
    )
}

export default dynamic(() => Promise.resolve(Model), { ssr: false });