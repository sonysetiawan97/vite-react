import { useQuery } from "@tanstack/react-query";
import { findAll } from "@/services/findAll";

interface UseListProps {
  module: string;
  skip?: number;
  limit?: number;
  params?: Record<string, unknown>;
}

const VITE_PAGE_LIMIT = Number(import.meta.env.VITE_PAGE_LIMIT) || 0;

export const useList = <T>({
  module,
  skip = 0,
  limit = VITE_PAGE_LIMIT,
  params,
}: UseListProps) => {
  return useQuery({
    queryKey: [module, skip, limit, params],
    queryFn: async () => {
      console.log(module, skip, limit, params);
      const response = await findAll<T>(module, {
        skip,
        limit,
        ...params,
      });
      return response;
    },
  });
};
