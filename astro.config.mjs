import { defineConfig } from "astro/config";

import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: "3014ltp2",
      dataset: "production",
      useCdn: true,
      apiVersion: "2021-03-25",
    }),
  ],
});
