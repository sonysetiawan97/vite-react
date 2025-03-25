import { faker } from "@faker-js/faker";
import type { CreateModel, Model } from "@modules/products/types/Model";

export const mockProducts = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: faker.food.vegetable(),
}));

export const mockCreateProduct = (data: CreateModel): Model => {
  return { id: (mockProducts.length + 1).toString(), ...data };
};
