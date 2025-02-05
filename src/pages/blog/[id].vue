<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { Clock } from 'lucide-vue-next';
import { DateTime } from 'luxon';

const route = useRoute();
const id = route.params.id;
const dateFormat = 'yyyy-MM-dd';
const dateTimeFormat = `${dateFormat} HH:mm`;

const { data: posts } = await useAsyncData(() => {
  return queryCollection('blog').path(route.path).first()
});

const dateFormater = (date: string, format: string) => {
  return DateTime.fromISO(date).toLocal().toFormat(format);
}

if(posts.value?.title === undefined) {
  useSeoMeta({
    title: "404 Not Found",
    ogTitle: "404 Not Found | YinCheng",
    description: "此文章不存在",
    ogDescription: "此文章不存在",
    twitterCard: 'summary_large_image',
  });
} else {
  useSeoMeta({
    title: `${ posts.value?.title }`,
    ogTitle: `${ posts.value?.title } | YinCheng`,
    description: posts.value?.description,
    ogDescription: posts.value?.description,
    twitterCard: 'summary_large_image',
  });
}

defineOgImageComponent('BlogPost');
</script>

<template>
  <div class="max-w-2xl w-screen mx-auto max-sm:max-w-xs max-md:max-w-md max-lg:max-w-lg">
    <div v-if="posts">
      <div>
        <h1 class="text-4xl font-bold font-sans m-2">{{ posts.title }}</h1>
        <p class="flex flex-wrap items-center text-sm p-1 mx-2 float-right"><Clock class="mx-1" :size="16" :stroke-width="2.25" />{{ dateFormater(posts.published_at, dateTimeFormat) }}</p>
        <div v-for="tag in posts.tags" :key="tag" class="inline-flex flex-wrap items-center text-sm p-1 mx-2">
          <p class="dark:text-gray-400 text-gray-700 font-mono">#<span class="md:pl-1 pl-0.5">{{ tag }}</span></p>
        </div>
      </div>
      <div class="mx-2 my-4">
        <ContentRenderer class="text-black dark:text-white prose" :value="posts" :prose="true" />
        <TableOfContent class="fixed top-32 left-10 bg-opacity-50 bg-white dark:bg-black dark:bg-opacity-50 p-4 rounded-lg w-auto max-2xl:w-40 max-xl:w-36 max-lg:w-28 max-md:hidden" active-toc-id="posts" />
      </div>
    </div>
    <div class="flex md:my-24 items-center font-mono" v-else>
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
  </div>
</template>

<style>
.prose h1,
.prose h2,
.prose h3,
.prose h4,
.prose h5,
.prose h6 {
  @apply scroll-m-24;
}

html {
  @apply scroll-smooth;
}
</style>