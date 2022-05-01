<template>
  <div class="home">
    <MainSection/>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'HomeView',
  components:
  {
    MainSection: defineAsyncComponent(() => import("../components/home/MainSection.vue"))
}
}
</script>
