<template>
 <div class="flex h-screen justify-center items-center">
   <div class="flex flex-col space-y-4">
     <p class="interFont text-5xl font-bold text-center italic">{{error.statusCode}}</p>
     <p class="interFont text-2xl">{{error.message}}</p>
     <button class="border-2 border-white rounded-xl text-white
            p-3 bg-emerald-400 hover:bg-emerald-800" @click="handleError">back to home</button>
   </div>
 </div>
</template>

<script setup>
defineProps({
  error: Object
})
const handleError = () => clearError({ redirect: '/' })
</script>

<style scoped>

</style>