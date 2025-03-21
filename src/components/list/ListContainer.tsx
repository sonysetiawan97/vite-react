import type { ColumnConfig } from "@types/ColumnConfig";
import { Table } from "./Table";
import { ActionBar } from "./ActionBar";
import { EmptyData } from "../errors/EmptyData";
import { Pagination } from "./Pagination";

interface ListContainerProps<T> {
  data: T[];
  columns: ColumnConfig<T>[];
  isLoading: boolean;
  count: number;
  skip: number;
  limit: number;
  onPageChange: (newSkip: number) => void;
}

export const ListContainer = <T,>({
  data,
  columns,
  isLoading,
  count,
  skip,
  limit,
  onPageChange,
}: ListContainerProps<T>) => {
  return (
    <div>
      <div className="card border-0">
        {/* SECTION: Action Menu */}
        <ActionBar />
        {/* SECTION: Table */}
        <Table
          data={data}
          isLoading={isLoading}
          columns={columns}
          renderEmpty={<EmptyData />}
        />
        {/* SECTION: Pagination */}
        <div className="d-flex justify-content-center">
          <Pagination
            count={count}
            skip={skip}
            limit={limit}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </div>
  );
};
