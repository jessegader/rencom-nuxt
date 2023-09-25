<template lang="pug">
NLayoutContent
	LibraryHero(:data='library')
	.max.wrap
		LibraryButton(:data='library')
</template>

<script setup>
import { NSpace, NLayoutContent } from 'naive-ui'
const { getItems } = useDirectusItems()
const query = await getItems({ collection: 'library' })
// const query = await getItems({ collection: 'library', params: { filter: { id: 1 } } })
const library = await query
console.log(library)
</script>

<style lang="sass" scoped>
.n-layout-content
	min-height: 100dvh
</style>
