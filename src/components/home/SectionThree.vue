<template>
  <div class="content-sections">
    <StOne />
    <StTwo />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
  components: {
    StOne: defineAsyncComponent(() => import("./sectionThree-components/StOne.vue")),
    StTwo: defineAsyncComponent(() => import("./sectionThree-components/StTwo.vue")),
  }
};
</script>

<style lang="scss" scoped>
.content-sections {
  width: 100%;
  height: 200vh;
  background: #162b3e;
  overflow: hidden;
}

</style>