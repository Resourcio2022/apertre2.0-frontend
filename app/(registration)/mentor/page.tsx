import SignupForm, { InputField } from "../_components/signupForm";
import { Combobox } from "./_components/combo-box";

const page = () => {
  const words = [{ text: "MENTOR" }];

  const inputGroups = [
    {
      fields: [
        { name: "firstName", type: "text", placeholder: "First Name*", required: true },
        { name: "lastName", type: "text", placeholder: "Last Name*", required: true },
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
        { name: "linkedinUrl", type: "text", placeholder: "LinkedIn profile URL*", required: true },
      ] as InputField[],
    },
    {
      fields: [
        { name: "twitterUsername", type: "text", placeholder: "Twitter username", required: false },
      ] as InputField[],
    },
  ];

  const additionalInputGroups = [
    {
      fields: [
        { name: "techstack", type: "combobox", placeholder: "Tech stacks*", required: true, component: Combobox },
      ] as InputField[],
    },
  ];

  return (
    <SignupForm
      words={words}
      inputGroups={inputGroups}
      additionalInputGroups={additionalInputGroups}
    />
  );
};

export default page;
