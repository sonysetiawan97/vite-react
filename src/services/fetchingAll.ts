import axios, { type AxiosError } from "axios";

export interface FetchingAllProps<T> {
  data: T[];
  count: number;
}

export const fetchingAll = async <T>(
  url: string
): Promise<FetchingAllProps<T>> => {
  try {
    const { data } = await axios.get<FetchingAllProps<T>>(url);
    return data;
  } catch (error) {
    const { message } = error as unknown as AxiosError;
    throw new Error(`Error on fetching data: ${message}`);
  }
};
