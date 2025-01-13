<script setup>
import { useRoute } from 'vue-router';
import { Clock } from 'lucide-vue-next';

const route = useRoute();
const id = route.params.id;

const nuxtApp = useNuxtApp();
  const loading = ref(false);
  nuxtApp.hook("page:start", () => {
    loading.value = true;
  });
  nuxtApp.hook("page:finish", () => {
    loading.value = false;
  });
</script>

<template>
  <div class="max-w-3xl w-screen mx-auto max-sm:max-w-xs max-md:max-w-md max-lg:max-w-lg">
    <div v-if="loading">
      <div class="skeletion h-8 w-28"></div>
      <div class="skeletion h-4 w-28"></div>
      <div class="skeletion h-4 w-28"></div>
      <div class="skeletion h-4 w-28"></div>
      <div class="skeletion h-4 w-28"></div>
    </div>
    <ContentDoc :path="`/blog/${id}`">
      <template #default="{ doc }">
        <h1 class="text-4xl font-bold font-sans m-2">{{ doc.title }}</h1>
        <p class="flex flex-wrap items-center text-sm p-1 mx-2 float-right"><Clock class="mx-1" :size="16" :stroke-width="2.25" />{{ doc.date }}</p>
        <ContentRenderer class="mx-4 my-8 dark:text-white text-black prose" :value="doc"  />
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
    </ContentDoc>
  </div>
</template>

