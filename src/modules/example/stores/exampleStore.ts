import { atom } from "nanostores";
import type { Example } from "../types/exampleTypes";
import axios, { type AxiosError } from "axios";

export const exampleStore = atom<Example[]>([]);

export const setExamples = (examples: Example[]) => {
  exampleStore.set(examples);
};

export const fetchExamples = async () => {
  try {
    const { data } = await axios.get<Example[]>("examples");
    setExamples(data);
  } catch (error) {
    console.error("fetch error:", error);
    const { message } = error as unknown as AxiosError;
    throw new Error(`Fetch failed: ${message}`);
  }
};
