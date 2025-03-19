import type { FC } from "react";

const PageTitle: FC = () => {
  return (
    <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
      {/* begin::Title */}
      <h1 className="page-heading d-flex text-gray-900 fw-bold fs-5 flex-column justify-content-center my-0">
        Page Title
      </h1>
      {/* end::Title */}

      {/* begin::Breadcrumb */}
      <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
        {/* begin::Item */}
        <li className="breadcrumb-item text-muted">
          <a href="/" className="text-muted text-hover-primary">
            Home
          </a>
        </li>
        {/* end::Item */}
        {/* begin::Item */}
        <li className="breadcrumb-item">
          <span className="bullet bg-gray-500 w-5px h-2px">module</span>
        </li>
        {/* end::Item */}
        {/* begin::Item */}
        <li className="breadcrumb-item text-muted">
          <a href="/@controllerName" className="text-muted text-hover-primary">
            action module
          </a>
        </li>
        {/* @if(actionshow){
              <li className="breadcrumb-item">
                <span className="bullet bg-gray-500 w-5px h-2px"></span>
              </li>
              <li className="breadcrumb-item text-muted"></li>

            } */}
        {/* end::Item */}
      </ul>
      {/* end::Breadcrumb */}
    </div>
  );
};

export default PageTitle;
