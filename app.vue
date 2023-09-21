<template lang="pug">
NConfigProvider(:theme='lightTheme' :theme-overrides='themeOverrides' :class='store.view')
	NScrollbar(style='max-height:100dvh')
		NSpace(vertical)
			NLayout
				Header
				NuxtPage
				Footer
</template>

<script setup>
import { useMainStore } from '@/store'
const store = useMainStore()
store.handleMobile('780')

import { NThemeEditor, NConfigProvider, NScrollbar, darkTheme, lightTheme, NSpace, NLayout } from 'naive-ui'
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
.rc-menu
	div:nth-child(2)
		margin-left: auto
	.n-menu.n-menu--horizontal .n-menu-item-content
		padding: 0 18px 0 0
.logo img
	width: 100%
	max-width: 260px
</style>
