// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@vueuse/nuxt"],
  app: {
    head: {
      title: "Jessada's Page",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0, viewport-fit=cover" },
        { property: "og:url", content: "https://jess4da.github.io" },
        { property: "og:title", content: "Jessada's Page" },
      ],
    },
    baseURL: "/",
    buildAssetsDir: "assets",
  },
});
