<script setup lang="ts">
  useSeoMeta({
    title: 'YinCheng',
    ogTitle: 'YinCheng',
    description: '',
    ogDescription: '',
    ogImage: ''
  });
</script>

<template>
  <div>
    <div class="flex p-2 m-2 bg-neutral-400 rounded-xl">
      <img class="w-12 h-12 rounded-full" src="https://avatars.githubusercontent.com/u/99303523">
      <h1 class="text-xl font-bold justify-center p-2">YinCheng</h1>
    </div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
