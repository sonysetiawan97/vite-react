import type { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/404NotFound";
import Unauthenticated from "./pages/Unauthenticated";

const ErrorRoutes: FC = () => {
  return (
    <Routes>
      {/* TODO: create error page */}
      <Route path="/403" element={<Unauthenticated />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default ErrorRoutes;
