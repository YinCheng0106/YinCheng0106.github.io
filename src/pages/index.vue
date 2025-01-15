<script setup lang="ts">
import RepoMenu from "../components/project.vue";
useSeoMeta({
  title: "首頁 | YinCheng",
  ogTitle: "YinCheng",
  description: "這是一個關於YinCheng的網站",
  ogDescription: "這是一個關於YinCheng的網站",
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <div>
    <ClientOnly>
      <BlurReveal
        :delay="0.2"
        :duration="0.75"
        class="p-8"
      >
        <div class="pt-4 pb-16 flex items-center justify-center">
          <h2 class="text-6xl font-bold font-mono">Hi, 你好</h2>
        </div>
        <RepoMenu />
      </BlurReveal>
    </ClientOnly>
  </div>
</template>
