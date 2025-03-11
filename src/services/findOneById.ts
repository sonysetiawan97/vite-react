import axios, { type AxiosError } from "axios";

export const findOneById = async <T>(url: string, id: string): Promise<T> => {
  try {
    const { data } = await axios.get<T>(`${url}/${id}`);
    return data;
  } catch (error) {
    const { message } = error as unknown as AxiosError;
    throw new Error(`Error on fetching data: ${message}`);
  }
};
