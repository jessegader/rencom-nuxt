<template lang="pug">
.library-hero
	NCard(:bordered='false' size='huge')
		template(#cover)
			img(v-if='data.heroImage' :src='`${store.assets}${data.heroImage}`')
			.grad(v-else)
		h1(v-html='data.title')
	NText.tagbar
		.max.wrap
			span(v-for='tag in data.heroTags' v-html='tag')
</template>

<script setup>
import { NCard, NText } from 'naive-ui'
import { useMainStore } from '@/store'
const store = useMainStore()
defineProps({
	data: {
		type: Object,
		default: {},
	},
})
</script>

<style lang="sass">
.library-hero
	.n-card
		width: 100%
		height: 40dvw
		max-height: 340px
		background: $primary-light
		.n-card-cover
			border-radius: 0
			img
				width: 100%
				height: 100%
				object-fit: cover
				object-position: center
			.grad
				width: 100%
				height: 40dvw
				background: linear-gradient(90deg, #6D4DBC 4.17%, #5653BC 52.47%, #CF721B 96.91%)
		.n-card__content
			height: 100%
			width: 100%
			position: absolute
			display: flex
			align-items: center
			background: linear-gradient(to right,  rgba(0,0,0,0.35) 40%,rgba(0,0,0,0) 100%)
			span
				display: flex
				width: 100%
				max-width: 1200px
			h1
				color: white
				font-size: 260%
				font-weight: 700
				letter-spacing: 0.05rem
				margin: 2.7rem 0 0 0
	.tagbar
		display: flex
		background: $primary
		font-size: 110%
		color: rgba(255,255,255,0.85)
		span
			&:after
				content: ' | '
				padding: 0 0.25rem
			&:last-child:after
				display: none
</style>
