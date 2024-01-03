<template lang="pug">
NLayoutContent
  LibraryHero(:data='data')
</template>

<script setup>
import { NSpace, NCard, NLayoutContent } from 'naive-ui'
const route = useRoute()
import { useMainStore } from '@/store'
const { getItems } = useDirectusItems()
const query = await getItems({ collection: 'work' })
const data = query.filter((el) => el.slug === route.params.slug).shift()
// const query = await getItems({ collection: 'pages', params: { filter: { slug: route.params.slug } } })
const store = useMainStore()
</script>

<style lang="sass" scoped>
.n-layout-content
  height: 100%
</style>
