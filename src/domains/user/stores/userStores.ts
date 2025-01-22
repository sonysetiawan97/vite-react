import { atom } from 'nanostores';
import { User } from '../types/UserTypes';

const init: User | null = (() => {
  const user = localStorage.getItem('user');
  if (user) {
    return JSON.parse(user);
  }
  return null;
})();

const userStores = atom<User | null>(init);

const setUser = (user: User) => {
  localStorage.setItem('user', JSON.stringify(user));
  userStores.set(user);
};

const clearUser = () => {
  userStores.set(null);
  localStorage.removeItem('user');
};

export { userStores, setUser, clearUser };
