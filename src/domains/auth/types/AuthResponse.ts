import { User } from '../../user/types/UserTypes';

export interface AuthResponse {
  accessToken: string;
  user: User;
}
