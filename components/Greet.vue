<template>
  <div class="greet flex items-center text-2xl">
    <p>{{greets}}</p>
    <nuxt-link class="text-white" :to="`${link}`">{{target}}</nuxt-link>
  </div>
</template>

<script setup>

const {greet} = defineProps(['greets','target','link'])

const {data : member} = ''
</script>

<style scoped>
.greet {
  font-family: 'Bree Serif',serif;
  font-weight: bold;
}
</style>