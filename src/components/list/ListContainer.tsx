import type { ColumnConfig } from "@/types/ColumnConfig";
import { Table } from "./Table";
import { ActionBar } from "./ActionBar";

interface ListContainerProps<T> {
  data: T[];
  columns: ColumnConfig<T>[];
  isLoading: boolean;
  onSearch: (query: string) => void;
}

export const ListContainer = <T,>({
  data,
  columns,
  isLoading,
  onSearch,
}: ListContainerProps<T>) => {
  return (
    <div>
      <div className="card border-0">
        {/* SECTION: Action Menu */}
        <ActionBar onSearch={onSearch} />
        {/* SECTION: List */}
        <Table data={data} isLoading={isLoading} columns={columns} />
      </div>
    </div>
  );
};
