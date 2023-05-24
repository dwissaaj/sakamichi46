<template>
  <div>
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

.your-class {
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='24' viewBox='0 0 88 24'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='autumn' fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M10 0l30 15 2 1V2.18A10 10 0 0 0 41.76 0H39.7a8 8 0 0 1 .3 2.18v10.58L14.47 0H10zm31.76 24a10 10 0 0 0-5.29-6.76L4 1 2 0v13.82a10 10 0 0 0 5.53 8.94L10 24h4.47l-6.05-3.02A8 8 0 0 1 4 13.82V3.24l31.58 15.78A8 8 0 0 1 39.7 24h2.06zM78 24l2.47-1.24A10 10 0 0 0 86 13.82V0l-2 1-32.47 16.24A10 10 0 0 0 46.24 24h2.06a8 8 0 0 1 4.12-4.98L84 3.24v10.58a8 8 0 0 1-4.42 7.16L73.53 24H78zm0-24L48 15l-2 1V2.18A10 10 0 0 1 46.24 0h2.06a8 8 0 0 0-.3 2.18v10.58L73.53 0H78z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>