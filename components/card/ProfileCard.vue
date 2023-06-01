<template>
  <div class="grid grid-cols-2 p-2 gap-2 capitalize globalFont text-white border-2 rounded-md border-zinc-300 transition ease-in-out duration-300 hover:-translate-x-8 shadow-[7px_5px_0px_0px_rgba(219,0,219,1)] hover:shadow-[-20px_-25px_0px_-14px_rgba(219,0,219,1)]">
    <div class="" v-for="image in dataMember.attributes.mainProfile">
      <nuxt-img class="rounded-md transition ease-in-out duration-300 hover:scale-150 hover:translate-x-[50px] cursor-zoom-in shadow-lg shadow-slate-800" provider="bucket" :src="`${image.attributes.url}`" />
    </div>
    <div class="flex flex-col justify-start ">
      <h1 class="text-4xl ">{{dataMember.attributes.name}}</h1>
      <p class="text-4xl text-start ">{{dataMember.attributes.kanji}} </p>
      <p class="text-sm text-start">{{dataMember.attributes.katakana}}</p>
      <div class="flex flex-row gap-2">
        <p v-for="data in dataMember.attributes.otherNames" class="text-base">| {{data.nicknames}}</p>
      </div>

    </div>
  </div>
</template>

<script setup>
const {dataMember} = defineProps(['dataMember'])
</script>

<style scoped>
.globalFont {
  font-family: 'Inter',sans-serif;
  font-weight: 300;
}
</style>