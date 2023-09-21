<template lang="pug">
.library-hero
	NCard(size='huge')
		template(#cover)
			img(:src='`${store.assets}${data.heroImage}`')
		span(v-html='data.heroContent')
		NText.tagbar 
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
.n-card
	position: absolute
	width: 100%
	height: 40dvw
	max-height: 340px
	left: 0
	right: 0
	margin-top: -1.35rem
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
		justify-content: flex-start
		align-items: center
		background: linear-gradient(to right,  rgba(0,0,0,0.35) 40%,rgba(0,0,0,0) 100%)
		h1
			color: white
			font-size: 260%
			font-weight: 700
			letter-spacing: 0.05rem
			text-shadow: 0px 4px 4px rgba(0,0,0,0.65)
			margin-bottom: 0
	.tagbar
		position: absolute
		width: 100%
		top: 100%
		left: 0
		right: 0
		padding: 1.1rem var(--n-padding-left) 1rem var(--n-padding-left)
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
