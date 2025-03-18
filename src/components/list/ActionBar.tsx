import type { FC } from "react";
import { SearchBar } from "./SearchBar";
import { CreateButton } from "../actions/CreateButton";

interface ActionBarProps {
  onSearch: (query: string) => void;
}

export const ActionBar: FC<ActionBarProps> = ({ onSearch }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <div className="form-serach position-relative">
        <SearchBar onSearch={onSearch} />
      </div>
      <div className="group-btn">
        <CreateButton />
      </div>
    </div>
  );
};
