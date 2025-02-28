import React from 'react'
import { AvatarCircles } from "@/components/magicui/avatar-circles";

const avatars = [
  {
    imageUrl: "/evangelists/sohom-bhattacharjee.jpeg",
    profileUrl: "https://www.linkedin.com/in/soham-bhattacharjee-43315428b",
  },
  {
    imageUrl: "/evangelists/rahul-khandait.jpeg",
    profileUrl: "https://www.linkedin.com/in/rahulkhandait/",
  },
  {
    imageUrl: "/evangelists/saptorsi-ghose-dastidar.jpeg",
    profileUrl: "https://www.linkedin.com/in/saptorsi-ghose-dastidar-a3907829b",
  },
  {
    imageUrl: "/evangelists/anubhab-kundu.jpeg",
    profileUrl: "https://www.linkedin.com/in/anubhab-kundu-4a43122a3",
  },
  {
    imageUrl: "/evangelists/aritra-acharya.jpeg",
    profileUrl: "https://www.linkedin.com/in/aritra-acharya/",
  },

];

export function AvatarCirclesDemo() {
  return <AvatarCircles avatarUrls={avatars} />;
}

const evangelist = () => {
  return (
    
    <div className="flex flex-col gap-40 items-center py-14 sm:py-20 px-10  lg:px-20 text-white font-sans bg-gradient-to-tl from-[#272323] to-black relative">
      <h1 className="text-textyellow text-4xl sm:text-3xl lg:text-6xl font-mokoto text-nowrap">Evangelists</h1>
      <AvatarCirclesDemo />
    </div>
  )
}

export default evangelist