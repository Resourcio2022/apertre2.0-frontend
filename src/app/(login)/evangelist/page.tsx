
"use client"

import LoginForm from "../_components/loginform";
import { SubmitHandler } from "react-hook-form";

const Page = () => {
  const words = [
    { text: "EVANGELIST" },
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
        { name: "referralCode", type: "text", placeholder: "Referral Code", required: true },
      ],
    },
    {
      fields: [
        { name: "address", type: "textarea", placeholder: "Address", required: true, classname: "h-[101px] w-full" },
      ],
    },
    {
      fields: [
        { name: "phoneNumber", type: "tel", placeholder: "Phone Number", required: true },
        { name: "discordUsername", type: "text", placeholder: "Discord Username", required: true },
      ],
    },
  ];

  const discordLink = "https://discord.com/invite/example?ref=abc123xyz";

  const handleSubmit: SubmitHandler<Record<string, string>> = (data) => {
    console.log("Form Data:", data);
    // Here you would typically send the data to your API
  };

  return (
    <LoginForm
      words={words}
      inputGroups={inputGroups}
      discordLink={discordLink}
      onSubmit={handleSubmit}
      firstheading="Personal Information"
      secondheading="Contact Information"
    />
  );
};

export default Page;

