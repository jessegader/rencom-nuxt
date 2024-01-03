<template lang="pug">
NLayoutContent
	HomeHero(:data='`${store.assets}${data.heroVideo}`')
	.callout
		.max(v-html='callout')
	HomeWork
	HomeLogos
</template>

<script setup>
import { ref, h } from 'vue'
import { NSpace, NLayoutContent } from 'naive-ui'

import { useMainStore } from '@/store'
const { getItems } = useDirectusItems()
const data = await getItems({ collection: 'home' })
const store = useMainStore()

store.setView('home')

const tags = await data.heroCalloutTags.join().replaceAll(',', ' | ')
const callout = `<h4>${await tags}</h4>${await data.heroCallout}`
</script>

<style lang="sass" scoped>
.n-layout-content
	min-height: 100dvh
	.callout
		display: flex
		flex-flow: column nowrap
		justify-content: center
		text-align: center
		height: 22dvw
		max-height: 22dvh
		padding: 1.35rem
		background: #36108B
</style>
<style lang="sass">
.n-layout-content
	.callout
		h1
			font-size: 2.7cqi
			margin: 0.5rem 0 0 0
			color: #fff
		h4
			font-size: 1.7cqi
			font-weight: 400
			margin: 0
			color: #fff
</style>
