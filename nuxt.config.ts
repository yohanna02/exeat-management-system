// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss"
  ],
  devtools: { enabled: true },
  runtimeConfig: {
    jwtSecret: "",
    contactMailHost: "",
    contactMailPass: "",
    contactMailUser: "",
    contactMailName: "",
    contactMailPort: ""
  },
  sourcemap: true
})
