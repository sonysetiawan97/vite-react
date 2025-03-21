import type { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { SideBarMenuIcon } from "./SideBarMenuIcon";

interface SidebarMenuItemProps {
  url: string;
  title: string;
  icon?: ReactNode;
}

export const SidebarMenuItem: FC<SidebarMenuItemProps> = ({
  url,
  title,
  icon,
}) => {
  return (
    <Link
      to={url}
      className="list-group-item list-group-item-action border-0 px-4 d-flex align-items-center gap-2"
    >
      <SideBarMenuIcon>{icon}</SideBarMenuIcon>
      <span>{title}</span>
    </Link>
  );
};
