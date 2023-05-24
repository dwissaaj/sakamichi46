<template>
  <div class="w-full interFont ">
    <Head>
      <Title>Sakamichi Singles</Title>
      <Meta charset="UTF-8"></Meta>
      <Meta name="description" content="All Sakamichi series Nogizaka46 Sakurazaka46 Hinatazaka46 Single & Albums" />
      <Meta name="keywords" content="Nogizaka46, Sakurazaka46, Hinatazaka46 Single & Albums" />
    </Head>
    <div class="w-full h-screen bg-zinc-950 flex flex-col">
      <div class="flex flex-col justify-center ">
        <div class="flex justify-center mb-4">
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 justify-items-center justify-center items-center">
          <div class="">
            <button @click="getSingle" value="Nogizaka46" class="bg-purple-500 hover:brightness-150 p-3 rounded-lg hover:shadow-xl hover:shadow-zinc-900 text-black" >Nogizaka46</button>
          </div>
          <div>
            <button @click="getSingle" value="Sakurazaka46" class="bg-red-500 hover:brightness-150 p-3 rounded-lg hover:shadow-xl hover:shadow-zinc-900 text-black" >Sakurazaka46</button>
          </div>
          <div>
            <button @click="getSingle" value="Hinatazaka46" class="bg-sky-400 hover:brightness-150 p-3 rounded-lg hover:shadow-xl hover:shadow-zinc-900 text-black" >Hinatazaka46</button>
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
      }
      catch (e) {
        console.log(e)
      }
    },
    getAllSingle(response) {
      this.allSingle = response.data
    }
  }
}

</script>

<style scoped>
.interFont {
  font-family: 'Inter',sans-serif;
  font-weight: lighter;
}
</style>