<template>

    <div v-for="image in other.attributes.mainProfile">
      <div class="grid justify-items-center m-2" >
        <div class="hover:text-emerald-600 hover:no-underline underline">
          <NuxtLink class=" grid justify-items-center gap-2" :to="`/members/${other.id}`">
            <nuxt-img class="w-[75px] h-[75px] object-cover rounded-[100%] ring-2 ring-black hover:ring-emerald-600" provider="strapi" :src="`${image.attributes.url}`" />
            <p class="interFont ">{{other.attributes.name}}</p>
          </NuxtLink>
        </div>

      </div>
    </div>

</template>

<script setup>
const {other} = defineProps(['other'])
</script>

<style scoped>

</style>