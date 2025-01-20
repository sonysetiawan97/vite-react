import { useStore } from '@nanostores/react';
import { auth } from '../domains/auth/stores/auth';

const useAuth = () => {
  const { isAuthenticated } = useStore(auth);

  return {
    isAuthenticated,
  };
};

export { useAuth };
