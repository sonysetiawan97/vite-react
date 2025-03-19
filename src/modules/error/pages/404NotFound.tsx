import type { FC } from 'react';

const NotFound: FC = () => {
  return (
    <div className="page404">
      <div className="d-flex flex-column justify-content-between align-items-center h-100 py-5">
        <div className='text-center'>
          <h1 className='display-2 mb-0'>Oops!</h1>
          <h5 className='text-muted'>Page Not Found</h5>
        </div>
          <div className="img"></div>

        <a href="/dashboard">Back</a>

      </div>
    </div>
  );
};

export { NotFound };
