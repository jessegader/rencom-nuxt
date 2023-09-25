<template lang="pug">
NConfigProvider(:theme='lightTheme' :theme-overrides='themeOverrides' :class='store.view')
	NScrollbar(style='max-height:100dvh')
		NSpace(vertical)
			NLayout
				NDrawer(v-model:show='store.menuOpen' :width='220' :placement='right')
					NDrawerContent
						NMenu.mobile(mode='vertical' :options='menuOpt')
				Header
				NuxtPage
				Footer
</template>

<script setup>
import { NThemeEditor, NConfigProvider, NScrollbar, darkTheme, lightTheme, NSpace, NLayout, NDrawer, NDrawerContent, NMenu } from 'naive-ui'
const { getItems } = useDirectusItems()
const pages = await getItems({ collection: 'pages' })
import { useMainStore } from '@/store'
const store = useMainStore()
import NLink from '~/components/NLink.vue'

store.handleMobile('780')
const slugIt = (val) =>
	val
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, '')
		.replace(/[\s_-]+/g, '-')
		.replace(/^-+|-+$/g, '')

let menuOpt = []
pages.forEach((el) => (menuOpt = [{ key: el.id, label: () => h(NLink, { to: `/${slugIt(el.title)}` }, el.title) }, ...menuOpt].sort((a, b) => a.key - b.key)))

const themeOverrides = {
	common: {
		primaryColor: '#36108B',
		primaryColorHover: '#665EA8',
		primaryColorPressed: '#665EA8',
		primaryColorSuppl: 'rgba(69, 66, 149, 1)',
	},
}
</script>

<style lang="sass">
.n-scrollbar-rail
	width: 12px !important
	.n-scrollbar-rail__scrollbar
		width: 10px !important
.header
	div:nth-child(2)
		margin-left: auto
	.n-menu.n-menu--horizontal .n-menu-item-content
		padding: 0 14px 0 0
	.n-menu.n-menu--horizontal .n-menu-item-content-header
		overflow: visible
		text-overflow: unset
.logo img
	width: 100%
	max-width: 260px
.n-drawer-body-content-wrapper
	padding: 1rem !important
.mobile .n-menu-item-content:hover:before,
.mobile .n-menu-item-content:active:before,
.mobile .n-menu-item-content:focus:before
	background-color: rgb(102 94 168 / 20%) !important
</style>
