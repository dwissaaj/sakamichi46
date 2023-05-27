<template>

  <Head>
    <Title>Help & Donation</Title>
    <Meta charset="UTF-8"></Meta>
    <Meta name="description" content="All sakamichi series group singles released" />
    <Meta name="keywords" content="Sakamichi Singles, Sakamichi group, Nogizaka46, Sakurazaka46, Hinatazaka46" />
  </Head>

  <div class="w-full h-screen bg-black  text-white interFont ">
    <div class="flex flex-col p-6 justify-start">
      <div>
        <GlobalTitle title="Advertising" />
        <p class="text-start">Help us by click this ads, check our term of use</p>
      </div>
      <div>
        <GlobalTitle title="Other Donation" />
        <p class="text-start hover:text-emerald-500 hover:underline" >You can also help me pay the bills in

        </p>
        <div class="flex flex-row space-x-6">
          <div class="w-20 md:w-40">
            <NuxtLink to="https://www.buymeacoffee.com/sakamichionline" class="" >
              <nuxt-img src="bmc-button.png" />
            </NuxtLink>

          </div>
        </div>
      </div>
    </div>
    <div class=" p-4">
      <GlobalTitle title="Advertising" />
      <div class="p-4 rounded-lg border-2 border-white">
        <div class=" p-3 gap-3">
          <adsbygoogle  :ad-style="{display:'block', }"
                        ad-format="autorelaxed"
                        ad-client="ca-pub-6939749049118846"
                        ad-slot="2870384264" />
        </div>
      </div>
    </div>
    <div class=" p-4">
      <GlobalTitle title="Advertising" />
      <div class="p-4 rounded-lg border-2 border-white">
        <adsbygoogle
            :ad-style="{display:'block', }"
            ad-client="ca-pub-6939749049118846"
            ad-slot="2035335818"
            ad-format="auto"
            full-width-responsive="full-width-responsive"
        />
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