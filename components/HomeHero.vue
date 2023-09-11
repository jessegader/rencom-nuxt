<template lang="pug">
.home-hero
	include ../assets/pug/index
	NCard.hero
		template(#cover)
			video(width='1280' height='auto' autoplay muted loop)
				source(:src='`${store.api}${data.video}`' type='video/mp4')
	.content 
		.logo
			.logo1
				+logoSquare
			.logo2
				+logoSquare
			.logo3
				+logoSquare

</template>

<script setup>
import { ref, h } from 'vue'
import { NCard, NSpace, NText } from 'naive-ui'
import gsap from 'gsap'
import { useMainStore } from '@/store'
const { getItems } = useDirectusItems()
const data = await getItems({ collection: 'home' })
const store = useMainStore()

onMounted(() => {
	const video = document.querySelector('video')
	video.muted = true
	video.play()

	const tl = gsap.timeline()
	tl.to('.logo2 #logo', {
		delay: 1,
		duration: 1,
		opacity: 0.8,
		fill: '#747ee2',
		ease: 'back.out(4)',
	})
		.to(
			'.logo1 #logo',
			{ duration: 1, opacity: 0.9, fill: '#36108B', ease: 'back.out(4)' },
			'<'
		)
		.to(
			'.logo3 #logo',
			{ duration: 1, opacity: 0.7, fill: '#908ee2', ease: 'back.out(4)' },
			'<'
		)
	

	document.addEventListener('mousemove', (e) => {
		let cx = Math.ceil(window.innerWidth / 1.8)
		let cy = Math.ceil(window.innerHeight / 1.8)
		let dx = e.pageX - cx
		let dy = e.pageY - cy

		let tiltx = dy / cy
		let tilty = -(dx / cx)
		let radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2))
		let degree = radius * 20

		const animLogo = document.querySelector('.content .logo')
		animLogo.style.setProperty('transform', `rotate3d(${-tiltx},${-tilty},0,${degree}deg)`)

		console.log(animLogo)
		// console.log(tiltx)

		// gsap.to('.logo', {
		// 	rotationX: -tiltx,
		// 	rotationY: -tilty,
		// 	rotationZ: 0,
		// 	rotate: degree,
		// })
		
	})
})
</script>

<style lang="sass">
	.hero
		position: absolute
		width: 100%
		height: 60dvw
		left: 0
		right: 0
		margin-top: -1.35rem
		.n-card-cover
			border-radius: 0
	.content
		position: absolute
		display: flex
		justify-content: center
		align-items: center
		width: 100%
		height: 60dvw
		left: 0
		right: 0
		margin-top: -1.35rem
		background: linear-gradient(to bottom,  rgba(255,255,255,1) 10%,rgba(255,255,255,0) 100%)
		perspective: 1000
		.logo
			width: 32dvw
			height: 32dvw
			z-index: 10
			transform-style: preserve-3d
			svg
				overflow: visible
		.logo1
			position: absolute
			width: 100%
			transform: translateZ(150px)
		.logo2
			position: absolute
			width: 100%
			transform: translateZ(75px)
		.logo3
			position: absolute
			width: 100%
			transform: translateZ(0px)
	video
		width: 120%
		height: auto
		margin-top: -10dvw 0 -10% 0
</style>
