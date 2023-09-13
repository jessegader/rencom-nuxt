<template lang="pug">
.library-hero
	NCard(size='huge')
		template(#cover)
			img(:src='`${store.assets}${data.image}`')
		span(v-html='data.content')

</template>

<script setup>
import { NCard } from 'naive-ui'
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
		color: white
		font-size: 150%
		background: linear-gradient(to right,  rgba(21,4,28,0.65) 0%,rgba(21,4,28,0) 100%)
</style>
