import type { ReactNode } from "react";

export interface ColumnConfig<T> {
  title: string;
  name: keyof T;
  render?: (row: T, value: unknown, rowIndex: number) => ReactNode;
}

export interface TableProps<T> {
  columns: ColumnConfig<T>[];
  data: T[];
  loading?: boolean;
  error?: Error | null;
  renderEmpty?: ReactNode;
  className?: string;
}

export const Table = <T extends object>({
  columns,
  data,
  loading = false,
  error = null,
  renderEmpty = "No data available",
  className = "",
}: TableProps<T>) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data || data.length === 0) return <div>{renderEmpty}</div>;

  return (
    <table className={`min-w-full border-collapse ${className}`}>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th
              key={`${col.title}-${index}`}
              className="p-2 border bg-gray-200 text-left"
            >
              {col.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={`${Math.random()}-${rowIndex}`} className="even:bg-gray-50">
            {columns.map((col, colIndex) => {
              const cell =
                typeof col.render === "function"
                  ? col.render(row, row[col.name], rowIndex)
                  : (row[col.name] as unknown as ReactNode);
              return (
                <td key={`${col.title}-${colIndex}`} className="p-2 border">
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
