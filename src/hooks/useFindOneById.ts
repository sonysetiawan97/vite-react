import { useQuery } from "@tanstack/react-query";
import { findOneById } from "@services/findOneById";

export const useFindOneById = <T>(
  queryKey: string[],
  url: string,
  id: string
) => {
  return useQuery({
    queryKey: [...queryKey],
    queryFn: () => findOneById<T>(url, id),
    enabled: !!id,
  });
};
