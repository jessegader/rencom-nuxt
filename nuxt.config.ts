// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['nuxt-directus', '@nuxtjs/tailwindcss'], 
  directus: { 
     url: 'https://api.rencom.xyz'
  },
  ssr: false,
  app: {
    head: {
        htmlAttrs: {
           'data-theme': 'dracula',
        },
        title: 'title',
        charset: 'utf-8',
        meta: [],
        link: [],
    }
}
})