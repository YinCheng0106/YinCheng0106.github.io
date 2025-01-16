<script setup lang="ts">
useSeoMeta({
  title: "部落格 | YinCheng",
  ogTitle: "部落格 | YinCheng",
  description: "這是YinCheng的個人部落格",
  ogDescription: "這是YinCheng的個人部落格",
  ogImage: '/blog.png',
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <div>
    <ContentList path="/blog" v-slot="{ list }">
      <div v-for="blog in list" :key="blog._path">
        <NuxtLink
          :to="blog._path"
          class="block p-2 m-4 border-b border-gray-200 rounded-t-2xl dark:hover:bg-neutral-900 hover:bg-gray-100 dark:hover:border-gray-500 hover:border-gray-400 duration-300 transition ease-in-out"
        >
          <h2 class="m-2 font-bold text-xl">{{ blog.title }}</h2>
          <p class="px-4 py-2 text-xs dark:text-gray-400 text-gray-700">
            {{ blog.description }}
          </p>
        </NuxtLink>
      </div>
    </ContentList>
  </div>
</template>
