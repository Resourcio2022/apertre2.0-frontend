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
      "id": "techies",
      "title": "THE TECHIES",
      "subtitle": "Ensuring success is available at your fingertips!",
      "accentColor": "from-purple-400/80 to-purple-600/80",
      "members": [
        { "name": "Souvik Sural", "image": "./snake.jpg", "instagram": "https://www.instagram.com/souvik__38", "github": "https://github.com/Souvik34" },
        { "name": "Debarshee Chakraborty", "image": "./snake.jpg", "instagram": "", "github": "https://github.com/debarshee2004" },
        { "name": "Rounak Sen", "image": "./snake.jpg", "instagram": "https://www.instagram.com/rony000013/", "github": "https://github.com/rony0000013" },
        { "name": "Anushka Bhowmick", "image": "./snake.jpg", "instagram": "", "github": "https://github.com/Anushka-Bhowmick" },
        { "name": "Ankan Misra", "image": "./snake.jpg", "instagram": "https://www.instagram.com/_norizzer_april/", "github": "https://github.com/AnkanMisra" },
        { "name": "Suman Jain", "image": "./snake.jpg", "instagram": "https://www.instagram.com/suman_n_jain/", "github": "https://github.com/SumanJain2005" },
        { "name": "Rohan Mitra", "image": "./snake.jpg", "instagram": "https://www.instagram.com/_rohan._.mitra_?igsh=eDA5ZmpvMndwZTM2", "github": "https://github.com/Rohan-450" },
        { "name": "Krishnendu Dey", "image": "./snake.jpg", "instagram": "https://www.instagram.com/safira_bo", "github": "https://github.com/krishTheCoderBoy" },
        { "name": "Ashish Gupta", "image": "./snake.jpg", "instagram": "https://www.instagram.com/just_ashish__/", "github": "https://github.com/ASHISH26940" },
        { "name": "Indrani Som", "image": "./snake.jpg", "instagram": "https://www.instagram.com/404_coder_not_found?igsh=OGQ5ZDc2ODk2ZA==", "github": "https://github.com/IndraniSom" },
        { "name": "Debaditya Som", "image": "./snake.jpg", "instagram": "https://www.instagram.com/the_spectre_knight", "github": "https://github.com/debaditya-som" }
      ]
    },
    {
      "id": "designers",
      "title": "THE DESIGNERS",
      "subtitle": "Crafting the visuals that captivate and inspire.",
      "accentColor": "from-green-400/80 to-green-600/80",
      "members": [
        { "name": "Sukrit Deb", "image": "./snake.jpg", "instagram": "https://www.instagram.com/krit_xd007?igsh=eGVpMDYxNWFiMms1", "github": "https://github.com/SukritDeb" },
        { "name": "Sangneel Deb", "image": "./snake.jpg", "instagram": "https://www.instagram.com/lord_cyclone100/", "github": "https://github.com/lord-cyclone100" },
        { "name": "Rounak Banerjee", "image": "./snake.jpg", "instagram": "https://www.instagram.com/_roun.aaaaak_?igsh=NTR5bGh0enoxNWU0", "github": "https://github.com/RounaknBanerjee" },
        { "name": "Monojit Pal", "image": "./snake.jpg", "instagram": "https://www.instagram.com/blah58652020/", "github": "https://github.com/Monojit09" },
        { "name": "Aindrila Koner", "image": "./snake.jpg", "instagram": "https://www.instagram.com/_the_floating_petal_/", "github": "https://github.com/aindrila2004" },
        { "name": "Ashmit Barik", "image": "./snake.jpg", "instagram": "https://www.instagram.com/_axhmit_/profilecard/?igsh=MW9vdXhidm5iYXZiNw==", "github": "https://github.com/Dev-ashxy" },
        { "name": "Dhritiman Bhattacharjee", "image": "./snake.jpg", "instagram": "https://www.instagram.com/bat_signon/profilecard/?igsh=MTZxNXMxY2lndDQ4dg==", "github": "https://github.com/Dhriti007" },
        { "name": "Aditya Ghosh", "image": "./snake.jpg", "instagram": "https://www.instagram.com/.aditya_ghosh.", "github": "https://github.com/aditya-ghosh2992" }
      ]
    },
    {
      "id": "content",
      "title": "THE CONTENT CREATORS",
      "subtitle": "The voices behind every message that resonates.",
      "accentColor": "from-yellow-400/80 to-yellow-600/80",
      "members": [
        { "name": "Saptak Biswas", "image": "./snake.jpg", "instagram": "https://www.instagram.com/itz_not_what_u_think", "github": "saptak2005" },
        { "name": "Rittika Chakraborty", "image": "./snake.jpg", "instagram": "https://www.instagram.com/rittika_2222", "github": "https://github.com/Rittika1465" },
        { "name": "Rajashree Ray", "image": "./snake.jpg", "instagram": "https://www.instagram.com/_rajashree_ray?igsh=MWZ0ZG53dmJoc3V4bQ==", "github": "https://github.com/Rajashree185" },
        { "name": "Dhwani Chauhan", "image": "./snake.jpg", "instagram": "https://www.instagram.com/dhwani._.chauhan?igsh=YnVkb2d4NXBudmVk", "github": "https://github.com/Dhwani107" },
        { "name": "Debargha Chakraborty", "image": "./snake.jpg", "instagram": "https://www.instagram.com/iamdebargha_18/", "github": "https://github.com/Deb4dev" }
      ]
    },
    {
      "id": "socialities",
      "title": "THE SOCIALITIES",
      "subtitle": "Driving conversations and building communities.",
      "accentColor": "from-pink-400/80 to-pink-600/80",
      "members": [
        { "name": "Rajdeep Saha", "image": "./snake.jpg", "instagram": "https://www.instagram.com/rapidrager?igsh=NjB0cnIwMjk4bzA2", "github": "https://github.com/C0D3K0NG" },
        { "name": "Soham Mukherjee", "image": "./snake.jpg", "instagram": "https://www.instagram.com/__sohxmm_", "github": "https://github.com/sohamMKRG" }
      ]
    },
    {
      "id": "marketters",
      "title": "THE MARKETTERS",
      "subtitle": "Taking the event to every corner of the world.",
      "accentColor": "from-red-400/80 to-red-600/80",
      "members": [
        { "name": "Arkadip Ray", "image": "./snake.jpg", "instagram": "https://www.instagram.com/shutterharmonics/", "github": "" },
        { "name": "Diptanil Sen", "image": "./snake.jpg", "instagram": "https://www.instagram.com/s.diptanil?igsh=OHI3dWY5NWE3NjQw", "github": "" },
        { "name": "Shubhojyoti Das", "image": "./snake.jpg", "instagram": "https://www.instagram.com/dasshubhojyoti", "github": "https://github.com/ghost-2362003" },
        { "name": "Mudit Khater", "image": "./snake.jpg", "instagram": "https://www.instagram.com/muditkhater108?igsh=MWNyMGluMG0xbWh0", "github": "https://github.com/mudit108-code" },
        { "name": "Rohit Chakraborty", "image": "./snake.jpg", "instagram": "https://www.instagram.com/_.rohit.2002?igsh=ajFnZDdkcWg1Mjh4", "github": "https://github.com/rohit32999" },
        { "name": "Svetlana Mukherjee", "image": "./snake.jpg", "instagram": "https://www.instagram.com/svetttss/", "github": "https://github.com/svetlanamukherjee" },
        { "name": "Argha Kundu", "image": "./snake.jpg", "instagram": "_argha____", "github": "https://github.com/Meexargha" },
        { "name": "Ishita Majumdar", "image": "./snake.jpg", "instagram": "https://www.instagram.com/.ishitatata._", "github": "https://github.com/Ishita0807" },
        { "name": "Nabajit Bhadury", "image": "./snake.jpg", "instagram": "https://www.instagram.com/dh__eu/", "github": "https://github.com/NabajitBhadury" },
        { "name": "Kunal Das", "image": "./snake.jpg", "instagram": "http://www.instagra.com/weirdkun_/profilecard/?igsh=MTN2dDRlc2M3Y2tldg==", "github": "https://github.com/ZerefKunal" },
        { "name": "Jyotirupa Saha", "image": "./snake.jpg", "instagram": "https://www.instagram.com/rupss.saha?igsh=dXo0YWV0Mjl3cm9yZA==", "github": "https://github.com/Jyotirupa20" }
      ]
    }
  ];