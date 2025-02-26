import type { FC } from "react";
import { useTranslation } from "react-i18next";

interface EditActionProps {
  id: string;
  onClick: (id: string) => void;
}

export const EditAction: FC<EditActionProps> = ({ id, onClick }) => {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      onClick={() => onClick(id)}
      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
    >
      {t("button.delete")}
    </button>
  );
};
