<template>
  <div class="border rounded-md border-zinc-300 bg-zinc-800 p-3 grid grid-cols-1 md:grid-cols-6 md:gap-4 interFont">
    <template class="" v-for="data in dataGallery">
      <template v-for="data2 in data.attributes.collection">
        <div v-for="data3 in data2.image.data">
            <nuxt-img class="transition ease-in-out duration-300 hover:scale-[2.0] flex gap-3 ring-1 ring-black rounded-md cursor-zoom-in" provider="bucket" :src="`${data3.attributes.url}`" />
            <NuxtLink class="capitalize text-xs underline text-white" :to="`${data2.sourceUrl}`" >{{data2.title}}</NuxtLink>
        </div>
      </template>
    </template>
  </div>
</template>

<script setup>

const {dataGallery} = defineProps(['dataGallery'])
</script>

<style scoped>

</style>