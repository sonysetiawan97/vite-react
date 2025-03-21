import { useStore } from '@nanostores/react';
import { authStores } from '@modules/auth/stores/authStores';
import { userStores } from '@modules/users/stores/userStores';

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
