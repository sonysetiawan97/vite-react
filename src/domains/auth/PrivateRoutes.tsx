import { FC } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

import { PrivateRoutes as ErrorRoutes } from '../error/PrivateRoutes';

const PrivateRoutes: FC = () => {
  return (
    <Routes>
      {/* TODO: Create Auth Layout */}
      <Route
        element={
          <>
            <Outlet />
          </>
        }
      >
        <Route path='login' element={<Login />} />
        <Route path='Register' element={<Register />} />
        <Route index element={<Login />} />
      </Route>
      <Route path='*' element={<ErrorRoutes />} />
    </Routes>
  );
};

export { PrivateRoutes };
