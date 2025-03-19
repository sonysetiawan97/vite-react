import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface CreateButtonProps {
  onClick?: () => void;
}

export const CreateButton: FC<CreateButtonProps> = ({ onClick }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handle = () => {
    if (onClick) {
      onClick();
      return;
    }

    navigate("/create");
  };

  return (
    <button
      type="button"
      onClick={handle}
      className="btn btn-dark flex items-center gap-2"
    >
      <svg
        className="pb-1"
        xmlns="http://www.w3.org/2000/svg"
        height="20px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#fff"
      >
        <title>{t("button.create")}</title>
        <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
      </svg>
      <span>{t("button.create")}</span>
    </button>
  );
};
