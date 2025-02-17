import { atom } from "nanostores";
import type { Example } from "../types/exampleTypes";

export const exampleStore = atom<Example[]>([]);

export const setExamples = (examples: Example[]) => {
  exampleStore.set(examples);
};
