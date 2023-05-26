<template>
  <div>
    <div class="w-full bg-zinc-950 flex flex-col interFont text-white">
      <div class="flex w-full justify-start items-center p-10">
        <div class="grid grid-rows-1 lg:grid-rows-3">
          <div class="space-y-6">
            <p class="text-4xl text-white text-start">Nogizaka46</p>
            <template v-for="nogizaka in homepageNogizaka">
              <div class="w-full flex flex-col space-y-12">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-3">
                  <div class="col-span-3 flex justify-center">
                    <p class="text-justify">{{ nogizaka.attributes.description }}</p>
                  </div>
                  <div class=" hidden lg:col-span-6">
                    <template v-for="carouselImage in nogizaka.attributes.carousel">
                      <div
                          class="transition ease-out duration-300 rounded-lg hover:scale-120 hover:shadow-[32px_28px_0px_1px_rgba(219,0,219,1)] hover:-translate-x-6">
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
                </div>
                <div class="w-full flex justify-center">
                  <div class="grid grid-cols-2 md:grid-cols-8 gap-6">
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
                              delay: 4000,
                              disableOnInteraction: false,
                              }"
                                class="transition ease-in-out duration-300 hover:z-50  ring-4 ring-offset-2 ring-purple-500 hover:ring-pink-500 rounded-lg hover:scale-150 hover:-translate-y-12 hover:translate-x-12">
                              <SwiperSlide class="" v-for="imagesingle1 in nogizakasingle2" :key="imagesingle1">
                                <nuxt-img class="rounded-lg shadow-lg hover:scale-120 shadow-stale-600" alt=""
                                          provider="strapi" :src="`${imagesingle1.attributes.url}`"/>

                              </SwiperSlide>
                            </Swiper>
                          </div>
                        </template>
                      </template>
                    </div>
                    <div class="">
                      <template v-for="nogizakasingle in homepageNogizaka">
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
                                class="transition ease-in-out duration-300 hover:z-50  ring-4 ring-offset-2 ring-purple-500 hover:ring-pink-500 rounded-lg hover:scale-150 hover:-translate-y-12 hover:translate-x-12">
                              <SwiperSlide class="" v-for="imagesingle1 in nogizakasingle2" :key="imagesingle1">
                                <nuxt-img class="rounded-lg shadow-lg hover:scale-120 shadow-stale-600" alt=""
                                          provider="strapi" :src="`${imagesingle1.attributes.url}`"/>

                              </SwiperSlide>
                            </Swiper>
                          </div>
                        </template>
                      </template>
                    </div>
                    <div class="">
                      <template v-for="nogizakasingle in homepageNogizaka">
                        <template v-for="nogizakasingle2 in nogizakasingle.attributes.single4">
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
                                class="transition ease-in-out duration-300 hover:z-50  ring-4 ring-offset-2 ring-purple-500 hover:ring-pink-500 rounded-lg hover:scale-150 hover:-translate-y-12 hover:translate-x-12">
                              <SwiperSlide class="" v-for="imagesingle1 in nogizakasingle2" :key="imagesingle1">
                                <nuxt-img class="rounded-lg shadow-lg hover:scale-120 shadow-stale-600" alt=""
                                          provider="strapi" :src="`${imagesingle1.attributes.url}`"/>

                              </SwiperSlide>
                            </Swiper>
                          </div>
                        </template>
                      </template>
                    </div>
                    <div class="">
                      <template v-for="nogizakasingle in homepageNogizaka">
                        <template v-for="nogizakasingle2 in nogizakasingle.attributes.single5">
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
                                class="transition ease-in-out duration-300 hover:z-50  ring-4 ring-offset-2 ring-purple-500 hover:ring-pink-500 rounded-lg hover:scale-150 hover:-translate-y-12 hover:translate-x-12">
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
          <div class="space-y-6 mt-4 lg:mt-8">
            <p class="text-4xl text-white text-end">Sakurazaka46</p>
            <template v-for="sakurazaka in homepageSakurazaka">
              <div class="w-full flex flex-col space-y-12 ">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-3 ">
                  <div class="col-start-3 col-end-9">
                    <template v-for="carouselImage in sakurazaka.attributes.carousel">
                      <div
                          class="transition ease-out duration-300 rounded-lg hover:scale-120 hover:shadow-[32px_28px_0px_1px_rgba(236,72,153,0.75)] hover:-translate-x-6">
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
                  <div class="col-start-9 col-end-13 ">
                    <p class="text-justify">{{ sakurazaka.attributes.description }}</p>
                  </div>
                </div>
                <div class="w-full flex justify-end">
                  <div class="grid grid-cols-2 md:grid-cols-8 gap-6  ">
                    <div class="">
                      <template v-for="sakurazakasingle in homepageSakurazaka">
                        <template v-for="sakurazakasingle2 in sakurazakasingle.attributes.single1">
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
                                class="transition ease-in-out duration-300 hover:z-50  ring-4 ring-offset-2 ring-pink-500 hover:ring-sky-500 rounded-lg hover:scale-150 hover:-translate-y-12 hover:translate-x-12">
                              <SwiperSlide class="" v-for="imagesingle1 in sakurazakasingle2" :key="imagesingle1">
                                <nuxt-img class="rounded-lg shadow-lg hover:scale-120 shadow-stale-600" alt=""
                                          provider="strapi" :src="`${imagesingle1.attributes.url}`"/>

                              </SwiperSlide>
                            </Swiper>
                          </div>
                        </template>
                      </template>
                    </div>
                    <div class="">
                      <template v-for="nogizakasingle in homepageSakurazaka">
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
                                class="transition ease-in-out duration-300 hover:z-50  ring-4 ring-offset-2 ring-pink-500 hover:ring-sky-500 rounded-lg hover:scale-150 hover:-translate-y-12 hover:translate-x-12">
                              <SwiperSlide class="" v-for="imagesingle1 in nogizakasingle2" :key="imagesingle1">
                                <nuxt-img class="rounded-lg shadow-lg hover:scale-120 shadow-stale-600" alt=""
                                          provider="strapi" :src="`${imagesingle1.attributes.url}`"/>

                              </SwiperSlide>
                            </Swiper>
                          </div>
                        </template>
                      </template>
                    </div>
                    <div class="">
                      <template v-for="nogizakasingle in homepageSakurazaka">
                        <template v-for="nogizakasingle2 in nogizakasingle.attributes.single4">
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
                                class="transition ease-in-out duration-300 hover:z-50  ring-4 ring-offset-2 ring-pink-500 hover:ring-sky-500 rounded-lg hover:scale-150 hover:-translate-y-12 hover:translate-x-12">
                              <SwiperSlide class="" v-for="imagesingle1 in nogizakasingle2" :key="imagesingle1">
                                <nuxt-img class="rounded-lg shadow-lg hover:scale-120 shadow-stale-600" alt=""
                                          provider="strapi" :src="`${imagesingle1.attributes.url}`"/>

                              </SwiperSlide>
                            </Swiper>
                          </div>
                        </template>
                      </template>
                    </div>
                    <div class="">
                      <template v-for="nogizakasingle in homepageSakurazaka">
                        <template v-for="nogizakasingle2 in nogizakasingle.attributes.single5">
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
                                class="transition ease-in-out duration-300 hover:z-50  ring-4 ring-offset-2 ring-pink-500 hover:ring-sky-500 rounded-lg hover:scale-150 hover:-translate-y-12 hover:translate-x-12">
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
          <div class="space-y-6 mt-4 lg:mt-8">
            <p class="text-4xl text-white text-start">Hinatazaka46</p>
            <template v-for="hinatazaka in homepageHinatazaka">
              <div class="w-full flex flex-col space-y-12">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-3">
                  <div class="col-span-3 flex justify-center">
                    <p class="text-justify">{{ hinatazaka.attributes.description }}</p>
                  </div>
                  <div class="col-span-6">
                    <template v-for="carouselImage in hinatazaka.attributes.carousel">
                      <div
                          class="transition ease-out duration-300 rounded-lg hover:scale-120 hover:shadow-[32px_28px_0px_1px_rgba(0,208,255,0.91)] hover:-translate-x-6">
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
                </div>
                <div class="w-full flex justify-center">
                  <div class="grid grid-cols-2 md:grid-cols-8 gap-6">
                    <div class="">
                      <template v-for="hinatazaka in homepageHinatazaka">
                        <template v-for="nogizakasingle2 in hinatazaka.attributes.single1">
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
                                class="transition ease-in-out duration-300 hover:z-50  ring-4 ring-offset-2 ring-sky-500 hover:ring-purple-500 rounded-lg hover:scale-150 hover:-translate-y-12 hover:translate-x-12">
                              <SwiperSlide class="" v-for="imagesingle1 in nogizakasingle2" :key="imagesingle1">
                                <nuxt-img class="rounded-lg shadow-lg hover:scale-120 shadow-stale-600" alt=""
                                          provider="strapi" :src="`${imagesingle1.attributes.url}`"/>

                              </SwiperSlide>
                            </Swiper>
                          </div>
                        </template>
                      </template>
                    </div>
                    <div class="">
                      <template v-for="nogizakasingle in homepageHinatazaka">
                        <template v-for="nogizakasingle2 in hinatazaka.attributes.single2">
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
                                class="transition ease-in-out duration-300 hover:z-50  ring-4 ring-offset-2 ring-sky-500 hover:ring-purple-500 rounded-lg hover:scale-150 hover:-translate-y-12 hover:translate-x-12">
                              <SwiperSlide class="" v-for="imagesingle1 in nogizakasingle2" :key="imagesingle1">
                                <nuxt-img class="rounded-lg shadow-lg hover:scale-120 shadow-stale-600" alt=""
                                          provider="strapi" :src="`${imagesingle1.attributes.url}`"/>

                              </SwiperSlide>
                            </Swiper>
                          </div>
                        </template>
                      </template>
                    </div>
                    <div class="">
                      <template v-for="nogizakasingle in homepageHinatazaka">
                        <template v-for="nogizakasingle2 in hinatazaka.attributes.single4">
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
                                class="transition ease-in-out duration-300 hover:z-50  ring-4 ring-offset-2 ring-sky-500 hover:ring-purple-500 rounded-lg hover:scale-150 hover:-translate-y-12 hover:translate-x-12">
                              <SwiperSlide class="" v-for="imagesingle1 in nogizakasingle2" :key="imagesingle1">
                                <nuxt-img class="rounded-lg shadow-lg hover:scale-120 shadow-stale-600" alt=""
                                          provider="strapi" :src="`${imagesingle1.attributes.url}`"/>

                              </SwiperSlide>
                            </Swiper>
                          </div>
                        </template>
                      </template>
                    </div>
                    <div class="">
                      <template v-for="nogizakasingle in homepageHinatazaka">
                        <template v-for="nogizakasingle2 in hinatazaka.attributes.single5">
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
                                class="transition ease-in-out duration-300 hover:z-50  ring-4 ring-offset-2 ring-sky-500 hover:ring-purple-500 rounded-lg hover:scale-150 hover:-translate-y-12 hover:translate-x-12">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {EffectCube, EffectFade} from "swiper";

const {find} = useStrapi()
const {data: homepageNogizaka} = await find('introductions?populate=*&filters[group][$eq]=Nogizaka46')
const {data: homepageSakurazaka} = await find('introductions?populate=*&filters[group][$eq]=Sakurazaka46')
const {data: homepageHinatazaka} = await find('introductions?populate=*&filters[group][$eq]=Hinatazaka46')
useSeoMeta({
  title: 'Sakamichi Fan Site',
  ogTitle: 'Talk about Sakamichi',
  description: 'This is a fan site where talk all about sakamichi members single and information',
})

</script>

<style scoped>


</style>