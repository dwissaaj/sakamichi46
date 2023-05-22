<template>
  <div v-if="`${memberColor.attributes.lgOne} == sakura`">
    <div class="bg-rose-300 rounded-xl p-2">
      <p class="text-center text-white capitalize">{{memberColor.attributes.lgOne}}</p>
    </div>
  </div>
  <div v-else-if="`${memberColor.attributes.lgOne} == white`">
    <div class="bg-neutral-200 rounded-xl p-2">
      <p class="text-center text-black capitalize">{{memberColor.attributes.lgOne}}</p>
    </div>
  </div>
  <div v-else-if="`${memberColor.attributes.lgOne} == orange`">
    <div class="bg-orange-600 rounded-xl p-2">
      <p class="text-center text-white capitalize">{{memberColor.attributes.orange}}</p>
    </div>
  </div>
  <div v-else-if="`${memberColor.attributes.lgOne} == green`">
    <div class="bg-green-600 rounded-xl p-2">
      <p class="text-center text-white capitalize">{{memberColor.attributes.lgOne}}</p>
    </div>
  </div>
  <div v-else-if="`${memberColor.attributes.lgOne} == light blue`">
    <div class="bg-sky-600 rounded-xl p-2">
      <p class="text-center text-white capitalize">{{memberColor.attributes.lgOne}}</p>
    </div>
  </div>
  <div v-else-if="`${memberColor.attributes.lgOne} == purple`">
    <div class="bg-purple-600 rounded-xl p-2">
      <p class="text-center text-white capitalize">{{memberColor.attributes.lgOne}}</p>
    </div>
  </div>
</template>

<script setup>
const {memberColor} = defineProps(['memberColor'])
</script>

<style scoped>

</style>