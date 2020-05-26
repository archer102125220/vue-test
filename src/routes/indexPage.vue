<template>
  <div id="app">
    <img alt="Vue logo" src="./../assets/logo.png" />
    <h2>這裡是routes</h2>
    <HelloWorld msg="components's msg form routes : HelloWorld" />
  </div>
</template>

<script>
import HelloWorld from "./../components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  computed: {
    count() {
      console.log(this.$store.state);
      // return this.$store.state;
      return null;
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
