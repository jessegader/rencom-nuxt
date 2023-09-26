<template lang="pug">
NLayoutContent
	HomeHero(:data='`${store.assets}${data.heroVideo}`')
	.max.wrap
		.callout(v-html='callout')
		HomeSlider
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
		position: relative
		display: flex
		flex-flow: column nowrap
		justify-content: center
		width: 62%
		height: 138px
		margin-top: -160px
		padding: 0 0 0 1.35rem
		border-radius: 0 150px 0 0
		left: -1.35rem
		background: #fff
</style>
<style lang="sass">
.n-layout-content
	.callout
		h1
			font-size: 3dvw
			margin: 0.5rem 0 0 0
		h4
			font-size: 1.7dvw
			margin: 0
</style>
