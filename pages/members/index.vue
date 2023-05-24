<template>
  <div class="w-full member-bg">
    <div class="p-12">
      <div class="">
        <Greet :target="'Nogizaka46'" :link="'/'" />
        <div class="grid grid-cols-1 lg:grid-cols-5 globalFont">
          <div  v-for="member in responseNogizaka" :key="member.id">
            <CardNogi :nogi="member" />
          </div>
        </div>
      </div>
      <div class="mt-4">
        <Greet :target="'Sakurazaka46'" :link="'/'" />
        <div class="grid grid-cols-1 lg:grid-cols-5 globalFont">
          <div  v-for="member in responseSakurazaka" :key="member.id">
            <CardNogi :nogi="member" />
          </div>
        </div>
      </div>
      <div class="mt-4">
        <Greet :target="'Hinatazaka46'" :link="'/'" />
        <div class="grid grid-cols-1 lg:grid-cols-5 globalFont">
          <div  v-for="member in responseHinatazaka" :key="member.id">
            <CardNogi :nogi="member" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Sakamichi Members',
  meta: [
    {name: "description", content: 'Sakamichi All Members'}
  ]
})
useSeoMeta({
  title: 'Sakamichi Members',
  ogTitle: 'Talk about Sakamichi',
  description: 'This is a fan site where talk all about sakamichi members single and information',
})
import CardNogi from "~/components/CardNogi.vue";
import Greet from "~/components/Greet.vue";

const {find} = useStrapi()
const {data: responseNogizaka} = await find('members?populate=*&filters[group][$eq]=Nogizaka46')
const {data: responseSakurazaka} = await find('members?populate=*&filters[group][$eq]=Sakurazaka46')
const {data: responseHinatazaka} = await find('members?populate=*&filters[group][$eq]=Hinatazaka46')


</script>

<style scoped>
.globalFont {
  font-family: 'Roboto',sans-serif;
}
.member-bg {
  background-color: #09090b;
  background-image: url("data:image/svg+xml,%3Csvg width='44' height='12' viewBox='0 0 44 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 12v-2L0 0v10l4 2h16zm18 0l4-2V0L22 10v2h16zM20 0v8L4 0h16zm18 0L22 8V0h16z' fill='%23000000' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
}
</style>

