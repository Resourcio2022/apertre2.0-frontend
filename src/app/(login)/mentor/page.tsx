"use client"
import { className } from "@babylonjs/core";
import LoginForm from "../_components/loginform";

const page = () => {
  const words = [
    
    { text: "MENTOR" },
  ];

  const inputGroups = [
    {
      fields: [
        { name: "firstName", type: "text", placeholder: "First Name", required: true },
        { name: "lastName", type: "text", placeholder: "Last Name", required: true },
      ],
    },
    {
      fields: [
        { name: "linkedinProfile", type: "text", placeholder: "LinkedIn Profile", required: true },
        { name: "xProfile", type: "text", placeholder: "X Profile", required: true },
      ],
    },
    {
      fields: [
        { name: "TechStacks", type: "textarea", placeholder: "Tech Stacks", required: true ,classname: "h-[101px] w-full"},
      ],
    },
    {
      fields: [
        { name: "Phone Number", type: "number", placeholder: "Phone Number", required: true },
        { name: "Discord Username", type: "text", placeholder: "Discord Username", required: true },
      ],
    },
  ];

  const discordLink = "https://discord.com/invite/example?ref=abc123xyz";

  const handleSubmit = (data: Record<string, string>) => {
    console.log("Form Data:", data);
  };

  return (
    <LoginForm
      words={words}
      inputGroups={inputGroups}
      discordLink={discordLink}
      onSubmit={handleSubmit}
    />
  );
};

export default page;
