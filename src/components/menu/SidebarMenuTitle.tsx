import type { FC } from "react";

interface SidebarMenuTitleProps {
  title: string;
}

export const SidebarMenuTitle: FC<SidebarMenuTitleProps> = ({ title }) => {
  return (
    <span
      className="menu-content text-muted mb-0 fs-7 text-uppercase px-4 mb-2 mt-4"
      aria-current="true"
    >
      {title}
    </span>
  );
};
