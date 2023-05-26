<template>
  <div class="flex flex-col">
    <header class="w-full pt-6 pb-8 bg-zinc-800 text-white inter">
      <nav class="w-full">
        <div class="grid grid-col-2 lg:grid-cols-3 gap-2 justify-items-center ">
          <div>
            <NuxtLink href="/"><nuxt-img class="w-12" src="sakamichi.png"  /></NuxtLink>
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