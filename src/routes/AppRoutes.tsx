import { FC } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { PrivateRoutes } from './PrivateRoutes';
import { App } from '../App';

import { PrivateRoutes as AuthRoutes } from '../domains/auth/PrivateRoutes';

const { BASE_URL } = import.meta.env;

const AppRoutes: FC = () => {
  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        <Route element={<App />}>
          {/* TODO: Create Error Page */}
          <Route path='error/*' element={<>Error</>} />
          {/* TODO: Create Logout Page */}
          <Route path='logout' element={<>Logout</>} />

          <Route path='auth/*' element={<AuthRoutes />}></Route>

          {/* TODO: Create Auth */}
          <Route path='/*' element={<PrivateRoutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
