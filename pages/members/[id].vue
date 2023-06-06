<template>
  <div class="w-full member-bg interFont" v-for="member in response" key="member.id">
    <Head>
      <Title>{{member.attributes.group}} {{member.attributes.name}}</Title>
      <Meta charset="UTF-8"></Meta>
      <Meta name="description" :content="member.attributes.description" />
      <Meta name="keywords" :content="`${member.attributes.tagseo}`" />
    </Head>
    <div class="px-4 lg:px-16 ">
      <div class="w-full flex flex-col">
        <div class="w-full grid grid-cols-12 gap-2 lg:gap-10 mt-5">
          <div class="col-span-12 lg:col-span-8 ">
            <div class="w-full flex flex-col ">
                 <ProfileCard :dataMember="member" />
            </div>
            <div class="my-4 mb-18">
              <Biodata :biodata="member" />
            </div>
            <div class="flex flex-col mt-4 lg:mt-8">
              <div  class="flex flex-row space-x-6" >
                <SosmedCard :sosmedMember="member" />
              </div>
            </div>
            <div class="w-full flex flex-col mt-4 lg:mt-8 space-y-2">
              <GlobalTitle title="DESCRIPTION"/>
              <div class="globalFont border-zinc-300 bg-zinc-800 rounded-md border p-4">
                <p class="text-start text-white">{{member.attributes.description}}</p>
              </div>
            </div>

            <div class="w-full flex flex-col mt-4 lg:mt-8 space-y-2">
              <GlobalTitle title="TRIVIA"/>
              <TriviaCard :dataTrivia="trivia" />
            </div>
            <div class="w-full flex flex-col mt-4 lg:mt-8 space-y-2">
              <GlobalTitle title="Single"/>
              <SingleCard :dataSingle="member" />
            </div>
            <div class="w-full flex flex-col mt-4 lg:mt-8">
              <GlobalTitle title="Gallery"/>
              <Gallery :dataGallery="gallery" />
            </div>

            <div class="w-full  flex flex-col mt-4 lg:mt-8">
              <GlobalTitle title="Gif"/>
              <div class="border rounded-md border-zinc-300 bg-zinc-800 p-3 grid grid-cols-1 md:grid-cols-6 md:gap-4 interFont">
              <template v-for="gifs in gif">
                <template v-for="gifImage in gifs.attributes.gif">
                  <div v-for="gifgallery in gifImage.image.data">
                    <nuxt-img
                        class="transition ease-in-out duration-300 hover:scale-[2.0] flex gap-3 ring-1 ring-black rounded-md cursor-zoom-in"
                        :src="`${gifgallery.attributes.url}`" provider="bucket" format="gif"  />
                  </div>
                </template>
              </template>
              </div>
            </div>

            <div class="w-full hidden md:block flex flex-col mt-4 lg:mt-8 ">
              <div class="flex flex-row justify-between items-center">
                <GlobalTitle title="Other Member"/>
                <NuxtLink class="underline" to="/members"><GlobalTitle title="View All"/></NuxtLink>
              </div>
              <div class="border rounded-md border-zinc-300 bg-zinc-800 p-3 grid grid-cols-3 justify-items-center gap-0">
                <div v-for="other in otherMember">
                  <OtherMember :other="other" />
                </div>
              </div>

            </div>
            <div class="w-full flex flex-col mt-4 lg:mt-8 mb-4 max-h-52 max-h-82">
              <GlobalTitle title="Advertising"/>
              <div class="border rounded-md border-zinc-300 bg-zinc-800 h-82">
                <adsbygoogle :ad-style="{display:'block', }"
                             ad-client="ca-pub-6939749049118846"
                             ad-slot="5567256839"
                             ad-formatx="auto"
                             full-width-responsive="full-width-responsive"/>
              </div>
            </div>
          </div>

          <div class="p-4 col-span-12 lg:col-span-4 justify-items-center h-fit sticky top-4 transition ease-out duration-300 space-y-6 border-2 rounded-md border-white border-y-8 border-y-8  hover:translate-y-6">
            <div class="w-full flex flex-col hidden md:block  ">
              <div v-for="data1 in member.attributes.oldProfile">
                <Swiper
                    :modules="[SwiperAutoplay,EffectCards]"
                    :effect="'cards'"
                    :autoplay="{
                  delay: 4000,
                  disableOnInteraction: false,
                  }" class="transition ease-out duration-300 hover:rotate-12  ">
                  <SwiperSlide class=""  v-for="data2 in data1" :key="data2" >
                    <nuxt-img class="h-full w-full border-black border-2 rounded-lg hover:border-purple-500 shadow-xl " alt="" provider="bucket" :src="`${data2.attributes.url}`"  />
                    <p class="mt-2 text-white font-bold text-center capitalize ">{{data2.attributes.name.substr(0,data2.attributes.name.length-4)}}</p>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup>

import ProfileCard from "~/components/card/ProfileCard.vue";
import SosmedCard from "~/components/card/SosmedCard.vue";
import GlobalTitle from "~/components/GlobalTitle.vue";
import TriviaCard from "~/components/card/TriviaCard.vue";
import SingleCard from "~/components/card/SingleCard.vue";
import OtherMember from "~/components/card/OtherMember.vue";
import Gallery from "~/components/card/Gallery.vue";
import Biodata from "~/components/card/Biodata.vue";
import {EffectCards} from "swiper";
const {find} = useStrapi()
const { id } = useRoute().params
const {data: response} = await find(`members?filters[id][$eq]=${id}&populate[0]=oldProfile&populate[1]=sosmed&populate[2]=otherNames&populate[3]=mainProfile&populate[4]=singles.cover`)
const {data: trivia} = await find(`trivias?populate[0]=member&populate[1]=trivia&filters[member][id][$eq]=${id}`)
const {data: gallery} = await find(`galleries?populate[0]=collection.image&populate[1]=members&filters[members][id][$eq]=${id}`)
const {data: otherMember} = await find(`members?populate=*&pagination[limit]=6&randomSort=true&filters[id][$notIn]=${id}`)
const {data: gif} = await find(`gif-galleries?populate[0]=gif.image&populate[1]=member&filters[member][id][$eq]=${id}`)
if(!response) {
  throw createError({statusCode: 405, message: 'Member not found 😰', fatal:true})
}
</script>

<style scoped>
.interFont {
  font-family: 'Inter',sans-serif;
  font-weight: lighter;
}
.member-bg {
  background-color: #09090b;
  background-image: url("data:image/svg+xml,%3Csvg width='44' height='12' viewBox='0 0 44 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 12v-2L0 0v10l4 2h16zm18 0l4-2V0L22 10v2h16zM20 0v8L4 0h16zm18 0L22 8V0h16z' fill='%23000000' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
}

</style>