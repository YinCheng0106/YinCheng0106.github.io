<script setup lang="ts">
await navigateTo(
  'https://discord.com/oauth2/authorize?client_id=914150570250625044&permissions=1759214307376375&integration_type=0&scope=applications.commands+bot', {
  external: true,
  open: {
    target: '_blank',
  }
})
</script>

<template>
  <div class="flex min-h-screen items-center font-mono">
    <div class="mx-auto flex flex-wrap items-center p-4">
      <div class="w-full p-4 text-center md:w-1/2">
        <div class="text-[10rem]">欸？</div>
      </div>
      <div class="w-full p-4 text-center md:w-1/2 md:text-left">
        <div class="mb-12 text-3xl"><del>沒有傳送過去嗎？</del></div>
        <NuxtLink
          to="https://discord.com/oauth2/authorize?client_id=914150570250625044&permissions=1759214307376375&integration_type=0&scope=applications.commands+bot"
          class="rounded-lg border dark:border-white px-4 py-2 hover:bg-gray-50 hover:bg-opacity-10 active:bg-opacity-20 duration-300 delay-75"
        >
          點這邊</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
