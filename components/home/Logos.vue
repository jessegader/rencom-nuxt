<template lang="pug">
.home-logo(:style='logoBg')
    NGrid.max( :x-gap='6' :y-gap='6' :cols='4')
        NGridItem(v-for='id in data.logoTiles')
            NImage.logo(:src='getTiles(id)' object-fit='contain' lazy preview-disabled)
</template>

<script setup>
import { NGrid, NGridItem, NImage } from 'naive-ui'
import { useMainStore } from '@/store'
const { getItems } = useDirectusItems()
const data = await getItems({ collection: 'home' })
const logos = await getItems({ collection: 'home_files' })
const store = useMainStore()

let logoBg = { backgroundImage: `url(${store.assets}${data.logoBackground})` }
const getTiles = (val) => `${store.assets}${logos[val - 1].directus_files_id}`
</script>

<style lang="sass" scoped>
.home-logo
    padding: 6rem 0
    width: 100%
    position: relative
    background-size: cover
    background-position: 30% 50%
    display: flex
    justify-content: center
    &:before
        content: ''
        width: 100%
        height: 100%
        position: absolute
        left: 0
        top: 0
        background: darken($primary, 30%)
        opacity: 60%
    .n-grid
        position: relative
        width: 90% !important
        & > div
            display: flex
            justify-content: center
            align-items: center
            aspect-ratio: 2/1.25
            background: transparentize(lighten($primary-light, 20%), 0.75)
        .logo
            max-height: 60%
            max-width: 60%
@media (max-width:780px)
    .home-logo
        background-position: center
        .n-grid
            grid-template-columns: repeat(2, minmax(0px, 1fr)) !important
</style>
