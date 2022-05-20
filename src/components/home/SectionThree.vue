<template>
  <div id="pinContainer" class="content-sections">

    <div class="panel one">
      <StOne />
    </div>

    <div class="panel two">
      <StTwo />
    </div>

    <div class="panel three">
      <StThree />
    </div>

    <div class="panel four">
      <StFour />
    </div>
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
  },
  mounted() {
    var controller = new ScrollMagic.Controller();

    
  }
};
</script>

<style lang="scss" scoped>
#pinContainer {
  width: 100%;
  height: 400vh;
  background: #162b3e;
  overflow: hidden;
}

.panel {
  height: 100vh;
  width: 100%;
  position: relative;
}

.one {
  z-index: 1;
}

.two {
  z-index: 2;
}

.three {
  z-index: 3;
}

.four {
  z-index: 4;
}
</style>