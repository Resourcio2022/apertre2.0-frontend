import Image from 'next/image'

export default function MobileTestimonials({ items }: {
  items: {
    quote: string;
    name: string;
    title: string;
    pic: string;
  }[];
}) {
  return (
    <div className='flex flex-col gap-7 w-full h-full md:hidden ml-6 mb-10'>
      {items.map((item, idx) => (
        <li
          className="w-[280px] h-[160px] relative rounded-r-[21px] mx-14 border-r-4 border-textyellow bg-testcard bg-cover bg-no-repeat flex-shrink-0  pl-20 pr-3 py-6 "

          key={item.name}
        >
          <div className="relative -top-6 right-32 bg-gray-800 border-4 border-yellow-500 rounded-full w-[100px] h-[100px] overflow-hidden">
            <Image
              src={item.pic}
              alt={item.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <blockquote className="flex flex-col pl-0 md:pl-7 items-center w-full h-full z-50 -mt-32 pr-0 md:pr-4 text-xs md:text-sm">
            <div
              aria-hidden="true"
              className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
            ></div>
            <span className=" relative z-20 text-xs  leading-[1.6] text-gray-100 font-normal text-left flex w-full justify-end items-center">
              {item.quote}
            </span>
            <div className="w-full relative z-20 mt-0 md:mt-3 flex flex-row justify-start items-center">
              <span className="flex flex-col gap-1">
                <span className="  text-textyellow  leading-[1.6] font-Poppins font-normal">
                  {item.name}
                </span>
                <span className="  leading-[1.6] text-gray-400 font-normal">
                  {item.title}
                </span>
              </span>
            </div>
          </blockquote>
        </li>
      ))}
    </div>
  )
}
