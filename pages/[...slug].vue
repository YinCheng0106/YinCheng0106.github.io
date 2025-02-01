<script setup>
definePageMeta({
  layout: false,
});
useSeoMeta({
  title: "404 Not Found",
  ogTitle: "404 Not Found | YinCheng",
  description: "你發現了一個神秘的通道",
  ogDescription: "你發現了一個神秘的通道",
});
</script>

<template>
  <div class="flex min-h-screen items-center font-mono">
    <div class="mx-auto flex flex-wrap items-center p-4">
      <div class="w-full p-4 text-center md:w-1/2">
        <div class="text-[10rem]">404</div>
      </div>
      <div class="w-full p-4 text-center md:w-1/2 md:text-left">
        <div class="mb-12 text-3xl"><del>你發現了一個神秘的通道</del></div>
        <NuxtLink
          to="/"
          class="rounded-lg border dark:border-white px-4 py-2 hover:bg-gray-50 hover:bg-opacity-10 active:bg-opacity-20 duration-300 delay-75"
        >
          回首頁</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
