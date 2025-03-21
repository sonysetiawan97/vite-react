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
      className="list-group-item list-group-item-action border-0 px-4 d-flex align-items-center gap-2"
    >
      <svg height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
        <path d="M140-520v-300h300v300H140Zm0 380v-300h300v300H140Zm380-380v-300h300v300H520Zm0 380v-300h300v300H520ZM200-580h180v-180H200v180Zm380 0h180v-180H580v180Zm0 380h180v-180H580v180Zm-380 0h180v-180H200v180Zm380-380Zm0 200Zm-200 0Zm0-200Z"/>
      </svg>
      <span>{title}</span>
    </Link>
  );
};
