import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const MasterLayout: FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export { MasterLayout };
