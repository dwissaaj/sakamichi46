<template>
  <div v-for="sosmed in sosmedMember.attributes.sosmed" class="text-xs lg:text-base rounded-md outline outline-white bg-black p-4" >
    <NuxtLink :to="`${sosmed.url}`"
              class="globalFont text-center text-white
                 capitalize font-semibold">[ {{sosmed.type}} ]</NuxtLink>
  </div>
</template>

<script setup>
const {sosmedMember} = defineProps(['sosmedMember'])
</script>

<style scoped>

</style>