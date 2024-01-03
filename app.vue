<template lang="pug">
NConfigProvider(:theme='lightTheme' :theme-overrides='themeOverrides' :class='store.view')
    NGlobalStyle
    NScrollbar(style='max-height:100dvh')
        NSpace(vertical)
            NLayout
                NDrawer(v-model:show='store.menuOpen' :width='220' :placement='right')
                    NDrawerContent
                        NMenu.mobile(mode='vertical' :options='menuOpt')
                NAffix(:trigger-top='80' :top='0')
                    Header
                NuxtPage
                Footer
</template>

<script setup>
import { ref, h } from 'vue'
import { NThemeEditor, NConfigProvider, NGlobalStyle, NScrollbar, darkTheme, lightTheme, NSpace, NLayout, NDrawer, NDrawerContent, NMenu, NAffix } from 'naive-ui'
import NLink from '~/components/NLink.vue'

import { useMainStore } from '@/store'
const { getItems } = useDirectusItems()
const pages = await getItems({ collection: 'pages' })
const store = useMainStore()

store.handleMobile('780')

let menuOpt = []
pages.forEach((el) => (menuOpt = [{ key: el.sort, label: () => h(NLink, { to: `/${el.slug}` }, el.title) }, ...menuOpt].sort((a, b) => a.key - b.key)))

const themeOverrides = {
	common: {
		primaryColor: '#36108B',
		primaryColorHover: '#665EA8',
		primaryColorPressed: '#665EA8',
		primaryColorSuppl: 'rgba(69, 66, 149, 1)',
		fontFamily: 'Mulish',
	},
}
</script>

<style lang="sass">
.n-config-provider
    position: relative
    height: calc(100dvh - 80px)
    top: 80px
.n-affix.n-affix--affixed
    width: 100%
    z-index: 999
.n-scrollbar-rail
    width: 12px !important
    margin-top: 5px
    margin-bottom: 5px
    .n-scrollbar-rail__scrollbar
        width: 10px !important
</style>
