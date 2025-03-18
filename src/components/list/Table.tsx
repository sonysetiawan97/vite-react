import type { ReactNode } from "react";
import clsx from "clsx";
import type { ColumnConfig } from "@/types/ColumnConfig";

export interface TableProps<T> {
  columns: ColumnConfig<T>[];
  data: T[];
  isLoading?: boolean;
  error?: Error | null;
  renderEmpty?: ReactNode;
  className?: string;
}

export const Table = <T,>({
  columns,
  data,
  isLoading = false,
  error = null,
  renderEmpty = "No data available",
}: TableProps<T>) => {
  // TODO: Need loading page
  if (isLoading) return <div>Loading...</div>;
  // TODO: Need error message snackbar
  if (error) return <div>Error: {error.message}</div>;
  if (!data || data.length === 0) return <div>{renderEmpty}</div>;

  return (
    <table className="table teble-striped table-hover">
      <thead>
        <tr>
          {" "}
          {columns.map((col, index) => (
            <th
              key={`${col.title}-${index}`}
              scope="col"
              className={col.headerClassName}
            >
              {col.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={`${Math.random()}-${rowIndex}`}>
            {columns.map((col, colIndex) => {
              const cell =
                typeof col.render === "function"
                  ? col.render(row, row[col.name], rowIndex)
                  : (row[col.name] as unknown as ReactNode);
              return (
                <td
                  key={`${col.title}-${colIndex}`}
                  className={clsx("vertical-align-middle", col.rowClassName)}
                >
                  {cell}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
