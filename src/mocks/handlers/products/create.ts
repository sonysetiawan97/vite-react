import { http, HttpResponse } from "msw";
import { mockProducts, mockCreateProduct } from "./data/products";
import type { CreateModel } from "@modules/products/types/Model";

export const create = http.post("/api/v1/products", async ({ request }) => {
  const data = (await request.json()) as CreateModel;
  const newProduct = mockCreateProduct(data);
  mockProducts.push(newProduct);
  return HttpResponse.json(newProduct, { status: 201 });
});
