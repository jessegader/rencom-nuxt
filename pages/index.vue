<template lang='pug'>
.min-h-screen.flex.flex-col
    header.navbar.bg-neutral
        Bars3Icon.icon.h-9.w-9.text-base
        .btn.btn-primary(@click='showToast') {{ news[0].desc }}
    section.flex-1.flex.flex-col(class='sm:flex-row')
        main.flex-1.p-2
            .toast.toast-center.toast-middle(v-show='show' )
                .alert.alert-info
                    span {{ news[0].desc }}
    footer.footer.bg-neutral.p-10
</template>

<script setup>
const { getItems } = useDirectusItems()
const news = await getItems({
    collection: "news"
})
import { ref } from 'vue'
import { Bars3Icon } from '@heroicons/vue/24/solid'
// state
const show = ref(false)

// actions
function showToast() {
    show.value = !show.value
}

setTimeout(() => {
    showToast()
}, 1500)
</script>

<style lang="sass">
.alert
    gap: 0
    font-size: 1.15rem
    font-weight: 600
    text-transform: uppercase
    padding: 1rem 1.5rem
.btn
    margin: 0.25rem 0 0.25rem auto
</style>