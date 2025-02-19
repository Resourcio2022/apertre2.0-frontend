export type TeamRole = 'organisers' | 'techies' | 'designers' | 'content' | 'socialities' | 'marketters' | 'video'

type TeamMember = {
  name: string
  image: string
  github?: string
  linkedin?: string
  instagram?: string
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
        image: "AEe6qhE96NSmkQMwXvqfatLP6nB5dIy1gT9DuNKl2ASjcC4i",
        github: "https://github.com/Soumyajit2825",
        linkedin: "https://www.linkedin.com/in/soumyajit-mondal2825/"
      },
      {
        name: "Sayan Mukherjee",
        image: "AEe6qhE96NSmnMzVBroQamzk56gchsplOPdRUBJtGoT4q7HN",
        github: "https://github.com/Sayan044",
        linkedin: "https://www.linkedin.com/in/sayan-mukherjee-975175229/"
      },
      {
        name: "Abhraneel Karmakar",
        image: "AEe6qhE96NSmq5LkZDbVhoR4ftaE5Pu1SBreNZGXTCks8vng",
        github: "https://github.com/abhraneel2004",
        linkedin: "https://www.linkedin.com/in/abhraneel-karmakar/",
      },
      {
        name: "Nabajit Bhadury",
        image: "AEe6qhE96NSmvC8L5ytCGEKkYWgzxdUoQ2tpHhvawiTRB40I",
        github: "https://github.com/NabajitBhadury",
        linkedin: "https://www.linkedin.com/in/nabajit-bhadury-5a123b24a/"
      },
      {
        name: "Aniket De",
        image: "AEe6qhE96NSmxLhXbtcSzGiOakbYtEhArRQX8PL0MvBWeNuJ",
        github: "https://github.com/aniketde1112",
        linkedin: "https://www.linkedin.com/in/aniketde2004/"
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
        name: "Abhirup Saha",
        image: "AEe6qhE96NSmP5AOfr2xu1FVvgLjSJqbrTAK5kXwWBO04htG",
        github: "https://github.com/zeitgeistxx",
        linkedin: "https://www.linkedin.com/in/zeitgeistx"
      },
      {
        name: "Sayan Das",
        image: "AEe6qhE96NSmHdPoSTvJoR3KrPBA9bZpmxXDjS4qC0UcagiT",
        github: "https://www.github.com/Sayan67",
        linkedin: "https://www.linkedin.com/in/sayan-daas/"
      },
      {
        name: "Anjishnu Ganguly",
        image: "AEe6qhE96NSmbDzJUEIMUZuVkHto1eKR6l9fOAN0mPF8XTb5",
        github: "https://github.com/skythrill256",
        linkedin: "https://www.linkedin.com/in/anjishnu-ganguly/"
      },
      {
        name: "Debarshee Chakraborty",
        image: "AEe6qhE96NSm0jiPCDJ75AlnhBCk0LsPaWgXKEjx92QbMOfF",
        github: "https://github.com/debarshee2004",
        linkedin: "https://www.linkedin.com/in/debarshee-chakraborty-dc2004/"
      },
      {
        name: "Indrani Som",
        image: "AEe6qhE96NSmIWeT1hAO4H7Q8nf1CrGS3gFXRuZwzYleDk9N",
        github: "https://github.com/IndraniSom",
        linkedin: " https://www.linkedin.com/in/indrani-som-258498248/"
      },
      {
        name: "Anushka Bhowmick",
        image: "AEe6qhE96NSm26i1xQk4iCEdYejz8VGvyOJptIQU95ZHxcFo",
        github: "https://github.com/Anushka-Bhowmick",
        linkedin: "https://www.linkedin.com/in/anushkabhowmick/"
      },
      {
        name: "Ashish Gupta",
        image: "AEe6qhE96NSm2VSXhHk4iCEdYejz8VGvyOJptIQU95ZHxcFo",
        github: "https://github.com/ASHISH26940",
        linkedin: "https://www.linkedin.com/in/ashish-gupta2694/"
      },
      {
        name: "Suman Jain",
        image: "AEe6qhE96NSm8fMIYNg9hrWEHCQv4X1t6G38O5bqnKkxgdcR",
        github: "https://github.com/L0rD-Op",
        linkedin: "https://www.linkedin.com/in/suman-naresh-jain/"
      },
      {
        name: "Ankan Misra",
        image: "AEe6qhE96NSm1nnICuzxqZ8PCFDi6Xgf7orTjmnLKMVyU1Od",
        github: "https://github.com/AnkanMisra",
        linkedin: "https://www.linkedin.com/in/AnkanMisra"
      },
      {
        name: "Souvik Sural",
        image: "AEe6qhE96NSmmvjuOpRti95HfgFnwD2qOP8sNYzuSMTroJ3K",
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
        image: "AEe6qhE96NSmgiIVH6PCBOpgt3GZTquWfIDzEx0ea4LARrUc",
        github: "https://github.com/abhina",
        linkedin: "https://www.linkedin.com/in/abhinandan-sadhukhan-5b011a269/"
      },
      {
        name: "Sangneel Deb",
        image: "AEe6qhE96NSmgEV5ViPCBOpgt3GZTquWfIDzEx0ea4LARrUc",
        github: "https://github.com/lord-cyclone100",
        linkedin: "https://www.linkedin.com/in/sangneel-deb/"
      },
      {
        name: "Sayan Dere",
        image: "AEe6qhE96NSm8T0SMHg9hrWEHCQv4X1t6G38O5bqnKkxgdcR",
        linkedin: "https://www.linkedin.com/in/sayan-dere-a56951326"
      },
      {
        name: "Tanushree Das",
        image: "AEe6qhE96NSmqg5TfEbVhoR4ftaE5Pu1SBreNZGXTCks8vng",
        github: "https://github.com/tanushreedas04",
        linkedin: "https://www.linkedin.com/in/tanushreedas04"
      },
      {
        name: "Dhritiman Bhattacharjee",
        image: "AEe6qhE96NSmigcuqwBKpAMBUHn5jlwfmVEPdLXbo4IFrk8z",
        github: "https://github.com/Dhriti007",
        linkedin: "https://www.linkedin.com/in/dhritiman-bhattacharjee-b399a5292"
      },
      {
        name: "Rhritwika Das",
        image: "AEe6qhE96NSmxTdLNxcSzGiOakbYtEhArRQX8PL0MvBWeNuJ",
        linkedin: "https://www.linkedin.com/in/rhritwika-das-b1b74b262"
      },
      {
        name: "Monojit Pal",
        image: "AEe6qhE96NSmfbbNQs9NEs0hDV8IlbOFQA15w6txgkLc2ZHX",
        github: "https://github.com/Monojit09",
        linkedin: "https://www.linkedin.com/in/monojit-pal/"
      },
      {
        name: "Sukrit Deb",
        image: "AEe6qhE96NSmf1ZKOwKs9NEs0hDV8IlbOFQA15w6txgkLc2Z",
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
        image: "AEe6qhE96NSmgI9LVcPCBOpgt3GZTquWfIDzEx0ea4LARrUc",
        github: "https://github.com/AbhirajBose",
        linkedin: "https://www.linkedin.com/in/abhiraj-bose-a128a6247/"
      },
      {
        name: "Saptak Biswas",
        image: "AEe6qhE96NSm9PUBWgh0VOYeyzFqPCRuwNp6XZstnIEkKBlD",
        github: "https://github.com/swapitbiswas",
        linkedin: "https://www.linkedin.com/in/saptak-biswas-50a834323"
      },
      {
        name: "Soumili Ghosh",
        image: "AEe6qhE96NSm82IQhC5g9hrWEHCQv4X1t6G38O5bqnKkxgdc",
        github: "https://github.com/Soumili-2004",
        linkedin: "https://www.linkedin.com/in/soumili-ghosh-b38264294"
      },
      {
        name: "Rajashree Ray",
        image: "AEe6qhE96NSmiSmnUIDBKpAMBUHn5jlwfmVEPdLXbo4IFrk8",
        github: "https://github.com/Rajashree185",
        linkedin: "https://www.linkedin.com/in/rajashree-ray-b712512b8"
      },
      {
        name: "Rittika Chakraborty",
        image: "AEe6qhE96NSmgcYFbOPCBOpgt3GZTquWfIDzEx0ea4LARrUc",
        linkedin: " https://www.linkedin.com/in/rittika-cb/"
      },
      {
        name: "Dhwani Chauhan",
        image: "AEe6qhE96NSm0WDaGTtJ75AlnhBCk0LsPaWgXKEjx92QbMOf",
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
        name: "Koustav Chatterjee",
        image: "AEe6qhE96NSmpXapqMD5jiAoC97V3EQPqSIuxU6bXsntZafH",
        github: "https://github.com/Koustavjr",
        linkedin: "https://www.linkedin.com/in/koustav-chatterjee-9b060b226"
      },
      {
        name: "Ankur Mukherjee",
        image: "AEe6qhE96NSmAxf4fP96NSmYqU7FZVdvyrJa14u50x8E9i3B",
        github: "https://github.com/Ankur-Mukherjee",
        linkedin: "https://www.linkedin.com/in/ankur-mukherjee01"
      },
      {
        name: "Anik Mukherjee",
        image: "AEe6qhE96NSmKMcj4Nlrt670mqwRaHXhOd3pjVAs8SZNIbJK",
        github: "https://github.com/Anik000007",
        linkedin: "https://www.linkedin.com/in/anik-mukherjee-19a839285"
      },
      {
        name: "Ishita Majumdar",
        image: "AEe6qhE96NSmR1qEDb3Lor4U1l6xpbiu0j9ynekfPvQsH8cG",
        github: "https://github.com/Ishita-Majumdar",
        linkedin: "https://www.linkedin.com/in/ishita-majumdar-0059671b3",
      },
      {
        name: "Rajdeep Saha",
        image: "AEe6qhE96NSmnzUwJaoQamzk56gchsplOPdRUBJtGoT4q7HN",
        github: "https://github.com/C0D3K0NG",
        linkedin: "https://www.linkedin.com/in/rajdeep-saha-b92452292/"
      },
      {
        name: "Triparna Roy",
        image: "AEe6qhE96NSm829VAj3g9hrWEHCQv4X1t6G38O5bqnKkxgdc",
        linkedin: "https://www.linkedin.com/in/triparna-roy-a9a2b929b"
      },
      {
        name: "Shrinwanti Basu",
        image: "AEe6qhE96NSmTtzMjxH2Q8HGw3NRnvsyV9Zj4zMaxEfu6Leg",
        linkedin: "https://www.linkedin.com/in/shrinwanti-basu-2b3669278"
      },
      {
        name: "Vivaswan Ghosh",
        image: "AEe6qhE96NSmtnfWxGyc69G5inDfsHdIyFRWC4rxK3wOZYXE",
        github: "https://github.com/vivaswanghosh",
        linkedin: "https://www.linkedin.com/in/vivaswan-ghosh-2749a5294/"
      },
      {
        name: "Argha Kundu",
        image: "AEe6qhE96NSm3PbD4oTuKnyfS10mVhOD9UqGJYEbQWA5gjr7",
        github: "https://github.com/Meexargha",
        linkedin: "https://www.linkedin.com/in/argha-kundu-506133216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
        name: "Aratrik Bandyopadhyay",
        image: "AEe6qhE96NSmJG2chCN5MjzlQHvxwdCVkuips5cLSU19yg6F",
        github: "https://github.com/Aratrik123",
        linkedin: "http://linkedin.com/in/aratrik-bandyopadhyay-14755a222/"
      },
      {
        name: "Ayan Sarkar",
        image: "AEe6qhE96NSm3fdF8WTuKnyfS10mVhOD9UqGJYEbQWA5gjr7",
        github: "https://github.com/Ayansarkarcse",
        linkedin: " https://www.linkedin.com/in/ayan-sarkar-78993b289/"
      },
      {
        name: "Suman Chakraborty",
        image: "AEe6qhE96NSmlG0uEW8QapR3IATgwFEj5PCn6VY4H70viqxN",
        linkedin: "https://www.linkedin.com/in/suman-chakraborty-8a1535254"
      },
      {
        name: "Kanaya Karmakar",
        image: "AEe6qhE96NSmlPeV1MT8QapR3IATgwFEj5PCn6VY4H70viqx",
        github: "https://github.com/kanayakarmakar",
        linkedin: "https://www.linkedin.com/in/kanaya-karmakar-5a5a202b7/"
      },
      {
        name: "Srija Ray",
        image: "AEe6qhE96NSmewvXGz60Cf6sGEjlKqy5Wk831dBmVi4ATNOY",
        github: "https://github.com/srijaray",
        linkedin: "https://www.linkedin.com/in/random/"
      },
      {
        name: "Arkadip Ray",
        image: "AEe6qhE96NSm8m64Bkg9hrWEHCQv4X1t6G38O5bqnKkxgdcR",
        github: "https://github.com/Arkadipttv",
        linkedin: "https://www.linkedin.com/in/arkadip-ray-41a1a427b/"
      },
      {
        name: "Rajdeep Paul",
        image: "AEe6qhE96NSmD3qCFzrMUzwZTLtKiJYHg98kW1bcPxONAnhp",
        github: "https://github.com/rajdeep13-coder",
        linkedin: "https://www.linkedin.com/in/rajdeep-paul-013z/"
      },
      {
        name: "Jyotirupa Saha",
        image: "AEe6qhE96NSmr8wX1Gj38uQH4RfJGSLoBFE61hZnVatTlbYr",
        github: "https://github.com/Jyotirupa2005",
        linkedin: "https://www.linkedin.com/in/jyotirupa-saha-3293222b8"
      },{
        name:"Swapit Biswas",
        image: "AEe6qhE96NSmy9F5Nf4QPZUqFW8tGjSVcClvrDsXTJBb7O46",
        github: "https://github.com/swapitbiswas",
        linkedin: "https://www.linkedin.com/in/swapit-biswas-46b3a629b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
        image: "AEe6qhE96NSmsxoNuEbZKGra1o2JfUSY849exmAZvM3sgCiI",
        linkedin: "https://www.linkedin.com/in/debmalooo"
      },
      {
        name: "Debojyoti De",
        image: "AEe6qhE96NSmdB1raRSwcGKgvxX5FqPRH0JLb84ZCM2Quyfl",
        github: "https://github.com/DebojyotiDe03",
        linkedin: "https://www.linkedin.com/in/debojyotide007/"
      },
      {
        name: "Ritam Dey",
        image: "AEe6qhE96NSmBLJ2X6dSpBvJEqjYZmQo6K31LOHIVfg8TCFM",
        linkedin: "https://www.linkedin.com/in/ritam-dey-9494a2326"
      },
      {
        name: "Debadrita Mondal",
        image: "AEe6qhE96NSmKgBUWyGlrt670mqwRaHXhOd3pjVAs8SZNIbJ",
        linkedin: "https://www.linkedin.com/in/debadrita-mondal-b373b6257"
      },
      {
        name: "Aritra Hui",
        image: "AEe6qhE96NSmytkj3T4QPZUqFW8tGjSVcClvrDsXTJBb7O46",
        linkedin: "https://www.linkedin.com/in/aritra-hui-37430a264/"
      }
    ]
  }
];