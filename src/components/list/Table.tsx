import type { ReactNode } from "react";

export interface ColumnConfig<T> {
  title: string;
  name: keyof T;
  headerClassName?: string;
  rowClassName?: string;
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
}: TableProps<T>) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data || data.length === 0) return <div>{renderEmpty}</div>;

  return (
    <div>
      <div className="card border-0">
        {/* SECTION: Action Menu */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="form-serach position-relative">
            <svg
              className="position-absolute"
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#1f1f1f"
            >
              <title>Search</title>
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
            <input
              type="search"
              name=""
              id=""
              className="form-control border-dark"
            />
          </div>
          <div className="group-btn">
            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
            <a href="" className="btn btn-dark">
              <svg
                className="pb-1"
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#fff"
              >
                <title>Create</title>
                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
              </svg>{" "}
              Create
            </a>
          </div>
        </div>
        {/* SECTION: List */}
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
                      className={col.rowClassName}
                    >
                      {cell}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
