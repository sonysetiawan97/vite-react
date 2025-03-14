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
}: UseListProps) => {
  return useQuery({
    queryKey: [module, skip, limit],
    queryFn: async () => {
      const params: Record<string, unknown> = {
        skip,
        limit,
      };
      const response = await findAll<T>(module, params);
      return response;
    },
    retry: 3,
    staleTime: 1000 * 60 * 0.5,
  });
};
