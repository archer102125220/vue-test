<template>
  <div id="app">
    <img alt="Vue logo" src="./../assets/logo.png" />
    <h2>這裡是routes</h2>
    <HelloWorld msg="components's msg form routes : HelloWorld" />
    <button @click="testGetVuex()">測試 取得 Vuex 實體</button>
  </div>
</template>

<script>
import HelloWorld from "./../components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  methods: {
    testGetVuex() {
      // 透過 testGetVuex 事件 來呼叫 Vuex
      console.log(this.$store);
      console.log(this.$store.state);
    }
  }
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
