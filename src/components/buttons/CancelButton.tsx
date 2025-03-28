import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface CancelButtonProps {
  to: string;
}

const CancelButton: FC<CancelButtonProps> = ({ to }) => {
  const { t } = useTranslation();

  return (
    <Link to={to} className="btn bg-dark-subtle">
      {t("button.cancle")}
    </Link>
  );
};

export { CancelButton };
