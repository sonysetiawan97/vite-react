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
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
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
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#1f1f1f"
            >
              <path d="M212.31-100q-29.92 0-51.12-21.19Q140-142.39 140-172.31v-447.92q-17.61-9.08-28.81-25.81Q100-662.77 100-684.62v-103.07q0-29.92 21.19-51.12Q142.39-860 172.31-860h615.38q29.92 0 51.12 21.19Q860-817.61 860-787.69v103.07q0 21.85-11.19 38.58-11.2 16.73-28.81 25.81v447.92q0 29.92-21.19 51.12Q777.61-100 747.69-100H212.31ZM200-612.31v438.08q0 6.15 4.42 10.19 4.43 4.04 10.97 4.04h532.3q5.39 0 8.85-3.46t3.46-8.85v-440H200Zm-27.69-60h615.38q5.39 0 8.85-3.46t3.46-8.85v-103.07q0-5.39-3.46-8.85t-8.85-3.46H172.31q-5.39 0-8.85 3.46t-3.46 8.85v103.07q0 5.39 3.46 8.85t8.85 3.46Zm195.38 249.62h224.62V-480H367.69v57.31ZM480-386.15Z" />
              <title>menu</title>
            </svg>
          }
        />
        <SidebarMenuItem
          url="/examples"
          title={t("sidebar.master.menu.examples")}
          icon={
            <svg
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#1f1f1f"
            >
              <title>example menu</title>
              <path d="m480-146.93-44.15-39.69q-99.46-90.23-164.5-155.07-65.04-64.85-103.08-115.43-38.04-50.57-53.15-92.27Q100-591.08 100-634q0-85.15 57.42-142.58Q214.85-834 300-834q52.38 0 99 24.5t81 70.27q34.38-45.77 81-70.27 46.62-24.5 99-24.5 85.15 0 142.58 57.42Q860-719.15 860-634q0 42.92-15.12 84.61-15.11 41.7-53.15 92.27-38.04 50.58-102.89 115.43Q624-276.85 524.15-186.62L480-146.93Zm0-81.07q96-86.38 158-148.08 62-61.69 98-107.19t50-80.81q14-35.3 14-69.92 0-60-40-100t-100-40q-47.38 0-87.58 26.88-40.19 26.89-63.65 74.81h-57.54q-23.85-48.31-63.85-75Q347.38-774 300-774q-59.62 0-99.81 40Q160-694 160-634q0 34.62 14 69.92 14 35.31 50 80.81t98 107q62 61.5 158 148.27Zm0-273Z" />
            </svg>
          }
        />

        <SidebarMenuTitle title={t("sidebar.base.title")} />
        <SidebarMenuItem
          url="/setting"
          title={t("sidebar.base.menu.setting")}
          icon={
            <svg
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#1f1f1f"
            >
              <title>setting menu</title>
              <path d="M450-130v-220h60v80h320v60H510v80h-60Zm-320-80v-60h220v60H130Zm160-160v-80H130v-60h160v-80h60v220h-60Zm160-80v-60h380v60H450Zm160-160v-220h60v80h160v60H670v80h-60Zm-480-80v-60h380v60H130Z" />
            </svg>
          }
        />
        <SidebarMenuItem
          url="/themes"
          title={t("sidebar.base.menu.themes")}
          icon={
            <svg
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#1f1f1f"
            >
              <title>theme menu</title>
              <path d="M480.07-100q-78.84 0-148.21-29.92t-120.68-81.21q-51.31-51.29-81.25-120.63Q100-401.1 100-479.93q0-78.84 29.92-148.21t81.21-120.68q51.29-51.31 120.63-81.25Q401.1-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.84-29.92 148.21t-81.21 120.68q-51.29 51.31-120.63 81.25Q558.9-100 480.07-100ZM510-161.85q121.31-11.53 205.65-101.42Q800-353.15 800-480t-83.96-216.35q-83.96-89.5-206.04-101.8v636.3Z" />
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default Sidebar;
