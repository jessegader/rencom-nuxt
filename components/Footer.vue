<template lang="pug">
NLayoutFooter(bordered)
	NSpace.max(vertical justify='center' align='start')
		NText footer works!
</template>

<script setup>
import { NSpace, NLayoutFooter, NText } from 'naive-ui'
</script>

<style lang="sass" scoped>
.n-space
	height: 60px
	.n-text
		padding: 0 1.25rem
</style>
