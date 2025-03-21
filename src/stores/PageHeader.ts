import type { PageHeaderProps } from "@/types/PageHeader";
import { atom } from "nanostores";

export const pageHeader = atom<PageHeaderProps>({ title: "" });

export const setPageTitle = (title: string) => {
  pageHeader.set({ title, ...pageHeader });
};
