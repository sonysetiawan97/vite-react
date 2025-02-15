import type { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from './pages/404NotFound';

const ErrorRoutes: FC = () => {
  return (
    <Routes>
      {/* TODO: create error page */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export { ErrorRoutes };
