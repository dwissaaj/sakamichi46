<template>
  <div class="w-full max-w-[1440px] mx-auto interFont" v-for="member in response" key="member.id">
    <Head>
      <Title>{{member.attributes.group}} {{member.attributes.name}}</Title>
      <Meta name="description" :content="member.attributes.description" />
      <Meta name="keywords" :content="`${member.attributes.kanji} ${member.attributes.name}`" />

    </Head>
    <div class="px-4 lg:px-16 ">
      <div class="w-full flex flex-col">
        <div class="w-full grid grid-cols-12 gap-2 lg:gap-10 mt-5">
          <div class="col-span-12 lg:col-span-8 ">
            <div class="w-full flex flex-col ">
                <div>
                    <ProfileCard :dataMember="member" />
                </div>
            </div>

            <div class="w-full flex flex-col">
              <div class="mt-6 lg:mt-12 grid grid-cols-1 grid-cols-2 gap-5 globalFont text-base font-normal">
                <CareerCard :memberCareer="member"/>
              </div>

            </div>
            <div class="flex flex-col mt-4 lg:mt-8">
              <div  class="flex flex-row space-x-6" >
                <SosmedCard :sosmedMember="member" />
              </div>
            </div>
            <div class="w-full flex flex-col mt-4 lg:mt-8 space-y-2">
              <GlobalTitle title="DESCRIPTION"/>
              <div class="globalFont border-slate-500 bg-gray-200 rounded-md border p-4">
                <p>{{member.attributes.description}}</p>
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
            <div class="w-full hidden md:block flex flex-col mt-4 lg:mt-8">
              <GlobalTitle title="Gallery"/>
              <Gallery :dataGallery="gallery" />
            </div>
            <div class="w-full hidden md:block flex flex-col mt-4 lg:mt-8 ">
              <div class="flex flex-row justify-between items-center">
                <GlobalTitle title="Other Member"/>
                <NuxtLink class="underline" to="/members"><GlobalTitle title="View All"/></NuxtLink>
              </div>
              <div class="border rounded-md border-slate-500 bg-gray-200 p-3 grid grid-cols-3 justify-items-center gap-0">
                <div v-for="other in otherMember">
                  <OtherMember :other="other" />
                </div>

              </div>
            </div>
          </div>

          <div class="col-span-12 lg:col-span-4 h-fit sticky top-4 space-y-6 lg:border-2 rounded-md border-slate-500">
            <div class="w-full flex flex-col hidden lg:block">
              <ProfileImage :memberPhoto="member" />
            </div>
          </div>

        </div>
<!--        <div class="sticky m-0 block lg:hidden">-->
<!--          <div class="w-full rounded-md border-2 border-slate-500">-->
<!--            <div>-->
<!--              {{member.attributes.name}}-->
<!--              <span :class="`${member.attributes.lgOne}`">-->
<!--                {{ member.attributes.lightcolor2 }}-->
<!--              </span>-->
<!--              <span :class="`${member.attributes.lgTwo} text-2xl`">-->
<!--                {{ member.attributes.lightcolor1 }}-->
<!--              </span>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
      </div>

    </div>

  </div>
</template>

<script setup>

import ProfileCard from "~/components/card/ProfileCard.vue";
import ProfileImage from "~/components/card/ProfileImage.vue";
import CareerCard from "~/components/card/CareerCard.vue"
import SosmedCard from "~/components/card/SosmedCard.vue";
import GlobalTitle from "~/components/GlobalTitle.vue";
import TriviaCard from "~/components/card/TriviaCard.vue";
import SingleCard from "~/components/card/SingleCard.vue";
import OtherMember from "~/components/card/OtherMember.vue";
import Gallery from "~/components/card/Gallery.vue";
const {find} = useStrapi()
const { id } = useRoute().params
const {data: response} = await find(`members?filters[id][$eq]=${id}&populate[0]=profileImage.image&populate[1]=sosmed&populate[2]=otherNames&populate[3]=mainProfile&populate[4]=singles.cover`)
const {data: trivia} = await find(`trivias?populate[0]=member&populate[1]=trivia&filters[member][id][$eq]=${id}`)
const {data: gallery} = await find(`galleries?populate[0]=collection.image&populate[1]=members&filters[members][id][$eq]=${id}`)
const {data: otherMember} = await find(`members?populate=*&pagination[limit]=6&randomSort=true&filters[id][$notIn]=${id}`)

</script>

<style scoped>
.interFont {
  font-family: 'Inter',sans-serif;
  font-weight: lighter;
}
.headClass {
  text-transform: capitalize;
}
.avatar {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>