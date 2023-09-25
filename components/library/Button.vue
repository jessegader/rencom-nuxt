<template lang="pug">
.library-button
	NuxtLink(:to='props.data.buttonLink')
		NButton(type='primary' size='large' icon-placement='right') {{ props.data.buttonText }}
			template(#icon)
				NIcon(:component='StreamRound')
</template>

<script setup>
import { NButton, NIcon } from 'naive-ui'
import { StreamRound } from '@vicons/material'
// const renderIcon = (icon) => () => h(NIcon, () => h(icon))

import { useMainStore } from '@/store'
const store = useMainStore()
const props = defineProps({
	data: {
		type: Object,
		default: {},
	},
})

// var parser = new DOMParser()
// var customIcon = parser.parseFromString(`${store.assets}${props.data.buttonCustomIcon}`, 'image/svg+xml')
// console.log(customIcon)
// let icon = `${props.data.buttonIcon}Round`
</script>

<style lang="sass"></style>
