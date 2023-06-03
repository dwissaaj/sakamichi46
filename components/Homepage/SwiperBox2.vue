<template>
  <ClientOnly>


  <template v-for="nogizakasingle in boxSwiper">
    <template v-for="nogizakasingle2 in nogizakasingle.attributes.single2">
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
                              delay: 4000,
                              disableOnInteraction: false,
                              }"
            class="transition ease-in-out duration-300 hover:z-50  ring-4 ring-offset-2 ring-emerald-500 hover:ring-teal-300 rounded-lg hover:scale-150 hover:-translate-y-12 hover:translate-x-12">
          <SwiperSlide class="" v-for="imagesingle1 in nogizakasingle2" :key="imagesingle1">
            <nuxt-img class="rounded-lg shadow-lg hover:scale-120 shadow-stale-600" alt=""
                      provider="bucket" :src="`${imagesingle1.attributes.url}`"/>

          </SwiperSlide>
        </Swiper>
      </div>
    </template>
  </template>
  </ClientOnly>
</template>

<script setup>
import {EffectCube} from "swiper";
const { boxSwiper} = defineProps(['boxSwiper'])
</script>

<style scoped>

</style>