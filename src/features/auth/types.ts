import { UserProfile } from "@/types/user";

export interface AuthState {
  user: UserProfile | null;
  loading: boolean;
  error: string | null;
}
