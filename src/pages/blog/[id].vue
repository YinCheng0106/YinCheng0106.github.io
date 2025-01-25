<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { Clock } from 'lucide-vue-next';
import { DateTime } from 'luxon';

const route = useRoute();
const id = route.params.id;
const dateFormat = 'yyyy-MM-dd';
const dateTimeFormat = `${dateFormat} HH:mm`;

const dateFormater = (date: string, format: string) => {
  return DateTime.fromISO(date).toLocal().toFormat(format);
}

useSeoMeta({
  title: "404 Not Found",
  ogTitle: "404 Not Found | YinCheng",
  description: "此文章不存在",
  ogDescription: "此文章不存在",
  twitterCard: 'summary_large_image',
}); // default: 404

defineOgImageComponent('BlogPost');
</script>

<template>
  <div class="max-w-2xl w-screen mx-auto max-sm:max-w-xs max-md:max-w-md max-lg:max-w-lg">
    <ContentRenderer :path="`/blog/${id}`">
      <template #default="{ doc }">
        <div>
          <div>
            <div>
              <h1 class="text-4xl font-bold font-sans m-2">{{ doc.title }}</h1>
              <p class="flex flex-wrap items-center text-sm p-1 mx-2 float-right"><Clock class="mx-1" :size="16" :stroke-width="2.25" />{{ dateFormater(doc.published_at, dateTimeFormat) }}</p>
              <div v-for="tag in doc.tags" :key="tag" class="inline-flex flex-wrap items-center text-sm p-1 mx-2">
                <p class="dark:text-gray-400 text-gray-700 font-mono"># {{ tag }}</p>
              </div>
            </div>
            <div class="mx-4 my-6">
              <ContentRenderer class="dark:text-white text-black prose" :value="doc" />
            </div>
          </div>
          <div class="fixed top-40 left-10 max-md:hidden w-32">
            <TableOfContents title="目錄" />
          </div>
        </div>
      </template>
      <template #not-found>
        <div class="flex md:my-24 items-center font-mono">
          <div class="mx-auto flex flex-wrap items-center p-4">
              <div class="w-full text-center md:w-1/2">
                  <div class="text-[10rem]" aria-label="Error Code 404">404</div>
              </div>
              <div class="w-full p-4 text-center md:w-1/2 md:text-left">
                  <div class="mb-12 text-3xl"><del>你發現了一個神秘的通道</del></div>
                  <NuxtLink to="/blog"
                      class="rounded-lg border dark:border-white px-4 py-2 hover:bg-gray-50 hover:bg-opacity-10 active:bg-opacity-20 duration-300 delay-75">
                      回 Blog</NuxtLink>
              </div>
          </div>
      </div>
      </template>
    </ContentRenderer>
  </div>
</template>

<style>
.toc-item {
  @apply border-l-2 pl-2 line-clamp-1 text-sm
}

.active-toc-item {
  @apply text-blue-400 border-blue-400 font-bold
}

.toc-sublist-item {
  @apply pl-6
}

.prose h1,
.prose h2,
.prose h3,
.prose h4,
.prose h5,
.prose h6 {
  @apply scroll-m-24;
}
</style>