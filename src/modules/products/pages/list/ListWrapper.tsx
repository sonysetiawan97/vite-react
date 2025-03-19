import type { FC } from "react";
import { List } from "./ListPage";
import { useList } from "@/hooks/useList";
import type { Product } from "@/modules/products/types/productTypes";
import { useSearch } from "@/hooks/useSearch";

export const ListWrapper: FC = () => {
  const { query } = useSearch();
  const { data, isLoading, error } = useList<Product>({
    module: "products",
    skip: 0,
    limit: 10,
    params: {
      search: query,
    },
  });

  // TODO: NEED loading pages
  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <List data={data?.data || []} isLoading={isLoading} />;
};
