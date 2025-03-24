import type { FC } from "react";
import { useTranslation } from "react-i18next";

interface TitleProps {
  title: string;
}

export const Title: FC<TitleProps> = ({ title }) => {
  const { t } = useTranslation();

  return (
    <>
      <h6 className="d-flex align-items-center gap-2 my-4">
        <svg height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
          <title>menu</title>
          <path d="M212.31-100q-29.92 0-51.12-21.19Q140-142.39 140-172.31v-447.92q-17.61-9.08-28.81-25.81Q100-662.77 100-684.62v-103.07q0-29.92 21.19-51.12Q142.39-860 172.31-860h615.38q29.92 0 51.12 21.19Q860-817.61 860-787.69v103.07q0 21.85-11.19 38.58-11.2 16.73-28.81 25.81v447.92q0 29.92-21.19 51.12Q777.61-100 747.69-100H212.31ZM200-612.31v438.08q0 6.15 4.42 10.19 4.43 4.04 10.97 4.04h532.3q5.39 0 8.85-3.46t3.46-8.85v-440H200Zm-27.69-60h615.38q5.39 0 8.85-3.46t3.46-8.85v-103.07q0-5.39-3.46-8.85t-8.85-3.46H172.31q-5.39 0-8.85 3.46t-3.46 8.85v103.07q0 5.39 3.46 8.85t8.85 3.46Zm195.38 249.62h224.62V-480H367.69v57.31ZM480-386.15Z" />
        </svg>
        {t("list.title")} {title}
      </h6>
    </>
  );
};
