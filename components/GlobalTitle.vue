<template>
  <div class="greet title text-white flex uppercase items-center text-2xl">
    <p>{{title}}</p>
  </div>
</template>

<script>
export default {
name: "GlobalTitle",
  props: {
    title: String
  }
}
</script>

<style scoped>
.title {
  font-family: 'Inter',serif;
  font-weight: bold;
}
</style>