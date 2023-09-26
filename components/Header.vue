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
const data = await getItems({ collection: 'global' })
const pages = await getItems({ collection: 'pages' })

// menu options form pages
let menuOpt = []
pages.forEach((el) => (menuOpt = [{ key: el.id, label: () => h(NLink, { to: `/${getSlug(el.title)}` }, el.title) }, ...menuOpt].sort((a, b) => a.key - b.key)))

onMounted(() => {
	// add nav item clone for animation
	const items = document.querySelectorAll('.n-menu-item-content-header')
	items.forEach((item) => {
		const element = document.createElement('span')
		const text = document.createTextNode(item.firstChild.innerHTML)
		element.appendChild(text)
		element.style.opacity = 0
		item.prepend(element)
	})
})
</script>

<style lang="sass" scoped>
.n-layout-header
	.logo
		padding: 0.5rem 1.25rem 0 0
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
<style lang="sass">
.n-menu-item-content-header
	span
		position: absolute
		left: 0
		bottom: 10px
		opacity: 0
		color: rgb(102 94 168 / 30%)
		transition: all 0.35s ease-out
	&:hover span
		bottom: 0
		opacity: 1 !important
</style>
