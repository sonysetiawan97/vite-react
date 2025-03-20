import type { FC } from "react";
import { List } from "./ListPage";
import { useList } from "@/hooks/useList";
import type { Product } from "@/modules/products/types/productTypes";
import { useSearch } from "@/hooks/useSearch";
import { LoadingPage } from "@/components/LoadingPage";
import { usePagination } from "@/hooks/usePagination";

export const ListWrapper: FC = () => {
  const { skip, limit } = usePagination();
  const { query } = useSearch();
  const { data, isLoading, error } = useList<Product>({
    module: "products",
    skip,
    limit,
    params: {
      search: query,
    },
  });

  if (isLoading) return <LoadingPage />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <List
      data={data?.data || []}
      count={data?.count || 0}
      isLoading={isLoading}
    />
  );
};
