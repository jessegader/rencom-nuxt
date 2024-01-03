// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: ['nuxt-directus', '@pinia/nuxt'],
	directus: {
		url: 'https://api.rencom.xyz',
	},
	ssr: false,
	app: {
		head: {
			htmlAttrs: {},
			title: 'Renegade',
			charset: 'utf-8',
			meta: [],
			link: [],
		},
	},
	css: ['~/assets/sass/index.sass'],
	alias: {
		pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
	  },
	vite: {
		css: {
			preprocessorOptions: {
			  sass: {
				additionalData: `@import "@/assets/sass/global.sass"`
			  }
			}
		  },
	}
})
