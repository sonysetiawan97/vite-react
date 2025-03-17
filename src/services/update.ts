import axios, { type AxiosRequestConfig, type AxiosError } from "axios";

export const update = async <T>(
  url: string,
  id: string,
  body: T,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const { data } = await axios.put<T>(`${url}/${id}/update`, body, {
      headers: {
        "Content-Type": "application/json",
      },
      ...config,
    });
    return data;
  } catch (error) {
    const { message } = error as unknown as AxiosError;
    throw new Error(`Error on fetching data: ${message}`);
  }
};
