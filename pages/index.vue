<template lang="pug">
n-config-provider(:theme='darkTheme')
    NSpace(vertical)
        NLayout
            NLayoutHeader(bordered) 
                NMenu(mode='horizontal' :options='menuOpt')
            NLayout(has-sider)
                NLayoutSider(
                    bordered
                    show-trigger='bar'
                    collapse-mode='width'
                    :collapsed-width='64'
                    :width='240'
                    :native-scrollbar='false'
                    :collapsed='collapsed'
                    @collapse='collapsed = true'
                    @expand='collapsed = false'
                    )
                    NMenu.side(
                        :collapsed-width='64'
                        :collapsed-icon-size='22'
                        :options='sideOpt'
                    )
                NLayout.content
                    NAlert(
                        title='Naive UI Works!'
                        type='default'
                        closable)
                        template(#icon)
                            NIcon
                                DesignServicesRound
            NLayoutFooter(bordered)
                NMenu(mode='horizontal' :options='menuOpt')
</template>

<script setup>
import { ref, h, defineComponent } from 'vue'
import { NConfigProvider, darkTheme, NIcon, NSpace, NLayout, NLayoutHeader, NLayoutSider, NLayoutFooter, NMenu, NAlert } from 'naive-ui'
import { BoltRound, DesignServicesRound } from '@vicons/material'

const { getItems } = useDirectusItems()
const news = await getItems({ collection: 'news' })

const renderIcon = (icon) => () => h(NIcon, () => h(icon))

const collapsed = ref(true)

const menuOpt = [
	{
		label: news[0].desc,
		key: 'm1',
		icon: renderIcon(BoltRound),
	},
]

const sideOpt = [
	{
		label: news[0].desc,
		key: 's1',
		icon: renderIcon(BoltRound),
	},
	{
		label: news[0].desc,
		key: 's2',
		icon: renderIcon(BoltRound),
	},
	{
		label: news[0].desc,
		key: 's3',
		icon: renderIcon(BoltRound),
	},
	{
		label: news[0].desc,
		key: 's4',
		icon: renderIcon(BoltRound),
	},
	{
		label: news[0].desc,
		key: 's5',
		icon: renderIcon(BoltRound),
	},
]
</script>
<style lang="sass">
.n-menu
    height: 60px
    .n-menu-item
        height: 100%
    &.side
        height: auto
    .n-menu-item
        height: 60px
.content
    min-height: calc(100dvh - 122px)
</style>
