<script setup>
import Navbar from './Navbar.vue';
</script>

<template>
  <div class="layout">
    <Navbar />
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.sss {
  color: red;
}
</style>
