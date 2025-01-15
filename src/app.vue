<script setup lang="ts">
useSeoMeta({
  title: "YinCheng",
  ogTitle: "YinCheng",
  description: "這是一個關於YinCheng的網站",
  ogDescription: "這是一個關於YinCheng的網站",
  ogImage: "~/public/SEOimg/home.png",
});
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
