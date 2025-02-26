import type { FC } from "react";
import { Table } from "@/components/Table";
import type { Product } from "@/modules/products/types/productTypes";
import type { ColumnConfig } from "@/components/Table";
import { ActionsDropdown } from "@/components/ActionsDropdown";

interface ListProps {
  data: Product[];
}

export const List: FC<ListProps> = ({ data }) => {
  const columns: ColumnConfig<Product>[] = [
    { title: "#", name: "id" },
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
      render: (row) => {
        const { id } = row;
        return <ActionsDropdown id={id} />;
      },
    },
  ];

  return <Table<Product> columns={columns} data={data} className="mb-4" />;
};
