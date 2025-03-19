import type { FC } from "react";
import { Link } from "react-router-dom";

interface SidebarMenuItemProps {
  url: string;
  title: string;
}

export const SidebarMenuItem: FC<SidebarMenuItemProps> = ({ url, title }) => {
  return (
    <Link
      to={url}
      className="list-group-item list-group-item-action border-0 px-4"
    >
      <span>{title}</span>
    </Link>
  );
};
