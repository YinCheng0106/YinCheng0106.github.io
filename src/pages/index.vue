<script setup>
import RepoMenu from "../components/project.vue";
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
