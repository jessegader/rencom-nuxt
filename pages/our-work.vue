<template lang="pug">
NLayoutContent
	LibraryHero(:data='data')
</template>

<script setup>
import { NSpace } from 'naive-ui'
const { getItems } = useDirectusItems()
const query = await getItems({ collection: 'library', params: { filter: { id: 1 } } })
const data = await query
console.log(data)
</script>

<style lang="sass" scoped>
.n-layout-content
	height: 100dvh
</style>
