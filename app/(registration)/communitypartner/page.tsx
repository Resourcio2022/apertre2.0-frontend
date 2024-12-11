import SignupForm from "../_components/signupForm";

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
        { name: "phoneNumber", type: "tel", placeholder: "Phone Number", required: true },
        { name: "discordUsername", type: "text", placeholder: "Discord username", required: true },
        { name: "address", type: "text", placeholder: "Address", required: true },

      ],
    },


    {
      fields: [
        { name: "communityName", type: "text", placeholder: "Community Name", required: true },
        { name: "communityStrength", type: "text", placeholder: "Community Strength", required: true },
      ],
    },
    {
      fields: [
        { name: "linkedinUrl", type: "text", placeholder: "LinkedIn Profile", required: true },
        { name: "instagramUsername", type: "text", placeholder: "Instagram Profile", required: true },
        { name: "twitterUsername", type: "text", placeholder: "Twitter Profile", required: true },

      ],
    },
    {
      fields: [
        { name: "communityUrl", type: "url", placeholder: "Community Website url ", required: true, classname: "w-full" },
      ],
    },
    {
      fields: [
        { name: "What are your expectation from this partnership? ", type: "text", placeholder: "What are your expectation from this partnership? ", required: true, classname: " w-full" },
      ],
    },

  ]
  const firstheading = "Person of contact information";
  const secondheading = "Community information";

  return (
    <SignupForm
      words={words}
      inputGroups={inputGroups}
      firstheading={firstheading}
      secondheading={secondheading}
    />
  );
};

export default page;


