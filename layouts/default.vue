<template>
  <div class="flex flex-col">
    <header class="w-full pt-6 pb-8 bg-zinc-800 text-white inter">
      <nav class="w-full">
        <div class="grid grid-col-2 lg:grid-cols-3 gap-2 justify-items-center ">
          <div>
            <NuxtLink href="/"><nuxt-img class="w-12"  src="https://bucket-q0ddp1.s3.ap-southeast-1.amazonaws.com/layout/sakamichi.png"  /></NuxtLink>
          </div>
          <div class="grid grid-cols-5 gap-2 lg:gap-14 content-center ">
              <div class="flex flex-row items-center">
                <div class="flex flex-row md:space-x-5 p-2 rounded-md hover:bg-zinc-700 items-center">
                  <nuxt-icon class="hidden md:block" name="home" />
                  <NuxtLink class="" href="/">Home</NuxtLink>
                </div>

              </div>
                <div class="flex flex-row items-center">
                  <div class="flex flex-row md:space-x-5 p-2 rounded-md hover:bg-zinc-700 items-center">
                    <nuxt-icon class="hidden md:block" name="person" />
                    <NuxtLink class="" href="/members">Member</NuxtLink>
                  </div>

                </div>
                <div class="flex flex-row items-center">
                  <div class="flex flex-row md:space-x-5 p-2 rounded-md hover:bg-zinc-700 items-center">
                    <nuxt-icon class="hidden md:block" name="music" />
                    <NuxtLink class="" href="/single">Single</NuxtLink>
                  </div>
                </div>
                <div class="flex flex-row items-center">
                  <div class="flex flex-row md:space-x-5 p-2 rounded-md hover:bg-zinc-700 items-center">
                    <nuxt-icon class="hidden md:block" name="news" />
                    <el-popover
                        placement="bottom-end"
                        title="On Progess"
                        :width="200"
                        trigger="hover"
                        content="This feature in development"
                    >
                      <template #reference>
                        <button class="">News</button>
                      </template>
                    </el-popover>

                  </div>


                </div>
                <div class="flex flex-row ">
                  <div class="flex flex-row md:space-x-5 p-2 rounded-md hover:bg-zinc-700 items-center">
                    <nuxt-icon  class="hidden md:block" name="help" />
                    <NuxtLink class="" href="/help">Help</NuxtLink>
                  </div>
                </div>
          </div>
          <div class="hidden md:block flex ">
            <div class="p-2 rounded-md hover:border-b-2 hover:border-l-2 hover:border-r-2">
              <NuxtLink href="mailto:sakamichi.online@gmail.com" class="flex items-center gap-2 rounded-xl shrink-0">
                <Icon class="hover:animate-ping" name="cil:burn" />
                <p>Join Us</p>
              </NuxtLink>
            </div>
          </div>
        </div>
      </nav>

    </header>
    <main class="">
      <slot />
    </main>
    <footer >
          <div class="w-full bg-zinc-800 text-white static ">
            <div class="w-full flex flex-col justify-center p-4 ">
              <div class="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4 lg:gap-8 justify-items-center">
                  <div>
                    <p class="font-bold text-lg text-start" >About Us</p>
                    <NuxtLink to="/term">Term of Use</NuxtLink>
                    <h2 class="text-lg font-bold ">Contact Us</h2>
                    <p class="text-start">
                      any question contact us</p>
                    <a class="underline" href="mailto:sakamichi.online@gmail.com">sakamichi.online@gmail.com</a>
                    <div class="space-x-6">
                      <NuxtLink to="https://twitter.com/PrincePositif" >Instagram</NuxtLink>
                      <NuxtLink to="https://instagram.com/tsusui.rei?igshid=MzNlNGNkZWQ4Mg==" class="">Twitter</NuxtLink>
                    </div>
                  </div>

                <div>
                  <div class="flex flex-col gap-2 col-span-12 md:col-span-1 justify-center">
                    <p class="text-lg font-bold text-start">Official Website</p>
                    <div class="grid grid-cols-3 gap-6 justify-items-center">
                      <NuxtLink to="https://www.nogizaka46.com/"><nuxt-img  src="https://bucket-q0ddp1.s3.ap-southeast-1.amazonaws.com/layout/nogi.png" class="w-10 lg:w-20"  alt="nogizaka logo" /></NuxtLink>
                      <NuxtLink to="https://sakurazaka46.com/"><nuxt-img  src="https://bucket-q0ddp1.s3.ap-southeast-1.amazonaws.com/layout/sakurazaka46.png" class="w-10 lg:w-20" alt="sakura logo" /></NuxtLink>
                      <NuxtLink to="https://www.hinatazaka46.com/s/official/?ima=0000"><nuxt-img src="https://bucket-q0ddp1.s3.ap-southeast-1.amazonaws.com/layout/hinatazaka46.png" class="w-10 lg:w-20" alt="hinata logo" /></NuxtLink>
                    </div>
                  </div>
                </div>

              </div>
              <div>
                <p class="w-full border-t-2 p-2 mt-3">Copyright Sakamichi.online 2023 - All right reserved</p>
              </div>
            </div>

          </div>
    </footer>



  </div>
</template>

<script>
import FooterLayout from "~/layouts/FooterLayout.vue";

export default {
  name: "default",
  components: {FooterLayout}
}


</script>

<style scoped>
.inter {
  font-family: 'Inter',sans-serif;
  font-weight: normal;
}

.router-link-exact-active {
  border-bottom: 3px;
  border-bottom-color: #10b981;
  border-bottom-style: solid;
}
</style>