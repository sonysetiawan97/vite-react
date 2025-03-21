import type { FC } from "react";
import Logo from "../../../assets/images/logo-blue.png";
import { useTranslation } from "react-i18next";
import { SidebarMenuItem } from "@components/menu/SidebarMenuItem";
import { SidebarMenuTitle } from "@components/menu/SidebarMenuTitle";

const Sidebar: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="app-sidebar d-flex flex-column">
      <div className="app-sidebar-logo px-4 mb-2">
        <img alt="Logo" src={Logo} width={80} />
      </div>
      <div className="list-group list-group-flush">
        <SidebarMenuTitle title={t("sidebar.master.title")} />

        <SidebarMenuItem
          url="/dashboard"
          title={t("sidebar.master.menu.dashboard")}
          icon={
            <svg
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#1f1f1f"
            >
              <title>menu</title>
              <path d="M140-520v-300h300v300H140Zm0 380v-300h300v300H140Zm380-380v-300h300v300H520Zm0 380v-300h300v300H520ZM200-580h180v-180H200v180Zm380 0h180v-180H580v180Zm0 380h180v-180H580v180Zm-380 0h180v-180H200v180Zm380-380Zm0 200Zm-200 0Zm0-200Z" />
            </svg>
          }
        />
        <SidebarMenuItem
          url="/products"
          title={t("sidebar.master.menu.products")}
          icon={
            <svg
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#1f1f1f"
            >
              <title>menu</title>
              <path d="M140-520v-300h300v300H140Zm0 380v-300h300v300H140Zm380-380v-300h300v300H520Zm0 380v-300h300v300H520ZM200-580h180v-180H200v180Zm380 0h180v-180H580v180Zm0 380h180v-180H580v180Zm-380 0h180v-180H200v180Zm380-380Zm0 200Zm-200 0Zm0-200Z" />
            </svg>
          }
        />
        <SidebarMenuItem
          url="/examples"
          title={t("sidebar.master.menu.examples")}
        />

        <SidebarMenuTitle title={t("sidebar.base.title")} />
        <SidebarMenuItem
          url="/setting"
          title={t("sidebar.base.menu.setting")}
        />
        <SidebarMenuItem url="/themes" title={t("sidebar.base.menu.themes")} />
      </div>
    </div>
  );
};

export default Sidebar;
