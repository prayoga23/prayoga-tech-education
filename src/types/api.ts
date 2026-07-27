export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

export interface LeaderboardEntry {
  rank: number;
  uid: string;
  displayName: string;
  photoURL?: string;
  xp: number;
  streak: number;
  level: number;
}
