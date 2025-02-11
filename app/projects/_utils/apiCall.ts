const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getGithubRepo() {
  const res = await fetch(`${API_URL}/github-repo`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}
