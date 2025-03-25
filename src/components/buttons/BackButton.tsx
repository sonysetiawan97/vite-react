import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface BackButtonProps {
  to: string;
}

const BackButton: FC<BackButtonProps> = ({ to }) => {
  const { t } = useTranslation();

  return (
    <Link to={to} className="btn bg-dark-subtle">
      {t("button.back")}
    </Link>
  );
};

export { BackButton };
