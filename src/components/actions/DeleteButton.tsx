import type { FC } from "react";
import { useTranslation } from "react-i18next";

interface DeleteActionProps {
  id: string;
  onClick: (id: string) => void;
}

export const DeleteAction: FC<DeleteActionProps> = ({ id, onClick }) => {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      onClick={() => onClick(id)}
      className="btn btn-link btn-sm"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="18px"
        viewBox="0 -960 960 960"
        width="18px"
        fill="#ff5252"
      >
        <title>{t("button.delete")}</title>
        <path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" />
      </svg>
    </button>
  );
};
