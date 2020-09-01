<template>
  <!-- https://www.zcfy.cc/article/building-renderless-vue-components  https://cythilya.github.io/2017/10/22/vue-component-dynamic-components/ -->
  <MyCmponents :is="layout">
    <!-- https://mini-ghost.dev/blog/dynamic-vue-layout/ -->
    <router-view :layout.sync="layout" />
  </MyCmponents>
</template>

<script>
//https://class-component.vuejs.org/
// import Vue from "vue";
// import Component from "vue-class-component";
const default_layout = "GlobalLayout";

// @Component
// export default class App extends Vue {
//   // name = "App";
//   computed() {
//       console.log(this.$route.meta.layout);
//     // layout() {
//     //   return this.$route.meta.layout || default_layout;
//     // }
//   };
// }

export default {
  name: "App",
  computed: {
    layout() {
      // console.log(this.$route.meta.layout);
      this.$store.dispatch("GET_userLogin", {
        payload: {
          account: "Marnie",
          password: "Marnie",
        },
      });
      return this.$route.meta.layout || default_layout;
    },
  },
};
</script>
