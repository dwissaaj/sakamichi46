<template>
  <div>
    <div class="w-full bg-zinc-950 flex flex-col interFont  text-white">
      <div class="flex w-full justify-start items-center p-10">
        <div class="grid grid-rows-1 lg:grid-rows-3">
          <div class="">
            <Greet :target="'Nogizaka46'" :link="'/'"/>
            <template v-for="nogizaka in homepageNogizaka">
              <div class="w-full flex flex-col space-y-12">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-3">
                  <div class="col-span-3 flex justify-center">
                    <p class="text-justify">{{ nogizaka.attributes.description }}</p>
                  </div>
                  <div class="col-span-6">
                    <template v-for="carouselImage in nogizaka.attributes.carousel">
                      <div
                          class="transition ease-out duration-300 rounded-lg hover:scale-120 hover:shadow-[32px_28px_0px_1px_rgba(219,0,219,1)] hover:-translate-x-6">
                        <Swiper
                            :modules="[SwiperAutoplay,EffectFade]"
                            :effect="'fade'"
                            :autoplay="{
                        delay: 3000,
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
                </div>
                <div class="w-full flex justify-center">
                  <div class="grid grid-cols-5">
                    <div class="">
                      <template v-for="nogizakasingle in homepageNogizaka">
                        <template v-for="nogizakasingle2 in nogizakasingle.attributes.single1">
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
                              <SwiperSlide class="" v-for="imagesingle1 in nogizakasingle2" :key="imagesingle1">
                                <nuxt-img class="rounded-lg shadow-lg hover:scale-120 shadow-stale-600" alt=""
                                          provider="strapi" :src="`${imagesingle1.attributes.url}`"/>

                              </SwiperSlide>
                            </Swiper>
                          </div>
                        </template>
                      </template>
                    </div>
                  </div>


                </div>
              </div>
            </template>
          </div>
          <div>
            <Greet :target="'Sakurazaka46'" :link="'/'"/>
          </div>
          <div>
            <Greet :target="'Hinatazaka46'" :link="'/'"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {EffectCube, EffectFade} from "swiper";

const {find} = useStrapi()
const {data: homepageNogizaka} = await find('introductions?populate=*&filters[group][$eq]=Nogizaka46')
useSeoMeta({
  title: 'Sakamichi Fan Site',
  ogTitle: 'Talk about Sakamichi',
  description: 'This is a fan site where talk all about sakamichi members single and information',
})
</script>

<style scoped>


</style>