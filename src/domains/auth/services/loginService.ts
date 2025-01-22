import axios, { AxiosError } from 'axios';
import { AuthResponse } from '../types/AuthResponse';
import { LoginRequest } from '../types/LoginRequest';
import { setAccessToken } from '../stores/authStores';
import { setUser } from '../../user/stores/userStores';

export const login = async (request: LoginRequest): Promise<AuthResponse> => {
  try {
    const response = await axios.post<AuthResponse>('/auth/login', request);
    const { data } = response;
    const { accessToken, user } = data;

    setAccessToken(accessToken);
    setUser(user);

    return data;
  } catch (error) {
    const { message } = error as unknown as AxiosError;
    throw new Error(`Login failed: ${message}`);
  }
};
