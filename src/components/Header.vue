<script setup></script>

<template>
  <div class="fixed top-0 left-2 right-2 z-50 rounded-md bg-white dark:bg-black backdrop-blur bg-opacity-50 dark:bg-opacity-50 shadow-md">
    <div class="flex justify-between items-center p-2 ">
      <NuxtLink class="_link" to="/">
        <div class="flex p-2 m-2">
          <NuxtImg
            format="webp"
            class="w-12 h-12 rounded-full"
            src="https://avatars.githubusercontent.com/u/99303523"
            alt="WebLogo"
          />
          <h1 class="text-xl font-bold justify-center p-2">YinCheng</h1>
        </div>
      </NuxtLink>
    <div class="justify-center p-2 gap-2 text-bold">
      <NuxtLink to="/blog">
        <InteractiveHoverButton
          text="部落格"
        />
      </NuxtLink>
      </div>
    </div>
  </div>
</template>
