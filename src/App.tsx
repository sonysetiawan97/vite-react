import type { FC } from "react";
import { Outlet } from "react-router-dom";
import { Snackbar } from "./utils/snackbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SearchProvider } from "@/contexts/SearchProvider";
import { PaginationProvider } from "./contexts/PaginationProvider";

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Snackbar>
        <PaginationProvider>
          <SearchProvider>
            <Outlet />
          </SearchProvider>
        </PaginationProvider>
      </Snackbar>
    </QueryClientProvider>
  );
};

export { App };
