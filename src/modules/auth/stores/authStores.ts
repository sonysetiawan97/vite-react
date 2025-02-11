import { atom } from 'nanostores';
import type { Auth } from '../types/AuthTypes';

const init: Auth = (() => {
  const accessToken = localStorage.getItem('accessToken');
  return {
    isAuthenticated: !!accessToken,
    accessToken,
  };
})();

const authStores = atom<Auth>(init);

const setAccessToken = (accessToken: string, refreshToken?: string): void => {
  localStorage.setItem('accessToken', accessToken);

  if (refreshToken) {
    localStorage.setItem('refreshToken', accessToken);
  }

  authStores.set({ accessToken, refreshToken, isAuthenticated: true });
};

const clearAccessToken = (): void => {
  authStores.set(init);
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

export { authStores, setAccessToken, clearAccessToken };
