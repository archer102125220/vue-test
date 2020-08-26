<template>
  <!-- https://www.zcfy.cc/article/building-renderless-vue-components -->
  <MyCmponents :is="layout">
    <!-- https://mini-ghost.dev/blog/dynamic-vue-layout/ -->
    <router-view :layout.sync="layout" />
  </MyCmponents>
</template>

<script>
const default_layout = "GlobalLayout";
export default {
  name: "App",
  computed: {
    layout() {
      console.log(this.$route.meta.layout);
      //https://cythilya.github.io/2017/10/22/vue-component-dynamic-components/
      return this.$route.meta.layout || default_layout;
    },
  },
};
</script>