import type { FC } from "react";
import { Outlet, Route, Routes } from "react-router-dom";

import { ErrorRoutes } from "../error/ErrorRoutes";
import { ListPage } from "./pages/ListPage";
import { AddPage } from "./pages/AddPage";

const ExampleRoutes: FC = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route index element={<ListPage />} />
        <Route path="/add" element={<AddPage />} />
      </Route>
      <Route path="*" element={<ErrorRoutes />} />
    </Routes>
  );
};

export { ExampleRoutes };
