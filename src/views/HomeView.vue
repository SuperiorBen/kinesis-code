<template>
  <div class="home">
    <MainSection/>
    <SectionTwo/>
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
}
}
</script>
