import { useQuery } from "@tanstack/react-query";
import { findAll } from "@services/findAll";

export const useFindAll = <T>(
  queryKey: string,
  url: string,
  params?: Record<string, unknown>
) => {
  return useQuery<T[], Error>({
    queryKey: [queryKey],
    queryFn: async () => {
      const { data } = await findAll<T>(url, params);
      return data;
    },
  });
};
