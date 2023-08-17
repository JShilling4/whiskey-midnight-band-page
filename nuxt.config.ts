// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // document head injections
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ],
      script: [],
      style: [],
      link: [],
      noscript: [
        // <noscript>Javascript is required</noscript>
        { children: "Javascript is required" },
      ],
    },
  },
  css: [
    // SCSS file in the project
    "assets/sass/main.scss",
  ],
  ssr: true,
  modules: [
    ['@nuxtjs/robots', { configPath: "~/config/robots.config" }]
  ]
});
