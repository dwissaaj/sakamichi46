<template>
  <div class="grid grid-cols-2 p-2 gap-2 capitalize globalFont space-y-4 ">
    <div class="" v-for="image in dataMember.attributes.mainProfile">
      <nuxt-img class="rounded-md " provider="strapi" :src="`${image.attributes.url}`" />
    </div>
    <div >
      <h1 class="text-4xl ">{{dataMember.attributes.name}}</h1>
      <span class="text-4xl ">{{dataMember.attributes.kanji}} <span class="text-sm">{{dataMember.attributes.katakana}}</span></span>
      <div class="flex flex-row gap-2">
        <span v-for="data in dataMember.attributes.otherNames" class="text-base">| {{data.nicknames}}</span>
      </div>
      <div class="flex justify-start space-x-4">
        <div>
          <p>Birthdate</p>
          <p>Age</p>
          <p>Height</p>
        </div>
        <div>
          <p>{{dataMember.attributes.birthdate}}</p>
          <p>{{dataMember.attributes.age}}</p>
          <p class="lowercase">{{dataMember.attributes.height}} cm</p>
        </div>
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