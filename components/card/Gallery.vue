<template>
  <div class="border rounded-md border-slate-500 bg-gray-200 p-3 grid grid-cols-1 md:grid-cols-6 md:gap-4">
    <div class="" v-for="data in dataGallery">
      <div v-for="data2 in data.attributes.collection">
        <div v-for="data3 in data2.image.data">
          <nuxt-img class="transition ease-in-out duration-300 hover:scale-[2.0] flex gap-3 ring-1 ring-black rounded-md" provider="strapi" :src="`${data3.attributes.url}`" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const {dataGallery} = defineProps(['dataGallery'])
</script>

<style scoped>

</style>