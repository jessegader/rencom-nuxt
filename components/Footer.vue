<template lang="pug">
NLayoutFooter(bordered)
	include ../assets/pug/index
	NGrid(:cols='4')
		NGi.left
			NuxtLink(:to='data.footerButtonLink')
				NButton(type='primary' size='large' icon-placement='right') {{ data.footerButtonText }}
					template(#icon)
						NIcon
							+renIcon
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
			NMenu.footer-menu(mode='horizontal' :options='menuOpt')
			NH4(type='primary' v-html='data.footerCallout')
			span(v-html='`© ${getYear()} Renegade Communications`')
		NGi.right
			NImage.footer-logo(preview-disabled width='180' :src='`${store.assets}${data.footerLogo}`')
</template>

<script setup>
import { ref, h } from 'vue'
import { NSpace, NLayoutFooter, NText, NImage, NButton, NIcon, NMenu, NGrid, NGi, NH4 } from 'naive-ui'
import { FacebookF as Facebook, VimeoV as Vimeo, LinkedinIn as LinkedIn, Twitter } from '@vicons/fa'
import NLink from '~/components/NLink.vue'

import { useMainStore } from '@/store'
const { getItems } = useDirectusItems()
const data = await getItems({ collection: 'footer' })
const global = await getItems({ collection: 'global' })
const pages = await getItems({ collection: 'pages' })
const store = useMainStore()

let menuOpt = []
const getLink = (val) => global.links.find((el) => el.title === val).link
const getYear = () => new Date().getFullYear()
pages
	.filter((el) => el.slug !== 'media-production')
	.forEach((el) => (menuOpt = [{ key: el.sort, label: () => h(NLink, { to: `/${el.slug}` }, el.title) }, ...menuOpt].sort((a, b) => a.key - b.key)))

console.log(menuOpt)
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
				margin: 1.4rem 0 0 -0.15rem
				gap: 0 1.6rem !important
			.n-button
				width: 160px
		.center
			text-align: center
			.footer-menu
				font-size: 142%
			.n-h4
				color: #36108B
				font-size: 1.3rem
				font-weight: 600
				text-transform: none
				letter-spacing: -0.01rem
				margin-top: 0.5rem
		.right
			align-items: flex-end
			.n-image
				max-width: 135px
@media (max-width:780px)
	.n-layout-footer
		padding: 1rem
		.n-grid
			grid-template-columns: none !important
			grid-template-rows: repeat(2, minmax(0px, 1fr))
			& > div
				grid-column: auto !important
				width: 100%
				align-items: center !important
				text-align: center !important
			.right
				display: none
			.center
				padding: 1rem 0
				text-align: center
				.footer-menu
					font-size: 1rem
				.n-h4
					font-size: 1.15rem
			.left
				margin-top: 0.5rem
				h4
					br
						display: none
</style>

<style lang="sass">
.n-layout-footer .center .n-menu-item-content
	padding: 0 4px
</style>
