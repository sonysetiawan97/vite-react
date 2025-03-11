import axios, { type AxiosError } from "axios";

export const update = async <T>(url: string, id: string): Promise<T> => {
  try {
    const { data } = await axios.delete<T>(`${url}/${id}/destroy`);
    return data;
  } catch (error) {
    const { message } = error as unknown as AxiosError;
    throw new Error(`Error on fetching data: ${message}`);
  }
};
