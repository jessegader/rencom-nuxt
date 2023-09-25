<template lang="pug">
NLayoutFooter(bordered)
	include ../assets/pug/index
	NGrid(:cols='4')
		NGi.left
			NText(v-html='data.footerContact')
			NSpace.social(horizontal)
				a(:href='getLink("facebook")')
					NIcon(size='20')
						Facebook
				a(:href='getLink("twitter")')
					NIcon(size='20')
						Twitter
				a(:href='getLink("linkedin")')
					NIcon(size='20')
						LinkedIn
				a(:href='getLink("vimeo")')
					NIcon(size='20')
						Vimeo
		NGi.center(span='2')
			NH4(type='primary' v-html='data.footerCallout')
			NMenu.footer-menu(mode='horizontal' :options='menuOpt')
			NuxtLink(:to='data.footerButtonLink')
				NButton(type='primary' size='large' icon-placement='right') {{ data.footerButtonText }}
					template(#icon)
						NIcon
							+renIcon
		NGi.right
			NImage.footer-logo(preview-disabled width='180' :src='`${store.assets}${data.footerLogo}`')
</template>

<script setup>
import { ref, h } from 'vue'
import { NSpace, NLayoutFooter, NText, NImage, NButton, NIcon, NMenu, NGrid, NGi, NH4 } from 'naive-ui'
import { FacebookF as Facebook, VimeoV as Vimeo, LinkedinIn as LinkedIn, Twitter } from '@vicons/fa'
import NLink from '~/components/NLink.vue'
const renderIcon = (icon) => () => h(NIcon, () => h(icon))

import { useMainStore } from '@/store'
const { getItems } = useDirectusItems()
const data = await getItems({ collection: 'footer' })
const global = await getItems({ collection: 'global' })
const pages = await getItems({ collection: 'pages' })
const store = useMainStore()

const getLink = (val) => global.links.find((el) => el.title === val).link
const slugIt = (val) =>
	val
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, '')
		.replace(/[\s_-]+/g, '-')
		.replace(/^-+|-+$/g, '')

let menuOpt = []
data.footerMenu.forEach((el) => {
	menuOpt = [{ key: el.id, label: () => h(NLink, { to: `/${slugIt(pages.find((page) => page.id == el).title)}` }, pages.find((page) => page.id == el).title) }, ...menuOpt]
})
</script>

<style lang="sass" scoped>
.n-layout-footer
	padding: 2rem
	display: flex
	justify-content: center
	.n-grid
		height: 100%
		max-width: 1200px
		& > div
			display: flex
			flex-flow: column nowrap
			justify-content: center
			align-items: center
		.left
			align-items: flex-start
			.social
				margin: 0.25rem 0 0 -0.25rem
				gap: 0 1.25rem !important
		.center
			text-align: center
			.footer-menu
				font-size: 94%
				margin-bottom: 0.5rem
			.n-h4
				color: #36108B
				letter-spacing: -0.005rem
				margin-bottom: 0.25rem
		.right
			align-items: flex-end
			.n-image
				max-width: 180px
@media (max-width:780px)
	.n-layout-footer
		padding:  0 1rem 1rem
		.n-grid
			grid-template-columns: none !important
			grid-template-rows: repeat(3, minmax(0px, 1fr))
			& > div
				grid-column: auto !important
				width: 100%
				align-items: center !important
				text-align: center !important
			.right
				margin-top: 0.75rem
			.center
				border-bottom: 1px solid #f0f0f0
			.left
				order: 2
				margin-top: 1rem
				border-top: 1px solid #f0f0f0
				h4
					br
						display: none
</style>

<style lang="sass">
.n-layout-footer .center .n-menu-item-content
	padding: 0 6px
</style>
