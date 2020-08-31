<template>
  <div id="app">
    <img alt="Vue logo" :src="log" />
    <h2>這裡是routes</h2>
    {{ test }}
    <HelloWorld msg="pageTwo: HelloWorld" />
    <button @click="testGetVuex()">測試 取得 Vuex 實體</button>
    <router-link to="/">Go to index</router-link>
  </div>
</template>

<script>
import HelloWorld from "./../components/HelloWorld.vue";
import log from "./../assets/logo.png";
// import "./pageTwo.css";

export default {
  name: "PageTwo",
  components: {
    HelloWorld,
  },
  methods: {
    testGetVuex() {
      // 透過 testGetVuex 事件 來呼叫 Vuex
      console.log(this.$store);
      console.log(this.$store.state);
      this.$store.dispatch("GET_UserList", [123]);
      //GET_ProductTypes: (payload, loading) => dispatch({ type: 'productTypes/GET_ProductTypes', payload, loading }),
    },
  },
  data() {
    return {
      log,
      test: 123,
    };
  },
};
</script>
