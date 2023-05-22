<template>
  <div class="w-full max-w-screen bg-black inter p-8 lg:px-24 text-white mt-4 lg:mt-8  ">
    <div class="flex grid grid-cols-3 gap-0">
      <div class="space-y-6 hidden md:block ">
        <div class="flex flex-col">
          <NuxtLink class="font-bold text-lg" to="/">About Us</NuxtLink>
          <NuxtLink to="/term">Term of Use</NuxtLink>
        </div>
        <div >
          <p class="text-lg font-bold">Supported by</p>
          <div class="flex flex-row space-x-4 content-center">
            <div class="flex flex-row justify-start items-center content-center space-x-3">
              <nuxt-img width="25px" src="vercel-icon-light.png">Vercel</nuxt-img>
              <NuxtLink to="https://vercel.com/">Vercel</NuxtLink>
            </div>
            <div>
              <NuxtLink src="https://www.digitalocean.com/" >
                <nuxt-img width="150px" class="bg-black" src="digitalocean.png" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-row-2 hidden md:block">
        <div>
          <p class="text-lg font-bold">Contact Us</p>
          <p>any question go to our email
            <NuxtLink class="underline" href="mailto:sakamichi.online@gmail.com">sakamichi.online@gmail.com</NuxtLink></p>
        </div>
        <div>
          <p class="text-lg font-bold">Supported by</p>
          <div class="flex flex-row space-x-4">
            <NuxtLink to="https://twitter.com/PrincePositif" class="">Instagram</NuxtLink>
            <NuxtLink to="https://instagram.com/tsusui.rei?igshid=MzNlNGNkZWQ4Mg==" class="">Twitter</NuxtLink>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-2 col-span-12 md:col-span-1 justify-center">
        <p class="text-lg font-bold text-center">Official Website</p>
        <div class="grid grid-cols-3 gap-6">
          <NuxtLink to="https://www.nogizaka46.com/"><nuxt-img src="nogizaka46.png" width="100px" alt="nogizaka logo" /></NuxtLink>
          <NuxtLink to="https://sakurazaka46.com/"><nuxt-img src="sakurazaka46.png" width="100px" alt="sakura logo" /></NuxtLink>
          <NuxtLink to="https://www.hinatazaka46.com/s/official/?ima=0000"><nuxt-img src="hinatazaka46.png" width="100px" alt="hinata logo" /></NuxtLink>
        </div>
      </div>
    </div>
    <p class="flex justify-center mt-4 border-t-2 p-2">Copyright Sakamichi.online 2023 - All right reserved</p>
  </div>


</template>

<script>
export default {
  name: "FooterLayout"
}
</script>

<style scoped>

</style>