import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { List } from './pages/List';

const PrivateRoutes: FC = () => {
  return (
    <Routes>
      {/* TODO: create error page */}
      <Route path='*' element={<List />} />
    </Routes>
  );
};

export { PrivateRoutes };
