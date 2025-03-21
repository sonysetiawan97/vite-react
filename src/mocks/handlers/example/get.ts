import { http, HttpResponse } from "msw";
import type { Product } from "@/modules/products/types/Model";

const data: Product[] = [
  { id: "1", name: "A" },
  { id: "2", name: "B" },
];

export const get = http.get("/api/v1/examples", () => {
  const body = {
    data: [...data],
    count: data.length,
  };
  return HttpResponse.json(body, { status: 200, statusText: "Data retrieve." });
});
