import { Leaderboard } from "@/models/leaderboard.model";

export interface LeaderboardState {
  lastUpdated: string;
  leaderboardData: Leaderboard[];
}
