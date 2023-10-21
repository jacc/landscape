import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  output: "hybrid",
  adapter: vercel(),
});
