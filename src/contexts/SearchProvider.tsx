import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { SearchContext } from "./SearchContext";

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [query, setQuery] = useState("");

  const debouncedSetQuery = useDebouncedCallback((value: string) => {
    setQuery(value);
  }, 500);

  return (
    <SearchContext.Provider value={{ query, setQuery: debouncedSetQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
