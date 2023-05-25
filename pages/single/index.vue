<template>
  <Head>
    <Title>Sakamichi Singles</Title>
    <Meta charset="UTF-8"></Meta>
    <Meta name="description" content="All sakamichi series group singles released" />
    <Meta name="keywords" content="Sakamichi Singles, Sakamichi group, Nogizaka46, Sakurazaka46, Hinatazaka46" />
  </Head>
  <div class="w-full bg-zinc-950 flex flex-col interFont ">
    <div class="">
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
.single-bg {
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>