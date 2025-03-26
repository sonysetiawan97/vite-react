import { http, HttpResponse } from "msw";
import { mockProducts } from "./data/products";
import type { UpdateModel } from "@modules/products/types/Model";

export const update = http.put(
  "/api/v1/products/:id/update",
  async ({ request, params }) => {
    const { id } = params;
    const data = (await request.json()) as UpdateModel;

    const index = mockProducts.findIndex((entry) => entry.id === id);

    if (index === -1) {
      return HttpResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    mockProducts[index] = { ...mockProducts[index], ...data };

    return HttpResponse.json(mockProducts, { status: 201 });
  }
);
