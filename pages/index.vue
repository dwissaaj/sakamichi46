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
                    <p class="text-justify">{{ nogizaka.attributes.introduction }}</p>
                  </div>
                  <div class=" lg:block lg:col-span-6">
                    <GroupHomepage :swipernogi="nogizaka" />
                  </div>
                </div>
                <div class="w-full flex justify-center">
                  <div class="grid grid-cols-2 md:grid-cols-8 gap-6">
                    <div class="">
                      <SwiperBox1 :boxSwiper="homepageNogizaka" />
                    </div>
                    <div class="">
                      <SwiperBox2 :boxSwiper="homepageNogizaka" />
                    </div>
                    <div class="">
                      <SwiperBox3 :boxSwiper="homepageNogizaka" />
                    </div>
                    <div class="">
                      <SwiperBox4 :boxSwiper="homepageNogizaka" />
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>


          <div class="space-y-6 mt-4 lg:mt-8">
            <p class="text-4xl text-white text-start">Sakurazaka46</p>
            <template v-for="sakurazaka in homepageSakurazaka">
              <div class="w-full flex flex-col space-y-12">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-3">
                  <div class="col-span-3 flex justify-center">
                    <p class="text-justify">{{ sakurazaka.attributes.introduction }}</p>
                  </div>
                  <div class=" lg:block lg:col-span-6">
                    <GroupHomepage :swipernogi="sakurazaka" />
                  </div>
                </div>
                <div class="w-full flex justify-center">
                  <div class="grid grid-cols-2 md:grid-cols-8 gap-6">
                    <div class="">
                      <SwiperBox1 :boxSwiper="homepageSakurazaka" />
                    </div>
                    <div class="">
                      <SwiperBox2 :boxSwiper="homepageSakurazaka" />
                    </div>
                    <div class="">
                      <SwiperBox3 :boxSwiper="homepageSakurazaka" />
                    </div>
                    <div class="">
                      <SwiperBox4 :boxSwiper="homepageSakurazaka" />
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
                    <p class="text-justify">{{ hinatazaka.attributes.introduction }}</p>
                  </div>
                  <div class=" lg:block lg:col-span-6">
                    <GroupHomepage :swipernogi="hinatazaka" />
                  </div>
                </div>
                <div class="w-full flex justify-center">
                  <div class="grid grid-cols-2 md:grid-cols-8 gap-6">
                    <div class="">
                      <SwiperBox1 :boxSwiper="homepageHinatazaka" />
                    </div>
                    <div class="">
                      <SwiperBox2 :boxSwiper="homepageHinatazaka" />
                    </div>
                    <div class="">
                      <SwiperBox3 :boxSwiper="homepageHinatazaka" />
                    </div>
                    <div class="">
                      <SwiperBox4 :boxSwiper="homepageHinatazaka" />
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>

        </div>
      </div>
      <div>

        <div class="p-4">
          <GlobalTitle title="Why I see an ads?" />
          <NuxtLink to="/term" class="underline ">Our Terms</NuxtLink>
          <div class="p-4 rounded-md border-2">
            <adsbygoogle ad-slot="1991808051"
                         ad-client="ca-pub-6939749049118846"
                         ad-format="auto"/>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import GroupHomepage from "~/components/Homepage/SwiperHome.vue";
import SwiperBox1 from "~/components/Homepage/SwiperBox1.vue";
import SwiperBox2 from "~/components/Homepage/SwiperBox2.vue";
import SwiperBox3 from "~/components/Homepage/SwiperBox3.vue";
import SwiperBox4 from "~/components/Homepage/SwiperBox4.vue";
//
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