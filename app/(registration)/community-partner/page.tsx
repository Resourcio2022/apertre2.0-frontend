import SignupForm, { InputField } from "../_components/signupForm";

const page = () => {
  const words = [
    { text: "COMMUNITY" },
    { text: "PARTNER" },
  ];

  const inputGroups = [
    {
      fields: [
        { name: "firstName", type: "text", placeholder: "First name", required: true },
        { name: "lastName", type: "text", placeholder: "Last name", required: true },
      ] as InputField[],
    },
    {
      fields: [
        { name: "phoneNumber", type: "tel", placeholder: "Phone number", required: true },
        { name: "discordUsername", type: "text", placeholder: "Discord username", required: true },
      ] as InputField[],
    },
    {
      fields: [
        { name: "address", type: "text", placeholder: "Address", required: true, classname: "w-full" },
      ] as InputField[]
    }
  ]

  const additionalInputGroups = [
    {
      fields: [
        { name: "communityName", type: "text", placeholder: "Community name", required: true },
        { name: "communityStrength", type: "text", placeholder: "Community strength", required: true },
      ] as InputField[],
    },
    {
      fields: [
        { name: "linkedinUrl", type: "url", placeholder: "LinkedIn profile", required: true, classname: "w-full" },
      ] as InputField[],
    },
    {
      fields: [
        { name: "instagramUsername", type: "text", placeholder: "Instagram profile", required: true },
        { name: "twitterUsername", type: "text", placeholder: "Twitter profile", required: false }
      ] as InputField[],
    },
    {
      fields: [
        { name: "communityUrl", type: "url", placeholder: "Community website url", required: true, classname: "w-full" },
      ] as InputField[],
    },
    {
      fields: [
        { name: "expectation", type: "text", placeholder: "What are your expectation from this partnership? ", required: false, classname: "w-full" },
      ] as InputField[],
    },
  ];

  return (
    <SignupForm
      words={words}
      inputGroups={inputGroups}
      additionalInputGroups={additionalInputGroups}
      firstheading="Person of contact information"
      secondheading="Community information"
    />
  );
};

export default page;
