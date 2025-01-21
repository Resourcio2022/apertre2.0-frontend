import SignupForm from "../_components/signupForm";

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
        { name: "TechStacks", type: "textarea", placeholder: "Tech Stacks", required: true, classname: "h-[101px] w-full" },
      ],
    },
    {
      fields: [
        { name: "Phone Number", type: "number", placeholder: "Phone Number", required: true },
        { name: "Discord Username", type: "text", placeholder: "Discord Username", required: true },
      ],
    },
  ];

  return (
    <SignupForm
      words={words}
      inputGroups={inputGroups}
    />
  );
};

export default page;
