import type { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { List } from './pages/List';

const UserRoutes: FC = () => {
  return (
    <Routes>
      {/* TODO: create error page */}
      <Route path='*' element={<List />} />
    </Routes>
  );
};

export { UserRoutes };
