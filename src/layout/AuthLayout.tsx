import type { FC } from "react";
import { Outlet } from "react-router-dom";
import Image from '../assets/images/undraw_login_wqkt.svg';
import Logo from '../assets/images/logo-color-vertical.svg';
import Background from '../assets/images/auth-bg.png';

var sectionStyle = {
  backgroundImage: `url(${Background})`,
  backgroundSize:'cover',
};

const AuthLayout: FC = () => {
  return (
    <div className="d-flex flex-column flex-root app-root" id="kt_app_root" style={{height: '100vh'}}>
      <div className="row h-100">

        <div className="col-4 d-flex align-items-center justify-content-center" style={sectionStyle}>
            <Outlet />
        </div>

        <div className="col-8 py-5" >
          <div className="d-flex flex-column justify-content-between align-items-center gap-5 py-5 py-lg-15 px-5 px-md-15 h-100">
            <a asp-action="index" asp-controller="dashboards" className="mb-12">
              <img alt="Logo" src={Logo} width={80}/>
            </a>

            <img className="d-none d-lg-block mx-auto my-10 my-lg-20 py-20" src={Image} alt="" width={500}/>
            <div>
              <h2 className="d-none d-lg-block fs-2qx fw-bolder text-center mb-7">
                Fast, Efficient and Productive
              </h2>

              <div className="d-none d-lg-block fs-base text-center px-15">
                <span className="px-15 d-block">
                Fast, Efficient, and Productive workflows are essential in today’s competitive business landscape, enabling teams to meet tight deadlines, minimize costs, and maximize output without sacrificing quality, all while maintaining a focus on innovation and customer satisfaction to drive long-term success.
                </span>
              </div>

            </div>
          </div>
        </div>
        {/* <div className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2" style='background-image:url(@KTTheme.GetAssetPath("media/misc/auth-bg.png"))'> */}
      </div>
    </div>
  );
};

export { AuthLayout };
