import { atom } from "nanostores";
import type { Product } from "../types/productTypes";
import axios, { type AxiosError } from "axios";

export const productStore = atom<Product[]>([]);

export const setProducts = (products: Product[]) => {
  productStore.set(products);
};

export const fetchProducts = async () => {
  try {
    const { data } = await axios.get<Product[]>("products");
    setProducts(data);
  } catch (error) {
    console.error("fetch error:", error);
    const { message } = error as unknown as AxiosError;
    throw new Error(`Fetch failed: ${message}`);
  }
};
