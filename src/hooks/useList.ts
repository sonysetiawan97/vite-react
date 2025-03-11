import { useQuery } from "@tanstack/react-query";
import { findAll } from "@/services/findAll";

interface UseListProps {
  module: string;
  skip?: number;
  limit?: number;
}

const VITE_PAGE_LIMIT = Number(import.meta.env.VITE_PAGE_LIMIT) || 0;

export const useList = <T>({
  module,
  skip = 0,
  limit = VITE_PAGE_LIMIT,
}: UseListProps) => {
  return useQuery({
    queryKey: [module, skip],
    queryFn: async () => {
      const response = await findAll<T>(
        `${module}`,
        `skip=${skip}&limit=${limit}`
      );
      return response;
    },
    retry: 3,
    staleTime: 1000 * 60 * 0.5,
  });
};
