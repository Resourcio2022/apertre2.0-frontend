import Image from 'next/image';
import { InfiniteMovingCards } from '@/components/InfiniteMovingCards'
import { testimonialsdata } from '@/constants/testimonialsconstant'

export default function Testimonials() {
    return (
        <section className='w-full h-full flex flex-col bg-customblack md:p-20 p-10'>
            <span className="text-nowrap text-2xl md:text-6xl font-mokoto text-textyellow text-left mb-10">
                Testimonials
            </span>
            <div className="h-full w-full rounded-md flex flex-col relative overflow-hidden">
                <div className="flex flex-col md:hidden gap-10">
                    {testimonialsdata.map((item, idx) => (
                        <li
                            key={item.name}
                            className={`w-[320px] h-full relative rounded-r-[21px] mx-14 border-r-4 border-textyellow bg-testcard bg-cover bg-no-repeat flex-shrink-0  pl-20 pr-3 py-6 ${idx % 2 === 0 ? "ml-auto" : "mr-auto"}`}
                        >
                            <div className="relative top-0 right-40 bg-gray-800 border-4 border-yellow-500 rounded-full w-[150px] h-[150px] overflow-hidden">
                                <Image
                                    src={item.pic}
                                    alt={item.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-full"
                                />
                            </div>
                            <blockquote className="flex flex-col  pl-7 items-center w-full h-full z-50 -mt-36 pr-4">
                                <div
                                    aria-hidden="true"
                                    className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                                ></div>
                                <span className=" relative z-20 text-xs  leading-[1.6] text-gray-100 font-normal text-left flex w-full justify-end items-center">
                                    {item.quote}
                                </span>
                                <div className="w-full relative z-20 mt-3 flex flex-row justify-start items-center">
                                    <span className="flex flex-col gap-1">
                                        <span className=" text-sm text-textyellow  leading-[1.6] font-Poppins font-normal">
                                            {item.name}
                                        </span>
                                        <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                                            {item.title}
                                        </span>
                                    </span>
                                </div>
                            </blockquote>
                        </li>
                    ))}
                </div>
                <InfiniteMovingCards
                    items={testimonialsdata}
                    direction="right"
                    speed="slow"
                />
            </div>
        </section>
    );
};
