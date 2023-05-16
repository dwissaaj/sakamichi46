<template>
  <div class="flex flex-col gap-8 w-full max-w-[1440px] mx-auto px-4 lg:p-16">
<!--    Nogi filter-->
    <div>
      <Greet :target="'Nogizaka46'" :link="'/'" />
      <div class="grid grid-cols-6 globalFont">
        <div  v-for="member in responseNogizaka" :key="member.id">
          <CardNogi :nogi="member" />
        </div>
      </div>
    </div>
<!--    Saku Filter    -->


    <div>
      <Greet :target="'Sakurazaka46'" :link="'/'" />
      <div class="grid grid-cols-6 gap-4 globalFont">
        <div  v-for="member in responseSakurazaka" :key="member.id">
          <CardNogi :nogi="member" />
        </div>
      </div>
    </div>
    <div>
      <Greet :target="'Hinatazaka46'" :link="'/'" />
      <div class="grid grid-cols-6 gap-4 globalFont">
        <div  v-for="member in responseHinatazaka" :key="member.id">
          <CardNogi :nogi="member" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const {find} = useStrapi()
const {data: responseNogizaka} = await find('members?populate=*&filters[group][$eq]=Nogizaka46')
const {data: responseSakurazaka} = await find('members?populate=*&filters[group][$eq]=Sakurazaka46')
const {data: responseHinatazaka} = await find('members?populate=*&filters[group][$eq]=Hinatazaka46')
</script>

<style scoped>
.globalFont {
  font-family: 'Roboto',sans-serif;
}
</style>

