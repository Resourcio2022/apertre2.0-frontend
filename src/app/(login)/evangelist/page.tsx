"use client";

import LoginForm from "../_components/loginform";
import { SubmitHandler } from "react-hook-form";
import useGitHubUsername from "@/hooks/useGithubUser";

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

  const discordLink = "https://discord.com/invite/example?ref=abc123xyz";

  const { githubUsername, loading, email, isSignedIn } = useGitHubUsername();

  const handleSubmit: SubmitHandler<Record<string, string>> = async (data) => {
    if (!isSignedIn) {
      alert("You need to be signed in to submit this form.");
      return;
    }

    if (!email && !githubUsername) {
      alert("Please login to continue");
      return;
    }



    const { firstName, lastName } = data;
    const fullName = `${firstName} ${lastName}`.trim();


    if (loading) {
      return <p>Loading GitHub username...</p>;
    }

    return (
      <LoginForm
        words={words}
        inputGroups={inputGroups}
        firstheading="Personal Information"
        secondheading="Contact Information"
      />
    );
  };
}
export default Page;
