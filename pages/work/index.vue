<template lang="pug">
NLayoutContent
    LibraryHero(:data='{title: "Work"}')
    .work-page
        NCard
            NList(hoverable clickable)
                NListItem(v-for='el in data')
                    h1 {{  el.title }}
</template>

<script setup>
import { ref, h } from 'vue'
import { NSpace, NCard, NList, NListItem } from 'naive-ui'

import { useMainStore } from '@/store'
const { getItems } = useDirectusItems()
const data = await getItems({ collection: 'work' })
const store = useMainStore()
</script>

<style lang="sass" scoped>
.work-page
    min-height: 100cqh
</style>
