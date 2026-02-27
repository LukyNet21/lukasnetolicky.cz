// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://lukasnetolicky.cz",
  trailingSlash: "always",
  integrations: [sitemap()],
  output: "static",
  i18n: {
    locales: ["en", "cs"],
    defaultLocale: "en",
    fallback: {
      cs: "en",
    },
    routing: {
      fallbackType: "rewrite",
    }
  }
});
