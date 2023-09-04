<template lang='pug'>
p {{ news[0].desc }}
</template>

<script setup>
const { getItems } = useDirectusItems()

const news = await getItems({
    collection: "news"
})
</script>