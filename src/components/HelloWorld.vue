<template>
  <div class="hello">
    <h2>這裡是components!!!!!!!!!!!!</h2>
    <span class="md-display-1">{{ msg }}</span>
    <span class="md-display-1">{{ msg }}</span>
    <span class="md-display-1">{{ msg }}</span>
    <span class="md-display-1">{{ msg }}</span>
    <span class="md-display-1">{{ msg }}</span>
  </div>
</template>

<script>

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>>