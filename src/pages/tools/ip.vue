<script lang="ts" setup>
useSeoMeta({
  title: "IP 位置",
  ogTitle: "IP 位置 | YinCheng",
  description: "查看你的 IP 位址",
  ogDescription: "查看你的 IP 位址",
})
</script>

<template>
  <div class="w-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">IP Address</h2>
    <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 my-2">
      <p class="text-md md:text-lg lg:text-xl"><IPAddress /></p>
    </div>
  </div>
</template>
