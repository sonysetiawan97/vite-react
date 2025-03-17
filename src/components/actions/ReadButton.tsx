import type { FC } from "react";
import { useTranslation } from "react-i18next";

interface ReadActionProps {
  id: string;
  onClick: (id: string) => void;
}

export const ReadAction: FC<ReadActionProps> = ({ id, onClick }) => {
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
        fill="#373737"
      >
        <title>{t("button.read")}</title>
        <path d="M480-312q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Zm0-72q-40 0-68-28t-28-68q0-40 28-68t68-28q40 0 68 28t28 68q0 40-28 68t-68 28Zm0 192q-142.6 0-259.8-78.5Q103-349 48-480q55-131 172.2-209.5Q337.4-768 480-768q142.6 0 259.8 78.5Q857-611 912-480q-55 131-172.2 209.5Q622.6-192 480-192Zm0-288Zm0 216q112 0 207-58t146-158q-51-100-146-158t-207-58q-112 0-207 58T127-480q51 100 146 158t207 58Z" />
      </svg>
    </button>
  );
};
