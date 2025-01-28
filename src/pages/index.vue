<script setup lang="ts">
import RepoMenu from "../components/Project.vue";
useSeoMeta({
  title: "首頁",
  ogTitle: "YinCheng",
  description: "這是一個關於YinCheng的網站",
  ogDescription: "這是一個關於YinCheng的網站",
  ogImage: "/home.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div>
    <ClientOnly>
      <BlurReveal :delay="0.2" :duration="0.75" class="p-8">
        <div
          class="py-16 max-md:pb-12 max-md:pt-4 max-lg:py-12 flex items-center justify-center"
        >
          <h2 class="text-6xl font-bold font-mono">Hi, 你好</h2>
        </div>
        <RepoMenu />
      </BlurReveal>
    </ClientOnly>
  </div>
</template>
