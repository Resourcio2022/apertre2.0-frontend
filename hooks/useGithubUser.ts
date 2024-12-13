"use client"
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

export const useGitHub = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [loading, setLoading] = useState(true);

  const [githubUsername, setGitHubUsername] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [clerk_userId, setClerk_userId] = useState<string>();

  useEffect(() => {
    const fetchGitHubUsername = () => {
      if (isLoaded && isSignedIn && user) {
        const githubUsername = user.username
        const emailAddress = user.primaryEmailAddress?.emailAddress
        const user_Id = user.id

        if (!githubUsername || !emailAddress) {
          return
        }
        setGitHubUsername(githubUsername);
        setEmail(emailAddress);
        setClerk_userId(user_Id)
      }
      setLoading(false);
    };

    fetchGitHubUsername();
  }, [isLoaded, isSignedIn, user]);

  return { githubUsername, email, clerk_userId, loading, isSignedIn };
};
