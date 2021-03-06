export default {
  publicRuntimeConfig: {
    HLS_URL:
      process.env.HLS_URL ||
      "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    BASE_URL: process.env.BASE_URL || "http://localhost:3000",
    ADMIN_TOKEN: process.env.ADMIN_TOKEN,
    VERSION: process.env.npm_package_version,
    io: {
      // will be available in this.$config.io
      sockets: [
        {
          name: "main",
          url: process.env.BASE_URL || "http://localhost:3000",
          default: true
        }
      ]
    }
  },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Global CSS
   */
  css: ["plyr/dist/plyr.css"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ["~/plugins/vue-plyr"],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    "nuxt-buefy",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxt/http",
    "~/io",
    "nuxt-socket-io"
  ],
  io: {
    sockets: [{ name: "config", url: "http://localhost:3000", default: false }]
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Server Middleware
   */
  serverMiddleware: {
    "/api": "~/api"
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  telemetry: false
};
