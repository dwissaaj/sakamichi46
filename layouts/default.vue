<template>
  <div>
  <header>
    <nav class=" w-full mx-auto max-w-[1440px] flex justify-around items-center content-center inter w-full px-4 mt-3">
      <div>
        <NuxtLink href="/"><nuxt-img src="sakamichi.png" width="75px"  /></NuxtLink>
      </div>
      <div class="flex truncate space-x-1 hidden md:block">
        <div class="flex justify-around gap-8 content-center">
          <div class="flex items-center gap-2 border-zinc-500 rounded-lg border p-2 hover:bg-slate-400">
            <Icon name="mdi:face-woman-shimmer-outline"/>
            <NuxtLink class="text-black" href="/members">Member</NuxtLink>
          </div>
          <div class="flex items-center gap-2 border-zinc-500 rounded-lg border p-2 hover:bg-slate-400">
            <Icon name="ph:newspaper-bold" class="" />
            <NuxtLink class="text-black" href="/news">News</NuxtLink>
          </div>
          <div class="flex items-center gap-2 border-zinc-500 rounded-lg border p-2 hover:bg-slate-400">
            <Icon name="material-symbols:calendar-month-outline" />
            <NuxtLink class="text-black" href="/single">Single</NuxtLink>
          </div>
          <div class="yellow-block hover:ring-2 hover:ring-yellow-500 flex items-center gap-2 border-zinc-500 rounded-lg border p-2 hover:bg-slate-400">
            <Icon name="material-symbols:contact-support-outline-rounded" />
            <NuxtLink class="text-black" href="/help">Help</NuxtLink>
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
.orange-block:hover {
  color: #cc0719;
}
.yellow-block:hover {
  color: #dcaa0a
}


</style>