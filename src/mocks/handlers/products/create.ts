import { http, HttpResponse } from "msw";
import { mockProducts, mockCreateProduct } from "./data/products";
import type { CreateModel } from "@modules/products/types/Model";

export const create = http.post("/api/v1/products", async ({ request }) => {
  const data = (await request.json()) as CreateModel;
  const product = mockCreateProduct(data);
  mockProducts.push({
    id: Number.parseInt(product.id),
    name: product.name,
  });
  return HttpResponse.json(product, { status: 201 });
});
