import { InfiniteMovingCards } from '@/components/InfiniteMovingCards'
import { testimonialsdata } from '@/constants/testimonialsconstant'
import Mobiletestimonials from '@/app/_components/mobiletestimonials'

export default function Testimonials() {
  return (
    <div className='flex w-full h-full flex-col bg-customblack md:p-20 p-0 '>
      <span className="text-nowrap text-2xl md:text-6xl font-mokoto text-textyellow text-left mb-10 pl-7 md:pl-0 pt-7 md:pt-7">
        Testimonials
      </span>
      <div className="h-full w-full rounded-md flex flex-col relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonialsdata}
          direction="right"
          speed="slow"
        />
        <div className='absolute right-0 h-full w-28 bg-gradient-to-l from-customblack to-transparent top-0 z-20'></div>
        <div className='absolute left-0 h-full w-28 bg-gradient-to-r from-customblack to-transparent top-0 z-20'></div>

        <Mobiletestimonials items={testimonialsdata} />
      </div>
    </div>
  )
}
