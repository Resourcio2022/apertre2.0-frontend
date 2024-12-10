"use client"
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

const useGitHubUsername = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [githubUsername, setGitHubUsername] = useState<string | null>(null);
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubUsername = () => {
      if (isLoaded && isSignedIn && user) {
        const githubAccount = user.username
        const emailAddress = user.primaryEmailAddress?.emailAddress
        if (!emailAddress) {
          return
        }
        setGitHubUsername(githubAccount);
        setEmail(emailAddress);
      }
      setLoading(false);
    };

    fetchGitHubUsername();
  }, [isLoaded, isSignedIn, user]);

  console.log(user);
  return { githubUsername, email, loading, isSignedIn };
};

export default useGitHubUsername;
