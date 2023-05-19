<template>
    <div class="my-12 mx-6 flex items-center justify-center text-4xl">
      <Greet :target="'Our Lovely Idols'" :link="'/'" />
    </div>
</template>

<script setup>
useSeoMeta({
  title: 'Sakamichi Fansite Homepage ',
  ogTitle: 'Fanpage where Talk about Sakamichi',
  description: 'This is a fan site where talk all about sakamichi members single and infomartion',
})
</script>

<style scoped>



</style>