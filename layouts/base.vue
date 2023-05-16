<template>
  <default />
  <div class="w-full max-w-[1440px] mx-auto">
    <div class="px-4 lg:px-16">
      <slot/>
    </div>
  </div>
</template>

<script setup>

import Default from "~/layouts/default.vue";
</script>

<style scoped>

</style>