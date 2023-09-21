<template lang="pug">
NLayoutHeader(:bordered='store.view !== "home"')
	NSpace.rc-menu
		NImage.logo(preview-disabled width='260' :src='`${store.assets}${data.logoLongBlack}`')
		NMenu(:mode='store.mobile ? "vertical" : "horizontal"' :options='menuOpt')
</template>

<script setup>
import { NIcon, NSpace, NLayoutHeader, NImage, NMenu, NSkeleton } from 'naive-ui'
import { ref, h } from 'vue'
import NLink from '~/components/NLink.vue'
import { useMainStore } from '@/store'
const { getItems } = useDirectusItems()

const store = await useMainStore()
store.setLoading(true)
const data = await getItems({ collection: 'global' })
const pages = await getItems({ collection: 'pages' })
store.setLoading(false)

const slugIt = (val) =>
	val
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, '')
		.replace(/[\s_-]+/g, '-')
		.replace(/^-+|-+$/g, '')

let menuOpt = []
pages.forEach((el) => (menuOpt = [{ key: el.id, label: () => h(NLink, { to: `/${slugIt(el.title)}` }, el.title) }, ...menuOpt].sort((a, b) => a.key - b.key)))
</script>

<style lang="sass" scoped>
.logo
	padding: 0.5rem 1.25rem 0
.rc-menu
	max-width: 1200px
	height: 80px
	align-items: center
	margin: 0 auto
	padding: 0 1.25rem
	text-transform: uppercase
	flex-flow: row nowrap !important
@media (max-width:780px)
	.rc-menu
		.n-menu
			position: absolute
			top: 0
			right: 0
			z-index: 10
</style>
