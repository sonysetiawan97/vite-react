import { useMutation, useQueryClient } from "@tanstack/react-query";
import { update } from "@services/update";
import type { AxiosError, AxiosRequestConfig } from "axios";

interface UpdateMutationProps<T> {
  url: string;
  id: string;
  body: T;
  config?: AxiosRequestConfig;
}

export const useUpdate = <T>(queryKey: string) => {
  const queryClient = useQueryClient();
  const mutation = useMutation<T, AxiosError, UpdateMutationProps<T>>({
    mutationFn: ({ url, id, body, config }) => {
      return update<T>(url, id, body, config);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKey],
      });
    },
    onError: (error) => {
      console.error("Update failed:", error);
    },
  });

  return {
    update: mutation.mutate,
    updateAsync: mutation.mutateAsync,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
};
