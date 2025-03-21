import type { User } from "@/modules/users/types/UserTypes";

export interface AuthResponse {
  accessToken: string;
  user: User;
}
