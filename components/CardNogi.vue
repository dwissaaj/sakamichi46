<template>
  <div v-if="`${nogi.attributes.group}` === 'Nogizaka46'" class="globalFont flex flex-col capitalize  justify-items-center rounded-xl border p-3 shadow-[7px_5px_0px_0px_rgba(219,0,219,1)] hover:shadow-[9px_7px_0px_0px_rgba(219,0,219,1)] hover:bg-slate-200">
    <div v-for="data in nogi.attributes.image">
      <nuxt-img class="rounded-md" provider="strapi" :src="`${data.attributes.url}`" />
    </div>
    <p>{{nogi.attributes.names}} ({{nogi.attributes.age}})</p>
    <p>{{nogi.attributes.nameKanji}}</p>
    <p>{{nogi.attributes.birthplace}}</p>
    <div class="ring-2 hover:text-purple-500 mt-2 ring-purple-400 flex justify-center items-center gap-2 rounded-md">
      <NuxtLink class="" :to="`members/${nogi.id}`">Details</NuxtLink>
      <Icon name="material-symbols:send-outline-rounded" />
    </div>
  </div>
  <div v-if="`${nogi.attributes.group}` === 'Hinatazaka46'" class="globalFont flex flex-col capitalize  justify-items-center rounded-xl border p-3 shadow-[7px_5px_0px_0px_rgba(0,183,255,0.8)] hover:shadow-[9px_7px_0px_0px_rgba(0,183,255,0.8)] hover:bg-slate-200">
    <div v-for="data in nogi.attributes.image">
      <nuxt-img class="rounded-md" provider="strapi" :src="`${data.attributes.url}`" />
    </div>
    <p>{{nogi.attributes.names}} ({{nogi.attributes.age}})</p>
    <p>{{nogi.attributes.nameKanji}}</p>
    <p>{{nogi.attributes.birthplace}}</p>
    <div class="ring-2 ring-sky-500 hover:text-sky-500 mt-2 flex justify-center items-center gap-2 rounded-md">
      <NuxtLink class="" :to="`members/${nogi.id}`">Details</NuxtLink>
      <Icon name="material-symbols:send-outline-rounded" />
    </div>
  </div>
  <div v-if="`${nogi.attributes.group}` === 'Sakurazaka46'" class="globalFont flex flex-col capitalize  justify-items-center rounded-xl border p-3 shadow-[7px_5px_0px_0px_rgba(255,0,104,0.98)] hover:shadow-[9px_7px_0px_0px_rgba(255,0,104,0.98)] hover:bg-slate-200">
    <div v-for="data in nogi.attributes.image">
      <nuxt-img class="rounded-md" provider="strapi" :src="`${data.attributes.url}`" />
    </div>
    <p>{{nogi.attributes.names}} ({{nogi.attributes.age}})</p>
    <p>{{nogi.attributes.nameKanji}}</p>
    <p>{{nogi.attributes.birthplace}}</p>
    <div class="ring-2 ring-rose-500 hover:text-rose-500 mt-2 flex justify-center items-center gap-2 rounded-md">
      <NuxtLink class="" :to="`members/${nogi.id}`">Details</NuxtLink>
      <Icon name="material-symbols:send-outline-rounded" />
    </div>
  </div>
</template>
<script setup>

const {nogi} = defineProps(['nogi'])

</script>

<style scoped>
.globalFont {
  font-family: 'Roboto', sans-serif;
}
</style>