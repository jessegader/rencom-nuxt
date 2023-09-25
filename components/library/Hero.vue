<template lang="pug">
.library-hero
	NCard(:bordered='false' size='huge')
		template(#cover)
			img(:src='`${store.assets}${data.heroImage}`')
		span(v-html='data.heroContent')
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
		background: #333
		.n-card-cover
			border-radius: 0
			img
				width: 100%
				height: 100%
				object-fit: cover
				object-position: center
		.n-card__content
			height: 100%
			width: 100%
			position: absolute
			display: flex
			justify-content: center
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
				text-shadow: 0px 4px 4px rgba(0,0,0,0.65)
				margin: 2.7rem 0 0 0
	.tagbar
		display: flex
		background: #272727
		font-size: 110%
		color: rgba(255,255,255,0.85)
		span
			&:after
				content: ' | '
				padding: 0 0.25rem
			&:last-child:after
				display: none
</style>
