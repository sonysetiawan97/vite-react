import axios, { type AxiosError } from "axios";

interface FindAllProps<T> {
  data: T[];
  count: number;
}

export const findAll = async <T>(
  url: string,
  params?: Record<string, unknown>
): Promise<FindAllProps<T>> => {
  try {
    const { data } = await axios.get<FindAllProps<T>>(url, { params });
    return data;
  } catch (error) {
    const { message } = error as unknown as AxiosError;
    throw new Error(`Error on fetching data: ${message}`);
  }
};
