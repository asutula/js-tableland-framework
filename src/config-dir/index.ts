import { join, resolve } from "path";
import { mkdir } from "fs/promises";
import { exists } from "../util";

export const configDir = join(resolve("./"), ".tableland");

if (!(await exists(configDir))) {
  await mkdir(configDir);
}
