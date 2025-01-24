import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { MasterLayout } from '../layout/MasterLayout';

import { UserRoutes } from '../domains/user/UserRoutes';
import { ErrorRoutes } from '../domains/error/ErrorRoutes';
import { Dashboard } from '../components/Dashboard';

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
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Route>
      <Route path='*' element={<ErrorRoutes />} />
    </Routes>
  );
};

export { PrivateRoutes };
