<template>
  <div class="w-full mx-auto max-w-[1440px]">
    <div class="px-4 lg:px-16">
      <div class="mt-4">
        <Greet :target="'Nogizaka46'" :link="'/'" />
        <div class="grid grid-cols-1 lg:grid-cols-5 lg:gap-3 globalFont">
          <div  v-for="member in responseNogizaka" :key="member.id">
            <CardNogi :nogi="member" />
          </div>
        </div>
      </div>
      <div class="mt-4">
        <Greet :target="'Sakurazaka46'" :link="'/'" />
        <div class="grid grid-cols-1 lg:grid-cols-5 lg:gap-3 globalFont">
          <div  v-for="member in responseSakurazaka" :key="member.id">
            <CardNogi :nogi="member" />
          </div>
        </div>
      </div>
      <div class="mt-4">
        <Greet :target="'Hinatazaka46'" :link="'/'" />
        <div class="grid grid-cols-1 lg:grid-cols-5 lg:gap-3 globalFont">
          <div  v-for="member in responseHinatazaka" :key="member.id">
            <CardNogi :nogi="member" />
          </div>
        </div>
      </div>
    </div>
  </div>
    <div class="mt-4 grid grid-cols-1 gap-2">


    </div>
</template>

<script setup>

const {find} = useStrapi()
const {data: responseNogizaka} = await find('members?populate=*&filters[group][$eq]=Nogizaka46')
const {data: responseSakurazaka} = await find('members?populate=*&filters[group][$eq]=Sakurazaka46')
const {data: responseHinatazaka} = await find('members?populate=*&filters[group][$eq]=Hinatazaka46')

useHead({
  title: 'Sakamichi Members',
  meta: [
    {name: "description", content: 'Sakamichi All Members'}
  ]
})
useSeoMeta({
  title: 'Sakamichi Fansite',
  ogTitle: 'Talk about Sakamichi',
  description: 'This is a fan site where talk all about sakamichi members single and infomartion',
})
</script>

<style scoped>
.globalFont {
  font-family: 'Roboto',sans-serif;
}
</style>

