<template>
  <div class="globalFont border-slate-500 bg-gray-200 rounded-md border p-4" v-for="datas in dataTrivia" :key="dataTrivia.id">
    <ol class="list-disc list-inside capitalize" >
      <li v-for="finalData in datas.attributes.trivia">{{finalData.trivia}}</li>
    </ol>
  </div>
</template>

<script setup>
const { dataTrivia} = defineProps(['dataTrivia'])
</script>

<style scoped>
.globalFont {
  font-family: 'Inter',sans-serif;
  font-weight: lighter;
}
</style>