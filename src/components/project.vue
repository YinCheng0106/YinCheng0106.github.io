<script setup lang="ts">
import { ref } from "vue";
let id = 0;
const isDark = computed(() => useColorMode().value == "dark");
const repos = ref([
  {
    id: id++,
    name: "YINLA",
    url: "https://github.com/YINLA-TEAM/YINLA",
    description:
      "這是一隻Discord的BOT，主要功能是檢視天氣、檢視地震(含推播功能)、文字翻譯、查詢中油油價(含推播功能)以及查詢中華職棒相關的功能",
  },
  {
    id: id++,
    name: "YinCheng's Webiste",
    url: "https://github.com/YinCheng0106/YinCheng0106.github.io",
    description: "YinCheng 的個人網站(你所在位置)",
  },
  {
    id: id++,
    name: "imc_project_web",
    url: "https://github.com/YinCheng0106/imc_project_web",
    description: "IMC End of Semester Project Website",
  },
]);
</script>

<template>
  <div class="font-mono">
    <h1 class="pb-2 text-2xl font-bold">REPOS</h1>
    <ul class="grid md:grid-cols-2 xl:grid-cols-3 gap-2">
      <li v-for="r in repos" :key="r.id">
        <div class="h-28 max-md:h-32">
          <a :href="r.url" target="_blank">
            <CardSpotlight class="p-2 flex items-center" :gradient-color="isDark ? '#363636' : '#C9C9C9'">
              <h2 class="m-2 font-bold text-xl">{{ r.name }}</h2>
              <div class="px-4 py-2">
                <p class="text-xs line-clamp-2 dark:text-gray-400 text-gray-700">
                  {{ r.description }}
                </p>
              </div>
            </CardSpotlight>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>
