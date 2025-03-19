import type { ColumnConfig } from "@/types/ColumnConfig";
import { Table } from "./Table";
import { ActionBar } from "./ActionBar";

interface ListContainerProps<T> {
  data: T[];
  columns: ColumnConfig<T>[];
  isLoading: boolean;
}

export const ListContainer = <T,>({
  data,
  columns,
  isLoading,
}: ListContainerProps<T>) => {
  return (
    <div>
      <div className="card border-0">
        {/* SECTION: Action Menu */}
        <ActionBar />
        {/* SECTION: Table */}
        <Table data={data} isLoading={isLoading} columns={columns} />
      </div>
    </div>
  );
};
