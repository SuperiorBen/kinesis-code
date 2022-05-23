<template>
    <MainSection />
    <CardSection />
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    components: {
        MainSection: defineAsyncComponent(() => import("../components/howWeThink/MainSection.vue")),
        CardSection: defineAsyncComponent(() => import("../components/howWeThink/CardSection.vue")),
    }
}
</script>

<style>
</style>