import type { FC } from "react";
import { Outlet } from "react-router-dom";
import { Snackbar } from "./utils/snackbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SearchProvider } from "@/contexts/SearchProvider";
import { PaginationProvider } from "./contexts/PaginationProvider";
import { ModalProvider } from "@/contexts/ModalProvider";

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <Snackbar>
          <PaginationProvider>
            <SearchProvider>
              <Outlet />
            </SearchProvider>
          </PaginationProvider>
        </Snackbar>
      </ModalProvider>
    </QueryClientProvider>
  );
};

export { App };
