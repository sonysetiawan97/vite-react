import type { FC } from "react";
import { Table } from "@/components/Table";
import type { Product } from "@/modules/products/types/productTypes";
import type { ColumnConfig } from "@/components/Table";

interface ListProps {
  data: Product[];
}

export const List: FC<ListProps> = ({ data }) => {
  const handleEdit = (id: string) => {
    console.log(id);
  };

  const columns: ColumnConfig<Product>[] = [
    { title: "#", name: "id" },
    {
      title: "Name",
      name: "name",
      render: (_, value) => {
        return <button type="button">{value}</button>;
      },
    },
    {
      title: "Actions",
      name: "id",
      render: (row) => {
        return (
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => handleEdit(row.id)}
              className="px-2 py-1 text-sm text-white bg-blue-500 rounded"
            >
              Edit
            </button>
          </div>
        );
      },
    },
  ];

  return <Table<Product> columns={columns} data={data} className="mb-4" />;
};
