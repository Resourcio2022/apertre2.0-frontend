export interface Leaderboard {
  rank: number;
  user_name: string;
  github_url: string;
  avatar_url: string;
  full_name: string;
  total_points: number;
  pr_urls: {
    url: string;
    difficulty: string;
    color: string;
  }[];
}
