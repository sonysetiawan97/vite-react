import type { FC } from "react";
import { Table } from "@/components/list/Table";
import type { Product } from "@/modules/products/types/productTypes";
import type { ColumnConfig } from "@/components/list/Table";
import { Action } from "@/components/list/Action";

interface ListProps {
  data: Product[];
}

export const List: FC<ListProps> = ({ data }) => {
  const columns: ColumnConfig<Product>[] = [
    { title: "#", name: "id", rowClassName: "font-weight-bold" },
    {
      title: "Name",
      name: "name",
      render: (_, value) => {
        return `prefix_${value}_suffix`;
      },
    },
    {
      title: "Actions",
      name: "id",
      headerClassName: "header-action-list text-center",
      render: (row) => {
        const { id } = row;
        return <Action id={id} />;
      },
    },
  ];

  return <Table<Product> columns={columns} data={data} className="mb-4" />;
};
