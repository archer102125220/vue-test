<template>
  <span>
    <!-- slot 等於react的this.props.children -->
    <h2>這裡是layouts</h2>
    <slot></slot>
    <span>{{ users }}</span>
  </span>
</template>
<script>
import './GlobalLayout.css';

export default {
  name: 'GlobalLayout',
  props: {
    users: Array,
  },
};
</script>