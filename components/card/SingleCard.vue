<template>
  <div class="grid grid-cols-1 interFont border-zinc-300 bg-zinc-800 rounded-md border p-4">
    <div v-for="dataSingles in dataSingle.attributes.singles" class="" >
      <div v-for="singleSecond in dataSingles">
        <div class="flex flex-row items-center space-x-3 my-4" v-for="imageCD in singleSecond.attributes.cover">
          <nuxt-img class="w-[75px]" provider="bucket" :src="`${imageCD.attributes.url}`" />
          <NuxtLink :to="`/single/${singleSecond.attributes.title}`"><p class="underline font-light interFont text-white hover:text-emerald-500">{{singleSecond.attributes.kanji}} - {{singleSecond.attributes.title}} ({{singleSecond.attributes.launch.substr(0,4)}})</p></NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const {dataSingle} = defineProps(['dataSingle'])
</script>

<style scoped>

</style>