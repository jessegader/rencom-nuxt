<template lang="pug">
NLayoutHeader(bordered)
    include ../assets/pug/index
    NSpace.header.max
        NuxtLink(to='/')
            NImage.logo(preview-disabled width='260' :src='`${store.assets}${data.logoLongBlack}`')
        NMenu(v-if='!store.mobile' mode='horizontal' :options='menuOpt.slice(0, menuOpt.length - 1)')
        NuxtLink(to='/contact')
            NButton(v-if='!store.mobile' type='primary' icon-placement='right') Talk To Us
                template(#icon)
                    NIcon
                        +renIcon
        NButton.mobile(v-if='store.mobile' @click='store.setMenu' quarternary)
            NIcon(size='28')
                MenuRound
</template>

<script setup>
import { NIcon, NSpace, NLayoutHeader, NImage, NMenu, NButton } from 'naive-ui'
import { ref, h, watch } from 'vue'
import NLink from '~/components/NLink.vue'
import { MenuRound } from '@vicons/material'
import { useMainStore } from '@/store'
const { getItems } = useDirectusItems()

const store = await useMainStore()
const data = await getItems({ collection: 'global' })
const pages = await getItems({ collection: 'pages' })

// menu options form pages
let menuOpt = []
pages.forEach((el) => (menuOpt = [{ key: el.sort, label: () => h(NLink, { to: `/${el.slug}` }, el.title) }, ...menuOpt].sort((a, b) => a.key - b.key)))

const cloneNav = () => {
	// add nav item clone for animation
	const items = document.querySelectorAll('.header .n-menu-item-content-header')
	items.forEach((item) => {
		const element = document.createElement('span')
		const text = document.createTextNode(item.firstChild.innerHTML)
		element.appendChild(text)
		element.style.opacity = 0
		item.prepend(element)
	})
}

onMounted(() => cloneNav())
watch(
	() => store.mobile,
	(val) => !val && setTimeout(() => cloneNav(), 1000)
)
</script>

<style lang="sass" scoped>
.n-layout-header
    .logo
        padding: 0.5rem 2.5rem 0 0
    .n-space
        height: 80px
        width: auto
        align-items: center
        margin: 0 auto
        padding: 0 1.25rem
        text-transform: uppercase
        flex-flow: row nowrap !important
        gap: 0.1rem !important
        transition: all 0.2s ease
        div:last-child
            min-width: 140px
    .n-button.mobile
        --n-border: none !important
        --n-border-hover: none !important
        --n-border-pressed: none !important
        --n-border-focus: none !important
        padding: 0
@media (max-width:780px)
    .n-layout-header
        .logo
            max-width: 220px
        .n-space
            .n-menu
                position: absolute
                top: 0
                right: 0
                z-index: 10
</style>
