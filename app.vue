<template lang="pug">
NConfigProvider(:theme='lightTheme')
	NScrollbar(style='max-height:100dvh')
		NSpace(vertical)
			NLayout
				Header
				NuxtPage
				Footer
</template>

<script setup>
import {
	NThemeEditor,
	NConfigProvider,
	NScrollbar,
	darkTheme,
	lightTheme,
	NSpace,
	NLayout,
} from 'naive-ui'
const themeOverrides = {
	common: {
		primaryColor: '#36108BFF',
		primaryColorHover: '#5653bcFF',
		primaryColorPressed: '#6d4dbcFF',
		primaryColorSuppl: 'rgba(69, 66, 149, 1)',
	},
}
</script>

<style lang="sass">
	.n-scrollbar-rail
		width: 12px !important
		.n-scrollbar-rail__scrollbar
			width: 10px !important
	.max
		max-width: 1080px
		height: 80px
		align-items: center
		margin: 0 auto
	.rc-menu
		div:nth-child(2)
			margin-left: auto
		.n-menu-item-content:hover
			background-color: var(--n-item-color-hover)
</style>
