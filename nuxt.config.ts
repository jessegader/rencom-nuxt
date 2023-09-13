// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: ['nuxt-directus', '@pinia/nuxt', 'nuxt-security'],
	directus: {
		url: 'https://api.rencom.xyz'
	},
	security: {
		headers: {
			contentSecurityPolicy: {
				'base-uri': ["'self'"],
				'font-src': ["'self'", 'https:', 'data:'],
				'form-action': ["'self'"],
				'frame-ancestors': ["'self'"],
				'frame-src': ["'self'"],
				'img-src': ["'self'", 'data:'],
				'object-src': ["'none'"],
				'script-src-attr': ["'none'"],
				'style-src': ["'self'", 'https:', "'unsafe-inline'"],
				'upgrade-insecure-requests': true
			  }
		}
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
	  }
})
