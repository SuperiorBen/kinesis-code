<template>
    <div class="content">
        <OneCard />
    </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    components: {
        OneCard: defineAsyncComponent(() => import("./Cards/OneCard.vue"))
    },
    mounted() {

    }
}
</script>

<style lang="scss" scoped>
.content {
    background: #162B3E;
    width: 100%;
    height: 100vh;
}
</style>