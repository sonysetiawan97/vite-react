import { handlers as authHandlers } from "./auth/handlers";
import { handlers as productHandlers } from "./products/handlers";
import { handlers as exampleHandlers } from "./example/handlers";

export const handlers = [
  ...authHandlers,
  ...productHandlers,
  ...exampleHandlers,
];
