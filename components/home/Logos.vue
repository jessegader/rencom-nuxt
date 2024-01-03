<template lang="pug">
.home-logo.max
    NGrid( :x-gap='6' :y-gap='6' :cols='4')
        NGridItem(v-for='el in 20')
</template>

<script setup>
import { NGrid, NGridItem } from 'naive-ui'
import { useMainStore } from '@/store'
const { getItems } = useDirectusItems()
const data = await getItems({ collection: 'work' })
const store = useMainStore()
</script>

<style lang="sass" scoped>
.home-logo
    padding: 3.25rem 1.35rem 3.25rem 1.35rem
    width: calc(100% - 2.7rem)
    background: darken($primary, 20%)
    .n-grid
        div
            display: block
            aspect-ratio: 2/1.25
            background: lighten($primary-light, 20%)
            opacity: 0.25
@media (max-width:780px)
    .home-logo
        .n-grid
            grid-template-columns: repeat(2, minmax(0px, 1fr)) !important
</style>
