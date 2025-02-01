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
const { data: posts } = await useAsyncData('blog', () => {
  return queryCollection('blog')
    .order('published_at', 'DESC')
    .select('title', 'description', 'published_at', 'path')
    .all()
  });
</script>

<template>
  <div>
    <h2 class="flex flex-wrap items-center justify-center text-2xl font-blod font-mono">Blog 部落格</h2>
    <BlurReveal :delay="0.2" :duration="0.75" class="max-md:p-2 max-lg:p-4 max-xl:p-6 p-8">
      <div v-for="blog in posts" :key="blog.path" v-if="posts">
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
      <div class="flex md:my-24 items-center font-mono" v-else>
        <div class="mx-auto flex flex-wrap items-center p-4">
            <div class="w-full text-center md:w-1/2">
                <div class="text-[10rem]" aria-label="Error Code 500">欸?</div>
            </div>
            <div class="w-full p-4 text-center md:w-1/2 md:text-left md:p-6">
                <div class="mb-12 text-3xl">沒有文章?<br>請再試一試</div>
                <NuxtLink to="/"
                    class="rounded-lg border dark:border-white px-4 py-2 hover:bg-gray-50 hover:bg-opacity-10 active:bg-opacity-20 duration-300 delay-75">
                    回首頁</NuxtLink>
            </div>
        </div>
      </div>
    </BlurReveal>
  </div>
</template>
