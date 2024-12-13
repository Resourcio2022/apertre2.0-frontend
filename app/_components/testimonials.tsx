import React from 'react'
import {InfiniteMovingCards} from '@/components/InfiniteMovingCards'
import {testimonialsdata} from '@/constants/testimonialsconstant'
import Mobiletestimonials from '@/app/_components/mobiletestimonials'
const testimonials = () => {
    
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
      <Mobiletestimonials items={testimonialsdata} />
    </div>
        </div>
  )
}

export default testimonials