import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { MasterLayout } from '../layout/MasterLayout';

import { PrivateRoutes as UserRoutes } from '../domains/user/PrivateRoutes';
import { PrivateRoutes as ErrorRoutes } from '../domains/error/PrivateRoutes';

const PrivateRoutes: FC = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to='/auth/signin' />;
  }

  return (
    <Routes>
      {/* TODO: create master layout */}
      <Route element={<MasterLayout />}>
        <Route path='/user/*' element={<UserRoutes />}></Route>
      </Route>
      <Route path='*' element={<ErrorRoutes />} />
    </Routes>
  );
};

export { PrivateRoutes };
