import type { FC } from "react";
import { SearchBar } from "./SearchBar";
import { CreateButton } from "../actions/CreateButton";

export const ActionBar: FC = () => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <div className="form-serach position-relative">
        <SearchBar />
      </div>
      <div className="group-btn">
        <CreateButton />
      </div>
    </div>
  );
};
