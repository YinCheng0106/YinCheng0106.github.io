<script setup>
import { useRoute } from 'vue-router';
import { Clock } from 'lucide-vue-next';

const route = useRoute();
const id = route.params.id;
</script>

<template>
  <div>
    <ContentDoc :path="`/blog/${id}`">
      <template #default="{ doc }">
        <h1 class="text-4xl font-bold font-sans m-2">{{ doc.title }}</h1>
        <p class="flex flex-wrap items-center text-sm p-1 mx-2 float-right"><Clock class="mx-1" :size="16" :stroke-width="2.25" />{{ doc.date }}</p>
        <ContentRenderer class="mx-4 my-8 dark:text-white prose" :value="doc"  />
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
                      class="btn btn-outline text-lg">
                      回 Blog</NuxtLink>
              </div>
          </div>
      </div>
      </template>
    </ContentDoc>
  </div>
</template>

