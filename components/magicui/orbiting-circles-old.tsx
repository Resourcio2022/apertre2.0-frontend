"use client";
import { cn } from "@/lib/utils";
import React from "react";

export interface OrbitingCirclesProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 800, // Increased radius
  path = true,
  iconSize = 50,
  speed = 1,
  ...props
}: OrbitingCirclesProps) {
  const [isMobile, setIsMobile] = React.useState(false);
  const [responsiveRadius, setResponsiveRadius] = React.useState(radius);
  const [responsiveIconSize, setResponsiveIconSize] = React.useState(iconSize);
  const [calculatedDuration, setCalculatedDuration] = React.useState(duration);

  React.useEffect(() => {
    setIsMobile(typeof window !== "undefined" && window.innerWidth < 768);
  }, []);
  React.useEffect(() => {
    setResponsiveRadius(isMobile ? radius * 0.5 : radius);
    setResponsiveIconSize(isMobile ? iconSize * 0.8 : iconSize);
    setCalculatedDuration(duration / speed);
  }, [isMobile]);
  // const responsiveRadius = isMobile ? radius * 0.5 : radius;
  // const responsiveIconSize = isMobile ? iconSize * 0.8 : iconSize;
  // const calculatedDuration = duration / speed;
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 w-full h-full"
        >
          <circle
            className="stroke-white/20 stroke-2 dark:stroke-white/10"
            cx="50%" // Adjusted horizontal position
            cy="50%" // Custom vertical position
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;
        return (
          <div
            style={
              {
                "--duration": calculatedDuration,
                "--radius": responsiveRadius,
                "--angle": angle,
                "--icon-size": `${responsiveIconSize}px`,
                "--cx": "5%", // Adjusted horizontal position
                "--cy": "60%", // Custom vertical position
              } as React.CSSProperties
            }
            className={cn(
              `absolute flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center rounded-full border-3 border-white`,
              { "[animation-direction:reverse]": reverse },
              className
            )}
            {...props}
          >
            <div
              className="absolute"
              style={{
                left: isMobile
                  ? "calc(var(--cx) * 1% + var(--radius) * cos(var(--angle) * 1deg) - var(--icon-size) / 2 - 60px)"
                  : "calc(var(--cx) * 1% + var(--radius) * cos(var(--angle) * 1deg) - var(--icon-size) / 2 - 120px)",
                top: "calc(var(--cy) * 1% + var(--radius) * sin(var(--angle) * 1deg) - var(--icon-size) / 2)",
              }}
            >
              <div className="rounded-full overflow-hidden w-full h-full">
                {child}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
