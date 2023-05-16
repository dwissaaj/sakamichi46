<template>
  <div class="w-full max-w-[1440px] mx-auto" v-for="member in response" key="member.id">
    <div class="px-4 lg:px-16">
      <div class="w-full flex flex-col">
        <div class="w-full grid grid-cols-12 gap-2 lg:gap-10 mt-5">
          <div class="col-span-12 lg:col-span-8 border-2 rounded-md border-slate-500">
            <div class="w-full flex flex-col">
                <div>
                    <div class="grid grid-cols-2 p-2 gap-2 capitalize globalFont space-y-4">
                      <div class="" v-for="image in member.attributes.image">
                        <nuxt-img class="rounded-md" provider="strapi" :src="`${image.attributes.url}`" />
                      </div>
                      <div>
                        <h1 class="text-4xl font-bold">{{member.attributes.names}}</h1>
                        <h1 class="text-4xl font-bold">{{member.attributes.nameKanji}}</h1>
                        <h2 class="text-3xl">{{member.attributes.nameKana}}</h2>
                        <h2 class="text-3xl">{{member.attributes.nickname}}</h2>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div class="col-span-12 lg:col-span-4 h-fit sticky top-0 space-y-6 ring ring-blue-500">
            <div class="w-full flex flex-col hidden lg:block">
              <div class="grid grid-cols-2 p-2 gap-2">
                <div class="" v-for="image in member.attributes.image">
                  <nuxt-img class="rounded-md" provider="strapi" :src="`${image.attributes.url}`" />
                </div>
                <div class="text-base">
                  <p class="font-bold text-xl">Description</p>
                  {{member.attributes.description}}
                </div>
              </div>
            </div>
<!--            <div class="block lg:hidden">-->
<!--              {{member.attributes.names}}-->
<!--            </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const {find} = useStrapi()
const { id } = useRoute().params
const {data: response} = await find(`members?populate=*&filters[id][$eq]=${id}`)
console.log(response)
</script>

<style scoped>
.globalFont {
  font-family: 'railway',sans-serif;
}
</style>