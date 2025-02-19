const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export interface Repo {
  repoName: string;
  repoURL: string;
  description: string;
  projectDomain: string;
  techstack: string[];
  projectAdmin: {
    fullname: string;
    username: string;
  };
}

interface Meta {
  page: number;
  pagesize: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export async function getGithubRepo(
  page: number,
  pageSize: number
): Promise<{ data: Repo[]; meta: Meta }> {
  const res = await fetch(
    `${API_URL}/github-repo/apertre?page=${page}&pagesize=${pageSize}`
  );
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return { data: data.data, meta: data.meta };
}

export async function getProjectsByTechStack(techstacks: string[]): Promise<Repo[]> {
  const query = techstacks
    .map((stack) => `techstack=${encodeURIComponent(stack)}`)
    .join("&");

  const res = await fetch(`${API_URL}/github-repo/apertre/search?${query}`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}
