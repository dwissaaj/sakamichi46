<template>
  <div class="greet flex gap-2 items-center">
    <Icon name="material-symbols:book-outline" />
    <h1>{{greet}}</h1>
  </div>
</template>

<script setup>

const { greet } = defineProps(['greet'])
</script>

<style scoped>
.greet {
  font-family: 'Bree Serif',serif;
  font-weight: bold;
}
</style>