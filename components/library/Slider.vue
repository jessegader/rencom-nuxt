<template lang="pug">
.home-slider
	NCarousel.slider(autoplay draggable)
		img.carousel-img(:src='`${store.assets}${data.sliderImages}`')
		img.carousel-img(:src='`${store.assets}${data.sliderImages}`')

</template>

<script setup>
import { NCarousel } from 'naive-ui'
import { useMainStore } from '@/store'
const store = useMainStore()
const { getItems } = useDirectusItems()
const data = await getItems({ collection: 'home' })
</script>

<style lang="sass">
.home-slider
	background-color: #36108B
	margin: 0 0 0 -1.35rem
	.n-carousel, .n-carousel__slide
		overflow: visible !important
	.carousel-img
		overflow: visible
		margin: -25px 0 0 -0.65rem
		width: 100%
		height: auto
		cursor: pointer
</style>
