import vercelEdge from "@astrojs/vercel/edge";
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: vercelEdge(),
});
