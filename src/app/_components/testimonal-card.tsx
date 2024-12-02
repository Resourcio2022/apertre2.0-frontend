import Image from 'next/image'

interface Testimonial {
    id: number;
    name: string;
    image: string;
    text: string;
  }
  
  

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="relative p-6 min-w-[300px] md:min-w-[400px]">
      <div className="relative z-10 bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-yellow-500/20">
        <div className="flex items-start gap-4">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={60}
            height={60}
            className="rounded-full border-2 border-yellow-500"
          />
          <div className="flex-1">
            <p className="text-white/90 mb-4">{testimonial.text}</p>
            <p className="text-yellow-500 font-semibold">- {testimonial.name}</p>
          </div>
        </div>
      </div>
      <div 
        className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-lg blur-xl"
        aria-hidden="true"
      />
    </div>
  )
}

