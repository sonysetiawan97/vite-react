import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const MasterLayout: FC = () => {
  return (
    // <div >


    //   <Outlet />
    // </div>
    <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
        <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
          {/* Nanti header di sini */}
          <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
            {/* Nanti sidebar di sini */}
            <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
              <div className="d-flex flex-column flex-column-fluid">

                <div id="kt_app_content" className="app-content flex-column-fluid">
                  {/* nanti content di sini */}
                  <div id="kt_app_content_container" className="app-container container-fluid">
                    {/* @RenderBody() */}
                  </div>
                </div>
              </div>
              {/* Nanti footer di sini kalo diperlukan */}
            </div>
          </div>
        </div>
      </div>
  );
};

export { MasterLayout };
