import React from 'react'
import {InfiniteMovingCards} from '@/components/InfiniteMovingCards'
import {testimonialsdata} from '@/constants/testimonialsconstant'
const testimonials = () => {
    
  return (
    <div className='flex w-full h-full flex-col bg-customblack md:p-20 p-10 '>
        <span className="text-nowrap text-2xl md:text-6xl font-mokoto text-textyellow text-left mb-10">
        Testimonials
      </span>
        <div className="h-full w-full rounded-md flex flex-col relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonialsdata}
        direction="right"
        speed="slow"
      />
    </div>
        </div>
  )
}

export default testimonials