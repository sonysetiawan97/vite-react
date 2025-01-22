import { clearUser } from '../../user/stores/userStores';
import { clearAccessToken } from '../stores/authStores';

export const logout = () => {
  clearAccessToken();
  clearUser();
};
