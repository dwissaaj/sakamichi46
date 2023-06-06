<template>
  <div class="grid grid-cols-1 lg:grid-cols-6 gap-2">
    <div class="flex p-2 justify-center h-fit space-x-2 flex-row items-center text-lg font-bold rounded-lg hover:ring-2 ring-offset-2 ring-gray-900 text-white bg-gray-950 hover:bg-purple-800">
      <p>{{biodata.attributes.age}} years old</p>
    </div>
    <div class="flex p-2 justify-center h-fit font-bold space-x-2 flex-row items-center text-lg rounded-lg hover:ring-2 ring-offset-2 ring-gray-900 text-white bg-gray-950 hover:bg-purple-800">
      <Icon name="material-symbols:calendar-add-on" />
      <p class="" >{{biodata.attributes.birthdate}}</p>
    </div>
    <div class="flex p-2 justify-center h-fit font-bold space-x-2 flex-row items-center text-lg rounded-lg hover:ring-2 ring-offset-2 ring-gray-900 text-white bg-gray-950 hover:bg-purple-800">
      <p class="" >{{biodata.attributes.generation}}th Gen </p>
    </div>
    <div class="flex p-2 justify-center h-fit font-bold space-x-2 flex-row items-center text-lg rounded-lg hover:ring-2 ring-offset-2 ring-gray-900 text-white bg-gray-950 hover:bg-purple-800">
      <p class="" >{{biodata.attributes.group}}</p>
    </div>
    <div class="flex p-2 justify-center h-fit font-bold space-x-1 flex-row items-center text-lg rounded-lg hover:ring-2 ring-offset-2 ring-gray-900 text-white bg-gray-950 hover:bg-purple-800">
      <Icon name="ic:twotone-height" />
      <p class="" >{{biodata.attributes.height}} cm</p>
    </div>
    <div class="flex p-2 justify-center h-fit font-bold space-x-2 flex-row items-center text-lg rounded-lg hover:ring-2 ring-offset-2 ring-gray-900 text-white bg-gray-950 hover:bg-purple-800">
      <Icon name="material-symbols:bloodtype-outline-rounded" />
      <p class="" >{{biodata.attributes.bloodtype}} type</p>
    </div>
    <div :style="{ backgroundColor: `${biodata.attributes.penlightCssColor2}`, padding: '10px', borderRadius: '10px', borderColor: 'white', borderWidth: '3px' }" >
      <p class="capitalize font-semibold" >{{biodata.attributes.penColor2}}</p>
    </div>
    <div :style="{ backgroundColor: `${biodata.attributes.penlightCssColor1}`, padding: '10px', borderRadius: '10px', borderColor: 'white', borderWidth: '3px' }" >
      <p class="capitalize font-semibold" >{{biodata.attributes.penColor1}}</p>
    </div>

  </div>
</template>

<script setup>
const {biodata} = defineProps(['biodata'])

</script>

<style scoped>

</style>