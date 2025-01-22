import { useStore } from '@nanostores/react';
import { authStores } from '../domains/auth/stores/authStores';
import { userStores } from '../domains/user/stores/userStores';

const useAuth = () => {
  const authState = useStore(authStores);
  const userState = useStore(userStores);

  return {
    ...authState,
    user: {
      userState,
    },
  };
};

export { useAuth };
