import { FC } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { App } from '../App';

import { AuthRoutes } from '../domains/auth/AuthRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { ErrorRoutes } from '../domains/error/ErrorRoutes';

import { Home } from '../components/Home';

const { BASE_URL } = import.meta.env;

const AppRoutes: FC = () => {
  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        <Route element={<App />}>
          {/* Home page */}
          <Route path='/' element={<Home />} />

          {/* TODO: create auth */}
          {/* Auth routes */}
          <Route path='/auth/*' element={<AuthRoutes />} />

          {/* Private routes (if authenticated) */}
          <Route path='/*' element={<PrivateRoutes />} />
          <Route path='*' element={<ErrorRoutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
