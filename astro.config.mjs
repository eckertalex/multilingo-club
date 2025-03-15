// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import { siteConfig } from "./src/site.config";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: siteConfig.site,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
