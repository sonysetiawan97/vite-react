import { findAll } from "./findAll";
import { create } from "./create";
import { findOne } from "./findOne";
import { update } from "./update";

export const handlers = [update, findOne, findAll, create];
