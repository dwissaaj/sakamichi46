<template>
    <div class="my-12 mx-6 flex items-center justify-center text-4xl">
      <Greet :target="'Our Lovely Idols'" :link="'/'" />
    </div>
</template>

<script setup>
useHead({
  title: 'Sakamichi Fansite',
  meta : [
    {name: "description", content: 'Sakamichi Series Nogizaka46 Sakurazaka46 Fan Site and Fan Page'}
  ]
})
useSeoMeta({
  title: 'Sakamichi Fansite ',
  ogTitle: 'Fanpage where Talk about Sakamichi',
  description: 'This is a fan site where talk all about sakamichi members single and infomartion',
})
</script>

<style scoped>



</style>