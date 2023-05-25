<template>
  <header>
    <nav class="w-full p-4 bg-zinc-800 shadow-xl shadow-white text-white flex justify-around items-center content-center inter ">
      <div>
        <NuxtLink href="/"><nuxt-img src="sakamichi.png" width="75px"  /></NuxtLink>
      </div>
      <div class="flex truncate space-x-1 hidden md:block">
        <div class="flex justify-around gap-8 content-center">
          <div class="flex items-center gap-2 border-zinc-500 rounded-lg border p-2 hover:bg-slate-400">
            <Icon name="mdi:face-woman-shimmer-outline"/>
            <NuxtLink class="" href="/members">Member</NuxtLink>
          </div>
          <div class="flex items-center gap-2 border-zinc-500 rounded-lg border p-2 hover:bg-slate-400">
            <Icon name="ph:newspaper-bold" class="" />
            <button disabled class=" text-through" >News</button>
            <div class="hidden hover:block hover:z-50">
              <p>not supported yed</p>
            </div>
          </div>
          <div class="flex items-center gap-2 border-zinc-500 rounded-lg border p-2 hover:bg-slate-400">
            <Icon name="material-symbols:calendar-month-outline" />
            <NuxtLink class="" href="/single">Single</NuxtLink>
          </div>
          <div class="yellow-block hover:ring-2 hover:ring-yellow-500 flex items-center gap-2 border-zinc-500 rounded-lg border p-2 hover:bg-slate-400">
            <Icon name="material-symbols:contact-support-outline-rounded" />
            <NuxtLink class="" href="/help">Help</NuxtLink>
          </div>
        </div>
      </div>

      <div class="orange-block bg-slate-400 ring-red-400 hover:ring-2 hover:bg-slate-600 flex items-center content-center p-2 gap-2 rounded-xl shrink-0">
        <Icon class="" name="cil:burn" />
        <NuxtLink href="mailto:sakamichi.online@gmail.com" class="text-white">Join Us</NuxtLink>
      </div>
    </nav>
  </header>

  <main>
    <slot />
  </main>

  <footer>
    <FooterLayout />
  </footer>
  </div>
  <!--    <footer class="bg-black">-->
  <!--        <div class="bg-black">-->
  <!--dsfdfsdfs-->
  <!--        </div>-->
  <!--    </footer>-->
</template>

<script>
export default {
  name: "tash"
}
</script>

<style scoped>

</style>