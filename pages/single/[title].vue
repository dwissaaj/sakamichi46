<template>
   <div v-for="single in response" class="w-full max-w-[1440px] interFont">
     <div class="bg-gray-950 grid grid-cols-1 mt-6 mb-8 lg:mb-16 lg:mt-12 flex flex-col w-screen">
       <div class="flex w-screen p-4 lg:p-8">
         <div v-for="cover in single.attributes.cover">
            <nuxt-img class="w-[250px]" provider="strapi" :src="`${cover.attributes.url}`" />
         </div>
       </div>
       <div v-for="collect in single.attributes.otherCover">
         <div v-for="imag in collect">
           <div v-for="images in imag.attributes.url">
             <p class="text-white">{{images}}</p>
           </div>
           <Swiper>
             <SwiperSlide v-for="slide in imag" :key="slide">
               <p>{{slide}}</p>
             </SwiperSlide>
           </Swiper>
         </div>

       </div>
     </div>
   </div>
</template>

<script setup>
const {find} = useStrapi()
const {title} = useRoute().params
const {data: response} = await find(`singles?populate=*&filters[title][$eq]=${title}`)

</script>

<style scoped>

</style>