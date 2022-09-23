import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      exclude: /\.stories\.(mdx|tsx?)$/,
      include: "**/*.tsx",
    }),
  ],
  resolve: {
    alias: {
      "@example": resolve(__dirname, "./lib"),
    },
  },
});
