<script setup lang="ts">
useSeoMeta({
  title: "部落格",
  ogTitle: "部落格 | YinCheng",
  description: "這是YinCheng的個人部落格",
  ogDescription: "這是YinCheng的個人部落格",
  ogImage: '/blog.png',
  twitterCard: 'summary_large_image',
});

import { Clock } from 'lucide-vue-next';
import { DateTime } from 'luxon';

const dateFormat = 'yyyy-MM-dd';
const dateFormater = (date: string, format: string) => {
  return DateTime.fromISO(date).toLocal().toFormat(format);
}
const { data: posts } = await useAsyncData('blog', () => queryCollection('blog').all())
</script>

<template>
  <div>
      <div v-for="blog in posts" :key="blog.path">
        <NuxtLink
          :to="blog.path"
          class="block p-2 m-4 border-b border-gray-200 rounded-t-2xl dark:hover:bg-neutral-900 hover:bg-gray-100 dark:hover:border-gray-500 hover:border-gray-400 duration-300 transition ease-in-out"
        > 
          <h2 class="mt-2 mx-2 font-bold text-xl">{{ blog.title }}</h2>
          <div class="px-4 py-2">
            <p class="text-xs line-clamp-2 dark:text-gray-400 text-gray-700">
              {{ blog.description }}
            </p>
          </div>
          <p class="flex flex-wrap items-center px-4 text-xs dark:text-gray-400 text-gray-700">
            <Clock class="mr-1" :size="16" :stroke-width="2.25" />{{ dateFormater(blog.published_at, dateFormat) }}
          </p>
        </NuxtLink>
      </div>
  </div>
</template>
