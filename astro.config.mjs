// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { siteConfig } from "./src/siteConfig";
import sitemap from "@astrojs/sitemap";
import metaTags from "astro-meta-tags";
import devtoolBreakpoints from "astro-devtool-breakpoints";

export default defineConfig({
  site: siteConfig.site,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap(), metaTags(), devtoolBreakpoints()],
});

