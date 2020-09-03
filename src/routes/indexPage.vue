<template>
  <div id="app">
    <img alt="Vue logo" :src="log" />
    <h2>這裡是routes</h2>
    <HelloWorld msg="components's msg form routes : HelloWorld" />
    <div>{{ test }}</div>
    <button @click="testGetVuex()">測試 取得 Vuex 實體</button>
    <router-link to="/two">Go to two</router-link>
  </div>
</template>

<script>
import HelloWorld from "./../components/HelloWorld.vue";
import log from "./../assets/logo.png";
//https://cythilya.github.io/2017/04/15/vue-watch/
//https://medium.com/pierceshih/vue-js-%E5%AD%B8%E7%BF%92%E7%AD%86%E8%A8%98-day14-vue%E7%94%9F%E5%91%BD%E9%80%B1%E6%9C%9F-65bc934dfd47
//https://www.jianshu.com/p/8642262f4403

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
      // console.log(this.$store.state.userList.token);
      //https://router.vuejs.org/guide/essentials/navigation.html
      // console.log(this.$router);
      this.test = "987465132";
    },
  },
  data() {
    return {
      log,
      test: "123",
    };
  },
};
</script>
<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
