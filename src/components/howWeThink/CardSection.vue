<template>
    <div class="content">
        <OneCard />
        <SecondCard />
    </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    components: {
        OneCard: defineAsyncComponent(() => import("./Cards/OneCard.vue")),
        SecondCard: defineAsyncComponent(() => import("./Cards/SecondCard.vue")),
    },
    mounted() {

    }
}
</script>

<style lang="scss" scoped>
.content {
    background: #162B3E;
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

</style>