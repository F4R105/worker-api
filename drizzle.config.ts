// {
//     "out": "drizzle/migrations",
//     "schema": "drizzle/db/schema.ts"
// }

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  schema: "src/db/schema.ts",
});