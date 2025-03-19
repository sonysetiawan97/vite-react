import { createContext } from "react";

interface SearchContextType {
  query: string;
  setQuery: (value: string) => void;
}

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);
