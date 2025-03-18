import type { FC } from "react";
import { List } from "./ListPage";
import { useList } from "@/hooks/useList";
import type { Product } from "@/modules/products/types/productTypes";

export const ListWrapper: FC = () => {
  const { data, isLoading, error } = useList<Product>({
    module: "products",
    skip: 0,
  });

  // TODO: NEED loading pages
  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <List data={data?.data || []} isLoading={isLoading} />;
};
