<template>
  <div class="flex flex-col gap-1 justify-start border border-black bg-slate-200 rounded-md">
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