<template>
  <h1>Nogizaka</h1>
  <div class="grid grid-cols-6 gap-4 globalFont">
    <div  v-for="member in response">
      <div v-if="`${member.attributes.group}` === 'Nogizaka46'" class=" flex-col rounded-xl border p-3 shadow-[7px_5px_0px_0px_rgba(219,0,219,1)] hover:shadow-[9px_7px_0px_0px_rgba(219,0,219,1)] hover:bg-slate-200">
        <div v-for="image in member.attributes.image" >
          <nuxt-img class=""  provider="strapi" :src="`${image.attributes.formats.large.url}`" />
        </div>
        <p>{{member.attributes.names}} ({{member.attributes.age}})</p>
        <p>{{member.attributes.nameKanji}}</p>
        <p>{{member.attributes.birthplace}}</p>
        <div class="ring-2 ring-purple-400 flex justify-center items-center gap-2 rounded-md">
          <NuxtLink class="" :to="`members/details/${member.id}`">Details</NuxtLink>
          <Icon name="material-symbols:send-outline-rounded" />
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>

const { test } = defineProps(['test'])
const {find} = useStrapi()
const {data: response} = await find('members?populate=*')

</script>

<style scoped>
.globalFont {
  font-family: 'Roboto';
}
</style>