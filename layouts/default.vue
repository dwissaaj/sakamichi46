<template>
  <nav class="flex justify-around items-center content-center m-4">
      <div>
        <NuxtLink href="/"><nuxt-img src="sakamichi.png" width="100px"  /></NuxtLink>
      </div>
    <div class="flex justify-around gap-8 ">
        <NuxtLink href="/members">Member</NuxtLink>
        <NuxtLink href="/news">News</NuxtLink>
        <NuxtLink href="/help">Help</NuxtLink>
    </div>
    <div class="bg-slate-400 flex items-center content-center p-2 gap-2 rounded-xl">
        <Icon name="cil:burn" />
        <NuxtLink class="text-white">Join Us</NuxtLink>
    </div>
  </nav>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>

</style>