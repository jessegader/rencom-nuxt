<template lang='pug'>
.min-h-screen.flex.flex-col
    header.navbar.bg-neutral.shadow-down.z-10
        .btn.btn-ghost(@click='checkBox')
            Bars3Icon.icon.h-9.w-9.text-base
        .btn.btn-primary.left(@click='showToast') {{ news[0].desc }}
    section.flex-1.flex.flex-col(class='sm:flex-row')
        main.flex-1.z-0
            .drawer
                input#my-drawer.drawer-toggle(type='checkbox')
                .drawer-side
                    ul.menu.p-4.w-80.h-full.bg-neutral.text-base-content
                .drawer-content
                    .toast.toast-center.toast-middle(v-show='show' )
                        .alert
                            label.btn.btn-info(for='my-drawer') {{ news[0].desc }}
    footer.footer.bg-neutral.p-10.shadow-up.z-10
</template>

<script setup>
const { getItems } = useDirectusItems()
const news = await getItems({
    collection: "news"
})
import { ref, onMounted } from 'vue'
import { Bars3Icon } from '@heroicons/vue/24/solid'

// state
const show = ref(false)


// actions
function showToast() {
    show.value = !show.value
}
function checkBox() {
    const check = document.querySelector('#my-drawer')
    check.checked = !check.checked
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
    background-color: #272935
    border: none
.left
    margin: 0.25rem 0 0.25rem auto
.drawer
    height: 100%
    .drawer-side
        position: absolute
        height: 100%
.shadow-up
    box-shadow: (0 -4px 4px 1px rgb(0 0 0 / 0.08))
.shadow-down
    box-shadow: (0 4px 4px 1px rgb(0 0 0 / 0.08))
</style>