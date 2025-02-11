"use client";
import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, createContext } from "react";
import { RegistrationCard } from "@/constants/registration-constant";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => { },
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  return (
    <CarouselContext.Provider
      value={{ onCardClose: () => { }, currentIndex: 0 }}
    >
      <div className="w-full flex justify-center">
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full",
            "max-w-[1200px] px-4"
          )}
        >
          {items.map((item, index) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                  once: true,
                },
              }}
              key={`card-${index}`}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  layout = false,
}: {
  card: RegistrationCard;
  layout?: boolean;
}) => {
  return (
    <motion.button
      layoutId={layout ? 'title' : undefined}
      className="rounded-lg border-2 border-textyellow h-72 w-full bg-card overflow-hidden relative z-10"
    >
      <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
      <div className="z-40 px-5 py-6 w-full h-full flex flex-col justify-between">
        <motion.p
          layoutId={layout ? `usertype-${card.usertype}` : undefined}
          className="text-textyellow font-mokoto font-normal text-lg md:text-2xl flex flex-col items-start gap-3"
        >
          APPLY AS
          <span className="md:text-4xl text-lg flex flex-col md:flex-row items-start">
            {card.usertype?.split(" ").map((word, index) => (
              <span key={index}>{word}&nbsp;</span>
            ))}
          </span>{" "}
        </motion.p>
        <motion.p
          layoutId={layout ? 'title' : undefined}
          className="text-white text-sm md:text-base font-normal text-left w-full font-Poppins flex-nowrap mb-2"
        >
          {card.content}
        </motion.p>
        {card.disabled ? (
          <p className="text-textyellow/50 font-mokoto text-xl w-fit bg-[#F01DD41A] px-5 py-1 rounded-md border-2 border-[#F01DD4]/50 cursor-not-allowed">
            APPLICATION CLOSED
          </p>
        ) : (

          <Link
            href={card.registerlink}
            className="text-textyellow font-mokoto text-xl w-fit bg-[#F01DD41A] px-5 py-1 rounded-md border-2 border-[#F01DD4] hover:text-gray-400"
          >
            REGISTER
          </Link>
        )}
      </div>
    </motion.button >
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};