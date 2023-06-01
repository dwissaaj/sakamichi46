<template>
  <div class="grid grid-cols-2 p-2 gap-2">
    <div class="" v-for="swiper in memberPhoto.attributes.profileImage" :key="swiper.id">
      <div v-for="swipers in swiper.image">
        <div class="grid grid-cols-1 lg:gap-0" v-for="swiperss in swipers" :key="swiperss.id">
          <nuxt-img provider="bucket" :src="`${swiperss.attributes.url}`" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const {memberPhoto} = defineProps(['memberPhoto'])
</script>

<style scoped>

</style>