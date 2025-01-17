<script setup lang="ts">
withDefaults(defineProps<{
  title?: string,
  description?: string,
  author?: string,
  logo?: string,
}>(), {
  title: 'title',
  description: 'description',
  logo: 'https://avatars.githubusercontent.com/u/99303523'
})
</script>

<template>
  <div class="h-full w-full flex items-start justify-start border-solid border-[12px] bg-zinc-900 text-gray-50">
    <div class="flex items-start justify-start w-full h-full">
      <div class="flex flex-col w-full h-full">
        <div>
          <h1 class="text-[80px] font-black px-20 pt-20 text-left">
            {{ title }}
          </h1>
          <img
            v-if="logo"
            :src="logo"
            class="absolute bottom-0 right-0 p-10"
            style="height: 256px; width: 256px; border-radius: 4rem;"
          >
        </div>
        <p class="text-4xl px-20 text-left text-gray-400">
          {{ description }}
        </p>
        <p class="justify-end text-2xl pb-10 pt-40 px-10 font-bold mb-0">
          yincheng.vercel.app
        </p>
      </div>
    </div>
  </div>
</template>
