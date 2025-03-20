import { useState } from "react";
import { PaginationContext } from "./PaginationContext";

const { VITE_PAGE_LIMIT } = import.meta.env;

export const PaginationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [skip, setSkip] = useState<number>(0);
  const limit = VITE_PAGE_LIMIT || 10;

  return (
    <PaginationContext.Provider value={{ skip, limit, setSkip }}>
      {children}
    </PaginationContext.Provider>
  );
};
