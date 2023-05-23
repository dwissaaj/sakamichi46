<template>
  <div class="w-full interFont bg-gray-950">
    <div class="w-full bg-gray-950 mt-6 mb-8 lg:mb-16 lg:mt-12 flex flex-col">
      <div class="flex flex-col justify-center ">
        <div class="flex justify-center mb-4">
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 justify-items-center justify-center items-center">
          <div class="">
            <button @click="getSingle" value="Nogizaka46" class="active:ring-emerald-500 active:ring-2 bg-purple-500 p-3 rounded-md text-white" >Nogizaka46</button>
          </div>
          <div>
            <button @click="getSingle" value="Sakurazaka46" class="bg-red-500 p-3 rounded-md text-white" >Sakurazaka46</button>
          </div>
          <div>
            <button @click="getSingle" value="Hinatazaka46" class="bg-sky-400 p-3 rounded-md text-white" >Hinatazaka46</button>
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-6 gap-2 interFont text-white capitalize p-4 bg-stale-500 mt-6" >
          <div class="border-white divide-y divide-white" v-for="post in allSingle">
            <div class="" v-for="mainCover in post.attributes.cover">
              <NuxtLink class="" :to="`/single/${post.attributes.title}`">
                <div class="flex flex-col space-y-1 ">
                  <nuxt-img class="h-[150px] rounded-lg object-cover hover:brightness-50" provider="strapi" :src="`${mainCover.attributes.url}`" />
                  <p  class="font-medium">{{post.attributes.title}}</p>
                  <p>{{post.attributes.kanji}}</p>
                  <p class="text-slate-600 font-medium">{{post.attributes.group}} | {{post.attributes.launch.substr(0,4)}}</p>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  setup() {

  },
  name: 'single',
  async created() {
    const {find} = useStrapi()
    const allSingles = await find(`singles?populate[0]=cover&sort[1]=launch%3Adesc`)
    this.getAllSingle(allSingles)
  },
  data() {
    return {
      single: [],
      allSingle: []
    }
  },
  methods: {
     async getSingle(e) {
      const btnValue = e.target.value
      const {find} = useStrapi()
      try {
        const {data} = await find(`singles?populate[0]=cover&sort[1]=launch%3Adesc&filters[group][$eq]=${btnValue}`)
        this.allSingle = data
        console.log(this.single)
        console.log(btnValue)
      }
      catch (e) {
        console.log(e)
      }
    },
    getAllSingle(response) {
      this.allSingle = response.data
      console.log(response)
    }
  }
}
useHead({
  title: 'Sakamichi Single',
  meta: [
    {name: "description", content: 'Sakamichi All Singles'}
  ]
})
</script>

<style scoped>
.interFont {
  font-family: 'Inter',sans-serif;
  font-weight: lighter;
}
</style>