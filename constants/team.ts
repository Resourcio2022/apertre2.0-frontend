export interface TeamMember {
    name: string
    image: string
    instagram?: string
    github?: string
  }
  
  export interface TeamSection {
    id: string
    title: string
    subtitle: string
    members: TeamMember[]
    accentColor: string
  }
  
  export const teamSections: TeamSection[] = [
    {
      id: "organisers",
      title: "THE ORGANISERS",
      subtitle: "From concept to reality, these are the people who did it!",
      accentColor: "from-blue-400/80 to-blue-600/80",
      members: [
        { name: "John Doe", image: "./snake.jpg", instagram: "#", github: "#" },
        { name: "Jane Smith", image: "./snake.jpg", instagram: "#", github: "#" },
        { name: "Alice Johnson", image: "./snake.jpg", instagram: "#", github: "#" },
        { name: "Michael Brown", image: "./snake.jpg", instagram: "#", github: "#" },
        { name: "Emily Davis", image: "./snake.jpg", instagram: "#", github: "#" },
      ],
    },
    {
      id: "techies",
      title: "THE TECHIES",
      subtitle: "Ensuring success is available at your fingertips!",
      accentColor: "from-purple-400/80 to-purple-600/80",
      members: [
        { name: "Chris Wilson", image: "/placeholder.svg?height=400&width=400", instagram: "#", github: "#" },
        { name: "Patricia Taylor", image: "/placeholder.svg?height=400&width=400", instagram: "#", github: "#" },
        { name: "Robert Martinez", image: "/placeholder.svg?height=400&width=400", instagram: "#", github: "#" },
        { name: "Linda Garcia", image: "/placeholder.svg?height=400&width=400", instagram: "#", github: "#" },
        { name: "Kevin Moore", image: "/placeholder.svg?height=400&width=400", instagram: "#", github: "#" },
      ],
    },
    {
      id: "designers",
      title: "THE DESIGNERS",
      subtitle: "Crafting the visuals that captivate and inspire.",
      accentColor: "from-green-400/80 to-green-600/80",
      members: [
        { name: "Sophia Anderson", image: "", instagram: "#", github: "#" },
        { name: "James Thompson", image: "/placeholder.svg?height=400&width=400", instagram: "#", github: "#" },
        { name: "Olivia Martin", image: "/placeholder.svg?height=400&width=400", instagram: "#", github: "#" },
        { name: "David White", image: "/placeholder.svg?height=400&width=400", instagram: "#", github: "#" },
        { name: "Emma Harris", image: "/placeholder.svg?height=400&width=400", instagram: "#", github: "#" },
      ],
    },
    {
      id: "content",
      title: "THE CONTENT CREATORS",
      subtitle: "The voices behind every message that resonates.",
      accentColor: "from-yellow-400/80 to-yellow-600/80",
      members: [
        { name: "Benjamin Clark", image: "/placeholder.svg?height=400&width=400", instagram: "#", github: "#" },
        { name: "Mia Lewis", image: "/placeholder.svg?height=400&width=400", instagram: "#", github: "#" },
        { name: "Liam Walker", image: "/placeholder.svg?height=400&width=400", instagram: "#", github: "#" },
        { name: "Charlotte Robinson", image: "/placeholder.svg?height=400&width=400", instagram: "#", github: "#" },
        { name: "Noah Young", image: "/placeholder.svg?height=400&width=400", instagram: "#", github: "#" },
      ],
    },
    {
      id: "socialities",
      title: "THE SOCIALITIES",
      subtitle: "Driving conversations and building communities.",
      accentColor: "from-pink-400/80 to-pink-600/80",
      members: [
        { name: "Lucas King", image: "/placeholder.svg?height=400&width=400", instagram: "#", github: "#" },
        { name: "Ella Scott", image: "/placeholder.svg?height=400&width=400", instagram: "#", github: "#" },
        { name: "Jack Adams", image: "/placeholder.svg?height=400&width=400", instagram: "#", github: "#" },
        { name: "Harper Wright", image: "/placeholder.svg?height=400&width=400", instagram: "#", github: "#" },
        { name: "Aiden Baker", image: "/placeholder.svg?height=400&width=400", instagram: "#", github: "#" },
      ],
    },
    {
      id: "marketters",
      title: "THE MARKETTERS",
      subtitle: "Taking the event to every corner of the world.",
      accentColor: "from-red-400/80 to-red-600/80",
      members: [
        { name: "Isabella Perez", image: "/placeholder.svg?height=400&width=400", instagram: "#", github: "#" },
        { name: "Ethan Rogers", image: "/placeholder.svg?height=400&width=400", instagram: "#", github: "#" },
        { name: "Ava Reed", image: "/placeholder.svg?height=400&width=400", instagram: "#", github: "#" },
        { name: "Daniel Foster", image: "/placeholder.svg?height=400&width=400", instagram: "#", github: "#" },
        { name: "Abigail Ward", image: "/placeholder.svg?height=400&width=400", instagram: "#", github: "#" },
      ],
    },
    {
      id: "videographers",
      title: "THE VIDEOGRAPHERS",
      subtitle: "Capturing every moment, frame by frame.",
      accentColor: "from-teal-400/80 to-teal-600/80",
      members: [
        { name: "Henry Carter", image: "/placeholder.svg?height=400&width=400", instagram: "#", github: "#" },
        { name: "Grace Phillips", image: "/placeholder.svg?height=400&width=400", instagram: "#", github: "#" },
        { name: "Samuel Bennett", image: "/placeholder.svg?height=400&width=400", instagram: "#", github: "#" },
        { name: "Chloe Turner", image: "/placeholder.svg?height=400&width=400", instagram: "#", github: "#" },
        { name: "Matthew Edwards", image: "/placeholder.svg?height=400&width=400", instagram: "#", github: "#" },
      ],
    },
  ];