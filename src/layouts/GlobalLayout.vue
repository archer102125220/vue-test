<template>
  <span>
    <!-- slot 等於react的this.props.children -->
    <h2>這裡是layouts</h2>
    <slot></slot>
    <span v-for="(element, key) in this.$store.state.userList.users " :key="key">{{element}}</span>
  </span>
</template>
<script>
export default {
  name: "GlobalLayout",
  // props: {
  //   users: Array,
  // },
};
</script>
<style>
/* a {
  text-decoration: none;
} */

body > span {
  text-align: center;
}
</style>>