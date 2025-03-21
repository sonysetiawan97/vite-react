import type { FC } from "react";
import { List } from "./ListPage";
import { useList } from "@hooks/list/useList";
import { type Model, moduleName } from "../../types/Model";
import { useSearch } from "@hooks/list/useSearch";
import { LoadingPage } from "@/components/loadings/LoadingPage";
import { usePagination } from "@hooks/list/usePagination";

export const ListWrapper: FC = () => {
  const { skip, limit } = usePagination();
  const { query } = useSearch();
  const { data, isLoading, error } = useList<Model>({
    module: moduleName,
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
