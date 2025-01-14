<script setup></script>

<template>
  <div>
    <div class="flex justify-between items-center">
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
        <NuxtLink class="_link" to="/blog">部落格</NuxtLink>
      </div>
    </div>
  </div>
</template>
