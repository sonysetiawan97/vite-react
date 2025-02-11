import type { User } from '@modules/user/types/UserTypes';

export interface AuthResponse {
  accessToken: string;
  user: User;
}
