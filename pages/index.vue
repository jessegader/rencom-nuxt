<template lang="pug">
NSpace.max(vertical)
	HomeHero(:data='`${store.assets}${data.heroVideo}`')
</template>

<script setup>
import { ref, h } from 'vue'
import { useMainStore } from '@/store'
const { getItems } = useDirectusItems()
const data = await getItems({ collection: 'home' })
const store = useMainStore()
store.setView('home')
import { NSpace } from 'naive-ui'
</script>

<style lang="sass" scoped>
.n-space
	height: 100dvh
	padding: 1.35rem
</style>
