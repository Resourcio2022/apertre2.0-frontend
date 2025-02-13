import { ProjectDomain } from "./_components/projectdomain-combo-box";
import RegistrationForm from "./_components/ProjectSubmissionForm";
import SignupForm, { InputField } from "./_components/signupForm";
import { TechStacks } from "./_components/techstack-combo-box";

const inputGroups = [
  {
    fields: [
      {
        name: "firstName",
        type: "text",
        placeholder: "First Name*",
        required: true,
      },
      {
        name: "lastName",
        type: "text",
        placeholder: "Last Name*",
        required: true,
      },
    ] as InputField[],
  },
  {
    fields: [
      {
        name: "phoneNumber",
        type: "tel",
        placeholder: "Phone number*",
        required: true,
      },
      {
        name: "discordUsername",
        type: "text",
        placeholder: "Discord username*",
        required: true,
      },
    ] as InputField[],
  },
  {
    fields: [
      {
        name: "address",
        type: "text",
        placeholder: "Address*",
        required: true,
      },
    ] as InputField[],
  },
  {
    fields: [
      {
        name: "linkedinUrl",
        type: "url",
        placeholder: "LinkedIn profile URL*",
        required: true,
      },
    ] as InputField[],
  },
  {
    fields: [
      {
        name: "twitterUsername",
        type: "text",
        placeholder: "Twitter username",
        required: false,
      },
    ] as InputField[],
  },
];

const page = () => {
  const words = [{ text: "PROJECT" }, { text: "ADMIN" }];

  const additionalInputGroups = [
    {
      fields: [
        {
          name: "repoName",
          type: "text",
          placeholder: "Repository name*",
          required: true,
        },
        {
          name: "projectDomain",
          type: "select",
          placeholder: "Project domain*",
          required: true,
          component: ProjectDomain,
        },
      ] as InputField[],
    },
    {
      fields: [
        {
          name: "repoURL",
          type: "url",
          placeholder: "Repository URL*",
          required: true,
        },
      ] as InputField[],
    },
    {
      fields: [
        {
          name: "description",
          type: "textarea",
          placeholder: "Project description*",
          required: true,
        },
      ] as InputField[],
    },
    {
      fields: [
        {
          name: "projectDomain",
          type: "select",
          placeholder: "Project domain*",
          required: true,
          component: ProjectDomain,
        },
      ] as InputField[],
    },
    {
      fields: [
        {
          name: "techstack",
          type: "combobox",
          placeholder: "Tech stacks*",
          required: true,
          component: TechStacks,
        },
      ] as InputField[],
    },
  ];

  return (
    // <SignupForm
    //   words={words}
    //   inputGroups={inputGroups}
    //   additionalInputGroups={additionalInputGroups}
    //   firstheading=""
    //   secondheading=""
    // />
    <RegistrationForm />
  );
};

export default page;
