<template>
  <div v-for="sosmed in sosmedMember.attributes.sosmed" class="rounded-md outline outline-white bg-black p-4" >
    <NuxtLink :to="`${sosmed.url}`"
              class="text-center text-white
                 capitalize font-semibold hover:ring-2 ring-white">[ {{sosmed.type}} ]</NuxtLink>
  </div>
</template>

<script setup>
const {sosmedMember} = defineProps(['sosmedMember'])
</script>

<style scoped>

</style>