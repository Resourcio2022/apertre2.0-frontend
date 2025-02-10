export type TeamRole = 'organisers' | 'techies' | 'designers' | 'content' | 'socialities' | 'marketters' | 'video'

type TeamMember = {
  name: string
  image?: string
  linkedin?: string
  instagram?: string
  github?: string
}

export type TeamSection = {
  id: TeamRole
  title: string
  subtitle: string
  accentColor: string
  members: TeamMember[]
}

export const teamSections: TeamSection[] = [
  {
    id: "organisers",
    title: "THE ORGANISERS",
    subtitle: "From concept to reality, these are the people who did it!",
    accentColor: "from-blue-400/80 to-blue-600/80",
    members: [
      {
        name: "Soumyajit Mondal",
        image: "/crew/Soumyajit Mondal.jpg",
      },
      {
        name: "Sayan Mukherjee",
        image: "/crew/Sayan Mukherjee.jpg",
      },
      {
        name: "Nabajit Bhadury",
        image: "/crew/Nabajit Bhadury.jpg",
        github: "https://github.com/NabajitBhadury"
      },
      {
        name: "Abhraneel Karmakar",
        image: "/crew/Abhraneel Karmakar.jpg",
      },
      {
        name: "Debarshee Chakraborty",
        image: "/crew/Debarshee Chakraborty.jpg",
        github: "https://github.com/debarshee2004"
      }
    ],
  },
  {
    id: "techies",
    title: "THE TECHIES",
    subtitle: "Ensuring success is available at your fingertips!",
    accentColor: "from-purple-400/80 to-purple-600/80",
    members: [
      {
        name: "Anjishnu Ganguly",
        image: "/crew/Anjishnu Ganguly.jpeg",
        github: "https://github.com/skythrill256"
      },
      {
        name: "Souvik Sural",
        image: "/crew/Souvik Sural.png",
        github: "https://github.com/Souvik34"
      },
      {
        name: "Suman Jain",
        image: "/crew/Suman Jain.jpeg",
        github: "https://github.com/SumanJain2005"
      },
      {
        name: "Rounak Sen",
        image: "/crew/Rounak Sen.jpg",
        github: "https://github.com/rony0000013"
      },
      {
        name: "Anushka Bhowmick",
        image: "/crew/Anushka Bhowmick.jpg",
        github: "https://github.com/Anushka-Bhowmick"
      },
      {
        name: "Ankan Misra",
        image: "/crew/Ankan Misra.png",
        github: "https://github.com/AnkanMisra"
      },
      {
        name: "Krishnendu Dey",
        image: "/crew/Krishnendu Dey.jpg",
        github: "https://github.com/krishTheCoderBoy"
      },
      {
        name: "Ashish Gupta",
        image: "/crew/Ashish Gupta.jpeg",
        github: "https://github.com/ASHISH26940"
      },
      {
        name: "Indrani Som",
        image: "/crew/Indrani Som.jpg",
        github: "https://github.com/IndraniSom"
      }
    ]
  },
  {
    id: "designers",
    title: "THE DESIGNERS",
    subtitle: "Crafting the visuals that captivate and inspire.",
    accentColor: "from-green-400/80 to-green-600/80",
    members: [
      {
        name: "Sukrit Deb",
        image: "/crew/Sukrit Deb.jpg",
        github: "https://github.com/SukritDeb"
      },
      {
        name: "Sangneel Deb",
        image: "/crew/Sangneel Deb.png",
        github: "https://github.com/lord-cyclone100"
      },
      {
        name: "Monojit Pal",
        image: "/crew/Monojit Pal.jpg",
        github: "https://github.com/Monojit09"
      },
      {
        name: "Ashmit Barik",
        image: "/crew/Ashmit Barik.jpeg",
        github: "https://github.com/Dev-ashxy"
      },
      {
        name: "Dhritiman Bhattacharjee",
        image: "/crew/Dhritiman Bhattacharjee.jpg",
        github: "https://github.com/Dhriti007"
      },
      {
        name: "Abhinandan Sankar Sadhukhan",
        image: "/crew/default.jpg",
      },
      {
        name: "Sangneel Deb",
        image: "/crew/default.jpg",
      },
      {
        name: "Sayan Dere",
        image: "/crew/default.jpg",
      },
      {
        name: "Tanushree Das",
        image: "/crew/default.jpg",
      },
      {
        name: "⁠Rhritwika",
        image: "/crew/default.jpg",
      }
    ]
  },
  {
    id: "content",
    title: "THE CONTENT CREATORS",
    subtitle: "The voices behind every message that resonates.",
    accentColor: "from-yellow-400/80 to-yellow-600/80",
    members: [
      {
        name: "Saptak Biswas",
        image: "/crew/ Saptak2.png",
        github: "https://github.com/saptak2005"
      },
      {
        name: "Rittika Chakraborty",
        image: "/crew/Rittika Chakraborty.jpg",
        github: "https://github.com/Rittika1465"
      },
      {
        name: "Rajashree Ray",
        image: "/crew/Rajashree Ray.jpg",
        github: "https://github.com/Rajashree185"
      },
      {
        name: "Dhwani Chauhan",
        image: "/crew/Dhwani Chauhan.jpg",
        github: "https://github.com/Dhwani107"
      },
      {
        name: "Abhiraj Bose",
        image: "/crew/default.jpg",
      },
      {
        name: "Soumili Ghosh",
        image: "/crew/default.jpg",
      },
    ]
  },
  {
    id: "socialities",
    title: "THE SOCIALITIES",
    subtitle: "Driving conversations and building communities.",
    accentColor: "from-pink-400/80 to-pink-600/80",
    members: [
      {
        name: "Rajdeep Saha",
        image: "/crew/Rajdeep Saha.jpg",
        github: "https://github.com/C0D3K0NG"
      },
      {
        name: "Soham Mukherjee",
        image: "/crew/Soham Mukherjee.jpeg",
        github: "https://github.com/sohamMKRG"
      },
      {
        name: "⁠Aniket De",
        image: "/crew/default.jpg",
      },
      {
        name: "⁠Koustav Chatterjee",
        image: "/crew/default.jpg",
      },
      {
        name: "⁠Ankur Mukherjee",
        image: "/crew/default.jpg",
      },
      {
        name: "⁠Anik Mukherjee",
        image: "/crew/default.jpg",
      },
      {
        name: "⁠Ishita Majumdar",
        image: "/crew/default.jpg",
      },
      {
        name: "⁠Triparna Roy",
        image: "/crew/default.jpg",
      },
      {
        name: "⁠Shrinwanti Basu",
        image: "/crew/default.jpg",
      }
    ]
  },
  {
    id: "marketters",
    title: "THE MARKETTERS",
    subtitle: "Taking the event to every corner of the world.",
    accentColor: "from-red-400/80 to-red-600/80",
    members: [
      {
        name: "Ayan Sarkar",
        image: "/crew/Ayan Sarkar.jpeg",
      },

      {
        name: "Suman Chakraborty",

      },
      {
        name: "Kanaya Karmakar",

      },
      {
        name: "Srija Ray",

      },
      {
        name: "Mudit Khater",
        image: "/crew/MUDIT KHATER.jpg",
        github: "https://github.com/mudit108-code"
      },
      {
        name: "Jyotirupa Saha",
        image: "/crew/default.jpg",
      },
      {
        name: "Rajdeep Paul",
        image: "/crew/default.jpg",
      }
    ]
  },
  {
    id: "video",
    title: "THE VIDEO TEAM",
    subtitle: "Capturing moments and creating visual stories.",
    accentColor: "from-teal-400/80 to-teal-600/80", 
    members: [
      {
        name: "Debmalya Sadhukhan",
        image: "/crew/default.jpg",
      },
      {
        name: "Debojyoti De",
        image: "/crew/default.jpg",
      },
      {
        name: "Ritam Dey",
        image: "/crew/default.jpg",
      },
      {
        name: "Debadrita Mondal",
        image: "/crew/default.jpg",
      },
      {
        name: "Aritra Hui",
        image: "/crew/default.jpg",
      }
    ]
  }
];
