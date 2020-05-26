<template>
  <component :is="layout">
    <router-view :layout.sync="layout" />
  </component>
</template>

<script>
const default_layout = "GlobalLayout";
export default {
  name: "App",
  computed: {
    layout() {
      console.log(this.$store.state);
      return this.$route.meta.layout || default_layout;
    }
  }
};
</script>