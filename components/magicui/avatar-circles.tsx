/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface Avatar {
  imageUrl: string;
  profileUrl: string;
}
interface AvatarCirclesProps {
  avatarUrls: Avatar[];
  className?: string;
  numPeople?: number;
}

export const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <a
          key={index}
          href={url.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            key={index}
            className="h-16 w-16 sm:h-15 sm:w-15 md:h-20 md:w-20 lg:h-32 lg:w-32 rounded-full border-2 border-white dark:border-gray-800 hover:scale-150 transition-transform duration-200"
            src={url.imageUrl}
            width={80}
            height={80}
            alt={`Avatar ${index + 1}`}
          />
        </a>
      ))}
      {/* {(numPeople ?? 0) > 0 && (
        <a
          className="flex h-16 w-16 sm:h-15 sm:w-15 md:h-20 md:w-20 lg:h-32 lg:w-32 items-center justify-center rounded-full border-2 border-white bg-black text-center text-2xl font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black"
          href=""
        >
          +{numPeople}
        </a>
      )} */}
    </div>
  );
};
