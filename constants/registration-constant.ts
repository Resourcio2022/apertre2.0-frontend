export type RegistrationCard = {
  usertype: string;
  content: React.ReactNode;
  registerlink: string;
  disabled: boolean;
};

export const registrationData = [
  {
    usertype: "MENTEE",
    content:
      "Register as a contributor. Contribute you skills, showcase your creativity and strengthen your tech knowledge",
    registerlink: "/mentee",
    disabled: false,
  },
  {
    usertype: "MENTOR",
    content:
      "Register as a mentor. Guide enthusiast contributors through your expertise and help them become technically strong.",
    registerlink: "/mentor",
    disabled: false,
  },
  {
    usertype: "PROJECT ADMIN",
    content:
      "Register as a project admin. Showcase your projects to the contributors for enhancement and bug fixture.",
    registerlink: "/project-admin",
    disabled: false,
  },
  {
    usertype: "COMMUNITY PARTNER",
    content:
      "Apply as a Community Partner! Showcase, grow your community, and enjoy shoutouts and exciting perks!",
    registerlink: "/community-partner",
    disabled: true,
  },
  {
    usertype: "EVANGELIST",
    content:
      "Sign up as an evangelist! Share your expertise, showcase your creativity, and enhance your tech skills while making an impact",
    registerlink: "/evangelist",
    disabled: true,
  },
] as RegistrationCard[];
