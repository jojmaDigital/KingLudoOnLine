import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://kingludo.com",   // ton domaine public doit être correct et en https
  output: "static",
  adapter: cloudflare(),

  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.pathname.includes("404"), // exclure 404 du sitemap
      i18n: {
        defaultLocale: "fr",        // langue principale de ton site
        locales: {
          fr: "fr",
          en: "en",
        },
      },
    }),
  ],
});
