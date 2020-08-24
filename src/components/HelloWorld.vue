<template>
  <div class="hello">
    <h2>這裡是components</h2>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import "./HelloWorld.css";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>