import axios, { type AxiosRequestConfig, type AxiosError } from "axios";

export const create = async <T>(
  url: string,
  body: T,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const { data } = await axios.post<T>(url, body, {
      headers: {
        "Content-Type": "application/json",
      },
      ...config,
    });
    return data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(`Error on fetching data: ${axiosError.message}`);
  }
};
