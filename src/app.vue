<script setup lang="ts">
useSeoMeta({
  title: "YinCheng",
  ogTitle: "YinCheng",
  author: "YinCheng",
  keywords: "YinCheng, yincheng, 胤呈, yincheng0106",
  description: "這是一個關於 YinCheng 的網站，在這裡可以看到 YinCheng 的 GitHub Repositories 以及 YinCheng 的 專屬部落格",
  ogDescription: "這是一個關於YinCheng的網站",
  twitterCard: 'summary_large_image',
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
