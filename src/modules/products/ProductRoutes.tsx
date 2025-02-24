import type { FC } from "react";
import { Outlet, Route, Routes } from "react-router-dom";

import { ErrorRoutes } from "../error/ErrorRoutes";
import { ListWrapper } from "./pages/list/ListWrapper";
import { AddPage } from "./pages/AddPage";

const ProductRoutes: FC = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route index element={<ListWrapper />} />
        <Route path="/add" element={<AddPage />} />
      </Route>
      <Route path="*" element={<ErrorRoutes />} />
    </Routes>
  );
};

export { ProductRoutes };
