<template>
  <div class="w-full h-full bg-black text-white interFont ">
    <div class="flex flex-col justify-start items-start p-2 lg:p-8 ">
      <GlobalTitle title="Advertising" />
      <p>Help us by click this ads, check our term of use</p>
      <div class="w-full grid grid-cols-6 rounded-md border-2 max-h-96 ">
        <div v-for="x in 12">
          {{x}}
          <adsbygoogle />
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "help"
}

function acceptTracking() {
  useGtagConsent(true)
}
function deniedTracking() {
  useGtagConsent(false)
}
</script>

<style scoped>

</style>