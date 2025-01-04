<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id;
</script>

<template>
  <ContentDoc :path="`/blog/${id}`">
    <template #default="{ doc }">
      <h1 class="text-4xl font-bold font-sans m-2">{{ doc.title }}</h1>
      <ContentDoc class="p-4" />
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
</template>

