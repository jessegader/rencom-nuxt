<template lang="pug">
NLayoutHeader
	NSpace.max.rc-menu
		NImage.logo(preview-disabled width='240' :src='`${store.assets}${data.logo_horizontal}`')
		NMenu(mode='horizontal' :options='menuOpt')
</template>

<script setup>
import { ref, h } from 'vue'
import { useMainStore } from '@/store'
const { getItems } = useDirectusItems()
const data = await getItems({ collection: 'global' })
const pages = await getItems({ collection: 'pages' })
const store = useMainStore()
// ui
import { NIcon, NSpace, NLayoutHeader, NImage, NMenu } from 'naive-ui'
import { BoltRound } from '@vicons/material'
const renderIcon = (icon) => () => h(NIcon, () => h(icon))
let menuOpt = []

pages.forEach((el) => (menuOpt = [{ label: el.title, key: el.id }, ...menuOpt].sort((a, b) => a.key - b.key)))
</script>

<style lang="sass" scoped>
.logo
	padding: 0.5rem 1.25rem 0
.rc-menu
	padding: 0 1.25rem
</style>
