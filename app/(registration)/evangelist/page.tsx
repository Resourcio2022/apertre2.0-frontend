import SignupForm, { InputField } from "../_components/signupForm";

const Page = () => {
  const words = [{ text: "EVANGELIST" }];

  const inputGroups = [
    {
      fields: [
        { name: "firstName", type: "text", placeholder: "First name*", required: true },
        { name: "lastName", type: "text", placeholder: "Last name*", required: true },
      ] as InputField[],
    },
    {
      fields: [
        { name: "phoneNumber", type: "tel", placeholder: "Phone number*", required: true },
        { name: "discordUsername", type: "text", placeholder: "Discord username*", required: true },
      ] as InputField[],
    },
    {
      fields: [
        { name: "address", type: "text", placeholder: "Address*", required: true },
      ] as InputField[]
    },
    {
      fields: [
        { name: "linkedinUrl", type: "url", placeholder: "LinkedIn profile URL*", required: true },
      ] as InputField[]
    },
    {
      fields: [
        { name: "collegeName", type: "text", placeholder: "College name*", required: true },
      ] as InputField[]
    },
    {
      fields: [
        { name: "instagramUsername", type: "text", placeholder: "Instagram username*", required: true },
        { name: "twitterUsername", type: "text", placeholder: "Twitter username", required: false },
      ] as InputField[]
    },
  ];

  return (
    <SignupForm
      words={words}
      inputGroups={inputGroups}
    />
  );
};

export default Page;
