import type { FC, ReactNode } from "react";

interface TitleBarWithIconProps {
  icon?: ReactNode;
  title: string;
}

const TitleBarWithIcon: FC<TitleBarWithIconProps> = ({ icon, title }) => {
  return (
    <h6 className="d-flex align-items-center gap-2 justify-content-start mb-4">
      {icon ? <div className="icon pe-2">{icon}</div> : <></>}
      <div className="title">{title}</div>
    </h6>
  );
};

export { TitleBarWithIcon };
