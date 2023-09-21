<template lang="pug">
.home-hero
	include ../assets/pug/index
	NCard.hero
		template(#cover)
			video(width='1280' height='auto' autoplay muted loop)
				source(:src='data' type='video/mp4')
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
import { NCard } from 'naive-ui'
import gsap from 'gsap'
defineProps({
	data: {
		type: String,
		default: '',
	},
})
onMounted(() => {
	let inside = false
	const hero = document.querySelector('.home-hero .content')
	const header = document.querySelector('.n-layout-header')
	hero.addEventListener('mouseleave', (e) => (inside = false), console.log('out'))
	hero.addEventListener('mouseover', (e) => (inside = true), console.log('in'))
	header.addEventListener('mouseleave', (e) => (inside = false), console.log('out'))
	header.addEventListener('mouseover', (e) => (inside = true), console.log('in'))

	const video = document.querySelector('video')
	video.muted = true
	video.play()

	const tl = gsap.timeline()
	gsap.set('.logo1 #logo, .logo2 #logo, .logo3 #logo', { stroke: 'rgba(54, 16, 139, 0.01)' })
	tl.to('.logo2 #logo', {
		delay: 1,
		duration: 1,
		opacity: 0.4,
		fill: '#908ee2',
		ease: 'back.out(4)',
	})
		.to('.logo1 #logo', { duration: 1, opacity: 0.88, fill: '#36108B', ease: 'back.out(4)' }, '<')
		.to('.logo3 #logo', { duration: 1, opacity: 0.3, fill: '#908ee2', ease: 'back.out(4)' }, '<')
		.to('.logo1 #logo, .logo2 #logo, .logo3 #logo', { duartion: 0.25, stroke: 'rgba(54, 16, 139, 0.05)' }, '<')

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
		if (inside) {
			animLogo.style.setProperty('transform', `rotate3d(${-tiltx * 2},${-tilty * 2},0,${degree / 1.5}deg)`)
			animLogo.style.setProperty('translate', `${-tilty * 12}% ${-tiltx * 8}%`)
			animLogo.style.setProperty('transition', 'none')
		} else {
			animLogo.style.setProperty('transform', `rotate3d(0.2,0.3,0,7deg)`)
			animLogo.style.setProperty('transition', 'transform 0.7s ease')
			animLogo.style.setProperty('translate', '0 0')
		}
	})
})
</script>

<style lang="sass">
.hero
	position: absolute
	width: 100%
	height: 56dvw
	max-height: 76dvh
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
	height: 56dvw
	max-height: 76dvh
	left: 0
	right: 0
	margin-top: -1.35rem
	background: linear-gradient(to bottom,  rgba(255,255,255,1) 10%,rgba(255,255,255,0) 100%)
	perspective: 1000
	.logo
		width: 28dvw
		height: 28dvw
		max-height: 48dvh
		max-width: 48dvh
		z-index: 10
		transform-style: preserve-3d
		transition: transform 0.7s ease
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
