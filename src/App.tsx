import type { FC } from "react";
import { Outlet } from "react-router-dom";
import { Snackbar } from "./utils/snackbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SearchProvider } from "@/contexts/SearchProvider";

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <Snackbar>
          <Outlet />
        </Snackbar>
      </SearchProvider>
    </QueryClientProvider>
  );
};

export { App };
