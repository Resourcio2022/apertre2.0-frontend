import LoginForm from "../_components/loginform";

const Page = () => {
  const words = [{ text: "EVANGELIST" }];

  const inputGroups = [
    {
      fields: [
        { name: "firstName", type: "text", placeholder: "First Name", required: true },
        { name: "lastName", type: "text", placeholder: "Last Name", required: true },
      ],
    },
    {
      fields: [
        { name: "linkedinProfile", type: "url", placeholder: "LinkedIn Profile", required: true },
      ],
    },
    {
      fields: [
        { name: "collegeName", type: "text", placeholder: "College Name", required: true },
        { name: "address", type: "text", placeholder: "Address", required: true }
      ],
    },
    {
      fields: [
        { name: "instagramUsername", type: "text", placeholder: "Instagram Username", required: true },
        { name: "twitterUsername", type: "text", placeholder: "Twitter Username", required: false },
      ],
    },
    {
      fields: [
        { name: "phoneNumber", type: "tel", placeholder: "Phone Number", required: true },
        { name: "discordUsername", type: "text", placeholder: "Discord Username", required: true },
      ],
    },

  ];

  return (
    <LoginForm
      words={words}
      inputGroups={inputGroups}
      firstheading="Personal Information"
      secondheading="Contact Information"
    />
  );
};

export default Page;
