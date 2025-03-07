import { PixelCanvas } from "@/components/ui/pixel-canvas";
import { prizes } from "@/data/prizes";
import Image from "next/image";
import React from "react";

function Prizes() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0A0A] to-[#272323] w-full p-10 md:p-20 flex flex-col items-center gap-10 justify-between">
      <h2 className="text-textyellow text-2xl md:text-6xl font-mokoto text-center">
        Prizes
      </h2>
      <div className="flex items-center justify-center w-fit flex-wrap gap-8">
        {prizes.map((prize, index) => (
          <PrizesCard
            key={index}
            position={prize.position}
            prizes={prize.prizes}
            imageUrl={prize.imageUrl}
            glow={prize.glow}
          />
        ))}
      </div>

      <p className="sm:text-xl text-white">
        *Note: The Visuals shown above may differ from actual Prizes
      </p>
      <div className="relative p-6 border-y border-dashed border-[#F9CB1A]">
        <p className="text-center text-lg font-bold text-white space-y-2">
          “Open source is about collaborating, not competing” -
          <h1 className="text-textyellow font-mokoto text-2xl">
            Kelsey Hightower
          </h1>
        </p>
      </div>
    </div>
  );
}

export default Prizes;

function PrizesCard({
  position,
  prizes,
  imageUrl,
  glow = false,
}: {
  position: string;
  prizes: string[];
  imageUrl: string;
  glow?: boolean;
}) {
  return (
    <div className="">
      <button
        className="group relative overflow-hidden border border-yellow-600 rounded-[24px] transition-colors duration-200 hover:border-yellow-400 focus:outline-[5px] focus:outline-[Highlight] w-[337px] h-[255px]"
        style={{ "--active-color": "#F9CB1A" } as React.CSSProperties}
      >
        <PixelCanvas
          gap={10}
          speed={25}
          colors={["#e0f2fe", "#7dd3fc", "#F9CB1A"]}
          variant="default"
          className="opacity-40"
        />
        <div className="relative z-10 h-full w-full flex px-7 py-4 flex-col items-start drop-shadow-2xl gap-3">
          <h1
            className={`text-2xl font-semibold text-yellow-400 group-hover:text-[var(--active-color)] duration-300 z-20 ${
              glow && "drop-shadow-[0_0_10px_#F9CB1A]"
            } font-mokoto`}
          >
            {position.toUpperCase()}
          </h1>
          <p className="z-20 flex flex-col gap-1">
            {prizes.map((prize, index) => (
              <h1 
              key={index}
              className="text-white/80 group-hover:text-white text-start duration-300">
                {index + 1}. {prize}
              </h1>
            ))}
          </p>
          <Image
            src={imageUrl}
            width={200}
            height={200}
            alt=""
            className="absolute -bottom-10 -right-3 object-contain opacity-80"
          />
        </div>
      </button>
    </div>
  );
}
