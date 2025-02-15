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
        linkedin: "https://www.linkedin.com/in/soumyajit-mondal2825/"
      },
      {
        name: "Sayan Mukherjee",
        image: "/crew/Sayan Mukherjee.jpg",
        github: "https://github.com/",
        linkedin: "https://www.linkedin.com/in/sayan-mukherjee-975175229/"
      },
      {
        name: "Abhraneel Karmakar",
        image: "/crew/Abhraneel - Abhraneel Python.png",
        github: "https://github.com/abhraneel2004/",
        linkedin: "https://www.linkedin.com/in/abhraneel-karmakar/"
      },
      {
        name: "Debarshee Chakraborty",
        image: "/crew/Debarshee Chakraborty.jpg",
        github: "https://github.com/debarshee2004",
        linkedin: "https://www.linkedin.com/in/debarshee-chakraborty-dc2004/"
      },
      {
        name: "Nabajit Bhadury",
        image: "/crew/Nabajit Bhadury.jpg",
        github: "https://github.com/NabajitBhadury",
        linkedin: "https://www.linkedin.com/in/nabajit-bhadury-5a123b24a/"
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
        linkedin: " https://www.linkedin.com/in/indrani-som-258498248/"
      },
      {
        name: "Anushka Bhowmick",
        image: "/crew/Anushka Bhowmick.jpg",
        github: "https://github.com/Anushka-Bhowmick",
        linkedin: "https://www.linkedin.com/in/anushkabhowmick/"
      },
      {
        name: "Ashish Gupta",
        image: "/crew/Ashish.png",
        github: "https://github.com/ASHISH26940",
        linkedin: "https://www.linkedin.com/in/ashish-gupta2694/"
      },
      {
        name: "Suman Jain",
        image: "/crew/Suman Jain.jpeg",
        github: "https://github.com/SumanJain2005",
        linkedin: "https://www.linkedin.com/in/suman-naresh-jain/"
      },
      {
        name: "Ankan Misra",
        image: "/crew/Ankan Misra.png",
        github: "https://github.com/AnkanMisra",
        linkedin: "https://www.linkedin.com/in/AnkanMisra"
      },  
      {
        name: "Souvik Sural",
        image: "/crew/Souvik Sural.png",
        github: "https://github.com/Souvik34",
        linkedin: "https://www.linkedin.com/in/souvik-sural/"
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
        linkedin: "https://www.linkedin.com/in/abhinandan-sadhukhan-5b011a269/"
      },
      {
        name: "Sangneel Deb",
        image: "/crew/Sangneel Deb.png",
        github: "https://github.com/lord-cyclone100",
        linkedin: "https://www.linkedin.com/in/sangneel-deb/"
      },
      {
        name: "Sayan Dere",
        image: "/crew/sayan_dere.png",
        github: "https://github.com/Sayandere12",
        linkedin: "https://www.linkedin.com/in/sayan-dere-a56951326"
      },
      {
        name: "Tanushree Das",
        image: "/crew/Tanushree Das.png",
        github: "https://github.com/tanushreedas04",
        linkedin: "https://www.linkedin.com/in/tanushreedas04"
      },
      {
        name: "Dhritiman Bhattacharjee",
        image: "/crew/Dhritiman Bhattacharjee.jpg",
        github: "https://github.com/Dhriti007",
        linkedin: "https://www.linkedin.com/in/dhritiman-bhattacharjee-b399a5292"
      },
      {
        name: "Rhritwika Das",
        image: "/crew/Rhritwika Das.png",
        github: "https://github.com/",
        linkedin: "https://www.linkedin.com/in/rhritwika-das-b1b74b262"
      },
      {
        name: "Monojit Pal",
        image: "/crew/Monojit Pal.jpg",
        github: "https://github.com/Monojit09",
        linkedin: "https://www.linkedin.com/in/monojit-pal/"
      },
      {
        name: "Sukrit Deb",
        image: "/crew/Sukrit Deb.jpg",
        github: "https://github.com/SukritDeb",
        linkedin: "https://www.linkedin.com/in/sukritdeb"
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
        name: "Abhiraj Bose",
        image: "/crew/Abhiraj Bose.jpg",
        github: "https://github.com/AbhirajBose",
        linkedin: "https://www.linkedin.com/in/abhiraj-bose-a128a6247/"
      },
      {
        name: "Saptak Biswas",
        image: "/crew/ Saptak2.png",
        github: "https://github.com/swapitbiswas",
        linkedin: "https://www.linkedin.com/in/saptak-biswas-50a834323"
      },
      {
        name: "Soumili Ghosh",
        image: "/crew/soumili.jpg",
        github: "https://github.com/Soumili-2004",
        linkedin: "https://www.linkedin.com/in/soumili-ghosh-b38264294"
      },
      {
        name: "Rajashree Ray",
        image: "/crew/Rajashree Ray.jpg",
        github: "https://github.com/Rajashree185",
        linkedin: "https://www.linkedin.com/in/rajashree-ray-b712512b8"
      },
      {
        name: "Rittika Chakraborty",
        image: "/crew/Rittika Chakraborty.jpg",
        github: "https://github.com",
        linkedin: " https://www.linkedin.com/in/rittika-cb/"
      },
      {
        name: "Dhwani Chauhan",
        image: "/crew/Dhwani Chauhan.jpg",
        github: "https://github.com/Dhwani107",
        linkedin: "https://www.linkedin.com/in/dhwani-chauhan-aaa5ab280"
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
        name: "⁠Aniket De",
        image: "/crew/Aniket De.png",
        github: "https://github.com/aniketde1112",
        linkedin: "https://www.linkedin.com/in/aniketde2004/"
      },
      {
        name: "⁠Koustav Chatterjee",
        image: "/crew/IMG-20231219-WA0043 - Koustav Chatterjee.jpg",
        github: "https://github.com/KoustavChatterjee",
        linkedin: "https://www.linkedin.com/in/koustav-chatterjee-9b060b226"
      },
      {
        name: "⁠Ankur Mukherjee",
        image: "/crew/Ankur Mukherjee.jpg",
        github: "https://github.com/Ankur-Mukherjee",
        linkedin: "https://www.linkedin.com/in/ankur-mukherjee01"
      },
      {
        name: "⁠Anik Mukherjee",
        image: "/crew/AnikMukherjee.png",
        github: "https://github.com/Anik000007",
        linkedin: "https://www.linkedin.com/in/anik-mukherjee-19a839285"
      },
      {
        name: "⁠Ishita Majumdar",
        image: "/crew/IMG-20250203-WA0057(1) - Ishita Majumdar.jpg",
        github: "https://github.com/Ishita-Majumdar",
        linkedin: "https://www.linkedin.com/in/ishita-majumdar-0059671b3"
      },
      {
        name: "Rajdeep Saha",
        image: "/crew/Rajdeep Saha.png",
        github: "https://github.com/C0D3K0NG",
        linkedin: "https://www.linkedin.com/in/rajdeep-saha-b92452292/"
      },
      {
        name: "⁠Triparna Roy",
        image: "/crew/20241215_140910 - 152_Triparna Roy.jpg",
        github: "https://github.com/triparna-roy",
        linkedin: "https://www.linkedin.com/in/triparna-roy-a9a2b929b"
      },
      {
        name: "⁠Shrinwanti Basu",
        image: "/crew/WhatsApp Image 2025-02-12 at 10.26.39 PM - 91_SHRINWANTI BASU.jpeg",
        github: "https://github.com/Shrinwanti-Basu",
        linkedin: "https://www.linkedin.com/in/shrinwanti-basu-2b3669278"
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
        github: "https://github.com/Ayansarkarcse",
        linkedin: " https://www.linkedin.com/in/ayan-sarkar-78993b289/"
      },
      {
        name: "Suman Chakraborty",
        image: "/crew/IMG-20250211-WA0020 - Suman Chakraborty.jpg",
        github: "http://github.com/suman599",
        linkedin: "https://www.linkedin.com/in/suman-chakraborty-8a1535254"
      },
      {
        name: "Kanaya Karmakar",
        image: "/crew/Photo from Kanaya - Kanaya Karmakar.jpg",
        github: "https://github.com/kanayakarmakar",
        linkedin: "https://www.linkedin.com/in/kanaya-karmakar-5a5a202b7/"
      },
      {
        name: "Srija Ray",
        image: "/crew/default.jpg",
        github: "https://github.com/srijaray",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Rajdeep Paul",
        image: "/crew/myself_profilepic - Rajdeep Paul.jpg",
        github: "https://github.com/rajdeep13-coder",
        linkedin: "https://www.linkedin.com/in/rajdeep-paul-013z/"
      },
      {
        name: "Jyotirupa Saha",
        image: "/crew/Jyotirupa Saha.jpg",
        github: "https://github.com/Jyotirupa2005",
        linkedin: "https://www.linkedin.com/in/jyotirupa-saha-3293222b8"
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
        linkedin: "https://www.linkedin.com/in/debmalooo"
      },
      {
        name: "Debojyoti De",
        image: "/crew/IMG_2645 - Debojyoti De.jpg",
        github: "https://github.com/DebojyotiDe03",
        linkedin: "https://www.linkedin.com/in/debojyotide007/"
      },
      {
        name: "Ritam Dey",
        image: "/crew/ritam.jpeg",
        github: "https://github.com/ritam-dey",
        linkedin: "https://www.linkedin.com/in/ritam-dey-9494a2326"
      },
      {
        name: "Debadrita Mondal",
        image: "/crew/Debadrita Mondal.png",
        github: "https://github.com/debadrita-mondal",
        linkedin: "https://www.linkedin.com/in/debadrita-mondal-b373b6257"
      },
      {
        name: "Aritra Hui",
        image: "/crew/Arita Hui.png",
        github: "https://github.com/aritra-hui",
        linkedin: "https://www.linkedin.com/in/aritra-hui-37430a264/"
      }
    ]
  }
];