<template lang="pug">
NCard(v-for='post in posts' :key='post.id')
    NuxtLink(:href='`/${post.id}`')
        h2 {{ post.title }}
</template>

<script setup>
import { NCard } from 'naive-ui'
const { getItems } = useDirectusItems()
const posts = await getItems({ collection: 'news' })
</script>
