<template lang="pug">
NLayoutHeader(:bordered='store.view !== "home"')
	NSpace.header.max
		NuxtLink(to='/')
			NImage.logo(preview-disabled width='260' :src='`${store.assets}${data.logoLongBlack}`')
		NMenu(v-if='!store.mobile' mode='horizontal' :options='menuOpt')
		NButton(v-else @click='store.setMenu' quarternary)
			NIcon(size='28')
				MenuRound
</template>

<script setup>
import { NIcon, NSpace, NLayoutHeader, NImage, NMenu, NButton } from 'naive-ui'
import { ref, h } from 'vue'
import NLink from '~/components/NLink.vue'
import { MenuRound } from '@vicons/material'
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
.n-layout-header
	.logo
		padding: 0.5rem 1.25rem 0
	.n-space
		height: 80px
		width: auto
		align-items: center
		margin: 0 auto
		padding: 0 1.25rem
		text-transform: uppercase
		flex-flow: row nowrap !important
	.n-button
		--n-border: none !important
		--n-border-hover: none !important
		--n-border-pressed: none !important
		--n-border-focus: none !important
@media (max-width:780px)
	.n-layout-header
		.n-space
			.n-menu
				position: absolute
				top: 0
				right: 0
				z-index: 10
</style>
