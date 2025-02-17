import type { FC } from "react";
import { Outlet } from "react-router-dom";
import { Snackbar } from "./utils/snackbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Snackbar>
        <Outlet />
      </Snackbar>
    </QueryClientProvider>
  );
};

export { App };
