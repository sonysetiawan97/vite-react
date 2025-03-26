export const moduleName = "products";

export interface Model {
  id: string;
  name: string;
  status: 0 | 1;
}

export interface CreateModel {
  name: string;
  status: 0 | 1;
}

export interface ReadModel {
  id: string;
  name: string;
  status: 0 | 1;
}

export interface UpdateModel {
  id: string;
  name: string;
  status: 0 | 1;
}
