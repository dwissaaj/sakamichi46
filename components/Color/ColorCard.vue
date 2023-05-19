<template>
  <div v-if="`${memberColor.attributes.lgOne} || ${memberColor.attributes.lgTwo} === bg-green-800`">
    <div class="bg-green-800 rounded-xl p-2">
      <p class="text-center text-white capitalize">{{memberColor.attributes.lightcolor1}}</p>
    </div>
  </div>
  <div v-else-if="`${memberColor.attributes.lgOne} || ${memberColor.attributes.lgTwo} === bg-red-600`">
    <div class="bg-red-600 rounded-xl p-2">
      <p class="text-center text-white capitalize">{{memberColor.attributes.lightcolor1}}</p>
    </div>
  </div>
  <div v-else-if="`${memberColor.attributes.lgOne} || ${memberColor.attributes.lgTwo} === bg-orange-600`">
    <div class="bg-orange-600 rounded-xl p-2">
      <p class="text-center text-white capitalize">{{memberColor.attributes.lightcolor1}}</p>
    </div>
  </div>
  <div v-else-if="`${memberColor.attributes.lgOne} || ${memberColor.attributes.lgTwo} === bg-yellow-600`">
    <div class="bg-yellow-600 rounded-xl p-2">
      <p class="text-center text-white capitalize">{{memberColor.attributes.lightcolor1}}</p>
    </div>
  </div>
  <div v-else-if="`${memberColor.attributes.lgOne} || ${memberColor.attributes.lgTwo} === bg-pink-600`">
    <div class="bg-yellow-600 rounded-xl p-2">
      <p class="text-center text-white capitalize">{{memberColor.attributes.lightcolor1}}</p>
    </div>
  </div>
</template>

<script setup>
const {memberColor} = defineProps(['memberColor'])
</script>

<style scoped>

</style>