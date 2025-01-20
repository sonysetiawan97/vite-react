import { atom } from 'nanostores';

interface Auth {
  isAuthenticated: boolean;
}

const initAuth: Auth = {
  isAuthenticated: true,
};

const auth = atom<Auth>(initAuth);

const setIsAuthenticated = (isAuthenticated: boolean) => {
  auth.set({ ...auth, isAuthenticated });
};

export { auth, setIsAuthenticated };
