<template>
   <div v-for="single in singleData" class="w-full bg-black text-white interFont">
       <Head>
         <Title>{{single.attributes.group}} {{single.attributes.title}} </Title>
         <Meta charset="UTF-8"></Meta>
         <Meta name="description" :content="`${single.attributes.description}`" />
         <Meta name="keywords" :content="`${single.attributes.tagsSeo}`" />
       </Head>
     <div class="grid grid-cols-1 my-20">
       <section class="flex p-4 lg:p-8 justify-start ">
         <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
           <div class="transition ease-in-out duration-300 hover:scale-150 hover:translate-x-[300px] hover:z-50" v-for="mainCover in single.attributes.cover">
             <nuxt-img class="w-[600px] shadow-xl shadow-slate-900 border border-white rounded-lg hover:border-2 hover:border-emerald-500" provider="strapi" :src="`${mainCover.attributes.url}`" />
           </div>
           <div class="grid grid-rows-2 gap-0">
             <div class="grid gap-2">
               <p class="text-white border-l-2 border-t-2 border-rose-600 p-1">{{single.attributes.title}}</p>
               <p class="text-white border-l-2 border-t-2 border-rose-600 p-1">{{single.attributes.kanji}}</p>
               <p class="text-white border-l-2 border-t-2 border-rose-600 p-1">{{single.attributes.launch}}</p>
               <p class="text-white border-l-2 border-t-2 border-rose-600 p-1 capitalize font-bold">{{single.attributes.label}}</p>
             </div>
             <div class="mt-10">
               <p class="text-white text-xl font-bold">Senbatsu Member</p>
               <div class="grid grid-cols-3"  v-for="senbatsu in single.attributes.members">
                 <div v-for="memberSenbatsu in senbatsu">
                   <div >
                     <NuxtLink :to="`/members/${memberSenbatsu.id}`" class="text-white p-2 border-r-2 border-b-2 border-emerald-500  hover:text-emerald-600">{{memberSenbatsu.attributes.name}}</NuxtLink>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

       <section class="flex p-4 lg:p-8 justify-center">
         <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
             <div class="lg:mx-12">
               <div class=" " v-for="collec in single.attributes.otherCover">
                 <Swiper
                     :modules="[SwiperAutoplay]"
                     :autoplay="{
                  delay: 3000,
                  disableOnInteraction: true,
                  }" class=" transition ease-in-out duration-300 hover:scale-150 hover:translate-x-[300px] shadow-md shadow-gray-100">
                   <SwiperSlide class=""  v-for="collection in collec" :key="collection" >
                     <nuxt-img class="border-white border-2 rounded-lg hover:border-emerald-500" alt="" provider="strapi" :src="`${collection.attributes.url}`"  />
                   </SwiperSlide>
                 </Swiper>
               </div>
           </div>
           <div class="" >
             <p class="text-white text-xl font-bold">Senbatsu Member</p>
             <div class="grid grid-flow-row auto-rows-max gap-6">
               <div class="border border-slate-400 p-3 rounded-md shadow-[7px_5px_0px_0px_rgba(80,200,120,0.85)]" v-for="otherSong in single.attributes.relatedSong">
                 <div class="" v-for="relatedMenba in otherSong.members">
                   <div class="">
                     <p class="font-bold">{{otherSong.title}}</p>
                     <div class="grid grid-cols-8">
                       <div v-for="relatedMembers in relatedMenba">
                         <NuxtLink :to="`/members/${relatedMembers.id}`" class="text-xs hover:text-emerald-600" >{{relatedMembers.attributes.name}}</NuxtLink>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
       <section class="flex p-4 lg:p-8 justify-center" >
        <div class="w-full flex flex-col">
          <GlobalTitle title="Trivia"/>
          <div v-for="trivia in single.attributes.trivia" class="p-4 border-slate-400 border rounded-md w-full">
            <ol class="text-white list-disc list-inside">
              <li>{{trivia.trivia}}</li>
            </ol>
          </div>
        </div>
       </section>
     </div>
   </div>
</template>

<script>
import TriviaCard from "~/components/card/TriviaCard.vue";

export default {
  components: {TriviaCard},
  setup() {

  },
  name: 'titleSingle',
  data() {
    return {
      singleData: []
    }
  },
  async created() {
    const {find} = useStrapi()
    const {title} = useRoute().params
    const singleDatas = await find(`singles?populate[0]=members&&populate[1]=cover&populate[2]=relatedSong.members&populate[3]=otherCover&populate[4]=trivia&populate[5]=tagSeo&filters[title][$eq]=${title}`)
    this.setPost(singleDatas)
  },
  methods: {
    setPost(response) {
      this.singleData = response.data;
    },
  }
}

</script>

<style scoped>
.interFont {
  font-family: 'Inter',sans-serif;
  font-weight: lighter;
}
</style>