<template>
  <nav class="flex justify-around items-center content-center m-4 Ubuntu">
      <div>
        <NuxtLink href="/"><nuxt-img src="sakamichi.png" width="75px"  /></NuxtLink>
      </div>
    <div class="flex justify-around gap-8 content-center">
      <div class="flex items-center gap-2 border-zinc-500 rounded-lg border p-2 hover:bg-slate-300">
        <Icon name="mdi:face-woman-shimmer-outline"/>
        <NuxtLink href="/members">Member</NuxtLink>
      </div>
      <div class="flex items-center gap-2 border-zinc-500 rounded-lg border p-2 hover:bg-slate-300">
        <Icon name="ph:newspaper-bold" class="" />
        <NuxtLink href="/news">News</NuxtLink>
      </div>
      <div class="flex items-center gap-2 border-zinc-500 rounded-lg border p-2 hover:bg-slate-300">
        <Icon name="material-symbols:calendar-month-outline" />
        <NuxtLink href="/schedule">Schedule</NuxtLink>
      </div>
      <div class="flex items-center gap-2 border-zinc-500 rounded-lg border p-2 hover:bg-slate-300">
        <Icon name="material-symbols:contact-support-outline-rounded" />
        <NuxtLink href="/help">Help</NuxtLink>
      </div>
    </div>

    <div class="bg-slate-400 flex items-center content-center p-2 gap-2 rounded-xl">
        <Icon name="cil:burn" />
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

</style>