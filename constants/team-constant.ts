export type TeamRole = 'organisers' | 'techies' | 'designers' | 'content' | 'socialities' | 'marketters' | 'video'

type TeamMember = {
  name: string
  image?: string
  github?: string
  linkedin?: string 
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
        github: "https://github.com/Soumyajit2825",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Sayan Mukherjee",
        image: "/crew/Sayan Mukherjee.jpg",
        github: "https://github.com/++",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Abhraneel Karmakar",
        image: "/crew/Abhraneel Karmakar.jpg",
        github: "https://github.com/abhraneel2004",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Debarshee Chakraborty",
        image: "/crew/Debarshee Chakraborty.jpg",
        github: "https://github.com/debarshee2004",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Nabajit Bhadury",
        image: "/crew/Nabajit Bhadury.jpg",
        github: "https://github.com/NabajitBhadury",
        linkedin: "https://www.linkedin.com/in/random/"
      },  
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
        github: "https://github.com/skythrill256",
        linkedin: "https://www.linkedin.com/in/anjishnu-ganguly/"
      },
      {
        name: "Indrani Som",
        image: "/crew/Indrani Som.jpg",
        github: "https://github.com/IndraniSom",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Anushka Bhowmick",
        image: "/crew/Anushka Bhowmick.jpg",
        github: "https://github.com/Anushka-Bhowmick",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Ashish Gupta",
        image: "/crew/Ashish.png",
        github: "https://github.com/ASHISH26940",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Suman Jain",
        image: "/crew/Suman Jain.jpeg",
        github: "https://github.com/SumanJain2005",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Ankan Misra",
        image: "/crew/Ankan Misra.png",
        github: "https://github.com/AnkanMisra",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Rounak Sen",
        image: "/crew/Rounak Sen.jpg",
        github: "https://github.com/__",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Souvik Sural",
        image: "/crew/Souvik Sural.png",
        github: "https://github.com/Souvik34",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Krishnendu Dey",
        image: "/crew/Krishnendu Dey.jpg",
        github: "https://github.com/krishnendu-dey",
        linkedin: "https://www.linkedin.com/in/random/"
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
        name: "Abhinandan Sankar Sadhukhan",
        image: "/crew/abhinandan.jpg",
        github: "https://github.com/abhina",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Sangneel Deb",
        image: "/crew/Sangneel Deb.png",
        github: "https://github.com/lord-cyclone100",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Sayan Dere",
        image: "/crew/sayan_dere.png",
        github: "https://github.com/___",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Tanushree Das",
        image: "/crew/Tanushree Das.png",
        github: "https://github.com/___",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Dhritiman Bhattacharjee",
        image: "/crew/Dhritiman Bhattacharjee.jpg",
        github: "https://github.com/Dhriti007",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Monojit Pal",
        image: "/crew/Monojit Pal.jpg",
        github: "https://github.com/Monojit09",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Sukrit Deb",
        image: "/crew/Sukrit Deb.jpg",
        github: "https://github.com/SukritDeb",
        linkedin: "https://www.linkedin.com/in/random/"
      },
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
        github: "https://github.com/saptak2005",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Rajashree Ray",
        image: "/crew/Rajashree Ray.jpg",
        github: "https://github.com/Rajashree185",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Dhwani Chauhan",
        image: "/crew/Dhwani Chauhan.jpg",
        github: "https://github.com/Dhwani107",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Abhiraj Bose",
        image: "/crew/Abhiraj Bose.jpg",
        github: "https://github.com/Abhiraj-Bose",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Soumili Ghosh",
        image: "/crew/soumili.jpg",
        github: "https://github.com/Soumili-Ghosh",
        linkedin: "https://www.linkedin.com/in/random/"
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
        github: "https://github.com/C0D3K0NG",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "⁠Aniket De",
        image: "/crew/Aniket De.png",
        github: "https://github.com/Aniketde",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "⁠Koustav Chatterjee",
        image: "/crew/IMG-20231219-WA0043 - Koustav Chatterjee.jpg",
        github: "https://github.com/KoustavChatterjee",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "⁠Ankur Mukherjee",
        image: "/crew/Ankur Mukherjee.jpg",
        github: "https://github.com/Ankur-Mukherjee",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "⁠Anik Mukherjee",
        image: "/crew/AnikMukherjee.png",
        github: "https://github.com/Anik-Mukherjee",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "⁠Ishita Majumdar",
        image: "/crew/IMG-20250203-WA0057(1) - Ishita Majumdar.jpg",
        github: "https://github.com/Ishita-Majumdar",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "⁠Triparna Roy",
        image: "/crew/20241215_140910 - 152_Triparna Roy.jpg",
        github: "https://github.com/triparna-roy",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "⁠Shrinwanti Basu",
        image: "/crew/WhatsApp Image 2025-02-12 at 10.26.39 PM - 91_SHRINWANTI BASU.jpeg",
        github: "https://github.com/Shrinwanti-Basu",
        linkedin: "https://www.linkedin.com/in/random/"
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
        github: "https://github.com/Ayan-Sarkar",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Suman Chakraborty",
        image: "/crew/IMG-20250211-WA0020 - Suman Chakraborty.jpg",
        github: "https://github.com/suman-chakraborty",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Kanaya Karmakar",
        image: "/crew/Photo from Kanaya - Kanaya Karmakar.jpg",
        github: "https://github.com/kanaya-karmakar",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Srija Ray",
        image: "/crew/default.jpg",
        github: "https://github.com/srijaray",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Mudit Khater",
        image: "/crew/MUDIT KHATER.jpg",
        github: "https://github.com/mudit108-code",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Jyotirupa Saha",
        image: "/crew/Jyotirupa Saha.jpg",
        github: "https://github.com/jyotirupa-saha",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Rajdeep Paul",
        image: "/crew/myself_profilepic - Rajdeep Paul.jpg",
        github: "https://github.com/rajdeep-paul",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Rohan Mitra",
        image: "/crew/default.jpg",
        github: "https://github.com/rohan-mitra",
        linkedin: "https://www.linkedin.com/in/random/"
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
        image: "/crew/IMG_9719 - Debmalya _S.JPG",
        github: "https://github.com/debmalya-sadhukhan",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Debojyoti De",
        image: "/crew/IMG_2645 - Debojyoti De.jpg",
        github: "https://github.com/debojyoti-de",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Ritam Dey",
        image: "/crew/default.jpg",
        github: "https://github.com/ritam-dey",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Debadrita Mondal",
        image: "/crew/default.jpg",
        github: "https://github.com/debadrita-mondal",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Aritra Hui",
        image: "/crew/default.jpg",
        github: "https://github.com/aritra-hui",
        linkedin: "https://www.linkedin.com/in/random/"
      }
    ]
  }
];