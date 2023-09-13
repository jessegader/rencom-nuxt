<template>
    <h1>Blog</h1>
    <ul>
        <li v-for="post in posts" :key="post.id">
            <NuxtLink :href="`/${post.id}`">
                <h2>{{ post.title }}</h2>
            </NuxtLink>
        </li>
    </ul>
</template>

<script setup>
const { getItems } = useDirectusItems()
const posts = await getItems({ collection: 'news' })
</script>
