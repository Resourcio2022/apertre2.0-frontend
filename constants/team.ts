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
        { name: "Soumyajit Mondal ", image: "./Blue Blazer Pic Copy - Soumyajit Mondal.jpg", instagram: "#", github: "#" },
        { name: "Sayan Mukherjee", image: "./DSC_0424 (1) - Sayan Mukherjee.jpg", instagram: "#", github: "#" },
        { "name": "Nabajit Bhadury", "image": "./FB_IMG_1706373569386 - Nabajit Bhadury.jpg", "instagram": "https://www.instagram.com/dh__eu/", "github": "https://github.com/NabajitBhadury" },
        { name: "Abhraneel Karmakar", image: "./_DSC0328 - Abhraneel Karmakar.jpg", instagram: "#", github: "#" },
        { "name": "Debarshee Chakraborty", "image": "./GDGlead.jpg", "instagram": "", "github": "https://github.com/debarshee2004" }
      ],
    },
    {
      "id": "techies",
      "title": "THE TECHIES",
      "subtitle": "Ensuring success is available at your fingertips!",
      "accentColor": "from-purple-400/80 to-purple-600/80",
      "members": [
        { "name": "Anjishnu Ganguly", "image": "", "instagram": "", "github": "" },
        { "name": "Souvik Sural", "image": "./Souvik.png", "instagram": "https://www.instagram.com/souvik__38", "github": "https://github.com/Souvik34" },
        { "name": "Suman Jain", "image": "./WhatsApp Image 2025-01-30 at 17.10.15.jpeg", "instagram": "https://www.instagram.com/suman_n_jain/", "github": "https://github.com/SumanJain2005" },
        { "name": "Rounak Sen", "image": "./Rounak Sen_gate - Rounak Sen.jpg", "instagram": "https://www.instagram.com/rony000013/", "github": "https://github.com/rony0000013" },
        { "name": "Anushka Bhowmick", "image": "./DSC_7147 - Anushka Bhowmick.jpg", "instagram": "", "github": "https://github.com/Anushka-Bhowmick" },
        { "name": "Ankan Misra", "image": "./Arka Uniform Small - Ankan Misra.png", "instagram": "https://www.instagram.com/_norizzer_april/", "github": "https://github.com/AnkanMisra" },
        { "name": "Rohan Mitra", "image": "./IMG_20240607_094016 - Rohan Mitra.jpg", "instagram": "https://www.instagram.com/_rohan._.mitra_?igsh=eDA5ZmpvMndwZTM2", "github": "https://github.com/Rohan-450" },
        { "name": "Krishnendu Dey", "image": "./IMG_20240831_184501_243 - Krishnendu Dey.jpg", "instagram": "https://www.instagram.com/safira_bo", "github": "https://github.com/krishTheCoderBoy" },
        { "name": "Ashish Gupta", "image": "./profPhoto - Ashish Gupta.jpeg", "instagram": "https://www.instagram.com/just_ashish__/", "github": "https://github.com/ASHISH26940" },
        { "name": "Indrani Som", "image": "./IMG-20231209-WA0002 - Indrani Som.jpg", "instagram": "https://www.instagram.com/404_coder_not_found?igsh=OGQ5ZDc2ODk2ZA==", "github": "https://github.com/IndraniSom" },
        { "name": "Debaditya Som", "image": "./1696820844265 - Debaditya Som.jpg", "instagram": "https://www.instagram.com/the_spectre_knight", "github": "https://github.com/debaditya-som" }
      ]
    },
    {
      "id": "designers",
      "title": "THE DESIGNERS",
      "subtitle": "Crafting the visuals that captivate and inspire.",
      "accentColor": "from-green-400/80 to-green-600/80",
      "members": [
        { "name": "Aditya Ghosh", "image": "./adityaghosh - ADITYA GHOSH.jpg", "instagram": "https://www.instagram.com/.aditya_ghosh.", "github": "https://github.com/aditya-ghosh2992" },
        { "name": "Sukrit Deb", "image": "./Picsart_24-09-12_21-45-28-322 - 130_Sukrit Deb.jpg", "instagram": "https://www.instagram.com/krit_xd007?igsh=eGVpMDYxNWFiMms1", "github": "https://github.com/SukritDeb" },
        { "name": "Sangneel Deb", "image": "./ph - Sangneel Deb.png", "instagram": "https://www.instagram.com/lord_cyclone100/", "github": "https://github.com/lord-cyclone100" },
        { "name": "Monojit Pal", "image": "./IMG-20240830-WA0000 - Monojit.jpg", "instagram": "https://www.instagram.com/blah58652020/", "github": "https://github.com/Monojit09" },
        { "name": "Ashmit Barik", "image": "", "instagram": "https://www.instagram.com/_axhmit_/profilecard/?igsh=MW9vdXhidm5iYXZiNw==", "github": "https://github.com/Dev-ashxy" },
        { "name": "Dhritiman Bhattacharjee", "image": "./20241027_133413 - 176_Dhritiman Bhattacharjee.jpg", "instagram": "https://www.instagram.com/bat_signon/profilecard/?igsh=MTZxNXMxY2lndDQ4dg==", "github": "https://github.com/Dhriti007" },
       
      ]
    },
    {
      "id": "content",
      "title": "THE CONTENT CREATORS",
      "subtitle": "The voices behind every message that resonates.",
      "accentColor": "from-yellow-400/80 to-yellow-600/80",
      "members": [
        { "name": "Saptak Biswas", "image": "", "instagram": "https://www.instagram.com/itz_not_what_u_think", "github": "saptak2005" },
        { "name": "Rittika Chakraborty", "image": "./1727100618675 - Rittika Chakraborty.jpg", "instagram": "https://www.instagram.com/rittika_2222", "github": "https://github.com/Rittika1465" },
        { "name": "Rajashree Ray", "image": "./IMG-20241002-WA0072 - Rajashree Ray.jpg", "instagram": "https://www.instagram.com/_rajashree_ray?igsh=MWZ0ZG53dmJoc3V4bQ==", "github": "https://github.com/Rajashree185" },
        { "name": "Dhwani Chauhan", "image": "./Picsart_24-09-26_18-34-16-379 - Dhwani Chauhan.jpg", "instagram": "https://www.instagram.com/dhwani._.chauhan?igsh=YnVkb2d4NXBudmVk", "github": "https://github.com/Dhwani107" },
        { "name": "Debargha Chakraborty", "image": "./IMG_9514 - Debargha Chakraborty.jpg", "instagram": "https://www.instagram.com/iamdebargha_18/", "github": "https://github.com/Deb4dev" }
      ]
    },
    {
      "id": "socialities",
      "title": "THE SOCIALITIES",
      "subtitle": "Driving conversations and building communities.",
      "accentColor": "from-pink-400/80 to-pink-600/80",
      "members": [
        { "name": "Rajdeep Saha", "image": "./IMG_20231028_125048_752 - Rajdeep Saha.jpg", "instagram": "https://www.instagram.com/rapidrager?igsh=NjB0cnIwMjk4bzA2", "github": "https://github.com/C0D3K0NG" },
        { "name": "Soham Mukherjee", "image": "./IMG_20240925_234419_710 - Soham Mukherjee.jpg", "instagram": "https://www.instagram.com/__sohxmm_", "github": "https://github.com/sohamMKRG" }
      ]
    },
    {
      "id": "marketters",
      "title": "THE MARKETTERS",
      "subtitle": "Taking the event to every corner of the world.",
      "accentColor": "from-red-400/80 to-red-600/80",
      "members": [
        {"name": "Ayan Sarkar", "image": "", "instagram": "", "github": "" },
        { "name": "Arkadip Ray", "image": "./20240830_192830 - Arkadip Ray.jpg", "instagram": "https://www.instagram.com/shutterharmonics/", "github": "" },
        { "name": "Diptanil Sen", "image": "./IMG-20240927-WA0020 - 22_DIPTANIL SEN.jpg", "instagram": "https://www.instagram.com/s.diptanil?igsh=OHI3dWY5NWE3NjQw", "github": "" },
        { "name": "Shubhojyoti Das", "image": "./Screenshot 2025-01-30 at 6.49.06 PM.png", "instagram": "https://www.instagram.com/dasshubhojyoti", "github": "https://github.com/ghost-2362003" },
        { "name": "Mudit Khater", "image": "./Mudit Khater - MUDIT KHATER.jpg", "instagram": "https://www.instagram.com/muditkhater108?igsh=MWNyMGluMG0xbWh0", "github": "https://github.com/mudit108-code" },
        { "name": "Rohit Chakraborty", "image": "./IMG_20240930_154458_986 - Rohit Chakrabarti.jpg", "instagram": "https://www.instagram.com/_.rohit.2002?igsh=ajFnZDdkcWg1Mjh4", "github": "https://github.com/rohit32999" },
        { "name": "Svetlana Mukherjee", "image": "./2CD88F6D-3DC4-45C9-8945-500875AB540B - Svetlana Mukherjee.jpeg", "instagram": "https://www.instagram.com/svetttss/", "github": "https://github.com/svetlanamukherjee" },
        { "name": "Argha Kundu", "image": "./Screenshot 2024-10-01 230200 - Argha Kundu.png", "instagram": "_argha____", "github": "https://github.com/Meexargha" },
        { "name": "Ishita Majumdar", "image": "./WhatsApp Image 2024-10-02 at 13.09.09_f0f275c3 - 22_Ishita Majumdar_CSBS 2.jpg", "instagram": "https://www.instagram.com/.ishitatata._", "github": "https://github.com/Ishita0807" },
        
        { "name": "Kunal Das", "image": "./Screenshot 2025-01-30 at 6.48.06 PM.png", "instagram": "http://www.instagra.com/weirdkun_/profilecard/?igsh=MTN2dDRlc2M3Y2tldg==", "github": "https://github.com/ZerefKunal" },
        { "name": "Jyotirupa Saha", "image": "", "instagram": "https://www.instagram.com/rupss.saha?igsh=dXo0YWV0Mjl3cm9yZA==", "github": "https://github.com/Jyotirupa20" }
      ]
    }
  ];