"use client"
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

export const useGitHub = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [githubUsername, setGitHubUsername] = useState<string | null>(null);
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [clerk_userId, setclerk_userId] = useState<string>('')
  useEffect(() => {
    const fetchGitHubUsername = () => {
      if (isLoaded && isSignedIn && user) {
        const githubAccount = user.username
        const emailAddress = user.primaryEmailAddress?.emailAddress
        const user_Id = user.id
        if (!emailAddress) {
          return
        }
        setGitHubUsername(githubAccount);
        setEmail(emailAddress);
        setclerk_userId(user_Id)
      }
      setLoading(false);
    };

    fetchGitHubUsername();
  }, [isLoaded, isSignedIn, user]);

  return { githubUsername, email, clerk_userId, loading, isSignedIn };
};
