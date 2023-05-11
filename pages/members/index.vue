<template>
  <h1>Nogizaka</h1>
  <div v-for="member in response">
    <p>{{member.attributes.names}}</p>
    <div v-for="image in member.attributes.image">
      <nuxt-img provider="strapi" :src="`${image.attributes.formats.large.url}`" />
    </div>
  </div>
</template>

<script setup>
const { test } = defineProps(['test'])
const {find} = useStrapi()
const {data: response} = await find('members?populate=*')
console.log(response)
</script>

<style scoped>

</style>