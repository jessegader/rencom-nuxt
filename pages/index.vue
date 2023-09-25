<template lang="pug">
NLayoutContent
	HomeHero(:data='`${store.assets}${data.heroVideo}`')
</template>

<script setup>
import { ref, h } from 'vue'
import { useMainStore } from '@/store'
const { getItems } = useDirectusItems()
const data = await getItems({ collection: 'home' })
const store = useMainStore()
store.setView('home')
import { NSpace, NLayoutContent } from 'naive-ui'
</script>

<style lang="sass" scoped>
.n-layout-content
	min-height: 100dvh
</style>
