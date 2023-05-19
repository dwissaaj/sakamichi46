<template>
  <div class="p-4 border-2 border-purple-300 rounded-md">
    <Icon class="w-12 h-8" name="ph:microphone-stage-fill" />
    <p>{{memberCareer.attributes.group}}</p>
    <p>{{memberCareer.attributes.generation}}th generation</p>
    <p>Debut {{memberCareer.attributes.debut.substr(0,4)}}</p>
  </div>
</template>

<script setup>
const {memberCareer} = defineProps(['memberCareer'])
</script>

<style scoped>

</style>