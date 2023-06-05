<template>

    <div class="">
      <template v-for="carouselImage in swipernogi.attributes.carousel">
        <div
            class="transition ease-out duration-300 rounded-lg hover:scale-120 hover:shadow-[32px_28px_0px_1px_rgba(74,222,128,0.75)] hover:-translate-x-6">
          <Swiper
              :modules="[SwiperAutoplay,EffectFade]"
              :effect="'fade'"
              :autoplay="{
                        delay: 4000,
                        disableOnInteraction: false,
                        }" class=" ">
            <SwiperSlide class="rounded-lg  hover:brightness-75
                        transition ease-in-out duration-300 " v-for="images in carouselImage" :key="images">
              <nuxt-img class="rounded-lg shadow-lg origin-center shadow-stale-600" alt=""
                        provider="strapi" :src="`${images.attributes.url}`"/>

            </SwiperSlide>
          </Swiper>
        </div>
      </template>
    </div>

</template>

<script setup>
import { EffectFade} from "swiper";
const { swipernogi } = defineProps(['swipernogi'])
</script>

<style scoped>

</style>