import axios, { type AxiosError } from "axios";

export const softDelete = async <T>(url: string, id: string): Promise<T> => {
  try {
    const { data } = await axios.patch<T>(`${url}/${id}/delete`);
    return data;
  } catch (error) {
    const { message } = error as unknown as AxiosError;
    throw new Error(`Error on fetching data: ${message}`);
  }
};
