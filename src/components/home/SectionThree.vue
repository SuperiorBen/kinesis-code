<template>
  <div class="content-sections">
    <StOne />
    <StTwo />
    <StThree />
    <StFour />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
  components: {
    StOne: defineAsyncComponent(() => import("./sectionThree-components/StOne.vue")),
    StTwo: defineAsyncComponent(() => import("./sectionThree-components/StTwo.vue")),
    StThree: defineAsyncComponent(() => import("./sectionThree-components/StThree.vue")),
    StFour: defineAsyncComponent(() => import("./sectionThree-components/StFour.vue")),
  }
};
</script>

<style lang="scss" scoped>
.content-sections {
  width: 100%;
  height: 300vh;
  background: #162b3e;
  overflow: hidden;
}

</style>