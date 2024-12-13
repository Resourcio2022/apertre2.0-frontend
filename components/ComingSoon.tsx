import Image from 'next/image'
import image1 from "../public/rocket_urchhe.gif"

export default function RocketComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-4">
      <div className="relative w-full max-w-[18.75rem] md:max-w-[25rem] aspect-square">
        <Image
          src={image1}
          alt="Animated rocket logo"
          fill
          className="object-contain"

          unoptimized
        />
      </div>
      <h1 className="mt-8 text-2xl md:text-4xl font-bold text-yellow-400 tracking-wider animate-pulse font-mokoto">
        COMING SOON
      </h1>
    </div>
  )
}

