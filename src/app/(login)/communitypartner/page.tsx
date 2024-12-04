"use client"
import LoginForm from "../_components/loginform";

const page = () => {
  const words = [
    
    { text: "COMMUNITY" },
    { text: "PARTNER" },
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
        { name: "Phone number", type: "tel", placeholder: "Phone Number", required: true },
        { name: "Discord Username", type: "text", placeholder: "Discord username", required: true },
      ],
    },
    {
      fields: [
        { name: "Email", type: "text", placeholder: "Email", required: true },
      ],
    },
   
  ];
  const additionalInputGroups = [
    {
      fields: [
        { name: "Community Name", type: "text", placeholder: "Community Name", required: true },
        { name: "Community Strength", type: "text", placeholder: "Community Strength", required: true },
      ],
    },
    {
      fields: [
        { name: "LinkedIn Profile", type: "text", placeholder: "LinkedIn Profile", required: true },
        { name: "Instagram Profile", type: "text", placeholder: "Instagram Profile", required: true },
      ],
    },
    {
      fields: [
        { name: "Community Website url ", type: "url", placeholder: "Community Website url ", required: true,classname: "w-full" },
      ],
    },
    {
      fields: [
        { name: "What are your expectation from this partnership? ", type: "text", placeholder: "What are your expectation from this partnership? ", required: true,classname: " w-full" },
      ],
    },
   
  ];
  const firstheading="Person of contact information";
  const secondheading="Community information";

  const discordLink = "https://discord.com/invite/example?ref=abc123xyz";

  const handleSubmit = (data: Record<string, string>) => {
    console.log("Form Data:", data);
    //post the form data with API
  };

  return (
    <LoginForm
    words={words}
    inputGroups={inputGroups}
    additionalInputGroups={additionalInputGroups}
    discordLink={discordLink}
    onSubmit={handleSubmit}
    firstheading={firstheading}
    secondheading={secondheading}
  />
  );
};

export default page;


