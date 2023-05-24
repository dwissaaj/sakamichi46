<template>
  <div v-if="`${nogi.attributes.group}` === 'Nogizaka46'"
       class="globalFont flex flex-col w-full lg:w-[200px] lg:justify-center capitalize rounded-xl border p-3 shadow-[7px_5px_0px_0px_rgba(219,0,219,1)] hover:shadow-[9px_7px_0px_0px_rgba(219,0,219,1)] hover:bg-slate-200">
    <div class="rounded-md " v-for="data in nogi.attributes.mainProfile">
      <nuxt-img class="rounded-md" provider="strapi" :src="`${data.attributes.url}`" />
    </div>
    <div>
      <p class="text-sm">{{nogi.attributes.name}} ({{nogi.attributes.age}})</p>
      <p class="text-sm">{{nogi.attributes.kanji}}</p>
      <p class="text-sm">{{nogi.attributes.birthplace}}</p>
    </div>
    <NuxtLink class="text-sm ring-2 hover:text-purple-500 mt-2 ring-purple-400 flex justify-center items-center gap-2 rounded-md" :to="`/members/${nogi.id}`">
      <p>Details</p>
      <Icon name="material-symbols:send-outline-rounded" />
    </NuxtLink>
  </div>
  <div v-if="`${nogi.attributes.group}` === 'Sakurazaka46'"
       class="globalFont flex flex-col w-full lg:w-[200px] lg:justify-center capitalize rounded-xl border p-3 shadow-[7px_5px_0px_0px_rgba(252,43,151,0.94)] hover:shadow-[9px_7px_0px_0px_rgba(252,43,151,0.94)] hover:bg-slate-200">
    <div class="rounded-md " v-for="data in nogi.attributes.mainProfile">
      <nuxt-img class="rounded-md" provider="strapi" :src="`${data.attributes.url}`" />
    </div>
    <div>
      <p class="text-sm">{{nogi.attributes.name}} ({{nogi.attributes.age}})</p>
      <p class="text-sm">{{nogi.attributes.kanji}}</p>
      <p class="text-sm">{{nogi.attributes.birthplace}}</p>
    </div>
    <NuxtLink class="text-sm ring-2 hover:text-red-500 mt-2 ring-rose-400 mt-2 flex justify-center items-center gap-2 rounded-md" :to="`/members/${nogi.id}`">
      <p>Details</p>
      <Icon name="material-symbols:send-outline-rounded" />
    </NuxtLink>
  </div>
  <div v-if="`${nogi.attributes.group}` === 'Hinatazaka46'"
       class="globalFont flex flex-col w-full lg:w-[200px] lg:justify-center capitalize rounded-xl border p-3 shadow-[7px_5px_0px_0px_rgba(0,220,255,0.85)] hover:shadow-[9px_7px_0px_0px_rgba(0,220,255,0.85)] hover:bg-slate-200">
    <div class="rounded-md " v-for="data in nogi.attributes.mainProfile">
      <nuxt-img class="rounded-md" provider="strapi" :src="`${data.attributes.url}`" />
    </div>
    <div>
      <p class="text-sm">{{nogi.attributes.name}} ({{nogi.attributes.age}})</p>
      <p class="text-sm">{{nogi.attributes.kanji}}</p>
      <p class="text-sm">{{nogi.attributes.birthplace}}</p>
    </div>
    <NuxtLink class="text-sm ring-2 hover:text-sky-500 mt-2 ring-cyan-400 mt-2 mt-2 flex justify-center items-center gap-2 rounded-md" :to="`/members/${nogi.id}`">
      <p>Details</p>
      <Icon name="material-symbols:send-outline-rounded" />
    </NuxtLink>
  </div>

</template>
<script setup>

const {nogi} = defineProps(['nogi'])

</script>

<style scoped>
.globalFont {
  font-family: 'Inter', sans-serif;
}
</style>