import { createDirectus } from '@directus/sdk'
import { rest, readItem, readItems } from '@directus/sdk/rest'

const directus = createDirectus('https://api.rencom.xyz').with(rest())

export default defineNuxtPlugin(() => {
	return {
		provide: { directus, readItem, readItems },
	};
});