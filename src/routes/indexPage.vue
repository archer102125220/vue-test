<template>
  <div id="app">
    <img alt="Vue logo" :src="log" />
    <h2>這裡是routes</h2>
    <HelloWorld msg="components's msg form routes : HelloWorld" />
    <button @click="testGetVuex()">測試 取得 Vuex 實體</button>
    <router-link to="/two">Go to two</router-link>
  </div>
</template>

<script>
import HelloWorld from "./../components/HelloWorld.vue";
import log from "./../assets/logo.png";

export default {
  name: "indexPage",
  components: {
    HelloWorld,
  },
  created: function() {
    // this.testGetVuex();
  },
  watch: {
    // currentBranch: "fetchData",
  },
  filters: {
    // truncate: function (v) {
    //   var newline = v.indexOf("\n");
    //   return newline > 0 ? v.slice(0, newline) : v;
    // },
    // formatDate: function (v) {
    //   console.log({ v });
    //   return v.replace(/T|Z/g, " ");
    // },
  },
  methods: {
    testGetVuex() {
      // 透過 testGetVuex 事件 來呼叫 Vuex
      console.log(this.$store);
      console.log(this.$store.state);
      //https://router.vuejs.org/guide/essentials/navigation.html
      console.log(this.$router);
    },
  },
  data() {
    return { log };
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
