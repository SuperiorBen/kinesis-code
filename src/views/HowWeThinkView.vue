<template>
    <MainSection />
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    components: {
        MainSection: defineAsyncComponent(() => import("../components/howWeThink/MainSection.vue")),
    }
}
</script>

<style>
</style>