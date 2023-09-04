// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-directus'], 
  directus: { 
     url: 'https://api.rencom.xyz'
  },
  ssr: false
})