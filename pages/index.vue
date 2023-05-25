<template>
  <div>
    <div class="w-full bg-zinc-950 flex flex-col interFont ">
      <div class="flex w-full justify-start items-center p-10">
        <div class="grid grid-rows-1 lg:grid-rows-3">
          <div>
            <Greet :target="'Nogizaka46'" :link="'/'" />
            <template  v-for="homepage in homepageNogizaka">
              <div class="grid grid-rows-2">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
                  <div class="col-span-4 ">
                    <p class="text-white text-justify"> {{homepage.attributes.description}}</p>
                  </div>
                  <div class="col-span-8 ">

                    <template v-for="carouselImage in homepage.attributes.carousel">
                      <div class="transition ease-out duration-300 rounded-lg hover:scale-120 hover:shadow-[32px_28px_0px_1px_rgba(219,0,219,1)] hover:-translate-x-6" >
                        <Swiper
                            :modules="[SwiperAutoplay]"
                            :autoplay="{
                  delay: 3000,
                  disableOnInteraction: true,
                  }" class=" ">
                          <SwiperSlide class="rounded-lg  hover:brightness-75
                        transition ease-in-out duration-300 border-2"  v-for="images in carouselImage" :key="images" >
                            <nuxt-img class="rounded-lg shadow-lg origin-center   shadow-stale-600" alt="" provider="strapi" :src="`${images.attributes.url}`"  />
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    </template>

                  </div>
                </div>
                <div class="text-white" v-for="car in homepage.attributes.swiper" >
                  <div class="grid border-4 gap-0">

                  </div>
                </div>
              </div>
            </template>


          </div>
          <div>
            <Greet :target="'Sakurazaka46'" :link="'/'" />
          </div>
          <div>
            <Greet :target="'Hinatazaka46'" :link="'/'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const {find} = useStrapi()
const {data: homepageNogizaka} = await find('introductions?populate[0]=carousel&populate[1]=swiper.swiperImage&filters[group][$eq]=Nogizaka46')
useSeoMeta({
  title: 'Sakamichi Fan Site',
  ogTitle: 'Talk about Sakamichi',
  description: 'This is a fan site where talk all about sakamichi members single and information',
})
</script>

<style scoped>
.sss {
  --c: #8A9B0F; /* the border color */
  --b: 10px;    /* the border thickness*/
  --g: 5px;     /* the gap on hover */

  padding: calc(var(--g) + var(--b));
  --_g: #0000 25%,var(--c) 0;
  background:
      conic-gradient(from 180deg at top    var(--b) right var(--b),var(--_g))
      var(--_i,200%) 0  /200% var(--_i,var(--b))  no-repeat,
      conic-gradient(            at bottom var(--b) left  var(--b),var(--_g))
      0   var(--_i,200%)/var(--_i,var(--b)) 200%  no-repeat;
  transition: .3s, background-position .3s .3s;
  cursor: pointer;
}
sss:hover {
  --_i: 100%;
  transition: .3s, background-size .3s .3s;
}


</style>