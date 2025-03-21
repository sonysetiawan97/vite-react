import { clearUser } from '../../users/stores/userStores';
import { clearAccessToken } from '../stores/authStores';

export const logout = () => {
  clearAccessToken();
  clearUser();
};
