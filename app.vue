<script setup lang="ts">
  import { Sun, Moon, Server } from 'lucide-vue-next';
  useSeoMeta({
    title: 'YinCheng',
    ogTitle: 'YinCheng',
    description: '這是一個關於YinCheng的網站',
    ogDescription: '這是一個關於YinCheng的網站',
    ogImage: 'https://avatars.githubusercontent.com/u/99303523'
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
    <div>
      <NuxtFooter />
    </div>
    <div class="p-2 m-2">
      <select class="rounded-xl text-xl float-right text-slate-950" v-model="$colorMode.preference">
        <option value="light"><Sun />淺色</option>
        <option value="dark"><Moon />深色</option>
        <option value="system"><Server />系統</option>
    </select>
    </div>
  </div>
</template>
