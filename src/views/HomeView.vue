<template>
  <div class="home">
    <MainSection/>
    <SectionTwo/>
    <SectionThree/>
    <SectionFour/>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
  name: 'HomeView',
  components:
  {
    MainSection: defineAsyncComponent(() => import("../components/home/MainSection.vue")),
    SectionTwo:defineAsyncComponent(() => import("../components/home/SectionTwo.vue")),
    SectionThree:defineAsyncComponent(() => import("../components/home/SectionThree.vue")),
    SectionFour:defineAsyncComponent(() => import("../components/home/SectionFour.vue")),
}
}
</script>
