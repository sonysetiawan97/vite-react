import { FC } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Dashboard } from '../domains/dashboard/Dashboard';

const PrivateRoutes: FC = () => {
  return (
    <Routes>
      {/* TODO: create master layout */}
      <Route
        element={
          <>
            Master Layout
            <Outlet />
          </>
        }
      >
        {/* TODO: Create dashboard pages */}
        <Route path='dashboard' element={<Dashboard />}></Route>
        <Route path='/' element={<Dashboard />}></Route>
      </Route>
    </Routes>
  );
};

export { PrivateRoutes };
