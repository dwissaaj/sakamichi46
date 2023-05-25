<template>
  <div class="">
    <Swiper
        :modules="[SwiperAutoplay,EffectCube]"
        :effect="'cube'"
        :grabCursor="true"
        :cubeEffect="{
                                shadow: true,
                                slideShadows: true,
                                shadowOffset: 20,
                                shadowScale: 0.94,
                              }"
        :autoplay="{
                              delay: 3000,
                              disableOnInteraction: false,
                              }"
        class="transition ease-in-out delay-150 ring-4 ring-offset-2 ring-purple-500 hover:ring-pink-500 rounded-lg hover:scale-150 hover:-translate-y-12 hover:translate-x-12">
      <SwiperSlide class="" v-for="imagesingle1 in swipernogi" :key="imagesingle1">
        <nuxt-img class="rounded-lg shadow-lg hover:scale-120 shadow-stale-600" alt=""
                  provider="strapi" :src="`${imagesingle1.attributes.url}`"/>

      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
const { swipernogi } = defineProps(['swipernogi'])
</script>

<style scoped>

</style>