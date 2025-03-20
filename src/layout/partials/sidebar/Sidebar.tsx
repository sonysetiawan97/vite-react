import type { FC } from "react";
import Logo from "../../../assets/images/logo-blue.png";
import { useTranslation } from "react-i18next";
import { SidebarMenuItem } from "@/components/menu/SidebarMenuItem";
import { SidebarMenuTitle } from "@/components/menu/SidebarMenuTitle";

const Sidebar: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="app-sidebar d-flex flex-column">
      <div className="app-sidebar-logo px-3 mb-2">
        <img alt="Logo" src={Logo} width={80} />
      </div>
      <div className="list-group list-group-flush">
        <SidebarMenuTitle title={t("sidebar.master.title")} />
        <SidebarMenuItem
          url="/dashboard"
          title={t("sidebar.master.menu.dashboard")}
        />
        <SidebarMenuItem
          url="/products"
          title={t("sidebar.master.menu.products")}
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
