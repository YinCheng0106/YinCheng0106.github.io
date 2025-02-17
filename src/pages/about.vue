<script lang="ts" setup>
useSeoMeta({
  title: "關於",
  ogTitle: "關於 | YinCheng",
  description: "關於YinCheng以及本網站的資訊",
  ogDescription: "關於YinCheng以及本網站的資訊",
  ogImage: '/about.png',
  twitterCard: 'summary_large_image',
});

const logos = [
  { name: 'Nuxt', path: '/Nuxt.svg' },
  { name: 'Vue', path: '/Vuejs.svg' },
  { name: 'TailwindCSS', path: '/TailwindCSS.svg' },
];
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold">About 關於</h2>
    <div class="flex flex-wrap m-2 text-md dark:text-gray-300 text-gray-800 gap-1">
      <p>
        這個網站主要是想要來放一些自己的專案，以及自己的一些資訊還有部落格。
      </p>
      <p>
        這個網頁的框架是利用 <LinkPreview url="https://nuxt.com/">Nuxt 3</LinkPreview> 以及 <LinkPreview url="https://vuejs.org/">Vue</LinkPreview> 所製作而成的，再結合了 <LinkPreview url="https://tailwindcss.com/">Tailwind CSS</LinkPreview> 來做網頁的美化。
      </p>
    </div>
    <h2 class="text-2xl font-bold mt-4">Developer 開發人員</h2>
    <div class="flex items-center justify-center mt-4 gap-4">
      <FlipCard
        description="來自臺灣，目前就讀資訊工程學系，往前端工程師前進"
        image="https://avatars.githubusercontent.com/u/99303523"
        rotate="y"
        subtitle="Who is YinCheng ?"
        title="YinCheng"
        tag="網頁開發兼管理者"
        github="https://github.com/YinCheng0106"
        instagram="https://www.instagram.com/_yincheng_/"
        threads="https://www.threads.net/@_yincheng_"
        twitter="https://x.com/Yin_Cheng0106"
      />
    </div>

    <div>
      <AnimatedLogoCloud
        :logos="logos"
        title="Made with"
      />
    </div>
  </div>
</template>