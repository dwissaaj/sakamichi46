<template>
  <Head>
    <Title>Term of Use</Title>
    <Meta charset="UTF-8"></Meta>
    <Meta name="description" content="All sakamichi series group singles released" />
    <Meta name="keywords" content="Sakamichi Singles, Sakamichi group, Nogizaka46, Sakurazaka46, Hinatazaka46" />
  </Head>

  <div class="w-full bg-zinc-950 flex flex-col interFont text-white p-2">
    <NuxtLoadingIndicator />
    <div>
      <div class="flex flex-col justify-start items-start p-2 lg:p-8 ">
        <GlobalTitle title="Term of Use" />
        <div class="border-2 p-3  rounded-lg">
          <ol class="list-decimal list-inside">
            <li>
              We are using google analytic and google adsense to tracking website performance
            </li>
            <li>
              We don't collect any profit all content copyright belongs to Nogizaka46 LLC and Seed & Flower LLC
            </li>
            <li>
              This is a fan site
              all copyright belong to the owners
            </li>
            <li>
              We are using google adsense to maintain website
            </li>
            <li>
              Google adsense use for servers
            </li>
          </ol>
        </div>
      </div>
    </div>
    <div class="p-2 lg:p-8">
      <GlobalTitle title="Help Us by click this ads"/>

      <div class="border-2 p-3 rounded-lg">
        <adsbygoogle
            :ad-style="{display:'block', }"
            ad-format="autorelaxed"
            ad-client="ca-pub-6939749049118846"
            ad-slot="5232230827"/>
      </div>

    </div>
    <div class="p-2 lg:p-8">
      <GlobalTitle title="Second Ads" />
      <div class="grid grid-cols-1 lg:grid-cols-6  border-2 p-3 rounded-lg ">
          <div>
            <adsbygoogle ad-client="ca-pub-6939749049118846"
                         :ad-style="{display:'block', }"
                         ad-slot="3599584952"
                         ad-format="autorelaxed"
                         full-width-responsive="full-width-responsive"   />
          </div>
      </div>
    </div>

    <div>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const isOpen = ref(true)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}
</script>
