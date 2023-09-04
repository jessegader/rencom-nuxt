<template>
    <h1>{{ news.title }}</h1>
    <p>{{ news.desc }}</p>
</template>

<script setup>
const { $directus, $readItems } = useNuxtApp()

const news = await useAsyncData('news', () => {
    return $directus.request($readItems('news'))
})
</script>