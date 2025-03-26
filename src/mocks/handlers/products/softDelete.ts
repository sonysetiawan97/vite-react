import { http, HttpResponse } from "msw";
import { mockProducts } from "./data/products";

export const softDelete = http.patch(
  "/api/v1/products/:id/delete",
  async ({ params }) => {
    const { id } = params;

    const index = mockProducts.findIndex((entry) => entry.id === id);

    if (index === -1) {
      return HttpResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    mockProducts[index] = { ...mockProducts[index], status: 0 };

    return HttpResponse.json(mockProducts, { status: 200 });
  }
);
