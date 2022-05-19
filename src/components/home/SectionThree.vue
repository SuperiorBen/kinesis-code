<template>
  <div id="pinContainer" class="content-sections">

    <section class="panel one">
      <StOne />
    </section>

    <section class="panel two">
      <StTwo />
    </section>

    <section class="panel three">
      <StThree />
    </section>

    <section class="panel four">
      <StFour />
    </section>
  </div>
</template>

<script>
import { gsap, Linear } from 'gsap';
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

    // define movement of panels
    var wipeAnimation = gsap.timeline()
      .fromTo("section.panel.two", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
      .fromTo("section.panel.three", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
      .fromTo("section.panel.four", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone }); 

    // create scene to pin and link animation
    new ScrollMagic.Scene({
      triggerElement: "#pinContainer",
      triggerHook: "onLeave",
      duration: "300%"
    })
      .setPin("#pinContainer")
      .setTween(wipeAnimation)
      .addTo(controller);
  }
};
</script>

<style lang="scss" scoped>
#pinContainer {
  width: 100%;
  height: 100vh;
  background: #162b3e;
  overflow: hidden;
}

.panel {
  height: 100%;
  width: 100%;
  position: absolute;
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