<template lang="pug">
NCard
  h1 {{ post.title }}
</template>

<script setup>
import { NCard } from 'naive-ui'
const route = useRoute()
const { getItems } = useDirectusItems()
const query = await getItems({ collection: 'news', params: { filter: { id: route.params.id } } })
const post = await query.shift()

// const post = async () => {
//   try {
//     const filters = { id: route.params.id }
//     const items = await getItems({
//       collection: 'posts',
//       params: {
//         filter: filters,
//       },
//     })
//   } catch (e) { }
// }
// if (!post.value)
//   throw createError({
//     statusCode: 404,
//     statusMessage: 'Post Not Found',
//   })
</script>
