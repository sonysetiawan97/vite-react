import { http, HttpResponse } from "msw";
import type { Product } from "@modules/products/types/productTypes";

const data: Product[] = [
  { id: "1", name: "Java" },
  { id: "2", name: "PHP" },
];

export const get = http.get("/api/v1/products", () => {
  const body = {
    data: [...data],
    count: data.length,
  };
  return HttpResponse.json(body, { status: 200, statusText: "Data retrieve." });
});
