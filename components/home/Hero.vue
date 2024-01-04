<template lang="pug">
.home-hero
    include ../../assets/pug/index
    NCard.hero(:bordered='false')
        template(#cover)
            video(width='1280' height='auto' autoplay muted loop)
                source(:src='data' type='video/mp4')
    .content
        .glitch.max
            +glitch

</template>

<script setup>
import { NCard } from 'naive-ui'
import { gsapHero } from '~/composables/gsapHero.js'

// imported from parent
defineProps({ data: { type: String, default: '' } })

onMounted(() => {
	gsapHero()
})
</script>

<style lang="sass" scoped>
.home-hero
    .n-card
        width: 100%
        height: 40dvw
        left: 0
        right: 0
        video
            width: 120%
            height: auto
            margin-left: -10%
    .content
        position: absolute
        display: flex
        justify-content: center
        align-items: center
        width: 100%
        height: 40dvw
        top: 0
        left: 0
        right: 0
        background: linear-gradient(to bottom,  rgba(0,0,0,0.2) 30%,rgba(0,0,0,0.4) 100%)
        .glitch
            width: 80%
            cursor: url('/broken-arrow.png'), auto
            svg
                overflow: visible
                path, rect
                    fill: white
        .logo
            width: 80%
            height: 14%
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
@media (max-width:780px)
    .home-hero
        .hero
            height: 66dvw
            video
                width: 200%
                height: auto
                margin-left: -50%
        .content
            height: 66dvw
</style>
