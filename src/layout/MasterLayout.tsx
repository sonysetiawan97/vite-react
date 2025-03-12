import type { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./partials/header/Header"
import Sidebar from "./partials/sidebar/Sidebar"

const MasterLayout: FC = () => {
  return (
    <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
      <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
        {/* TODO: HEADER */}
        <Header/>
        <div
          className="app-wrapper flex-column flex-row-fluid"
          id="kt_app_wrapper"
        >
          {/* TODO: SIDEBAR */}
          <Sidebar/>

          <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
            <div className="d-flex flex-column flex-column-fluid">
              <div
                id="kt_app_content"
                className="app-content flex-column-fluid"
              >
                <div
                  id="kt_app_content_container"
                  className="app-container container-fluid px-4"
                >
                  <Outlet />
                </div>
              </div>
            </div>
            {/* TODO: FOOTER */}
          </div>
        </div>
      </div>
    </div>
  );
};

export { MasterLayout };
