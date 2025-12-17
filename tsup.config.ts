import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs"], // ← IMPORTANT CHANGE
  target: "node20",
  outDir: "dist",
  clean: true,
  splitting: false,
  sourcemap: false,
  external: ["@prisma/client"],
});
