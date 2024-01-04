<template lang="pug">
.home-work.max
    NList(hoverable clickable :show-divider='false')
        NuxtLink(v-for='el in data' :to='`/work/${el.slug}`')
            NListItem 
                h1 {{el.tagline}}
                p {{ el.title }}

</template>

<script setup>
import { NList, NListItem } from 'naive-ui'
import { useMainStore } from '@/store'
const { getItems } = useDirectusItems()
const data = await getItems({ collection: 'work' })
const store = useMainStore()
</script>

<style lang="sass" scoped>
.home-work
    padding: 3.25rem 1.35rem 3.25rem 1.35rem
    width: calc(100% - 2.7rem)
    .n-list
        text-align: center
        h1
            font-size: 3cqi
            font-weight: 900
            letter-spacing: -0.015rem
            color: black
            margin: 0
        p
            font-size: 1.5cqi
            color: $primary-light
            margin: 0
        .n-list-item
            padding: 1.35cqi
@media (max-width:780px)
    .home-work
        padding: 2rem 0
        .n-list
            h1
                font-size: 4cqi
            p
                font-size: 2.5cqi
</style>
