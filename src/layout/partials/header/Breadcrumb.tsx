import type { FC } from "react";

export const Breadcrumbs: FC = () => {
  return (
    <>
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
    </>
  );
};
