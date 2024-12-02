interface Testimonial {
    id: number;
    name: string;
    image: string;
    text: string;
  }

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rishabh Neogi",
    image: "/placeholder.svg?height=100&width=100",
    text: "Being part of Apextra as a project admin and speaker was an incredible experience. The event provided a fantastic platform to share insights, collaborate with like-minded individuals, and drive impactful discussions."
  },
  {
    id: 2,
    name: "Arnab Chatterjee",
    image: "/placeholder.svg?height=100&width=100",
    text: "It was an absolute honor to be a speaker at Apextra last year! Huge kudos to the organizing team for putting together such a seamless and impactful event."
  },
  {
    id: 3,
    name: "Ronit Banerjee",
    image: "/placeholder.svg?height=100&width=100",
    text: "I was truly honored to be a part of Apextra as a speaker last year! A big shoutout to the organizers for creating such a well-executed and engaging event."
  },
  {
    id: 4,
    name: "Sayak Seng",
    image: "/placeholder.svg?height=100&width=100",
    text: "It was very nice to be a part of this grand event, met some amazing community speakers."
  }
]

