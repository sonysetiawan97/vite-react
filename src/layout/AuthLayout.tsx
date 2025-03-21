import type { FC } from "react";
import { Outlet } from "react-router-dom";
import Image from "../assets/images/undraw_login_wqkt.svg";
import Logo from "../assets/images/logo-color-vertical.svg";
import Background from "../assets/images/auth-bg.png";
import { useTranslation } from "react-i18next";

const sectionStyle = {
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
};

const AuthLayout: FC = () => {
  const { t } = useTranslation();

  return (
    <div
      className="d-flex flex-column flex-root app-root"
      id="kt_app_root"
      style={{ height: "100vh" }}
    >
      <div className="row h-100">
        <div
          className="col-4 d-flex align-items-center justify-content-center"
          style={sectionStyle}
        >
          <Outlet />
        </div>

        <div className="col-8 py-5">
          <div className="d-flex flex-column justify-content-between align-items-center gap-5 py-5 py-lg-15 px-5 px-md-15 h-100">
            <img alt="Logo" src={Logo} width={80} />

            <img
              className="d-none d-lg-block mx-auto my-10 my-lg-20 py-20"
              src={Image}
              alt=""
              width={500}
            />
            <div>
              <h2 className="d-none d-lg-block fs-2qx fw-bolder text-center mb-7">
                {t("login.title")}
              </h2>

              <div className="d-none d-lg-block fs-base text-center px-15">
                <span className="px-15 d-block">{t("login.description")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AuthLayout };
