import type { FC } from "react";
import type { Product } from "@/modules/products/types/productTypes";
import { Action } from "@/components/list/Action";
import type { ColumnConfig } from "@/types/ColumnConfig";
import { ListContainer } from "@/components/list/ListContainer";
import { usePagination } from "@/hooks/usePagination";

interface ListProps {
  data: Product[];
  count: number;
  isLoading: boolean;
}

export const List: FC<ListProps> = ({ data, count, isLoading }) => {
  const { skip, limit, setSkip } = usePagination();
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

  return (
    <ListContainer<Product>
      columns={columns}
      data={data}
      isLoading={isLoading}
      count={count}
      skip={skip}
      limit={limit}
      onPageChange={setSkip}
    />
  );
};
