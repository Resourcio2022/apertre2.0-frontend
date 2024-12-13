"use client";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { useEffect, useState, createContext, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src?: string;
  title?: string;
  usertype: string;
  content: React.ReactNode;
  registerlink: string;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => { },
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      // checkScrollability();
    }
  }, [initialScroll]);

  // const checkScrollability = () => {
  //   if (carouselRef.current) {
  //     const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
  //   }
  // };

  // const scrollLeft = () => {
  //   if (carouselRef.current) {
  //     carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  //   }
  // };

  // const scrollRight = () => {
  //   if (carouselRef.current) {
  //     carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  //   }
  // };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 466 : 280; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll py-10 md:py-20 scroll-smooth"
          ref={carouselRef}
        // onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
            )}
          ></div>

          <div
            className={cn(
              "flex flex-col md:flex-row justify-start gap-4",
              " mx-auto"
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
                key={"card" + index}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  layout = false,
}: {
  card: Card;
  layout?: boolean;
}) => {
  return (
    <>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        className="rounded-lg border-2 border-textyellow h-72 w-[100%] md:w-[450px] bg-card overflow-hidden relative z-10"
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="z-40 px-5 py-6 w-full h-full flex flex-col justify-between">
          <motion.p
            layoutId={layout ? `usertype-${card.usertype}` : undefined}
            className="text-textyellow font-mokoto font-normal text-lg md:text-2xl flex flex-col items-start gap-3"
          >
            APPLY AS
            <span className="md:text-4xl text-lg flex flex-col md:flex-row items-start">
              {card.usertype.split(" ").map((word, index) => (
                <span key={index}>{word}&nbsp;</span>
              ))}
            </span>{" "}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white text-sm md:text-base font-normal text-left w-full font-Poppins flex-nowrap mb-2"
          >
            {card.content}
          </motion.p>
          <Link
            href={card.registerlink}
            className="text-textyellow font-mokoto text-xl w-fit bg-[#F01DD41A] px-5 py-1 rounded-md border-2 border-[#F01DD4] hover:text-gray-400"
          >
            REGISTER
          </Link>
        </div>
      </motion.button>
    </>
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
