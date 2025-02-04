export interface TeamMember {
  name: string
  image: string
  linkedin?: string
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
      { name: "Soumyajit Mondal ", image: "./crew/soumojit.JPG", linkedin: "___", github: "__" },
      { name: "Sayan Mukherjee", image: "./crew/sayan.jpg", linkedin: "___", github: "____" },
      { name: "Nabajit Bhadury", image: "./crew/nabajit.jpg", linkedin: "https://www.instagram.com/dh__eu/", github: "https://github.com/NabajitBhadury" },
      { name: "Abhraneel Karmakar", image: "./crew/abraneel.jpg", linkedin: "___", github: "___" },
      { name: "Debarshee Chakraborty", image: "./crew/debashree.jpg", linkedin: "__", github: "https://github.com/debarshee2004" }
    ],
  },
  {
    id: "techies",
    title: "THE TECHIES",
    subtitle: "Ensuring success is available at your fingertips!",
    accentColor: "from-purple-400/80 to-purple-600/80",
    members: [
      { name: "Anjishnu Ganguly", image: "./crew/anjishnu.jpeg", linkedin: "https://www.instagram.com/___", github: "https://github.com/__" },
      { name: "Souvik Sural", image: "./crew/souvik.png", linkedin: "https://www.instagram.com/souvik__38", github: "https://github.com/Souvik34" },
      { name: "Suman Jain", image: "./crew/suman.jpeg", linkedin: "https://www.instagram.com/suman_n_jain/", github: "https://github.com/SumanJain2005" },
      { name: "Rounak Sen", image: "./crew/rounak.jpg", linkedin: "https://www.instagram.com/rony000013/", github: "https://github.com/rony0000013" },
      { name: "Anushka Bhowmick", image: "./crew/anuska.jpg", linkedin: "___", github: "https://github.com/Anushka-Bhowmick" },
      { name: "Ankan Misra", image: "./crew/Ankan.png", linkedin: "https://www.instagram.com/_norizzer_april/", github: "https://github.com/AnkanMisra" },
      { name: "Rohan Mitra", image: "./crew/rohan.jpg", linkedin: "https://www.instagram.com/_rohan._.mitra_?igsh=eDA5ZmpvMndwZTM2", github: "https://github.com/Rohan-450" },
      { name: "Krishnendu Dey", image: "./crew/krishnendu.jpg", linkedin: "https://www.instagram.com/safira_bo", github: "https://github.com/krishTheCoderBoy" },
      { name: "Ashish Gupta", image: "./crew/ashish.jpeg", linkedin: "https://www.instagram.com/just_ashish__/", github: "https://github.com/ASHISH26940" },
      { name: "Indrani Som", image: "./crew/indrani.jpg", linkedin: "https://www.instagram.com/404_coder_not_found?igsh=OGQ5ZDc2ODk2ZA==", github: "https://github.com/IndraniSom" },
      { name: "Debaditya Som", image: "./crew/debaditya.jpg", linkedin: "https://www.instagram.com/the_spectre_knight", github: "https://github.com/debaditya-som" }
    ]
  },
  {
    id: "designers",
    title: "THE DESIGNERS",
    subtitle: "Crafting the visuals that captivate and inspire.",
    accentColor: "from-green-400/80 to-green-600/80",
    members: [
      { name: "Aditya Ghosh", image: "./crew/aditya.jpg", linkedin: "https://www.instagram.com/.aditya_ghosh.", github: "https://github.com/aditya-ghosh2992" },
      { name: "Sukrit Deb", image: "./crew/sukrit.jpg", linkedin: "https://www.instagram.com/krit_xd007?igsh=eGVpMDYxNWFiMms1", github: "https://github.com/SukritDeb" },
      { name: "Sangneel Deb", image: "./crew/sangneel.png", linkedin: "https://www.instagram.com/lord_cyclone100/", github: "https://github.com/lord-cyclone100" },
      { name: "Monojit Pal", image: "./crew/monojit.jpg", linkedin: "https://www.instagram.com/blah58652020/", github: "https://github.com/Monojit09" },
      { name: "Ashmit Barik", image: "./crew/snake.jpg", linkedin: "https://www.instagram.com/_axhmit_/profilecard/?igsh=MW9vdXhidm5iYXZiNw==", github: "https://github.com/Dev-ashxy" },
      { name: "Dhritiman Bhattacharjee", image: "./crew/dhritiman.jpg", linkedin: "https://www.instagram.com/bat_signon/profilecard/?igsh=MTZxNXMxY2lndDQ4dg==", github: "https://github.com/Dhriti007" },
    ]
  },
  {
    id: "content",
    title: "THE CONTENT CREATORS",
    subtitle: "The voices behind every message that resonates.",
    accentColor: "from-yellow-400/80 to-yellow-600/80",
    members: [
      { name: "Saptak Biswas", image: "./crew/saptak.jpeg", linkedin: "https://www.instagram.com/itz_not_what_u_think", github: "saptak2005" },
      { name: "Rittika Chakraborty", image: "./crew/ritika.jpg", linkedin: "https://www.instagram.com/rittika_2222", github: "https://github.com/Rittika1465" },
      { name: "Rajashree Ray", image: "./crew/snake.jpg", linkedin: "https://www.instagram.com/_rajashree_ray?igsh=MWZ0ZG53dmJoc3V4bQ==", github: "https://github.com/Rajashree185" },
      { name: "Dhwani Chauhan", image: "./crew/dhwani.jpg", linkedin: "https://www.instagram.com/dhwani._.chauhan?igsh=YnVkb2d4NXBudmVk", github: "https://github.com/Dhwani107" },
      { name: "Debargha Chakraborty", image: "./crew/debargha.jpg", linkedin: "https://www.instagram.com/iamdebargha_18/", github: "https://github.com/Deb4dev" }
    ]
  },
  {
    id: "socialities",
    title: "THE SOCIALITIES",
    subtitle: "Driving conversations and building communities.",
    accentColor: "from-pink-400/80 to-pink-600/80",
    members: [
      { name: "Rajdeep Saha", image: "./crew/rajdeep.jpg", linkedin: "https://www.instagram.com/rapidrager?igsh=NjB0cnIwMjk4bzA2", github: "https://github.com/C0D3K0NG" },
      { name: "Soham Mukherjee", image: "./crew/soham.jpeg", linkedin: "https://www.instagram.com/__sohxmm_", github: "https://github.com/sohamMKRG" }
    ]
  },
  {
    id: "marketters",
    title: "THE MARKETTERS",
    subtitle: "Taking the event to every corner of the world.",
    accentColor: "from-red-400/80 to-red-600/80",
    members: [
      { name: "Ayan Sarkar", image: "./crew/snake.jpg", linkedin: "___", github: "__" },
      { name: "Arkadip Ray", image: "./crew/arkadip.jpg", linkedin: "https://www.instagram.com/shutterharmonics/", github: "___" },
      { name: "Diptanil Sen", image: "./crew/gaytonil.jpg", linkedin: "https://www.instagram.com/s.diptanil?igsh=OHI3dWY5NWE3NjQw", github: "___" },
      { name: "Shubhojyoti Das", image: "./crew/subhojit.png", linkedin: "https://www.instagram.com/dasshubhojyoti", github: "https://github.com/ghost-2362003" },
      { name: "Mudit Khater", image: "./crew/mudit.jpg", linkedin: "https://www.instagram.com/muditkhater108?igsh=MWNyMGluMG0xbWh0", github: "https://github.com/mudit108-code" },
      { name: "Rohit Chakraborty", image: " ./crew/rohit.jpg", linkedin: "https://www.instagram.com/_.rohit.2002?igsh=ajFnZDdkcWg1Mjh4", github: "https://github.com/rohit32999" },
      { name: "Svetlana Mukherjee", image: "./crew/svetlana.jpeg", linkedin: "https://www.instagram.com/svetttss/", github: "https://github.com/svetlanamukherjee" },
      { name: "Argha Kundu", image: "./crew/argha.png", linkedin: "_argha____", github: "https://github.com/Meexargha" },
      { name: "Ishita Majumdar", image: "./crew/ishita.jpg", linkedin: "https://www.instagram.com/.ishitatata._", github: "https://github.com/Ishita0807" },
      { name: "Kunal Das", image: "./crew/kunal.png", linkedin: "http://www.instagra.com/weirdkun_/profilecard/?igsh=MTN2dDRlc2M3Y2tldg==", github: "https://github.com/ZerefKunal" },
      { name: "Jyotirupa Saha", image: "./crew/snake.jpg", linkedin: "https://www.instagram.com/rupss.saha?igsh=dXo0YWV0Mjl3cm9yZA==", github: "https://github.com/Jyotirupa20" }
    ]
  }
];
