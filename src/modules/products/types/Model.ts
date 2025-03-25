export const moduleName = "products";

export interface Model {
  id: string;
  name: string;
}

export interface CreateModel {
  name: string;
}

export interface ReadModel {
  id: string;
  name: string;
}
