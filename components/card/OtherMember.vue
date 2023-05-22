<template>

    <div v-for="image in other.attributes.mainProfile">
      <div class="grid justify-items-center gap-2 " >
        <nuxt-img class="w-[75px] h-[75px]  object-cover rounded-[100%] ring-2 ring-emerald-600" provider="strapi" :src="`${image.attributes.url}`" />
        <p class="interFont">{{other.attributes.name}}</p>
        <NuxtLink class="text-emerald-600 text-xl  underline " :to="`/members/${other.id}`">Oshi!</NuxtLink>
      </div>
    </div>

</template>

<script setup>
const {other} = defineProps(['other'])
</script>

<style scoped>

</style>