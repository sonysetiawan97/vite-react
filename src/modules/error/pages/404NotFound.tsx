import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NotFound: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="page404">
      <div className="d-flex flex-column justify-content-between align-items-center h-100 py-5">
        <div className="text-center">
          <h1 className="display-2 mb-0">Oops!</h1>
          <h5 className="text-muted">Page Not Found</h5>
        </div>
        <div className="img" />

        <Link to={"/dashboard"}>{t("error.404_not_found.button")}</Link>
      </div>
    </div>
  );
};

export { NotFound };
