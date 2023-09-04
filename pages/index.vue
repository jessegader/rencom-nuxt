<template lang='pug'>
.navbar.bg-neutral 
    .btn.btn-primary {{ news[0].title }}
.toast.toast-center.toast-middle
    .alert.alert-info
        span {{ news[0].desc }}
</template>

<script setup>
const { getItems } = useDirectusItems()

const news = await getItems({
    collection: "news"
})
</script>

<style lang="sass">
.alert
    gap: 0
    font-size: 1.15rem
    font-weight: 600
    text-transform: uppercase
    padding: 1rem 1.5rem
</style>