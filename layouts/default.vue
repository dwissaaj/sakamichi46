<template>
  <nav class="flex justify-around items-center content-center Ubuntu w-full px-4 mt-3">
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
          <NuxtLink class="text-black" href="/schedule">Schedule</NuxtLink>
        </div>
        <div class="yellow-block hover:ring-2 hover:ring-yellow-500 flex items-center gap-2 border-zinc-500 rounded-lg border p-2 hover:bg-slate-400">
          <Icon name="material-symbols:contact-support-outline-rounded" />
          <NuxtLink class="text-black" href="/help">Help</NuxtLink>
        </div>
      </div>
    </div>

    <div class="orange-block bg-slate-400 ring-red-400 hover:ring-2 hover:bg-slate-600 flex items-center content-center p-2 gap-2 rounded-xl shrink-0">
        <Icon class="" name="cil:burn" />
        <NuxtLink class="text-white Ubuntu">Join Us</NuxtLink>
    </div>
  </nav>
  <div class="m-4">
      <slot />
  </div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>
.Ubuntu {
  font-family: 'Ubuntu',sans-serif;
}
.orange-block:hover {
  color: #cc0719;
}
.yellow-block:hover {
  color: #dcaa0a
}
.green-block {
  color : #14532d
}


</style>