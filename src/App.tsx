import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Snackbar } from './utils/snackbar';

const App: FC = () => {
  return (
    <Snackbar>
      <Outlet />
    </Snackbar>
  );
};

export { App };
